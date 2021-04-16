const forecast=require("./forecast")
const path=require("path")
const hbs=require("hbs")
const express=require("express")
const app=express()

//path for static and dynamic files
const partialsPath=path.join(__dirname,"/templates/partials")
const viewsPath=path.join(__dirname,'/templates/views')
const loc=path.join(__dirname,"/public")
app.use(express.static(loc))
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.get("",(req,res)=>{
    
    res.render("index",{
        name:"Sidharth Surya",
        title: "Home Page"
    })
})

app.get("/about", (req,res)=>{
    res.render("about",{
        title:"About Me",
        name: "Sidharth Surya"
    })
})
app.get("/help",(req,res)=>{
    res.render("help",{
        title:"Help",
        name: "Sidharth Surya",
        txt: "I will Help you"
    })
})
app.get("/weather",(req,res)=>{
     if(!req.query.address){
        res.send({
            error:"Please provide an address"
        })
    }
    else{
        forecast(req.query.address,(error,bd)=>{
            if(error!=undefined)
            {
                res.send(error)
            }
            else{
                res.send({
                    loc: bd.location.name,
                    add: req.query.address,
                    cond: bd.current.condition.text,
                    temp: bd.current.temp_c
                })
            }
        })
    }
    
})
app.get("/help/*",(req,res)=>{
    res.render("error",{
        title: "404 Page",
        name: "Sidharth Surya",
        txt: "Help Article not found"
    })
})
app.get("*",(req,res)=>{
    res.render("error",{
        title: "404 Page",
        name: "Sidharth Surya",
        txt: "Page not found"
    })
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})