const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 9090;
const crypto = require('crypto');


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
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(request, response){
  response.sendFile(path.join(__dirname, 'research/build/index.html'));
})

app.get('/product',function(request, response){
  //response.json({name : 'black shoes'})
  var sql = "SELECT * FROM USER_INFO";
  connection.query(sql, function (err, rows, fields) {
    if(err) console.log(err);

  });
})
app.post('/register',function(request, response){
  
  var userEmail = request.body.email;
  var sql = 'SELECT count(*) FROM USER_INFO WHERE USER_MAIL = ?';

  var msg = '0'; // 기본 0, 아이디중복 1, 기타 2, 완료 9 
  connection.query(sql, userEmail, function(err, rows, fields){
    if(err) console.log(err);
    // console.log("결과",rows);
    if(rows.length>0) {
      msg = '1';
    } else {
      
      const plainPassword = request.body.password;
      const userEmail = request.body.email;
      const userJob = request.body.job;
      const userBiz = request.body.biz;
      const userid = crypto.randomBytes(16).toString('hex'); // 랜덤값 생성->userId로 사용
      
      const hash = crypto
      .pbkdf2Sync(plainPassword, userid, 100000, 64, 'sha512')
      .toString('hex');
      console.log('salt값',userid);
      console.log('암호화된 비밀번호:', hash);
      var insertValArr = [userid,hash,userEmail,userJob,userBiz];
      sql = "INSERT INTO USER_INFO (`TYPE`, GRADE, USER_ID, USER_PASSWD, USER_NAME, USER_MAIL, CI, CI_TYPE, UESR_JOB, USER_BIZ, PROFILE_PHOTO, CREATE_DT, LOGIN_DT, UPDATE_DT, NOW_LOGIN, `SESSION`, LOGIN_IP)";
      sql += "VALUES(1, 1, ? , ? , '', ?, '',0,?, ?, '', now(),now(), now(), 0, '', '');"
      connection.query(sql, insertValArr, function(err, result){
        if(err) {
          console.log(err);
          msg = '3';
        } else {
          msg = '9';
        }
        // console.log("결과",result);
      });
    }
    response.send(msg);
  });

  // var sql = "SELECT * FROM USER_INFO";
  // connection.query(sql, function (err, rows, fields) {
  //   if(err) console.log(err);
  // });

})

app.post('/login', function(request, response){
  var userMail = request.body.userMail;
  var userPasswd = request.body.userPasswd;

  var sql = 'SELECT COUNT(*) as CNT FROM USER_INFO WHERE USER_MAIL = ?';
  var msg = '0'; // 기본 0, 아이디없음 1, 비밀번호오류 2, 성공 9
  
  connection.query(sql, userMail,function (err, result) {
    if(err) console.log(err);

    if(result[0].CNT>0) {
      var sql = 'SELECT USER_ID, USER_PASSWD FROM USER_INFO WHERE USER_MAIL = ?';
      connection.query(sql, userMail,function (err, result) {
        if(err) console.log(err);
        var userId = result[0].USER_ID;
        var getUserPasswd = result[0].USER_PASSWD;
      
        const hash = crypto
        .pbkdf2Sync(userPasswd, userId, 100000, 64, 'sha512')
        .toString('hex').substr(0,100);

        if(hash==getUserPasswd){
          //비번일치
          msg='9';
        }else {
          //비번불일치
          msg='2';
        }
      });
    } else {
      msg = '1';
    }
    response.send(msg);
  });
  
})

app.get('*',function(request,response){
  response.sendFile(path.join(__dirname,'research/build/index.html'));
})


  
//connection.end();