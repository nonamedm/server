const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 9090;


app.listen(port, function () {
  console.log('listening on ',port)
}); 

const connection = mysql.createConnection({
  host: 'nodejs-011.cafe24.com',
  user: 'nonamedm17',
  password: 'gnlvldxmfl123!',
  database: 'nonamedm17',
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 에러:', err);
  } else {
    console.log('MySQL 연결 성공');
  }
});

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname,'research/build')));






app.get('/',function(request, response){
  response.sendFile(path.join(__dirname, 'research/build/index.html'));
})

app.get('/product',function(request, response){
  response.json({name : 'black shoes'})
})



app.get('*',function(request,response){
  response.sendFile(path.join(__dirname,'research/build/index.html'));
})