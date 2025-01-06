const mongoose=require("mongoose");
const mongo_url="mongodb://127.0.0.1:27017/codeCrafters";
async function main(){
    await mongoose.connect(mongo_url);
}
main().then(()=>{
    console.log("connected to DB.");
}).catch((err)=>{
    console.log(err);
});

const listing=require("../models/listing.js");
const initData=require("./data.js");

const initDB =async()=>{
 await listing.deleteMany({});
 initData.data=initData.data.map((obj)=>({
    ...obj,
    owner:"677ab541eae6bf3cb7bac15c"
 }))
 await listing.insertMany(initData.data);
 console.log("Data inserted successfully.");
}

initDB();