require('dotenv').config()

const connectDB=require('./db/connect');
const Product= require('./models/product');

const jsonProducts=require('./products.json')

const start=async()=>
{
    try{
           await connectDB(process.env.MONGO_URI)
          // await Product.deleteMany()
          const Product= await Product.insertMany(jsonProducts);
          
          console.log(Product)
           console.log('Success!!!!')
           process.exit(0)
    }catch(error)
    {
           console.log(error)
           process.exit(1)
    }
}
start()