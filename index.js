import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

var data={
    alaska:{
        name:"alaska",
        photo:"alaska_hero.jpg",
        tripType:"Signature Land",
        activity:"Light-Moderate",
        grp:"25-30",
        service:"Premium",
        dur:"8 Days",
        line:"Alaska: Denali to Kenai Fjords"
    },
    aus:{
        name:"australia",
        photo:"AusReefHero.jpg",
        tripType:"Signature Land",
        activity:"Light-Moderate",
        grp:"25-30",
        service:"Premium",
        dur:"11 Days",
        line:"Australia: Reefs, Rainforests & Wild"
    },
    bhu:{
        name:"bhutan",
        photo:"BhutanHero.jpg",
        tripType:"Signature Land",
        activity:"Light-Moderate",
        grp:"12-24",
        service:"Premium",
        dur:"11 Days",
        line:"Bhutan: Land of Mysticism and Mythology"
    },
    chi:{
        name:"china",
        photo:"ChinaHero.jpg",
        tripType:"Signature Land",
        activity:"Light-Moderate",
        grp:"25-30",
        service:"Premium",
        dur:"16 Days",
        line:"China: Imperial Cities and Natural Wonders"
    },
    taj:{
        name:"tajMahal",
        photo:"TajHero.jpg",
        tripType:"Signature Land",
        activity:"Light-Moderate",
        grp:"20-30",
        service:"Premium",
        dur:"11 Days",
        line:"India's Fabled Rajasthan by Rail"
    },
    nor:{
        name:"norway",
        photo:"NorwayHero.jpg",
        tripType:"Signature Land",
        activity:"Light-Moderate",
        grp:"10-20",
        service:"Premium",
        dur:"11 Days",
        line:"Norway's Trains and Fjords"
    }
}

const app=express();
const port=3000;

app.use(express.static("public"));
app.get("/",(req,res) => {
    res.render("index.ejs");
});
app.get("/alaska",(req,res)=>{
    res.render("index.ejs",{page:data.alaska});
});
app.get("/taj",(req,res)=>{
    res.render("index.ejs",{page:data.taj});
});
app.get("/nor",(req,res)=>{
    res.render("index.ejs",{page:data.nor});
});
app.get("/chi",(req,res)=>{
    res.render("index.ejs",{page:data.chi});
});
app.get("/aus",(req,res)=>{
    res.render("index.ejs",{page:data.aus});
});
app.get("/bhu",(req,res)=>{
    res.render("index.ejs",{page:data.bhu});
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});