const mongoose = require('mongoose');
const connectDb = async ()=>{
    try {
      console.log("db connected.......");
      await mongoose.connect("mongodb+srv://ayushgarg678:si8h57IMUD5yJXoO@cluster0.ygj3g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");  

      //await mongoose.connect("mongodb+srv://chirag2306garg:Et1kF7lFs2E7hExo@cluster0.vf0aepw.mongodb.net/?retryWrites=true&w=majority");  
    } catch (error) {
        console.log(error);
    }
}


//connectDb();