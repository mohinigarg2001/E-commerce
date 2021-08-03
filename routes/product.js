const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');

const {isLoggedIn} = require('../middleware');


// Display all the products
router.get('/products',async (req,res)=>{

    try{
        const products = await Product.find({});

        res.render('products/index',{products});
    } catch(e){
        console.log("something went wrong");
        req.flash('error','cannot Find products');
        res.render('error');

    }
   
})


//get the form to new products
router.get('/products/new',isLoggedIn,(req,res)=>{

    res.render('products/new');
})

// create new product
router.post('/products', isLoggedIn,async(req,res)=>{

    try{
       
        await Product.create(req.body.product);

        req.flash('success','product Created Succesfully');
    
        res.redirect('/products');
    

    } catch(e){
        console.log(e.message);
        req.flash('error','cannot create products,Something went wrong');
        res.render('error');

    }

   
});

//show a particular product

router.get('/products/:id',async(req,res)=>{

    try{
        const product = await Product.findById(req.params.id).populate('reviews');

         res.render('products/show',{product});
    }
    catch(e){
        console.log(e.message);
        req.flash('error','cannot find this product');        
        res.redirect('/error');
     
    }
 })

// get the edit form
router.get('/products/:id/edit',isLoggedIn,async(req, res)=>{

    const product=await Product.findById(req.params.id);
    res.render('products/edit' ,{product});
}) 

// update the particular product
router.patch('/products/:id',isLoggedIn,async(req, res)=>{
    await Product.findByIdAndUpdate(req.params.id,req.body.product);
    
    res.redirect(`/products/${req.params.id}`)
})


//Delete a particular product
router.delete('/products/:id',isLoggedIn,async(req,res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
})


// creating a new comment on product

router.post('/products/:id/review',isLoggedIn, async(req,res)=>{

    try{
        const product = await Product.findById(req.params.id);

        const review = new Review({
           user:req.user.username,
           ...req.body 
        });
        product.reviews.push(review);

        await review.save();
        await product.save();

        req.flash('success','successfully added your review');
    
        res.redirect(`/products/${req.params.id}`);
    

    }
    catch(e){
        console.log(e.message);
        req.flash('error','cannot add review to this product');
        res.redirect('/error')
    }
   

   
})

router.get('/error',(req,res)=>{
    res.status(404).render('error');
})

module.exports = router;
