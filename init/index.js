const mongoose = require("mongoose");
<<<<<<< HEAD
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({
    ...obj,
    owner: "6777a8155743f7404f67ce08",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
=======
const Listing = require("../models/listing.js");
const initdata = require("./data.js");
const data = require("./data.js");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// const MONGO_URL = process.env.ATLASDB_URL;

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
    initdata.data = initdata.data.map((obj) => ({ ...obj, owner: '679dbcc8dd705dbb385f85b7' }));
    initdata.data = initdata.data.map((obj) => ({ ...obj, category: 'Trending' }));
    await Listing.insertMany(initdata.data);
    console.log("Data was initialized");
}
initDB();
>>>>>>> extra/main
