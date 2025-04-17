<<<<<<< HEAD
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");  //includes/partials
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const password = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const passport = require("passport");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dbUrl = process.env.ATLAS_URL;

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log("Error connecting to DB:", err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}
    

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

if (!dbUrl) {
    throw new Error("MongoDB Atlas URL is missing! Check .env file.");
}

store.on("error",(err)=>{
    console.log("ERROR IN MONGO SESSION STORE",err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expire: Date.now() + 1000 * 60 * 60 * 24 * 3,
        maxAge:  1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(password.initialize());
app.use(password.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/",userRouter);

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong!" } = err;
    res.status(statusCode).render("listings/error.ejs", { message });
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});

=======
if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
const mongoose = require("mongoose");


// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
// DB URL
const dbUrl = process.env.ATLASDB_URL

const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const expressError = require("./utils/expressError.js");
const flash = require("connect-flash");

const listingsRouter = require("./routers/listings.js");
const reviewsRouter = require("./routers/review.js");
const userRouter = require("./routers/user.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SERECT,
    },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.log("Error in mongo Session store", err);
});


const sessionOptions = {
    store,
    secret: process.env.SERECT, resave: false, saveUninitialized: true, cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}


app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('ejs', ejsMate);
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support 
// This is for supoose user login the user login information is stored in session is called serializeUser
// If user is logged out then the user information is removed from session is called deserializeUser
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main().then((res) => {
    console.log("Connected to DB")
})
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(dbUrl);
}


// Flash messages middleware 
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success"); // successMsg is actual array
    res.locals.errorMsg = req.flash("error");
    res.locals.User = req.user;
    next();
})

// app.get("/demoUser", async (req,res) =>{
//     let fakeUser = new User({
//         email: "om@gmail.com",
//         username: "OmCodes",
//     })

//     let registeredUser = await User.register(fakeUser, "Hello World");
//     res.send(registeredUser);
// })


// Routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);


app.all("*", (req, res, next) => {
    next(new expressError(404, "PAGE NOT FOUND"));
})

// Error handler (middleware function)
app.use((err, req, res, next) => {
    let error = { status = 400, message = "some error occur" } = err;
    // res.status(status).send(message);
    res.status(status).render('error.ejs', { error });
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
>>>>>>> extra/main
