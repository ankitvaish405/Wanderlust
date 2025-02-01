const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initdata = require("./data.js");
const data = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then((res) => {
    console.log("Connected to DB")
})
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany();
    initdata.data = initdata.data.map((obj) => ({ ...obj, owner: '678357a94d86a7d2169dd654' }));
    initdata.data = initdata.data.map((obj) => ({ ...obj, category: 'Trending' }));
    await Listing.insertMany(initdata.data);
    console.log("Data was initialized");
}
initDB();