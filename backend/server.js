 const express = require("express");
 const cors = require("cors")
const mysql = require("mysql2")

 const app = express();
 app.use(express.json());
 app.use(cors());

 const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "xty17123",
    database : "excrud"
 })

 app.get("/NewTable", (req,res) => {
    const sql = "SELECT * FROM NewTable";
    db.query(sql, (err,data) => {
        if(err) return res.json(err.message);
        return res.json(data)
    })
 })

 app.post('/NewTable', (req, res) => {
   const {id,name, email} = req.body;
   const sql = `INSERT INTO NewTable (id,name,email) VALUES (?,?,?)`;
   const values = [
      req.body.name,
      req.body.email
   ]
   db.query(sql, [id, name, email], (err,results) => {
      if(err){
         console.error('Error inserting data =',err.message);
         res.status(500).json({error :'Error inserting data'});
         return;
      }
      res.status(200).json({message:"Data inserted"})
      // return res.json(err.message);
      // return res.json(data);
   })
 })
// app.post('/NewTable', (req, res) =>{
//    const {nama, email} = req.body

//    db.query((`insert into NewTable (nama,email)
//     values('${nama}', '${email}')`),(err, result) =>{
//        if(!err){
//            res.send('Insert Success')
//        }else{
//            res.send(err.message)
//        }
//     })
// })
app.get('/NewTable', (request,responese) =>{
   db.query(`Select * from NewTable`, (err, result) => {
       if(!err){
           responese.send(result)
       }
   })
})
//  app.get('/NewTable', (req, res) => {
//    const selected= `SELECT * FROM NewTable`;

//    db.query(selected, (err, results) => {
//       if (err) {
//          console.log("Error =", err)
//          res.status(500).json({error : 'Error retrieving data'})
//          return;
//       }
//       res.send(results[1])
//    })
//  })

//  app.put('/NewTable/:id', (req,res) => {
//    const {id, name, email} = req.body
//    db.query((`update NewTable set title ='${id}', name='${name}', email='${email}'`),
//    (err, result) =>{
//       if(!err){
//          res.send('update succes ')
//       }else{
//          res.send(err.message)
//       }
//    })
//  })

 app.delete('/NewTable/:id', (req,res) => {
   db.query((`delete from NewTable where id = '${req.params.id}'`), (err, result) => {
       if(!err){
           res.send('Delete succes')
       }else {
           res.send(err.message)
       }
   })
})

app.put('/NewTable/:id', (req,res) => {

   const { name, email} = req.body

   db.query((`update NewTable set name='${name}', email= '${email}' where id ='${req.params.id}'`),(err, result) =>{
       if(!err){
           res.send('update succes Success')
       }else{
           res.send(err)
       }
    })
})

 
 app.listen(8081,() => {
    console.log("connect")
   })
   db.connect(err => {
     if(err){
        console.log('Error = ',err )
     }else {
     console.log('connect')
     }
   })
   