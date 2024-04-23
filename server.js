const {MongoClient} = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
 const db = client.db("Database-Donitt");
 const collection1 = db.collection("Food-Orders:");
 const collection2= db.collection("Medicine-Orders:");
 const collection3 = db.collection("Groceries-Orders:");
 const collection4 = db.collection("Parcel-Orders:");
 const collection5 = db.collection("Buy-Orders:");
 const collection6 = db.collection("Complaint:");
 const collection7 = db.collection("Seller-info:");

 async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

connectToMongoDB().then(() => {
    const express = require("express");
const app = express();
const PORT = 3600;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get('/idea.html', function (req, res) {
    res.sendFile( __dirname + "/" + "idea.html" );
});
app.get('/del_type.html', function (req, res) {
    res.sendFile( __dirname + "/" + "del_type.html" );
});
app.get('/food.html', function (req, res) {
    res.sendFile( __dirname + "/" + "food.html" );
});
app.get('/food_order.html', function (req, res) {
    res.sendFile( __dirname + "/" + "food_order.html" );
});
app.get('/parcel.html', function (req, res) {
    res.sendFile( __dirname + "/" + "parcel.html" );
});
app.get('/groc.html', function (req, res) {
    res.sendFile( __dirname + "/" + "groc.html" );
});
app.get('/how_to.html', function (req, res) {
    res.sendFile( __dirname + "/" + "how_to.html" );
});
app.get('/med.html', function (req, res) {
    res.sendFile( __dirname + "/" + "med.html" );
});
app.get('/med_order.html', function (req, res) {
    res.sendFile( __dirname + "/" + "med_order.html" );
});
app.get('/order_type.html', function (req, res) {
    res.sendFile( __dirname + "/" + "order_type.html" );
});
app.get('/complaint.html', function (req, res) {
    res.sendFile( __dirname + "/" + "complaint.html" );
});
app.get('/buy_sell.html', function (req, res) {
    res.sendFile( __dirname + "/" + "buy_sell.html" );
});
app.get('/buy_sell_order.html', function (req, res) {
    res.sendFile( __dirname + "/" + "buy_sell_order.html" );
});
app.get('/groc_order.html', function (req, res) {
    res.sendFile( __dirname + "/" + "groc_order.html" );
});
app.get('/About.html', function (req, res) {
    res.sendFile( __dirname + "/" + "About.html" );
});

//for food ordering......................................................
app.post('/foodOrder', (req, res) => {
    const responseJSON1 = req.body;
   console.log("Food Order:");
    console.log(responseJSON1);
    console.log("\n");
    collection1.insertOne(responseJSON1);
    res.sendFile(__dirname + "/" + "thank.html");
});

//for medicine ordering.................................................................
app.post('/medOrder', (req, res) => {
    const responseJSON2 = req.body;
    console.log("Medicine Order:");
    console.log(responseJSON2);
    console.log("\n");
    collection2.insertOne(responseJSON2);
    res.sendFile(__dirname + "/" + "thank.html");
});


//for groceries ordering................................................
app.post('/grocOrder', (req, res) => {
    const responseJSON3 = req.body;
    console.log("Grocery Order:");
    console.log(responseJSON3);
    console.log("\n");
    collection3.insertOne(responseJSON3);
    res.sendFile(__dirname + "/" + "thank.html");
});


//for parcel Deliveries............................................................
app.post('/Parcel', (req, res) => {
    const responseJSON4 = req.body;
    console.log("Parcel-Delivery:");
    console.log(responseJSON4);
    console.log("\n");
    collection4.insertOne(responseJSON4);
    res.sendFile(__dirname + "/" + "thank.html");
});


app.post('/sellbuy', (req, res) => {
    const responseJSON5 = req.body;
   console.log("Buy/Sell Order:");
   console.log(responseJSON5);
   console.log("\n");
   collection5.insertOne(responseJSON5)
    res.sendFile(__dirname + "/" + "thank.html");
});


app.post("/complan" , (req,res)=>{
    const responseJSON6 = req.body;
    console.log("Complaint-Details:");
    console.log(responseJSON6);
    console.log("\n");
    collection6.insertOne(responseJSON6);
    res.sendFile(__dirname + "/" + "thank.html");
});

app.post("/Sellerform" , (req,res)=>{
   const responseJSON7 = req.body;
   console.log("Seller-Details:");
   console.log(responseJSON7);
   console.log("\n");
   collection7.insertOne(responseJSON7);
    res.sendFile(__dirname + "/" + "thank.html");
});

app.listen(PORT , (err)=>
{
    if(err)
    {
        console.log("Error in starting the server..");
    }
    else
    {
        console.log("Server is running on: localhost:" +PORT );
    }
});
  
});

process.on('SIGINT', async () => {
    try {
        await client.close();
        console.log("MongoDB connection closed");
        process.exit(0);
    } catch (err) {
        console.error("Error closing MongoDB connection:", err);
        process.exit(1);
    }
});


