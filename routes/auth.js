const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');


// //router.get('/fakeUser', async (req,res)=>{

//     const user =new User({email:'mohinigarg2001@gmail.com',username:'Mohini'}) ;
//     const newUser=await User.register(user,'mohini123');
//     res.send(newUser);

// })


// get the signup form
router.get('/register', async(req,res)=>{
    res.render('auth/signup');
})

router.post('/register',async(req,res)=>{

    try{
        const user = new User({username:req.body.username, email:req.body.email});
        const newUser =await User.register(user, req.body.password);
        console.log(newUser);
        req.flash('success','Registered successfully');
        res.redirect('/products');

    }catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }   
})

// get the login form
router.get('/login',async(req,res)=>{
    res.render('auth/login');
})
router.post('/login',
     passport.authenticate('local',
     {
       successRedirect:'/products',
       failureRedirect:'/login',
       failureFlash:true
   }
),(req,res)=>{
    req.flash('success',`Welcome back!!${req.user.username}`);
   
    res.redirect('/products');
});


// logout the user form the current session
router.get('/logout', (req,res)=>{
    req.logout();
    req.flash('success','Logged out Successfully');
    res.redirect('/login');
})

module.exports= router;
