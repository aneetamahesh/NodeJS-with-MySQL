const express = require('express')
const mysql = require('mysql2');
var bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = 5700
app.use(bodyParser.json());
app.use(cors({
    origin:"*",
}))

app.listen(port,()=>console.log('Listening on port: '+port));
app.use(express.json())

const connection  = mysql.createConnection({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'sports management'
})
connection.connect((err)=>
{
    if(!err)
    {console.log("DB connected");}
    else
    {console.log("Error");}
});

app.get('/display',(req,res)=>
{
    connection.query("select * from player",(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log("error");
    });
});

app.get('/add/:PLAYER_ID/:PLAYER_NO/:PLAYER_NAME/:SPECIALISATION/:JOIN_DATE/:CONTRACT_EXPIRY_DATE/:ADDRESS/:CONTACT_NO',(req,res)=>
{
    var sql="insert into player SET ?";
    var data={PLAYER_ID:[req.params.PLAYER_ID],PLAYER_NO:req.params.PLAYER_NO,PLAYER_NAME:req.params.PLAYER_NAME,SPECIALISATION:req.params.SPECIALISATION,JOIN_DATE:req.params.JOIN_DATE,CONTRACT_EXPIRY_DATE:req.params.CONTRACT_EXIPRY_DATE,ADDRESS:req.params.ADDRESS,CONTACT_NO:req.params.CONTACT_NO};
    var  query=connection.query(sql,data,(err,result)=>
    {
        if(err) throw err;
        res.send("Inserted new rows....");
    });
});

app.get('/delete/:PLAYER_ID',(req,res)=>
{
    var sql=`delete from player where PLAYER_ID=${req.params.PLAYER_ID}`;
    var quary=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("deleted from the table...");
    });
});

app.get('/update/:PLAYER_ID/:SPECIALISATION',(req,res)=>
{
    var sql=`update player set SPECIALISATION='${req.params.SPECIALISATION}'where PLAYER_ID=${req.params.PLAYER_ID}`;
    var quary=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("updated the table......");
    });

});