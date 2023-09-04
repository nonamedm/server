const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 8001;
const crypto = require('crypto');


app.listen(port, function () {
  console.log('listening on ',port)
}); 

const connection = mysql.createConnection({
  host: 'nodejs-011.cafe24.com',
  user: 'nonamedm17',
  password: 'gnlvldxmfl123!',
  database: 'nonamedm17',
  multipleStatements: true
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

app.use(express.static(path.join(__dirname,'/build')));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(request, response){
  response.sendFile(path.join(__dirname, '/build/index.html'));
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
  var sql = 'SELECT count(*) AS CNT FROM USER_INFO WHERE USER_MAIL = ?';

  var msg = '0'; // 기본 0, 아이디중복 1, 기타 2, 완료 9 
  connection.query(sql, userEmail, function(err, rows, fields){
    if(err) console.log(err);
    // console.log("결과",rows);
    if(rows[0].CNT>0) {
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
  var userId = '';
  var userMail = request.body.userMail;
  var userPasswd = request.body.userPasswd;

  var sql = 'SELECT COUNT(*) as CNT FROM USER_INFO WHERE USER_MAIL = ?';
  var msg = '0'; // 기본 0, 아이디없음 1, 비밀번호오류 2, 성공 9
  
  connection.query(sql, userMail,function (err, result) {
    if(err) console.log(err);

    if(result[0].CNT>0) {
      var sql = 'SELECT USER_ID, USER_PASSWD, USER_NAME FROM USER_INFO WHERE USER_MAIL = ?';
      connection.query(sql, userMail,function (err, result) {
        if(err) console.log(err);
        userId = result[0].USER_ID;
        userName = result[0].USER_NAME;
        var getUserPasswd = result[0].USER_PASSWD;
      
        const hash = crypto
        .pbkdf2Sync(userPasswd, userId, 100000, 64, 'sha512')
        .toString('hex').substr(0,100);

        if(hash==getUserPasswd){
          //비번일치
          msg='9';
          var returnMsg = {"msg":msg, "userName":userName, "userId":userId};
          response.send(returnMsg);
        }else {
          //비번불일치
          msg='2';
          var returnMsg = {"msg":msg, "userName":userName, "userId":userId};
          response.send(returnMsg);
        }
      });
    } else {
      msg = '1';
      var returnMsg = {"msg":msg, "userName":userName, "userId":userId};
      response.send(returnMsg);
    }
  });
  
})

app.post('/myProjectList', function(request, response){
  var userId = request.body.userId;

  var sql = `SELECT IDX
                    , STAY_YN
                    , OUTSOURCING_YN
                    , BUDGET
                    , GOV_SUPPORT
                    , CATEGORY1
                    , CATEGORY2
                    , POSITION_NM
                    , PERSONAL_YN
                    , CORP_YN
                    , PERSONAL_NM
                    , NOW_STATUS1, NOW_STATUS2, NOW_STATUS3, NOW_STATUS4
                    , DETAIL_CONT
                    , DETAIL_PRICE
                    , DUE_DT, REGIST_DT, UPDATE_DT
                    , DELETE_YN
                    , APPROVAL_STATUS
                FROM PROJECT_REQUEST WHERE REQ_USER_ID=?`;
  
  connection.query(sql, userId,function (err, result) {
    if(err) console.log(err);
    //console.log(result);

    response.send(result);
  });
})
app.post('/myServiceList', function(request, response){
  var userId = request.body.userId;

  var sql = `SELECT IDX,
                    ID, 
                    SKU, 
                    NAME, 
                    PRICE,
                    DISCOUNT, 
                    OFFER_END, 
                    RATING, 
                    SALE_COUNT, 
                    SELLER_ID, 
                    REGIST_DT, 
                    UPDATE_DT, 
                    DELETE_YN, 
                    FULL_DESCRIPTION, 
                    SHORT_DESCRIPTION
                FROM PRODUCTS WHERE SELLER_ID=?`;
  
  connection.query(sql, userId,function (err, result) {
    if(err) console.log(err);
    //console.log(result);

    response.send(result);
  });
})

app.post('/myProjectListCnt', function(request, response){
  var userId = request.body.userId;

  var sql = `SELECT COUNT(CASE WHEN APPROVAL_STATUS=0 THEN 1 END) AS CNT0,
                    COUNT(CASE WHEN APPROVAL_STATUS=1 THEN 1 END) AS CNT1,
                    COUNT(CASE WHEN APPROVAL_STATUS=2 THEN 1 END) AS CNT2,
                    COUNT(CASE WHEN APPROVAL_STATUS=3 THEN 1 END) AS CNT3
              FROM PROJECT_REQUEST
              WHERE REQ_USER_ID= ?;`;
  
  connection.query(sql, userId,function (err, result) {
    if(err) console.log(err);
    //console.log(result);
    response.send(result);
  });
})
app.post('/myUserType', function(request, response){
  var userId = request.body.userId;

  var sql = `SELECT TYPE
              FROM USER_INFO
              WHERE USER_ID= ?;`;
  
  connection.query(sql, userId,function (err, result) {
    if(err) console.log(err);
    response.send(result);
  });
})

app.get('*',function(request,response){
  response.sendFile(path.join(__dirname,'/build/index.html'));
})

app.post('/projectRequest', function(request, response){
  //console.log(request.body);
  // console.log(data.stay_yn);
  var msg = "";
  var userId = request.body.userId;
  var data = request.body.data;
  const STAY_YN = data.stay_yn;
  const OUTSOURCING_YN = data.outsourcing_yn;
  const BUDGET = data.budget;
  const GOV_SUPPORT = data.gov_support;
  const CATEGORY1 = data.category1;
  const CATEGORY2 = data.category2;
  const POSITION_NM = data.position_nm;
  const PERSONAL_YN = data.personal_yn;
  const CORP_YN = data.corp_yn;
  const PERSONAL_NM = data.personal_nm;
  const NOW_STATUS1 = data.now_status1;
  const NOW_STATUS2 = data.now_status2;
  const NOW_STATUS3 = data.now_status3;
  const NOW_STATUS4 = data.now_status4;
  const DETAIL_CONT = data.detail_cont;
  const DETAIL_PRICE = data.detail_price;
  const DUE_DT = data.due_dt;
  const REQ_USER_ID = userId;

  var insertValArr = [STAY_YN, OUTSOURCING_YN, BUDGET, GOV_SUPPORT, CATEGORY1, CATEGORY2, POSITION_NM, PERSONAL_YN, CORP_YN, PERSONAL_NM, NOW_STATUS1, NOW_STATUS2, NOW_STATUS3, NOW_STATUS4, DETAIL_CONT, DETAIL_PRICE, REQ_USER_ID];
  var sql = "";
  sql = "INSERT INTO PROJECT_REQUEST (STAY_YN, OUTSOURCING_YN, BUDGET, GOV_SUPPORT, CATEGORY1, CATEGORY2, POSITION_NM, PERSONAL_YN, CORP_YN, PERSONAL_NM, NOW_STATUS1, NOW_STATUS2, NOW_STATUS3, NOW_STATUS4, DETAIL_CONT, DETAIL_PRICE, DUE_DT, REGIST_DT, UPDATE_DT, DELETE_YN, REQ_USER_ID, APPROVAL_STATUS)";
  sql +="VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, '2023-12-31 23:59:59', now(), now(), 'N', ?, '0')";
  connection.query(sql, insertValArr, function(err, result){
    console.log(sql);
    if(err) {
      console.log(err);
      msg = '0';
    } else {
      msg = '1';
    }
    console.log("결과",msg);
    response.send(msg);
  });
})

app.post('/serviceInsert', function(request, response){
  //console.log(request.body);
  // console.log(data.stay_yn);
  var msg = "";
  var userId = request.body.userId;
  var data = request.body.data;
  //console.log("넘어와",data);
  // const {id,sku,name,price,
  //   discount,offer_end, rating, 
  //   sale_count, seller_id, regist_dt,
  //   update_dt, delete_yn, full_description, short_description } = inputs;

  //const id = data.id;
  const id = "4";
  const sku = data.sku;
  const name = data.name;
  const price = data.price;
  // const discount = data.discount;
  const discount = "0";
  // const offer_end = data.offer_end;
  const offer_end = "2023-12-31 23:59:59";
  // const rating = data.rating;
  const rating = "5";
  // const sale_count = data.sale_count;
  const sale_count = "0";
  const seller_id = userId;
  const full_description = data.full_description;
  const short_description = data.short_description;

  var insertValArr = [id, sku, name, price, discount, offer_end, rating, sale_count, seller_id, full_description, short_description];
  var sql = "";
  sql = "INSERT INTO PRODUCTS (ID, SKU, NAME, PRICE, DISCOUNT, OFFER_END, RATING, SALE_COUNT, SELLER_ID, REGIST_DT, UPDATE_DT, DELETE_YN, FULL_DESCRIPTION, SHORT_DESCRIPTION)";
  sql +="VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now(), 'N', ?, ?);";
  connection.query(sql, insertValArr, function(err, result){
    console.log(sql);
    if(err) {
      console.log(err);
      msg=0;
    } else {
      var sql1 = `INSERT INTO PRODUCTS_CATEGORY
      (CATEGORY_NAME, CATEGORY_CODE, PRODUCT_ID, REGIST_DT, UPDATE_DT, DELETE_YN)
      VALUES('SERVICE A',00, '4', now(), now(), 'N'); `
      
      
      var sql2 = ` INSERT INTO PRODUCTS_IMAGE
      (PRODUCT_ID, IMAGE_NAME, IMAGE_PATH, IMAGE_EXT, IMAGE_SIZE, REGIST_DT, UPDATE_DT, DELETE_YN)
      VALUES('4', '3', '/assets/img/product/accessories/3.jpg', 'jpg', '1', now(), now(), 'N'); `

      var sql3 = ` INSERT INTO PRODUCTS_IMAGE
      (PRODUCT_ID, IMAGE_NAME, IMAGE_PATH, IMAGE_EXT, IMAGE_SIZE, REGIST_DT, UPDATE_DT, DELETE_YN)
      VALUES('4', '2', '/assets/img/product/accessories/1.jpg', 'jpg', '1', now(), now(), 'N'); `

      var sql4 = ` INSERT INTO PRODUCTS_IMAGE
      (PRODUCT_ID, IMAGE_NAME, IMAGE_PATH, IMAGE_EXT, IMAGE_SIZE, REGIST_DT, UPDATE_DT, DELETE_YN)
      VALUES('4', '2', '/assets/img/product/accessories/1.jpg', 'jpg', '1', now(), now(), 'N'); `
      connection.query(sql1+sql2+sql3+sql4, function (err, result, field) {
        if(err) {
          console.log(err);
          msg=0;
        } else {
          msg=1;
        }

      });
      
      response.send(msg);
    }
  });
})

app.post('/allProducts', function(request, response){

  var sql1 = `SELECT id, sku, name, price, discount, 
                     DATE_FORMAT(offer_end,'%Y-%m-%d %H:%i:%s') as offerEnd,
                     rating, sale_count as saleCount, seller_id as sellerId, 
                     DATE_FORMAT(regist_dt,'%Y-%m-%d %H:%i:%s') as registDt,
                     DATE_FORMAT(update_dt,'%Y-%m-%d %H:%i:%s') as updateDt, delete_yn as deleteYn 
                FROM PRODUCTS;   `;
  var sql2 = `SELECT * FROM PRODUCTS_CATEGORY; `;
  var sql3 = `SELECT * FROM PRODUCTS_IMAGE; `;
  var sql4 = `SELECT * FROM PRODUCTS_VARIATION; `;
  var sql5 = `SELECT * FROM PRODUCTS_TAG; `;
  var products = [];
  connection.query(sql1+sql2+sql3+sql4+sql5, function (err, result, field) {
    if(err) console.log(err);

    products=result[0];
    //var products_image_temp= [];
    result[0].map((a,i)=>{
      const products_category = [];
      const image_category = [];
      const products_category_temp = result[1].filter((e)=>{
        //console.log(result[0][i].ID);
        if(e.PRODUCT_ID==result[0][i].id) {
          return true;
        }
      });
      const products_image_temp = result[2].filter((e)=>{
        //console.log(result[0][i].ID);
        if(e.PRODUCT_ID==result[0][i].id) {
          return true;
        }
      });
      products_category_temp.map((a,i)=>{
        //console.log(products_category_temp[i].CATEGORY_NAME)
        products_category.push(products_category_temp[i].CATEGORY_NAME);
      })
      products_image_temp.map((a,i)=>{
        //console.log(products_category_temp[i].CATEGORY_NAME)
        image_category.push(products_image_temp[i].IMAGE_PATH);
      })
      result[0][i].category=products_category;
      result[0][i].image=image_category;
      result[0][i].stock=10;
      result[0][i].tag=['research','illustrator','freelancer'];
    })

    response.send(result[0]);
  });
  


})

app.get('*',function(request,response){
  response.sendFile(path.join(__dirname,'/build/index.html'));
})

  
//connection.end();