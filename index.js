const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");



dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex: true,
        useFindAndModify:false
    })
    .then(console.log("Connected to MongoDB server"))
    .catch(err => {console.log(err)}
    )
    

// This part here allows us to upload images 

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"images");
    },
    filename: (req,file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({storage:storage})

// this here catches when we upload a single image file 

app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded!")
})

//


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)


app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});



app.listen(process.env.PORT || 5000,() => {
    console.log("Backend is running");
});


