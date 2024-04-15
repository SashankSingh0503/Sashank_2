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
    const Name = req.body.name;
    const contact = req.body.contact;
    const hostel = req.body.Hostell;
    const menu = req.body.foodType;
    const q = req.body.quan;
    const payment = req.body.pay;
    const Type = "Food Order";
    // Constructing JSON response
    const responseJSON = {
        Service : Type,
        Username: Name,
        Contact_number: contact,
        Hostel : hostel,
        Order : menu,
        Quantity : q,
        Payment_mode : payment
    };
    console.log(responseJSON);
    res.sendFile(__dirname + "/" + "thank.html");
});

//for medicine ordering.................................................................
app.post('/medOrder', (req, res) => {
    const Name = req.body.name;
    const contact = req.body.contact;
    const hostel = req.body.Hostell;
    const menu = req.body.foodType;
    const q = req.body.quan;
    const payment = req.body.pay;
    const Type = "Medicine Order";
    // Constructing JSON response
    const responseJSON = {
        Service : Type,
        Username: Name,
        Contact_number: contact,
        Hostel : hostel,
        Order : menu,
        Quantity : q,
        Payment_mode : payment
    };
    console.log(responseJSON);
    res.sendFile(__dirname + "/" + "thank.html");
});


//for groceries ordering................................................
app.post('/grocOrder', (req, res) => {
    const Name = req.body.name;
    const contact = req.body.contact;
    const hostel = req.body.Hostell;
    const menu = req.body.foodType;
    const q = req.body.quan;
    const payment = req.body.pay;
    const Type = "Grocery Order";
    // Constructing JSON response
    const responseJSON = {
        Service : Type,
        Username: Name,
        Contact_number: contact,
        Hostel : hostel,
        Order : menu,
        Quantity : q,
        Payment_mode : payment
    };
    console.log(responseJSON);
    res.sendFile(__dirname + "/" + "thank.html");
});


//for parcel Deliveries............................................................
app.post('/Parcel', (req, res) => {
    const Name = req.body.name;
    const contact = req.body.contact;
    const appname = req.body.order;
    const track = req.body.idd;
    const contact1 = req.body.contact1;
    const Type = "Parcel Delivery";
    // Constructing JSON response
    const responseJSON = {
        Service : Type,
        Username: Name,
        Contact_number: contact,
        Delivery_app : appname,
        Tracking_id : track,
        Agent_number : contact1,
    };
    console.log(responseJSON);
    res.sendFile(__dirname + "/" + "thank.html");
});


app.post('/sellbuy', (req, res) => {
    const Name = req.body.name;
    const contact1 = req.body.contact;
    const h = req.body.Hostell;
    const menu = req.body.foodType;
    const q = req.body.quan;
    const payment = req.body.pay;
    const Type = "Buy Things Order";
    // Constructing JSON response
    const responseJSON = {
        Service : Type,
        Username: Name,
        Contact_number: contact1,
        Hostel : h,
        Order : menu,
        Quantity : q,
        Payment_Option : payment
    };
    console.log(responseJSON);
    res.sendFile(__dirname + "/" + "thank.html");
});


app.post("/complan" , (req,res)=>{
    const t = "Complaint/Feedback";
    const Name = req.body.name;
    const Email = req.body.email;
    const mes = req.body.message;

    const responseJSON = {
        Service : t,
        UserName : Name,
        Email_id : Email,
        Message : mes
    };
    console.log(responseJSON);
    res.sendFile(__dirname + "/" + "thank.html");
});


app.get("/ANTISEPTIC.JPG" , (req,res)=>{
    res.send("<img src= 'C:\Users\sasha\OneDrive\Desktop\Codes\idea\html\antiseptic.jpg'>")
})
app.post("/Sellerform" , (req,res)=>{
    const t = "Seller Info";
    const Name = req.body.name;
    const Email  = req.body.email;
    const contact1 = req.body.contact;
    const Item = req.body.item;
    const pr = req.body.price;

    const responseJSON = {
        Service : t,
        UserName : Name,
        Email_id : Email,
        Contact_number: contact1,
        Item_name : Item,
        Selling_Price : pr
    };
    console.log(responseJSON);
    res.sendFile(__dirname + "/" + "thank.html");
})





































































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
})