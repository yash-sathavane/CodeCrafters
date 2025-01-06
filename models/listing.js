const mongoose=require("mongoose");
const review = require("./review.js");
const { listingSchema } = require("../schema");

const listeningSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
       url:String,
       filename:String
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"review"
    }
    ],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
});

listeningSchema.post("findOneAndDelete",async(listing)=>{
    await review.deleteMany({_id:{$in:listing.reviews}});
})

const listing=new mongoose.model("listing",listeningSchema);
module.exports=listing;