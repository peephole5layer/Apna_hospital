import express from "express"
import router from "./routes/index.js";
import expressEjsLayouts from "express-ejs-layouts";
const app = express();

const PORT = 8880;

// app.get('/',(req,res)=>{
//     res.send('hi');
//     console.log("working");
// })


app.use(express.static('./assets'));

app.use(expressEjsLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.set('view engine','ejs');
app.set('views','./views')





app.use('/',router);




app.listen(PORT,(err)=>{
    if(err){
        console.log("Error connecting to PORT ",PORT);
        return;
    }

    console.log("Connected to PORT ",PORT);

})
