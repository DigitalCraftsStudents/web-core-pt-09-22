const express = require("express");
const path = require("path")

const app = express();

app.use(express.json());

const PORT = 3000;

const flavorDictory = [{flavorName:"vanilla", flavorCategory: "tame"}, {flavorName:"chocolate", flavorCategory:"tame"}, {flavorName:"birthday cake", flavorCategory:"wild"}, {flavorName:"mint chocolate chip", flavorCategory: "best"}]

app.use(express.static( __dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.post('/flavors', (req, res, next) => {
    console.log('Request Type:', req.method)
    if (req.headers.authorization == null) {
        res.status(401);
        res.send("User Is unautorized");
        return;
    }
    next()
  })

app.get("/flavors", function(req,resp,next){
    console.log("ICE CREAM FLAVORS")
    resp.send(JSON.stringify(flavorDictory));
})
app.post("/flavors", function(req,resp,next){

    flavorDictory.push(req.body)
    resp.send(`Flavor added ${JSON.stringify(req.body)}`);
})

app.get("/", function(req,resp,next){
    resp.render('index', {title: 'Express', flavors: flavorDictory});

})

app.get("/flavors/:category", function(req,resp,next){
    console.log(req);
    resp.send(JSON.stringify(flavorDictory.filter((t)=>t.flavorCategory === req.params.category)))
})

app.listen(PORT, ()=> {console.log(`server is listening at port ${PORT}`)})