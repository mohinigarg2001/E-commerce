const mongoose = require('mongoose');
const Product = require('./models/product');


const products = [
    {
        name:" Iphone 12",
        img:"https://images.unsplash.com/photo-1616410011236-7a42121dd981?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        price:120000, 
        desc:"The iPhone 12 and iPhone 12 Mini use Apple's six-core A14 Bionic processor which contains a next-generation neural engine They both have three internal storage options: 64 GB, 128 GB, and 256 GB. Both also carry an IP68 water and dust resistance rating along with dirt and grime, and is waterresistant up to six meters 20 feet for 30 minutes. However, the manufacturer warranty does not cover liquid damage to the phone " ,
    },
    {
        name:" Samsung",
        img:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftc3VuZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        price:12000, 
        desc:"The iPhone 12 and iPhone 12 Mini use Apple's six-core A14 Bionic processor which contains a next-generation neural engine They both have three internal storage options: 64 GB, 128 GB, and 256 GB. Both also carry an IP68 water and dust resistance rating along with dirt and grime, and is waterresistant up to six meters 20 feet for 30 minutes. However, the manufacturer warranty does not cover liquid damage to the phone " ,
    },
    {
        name:"Realme",
        img:"https://images.unsplash.com/photo-1603021588327-24c1aba673f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWxtZSUyMHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        price:22000, 
        desc:"The iPhone 12 and iPhone 12 Mini use Apple's six-core A14 Bionic processor which contains a next-generation neural engine They both have three internal storage options: 64 GB, 128 GB, and 256 GB. Both also carry an IP68 water and dust resistance rating along with dirt and grime, and is waterresistant up to six meters 20 feet for 30 minutes. However, the manufacturer warranty does not cover liquid damage to the phone " ,
    },
    {
        name:"DSLR",
        img:"https://images.unsplash.com/photo-1526413494904-7a15c807b00e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHNscnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        price:50000, 
        desc:"The iPhone 12 and iPhone 12 Mini use Apple's six-core A14 Bionic processor which contains a next-generation neural engine They both have three internal storage options: 64 GB, 128 GB, and 256 GB. Both also carry an IP68 water and dust resistance rating along with dirt and grime, and is waterresistant up to six meters 20 feet for 30 minutes. However, the manufacturer warranty does not cover liquid damage to the phone " ,
    },
    {
        name:"Macbook pro",
        img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        price:50000, 
        desc:"The iPhone 12 and iPhone 12 Mini use Apple's six-core A14 Bionic processor which contains a next-generation neural engine They both have three internal storage options: 64 GB, 128 GB, and 256 GB. Both also carry an IP68 water and dust resistance rating along with dirt and grime, and is waterresistant up to six meters 20 feet for 30 minutes. However, the manufacturer warranty does not cover liquid damage to the phone " ,
    },
    {
       
        name:"Watches",
        img:"https://images.unsplash.com/photo-1612504722323-28ae76e4ac47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdhdGNoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        price:50000, 
        desc:"A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain",
    },
    {
       
        name:"Airpods",
        img:"https://images.unsplash.com/photo-1593442607435-e4e34991b210?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWlycG9kcyUyMHByb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        price:5000, 
        desc:"A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain",
    },
    {
       
        name:"Rolex",
        img:"https://images.unsplash.com/photo-1526743655626-e3d757b13d61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvbGV4fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        price:5000, 
        desc:"A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain",
    },
    {
       
        name:"Nokia",
        img:"https://images.unsplash.com/photo-1546027658-7aa750153465?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5va2lhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        price:5000, 
        desc:"A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain",
    },


]

const seedDB = async ()=>{
    await Product.insertMany(products);
    console.log("DB seeded");
}

module.exports = seedDB;




