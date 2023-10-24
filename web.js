const express = require('express');
const multer = require("multer");

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

  var sql = `SELECT A.IDX,
                    A.ID, 
                    A.SKU, 
                    A.NAME, 
                    A.PRICE,
                    A.DISCOUNT, 
                    A.OFFER_END, 
                    A.RATING, 
                    A.SALE_COUNT, 
                    A.SELLER_ID, 
                    A.REGIST_DT, 
                    A.UPDATE_DT, 
                    A.DELETE_YN, 
                    A.FULL_DESCRIPTION, 
                    A.SHORT_DESCRIPTION,
                    B.IMAGE_PATH
                FROM PRODUCTS A, PRODUCTS_IMAGE B WHERE A.ID = B.PRODUCT_ID AND A.SELLER_ID=? AND B.IMAGE_TYPE='0'`;
  
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

app.post('/editProjectRequest', function(request, response){

  var msg = "";
  var userId = request.body.userId;
  var editIdx = request.body.editIdx;
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
  const IDX = editIdx;
  console.log("수정요청항목 : ",editIdx, ",", REQ_USER_ID);
  var editValArr = [STAY_YN, OUTSOURCING_YN, BUDGET, GOV_SUPPORT, CATEGORY1, CATEGORY2, POSITION_NM, PERSONAL_YN, CORP_YN, PERSONAL_NM, NOW_STATUS1, NOW_STATUS2, NOW_STATUS3, NOW_STATUS4, DETAIL_CONT, DETAIL_PRICE, REQ_USER_ID, IDX];
  var sql = "";
  sql = `UPDATE nonamedm17.PROJECT_REQUEST
        SET STAY_YN=?, OUTSOURCING_YN=?, BUDGET=?, GOV_SUPPORT=?, CATEGORY1=?, CATEGORY2=?, POSITION_NM=?, PERSONAL_YN=?, CORP_YN=?, PERSONAL_NM=?, NOW_STATUS1=?, NOW_STATUS2=?, NOW_STATUS3=?, NOW_STATUS4=?, DETAIL_CONT=?, DETAIL_PRICE=?, UPDATE_DT=now(), REQ_USER_ID=?, APPROVAL_STATUS=0
        WHERE IDX=?;
        `;
  connection.query(sql, editValArr, function(err, result){
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

app.post('/editProject', function(request, response){
  console.log(request.body);

  var msg = "";
  var userId = request.body.userId;
  const IDX = request.body.idx;
  const REQ_USER_ID = userId;
  var selectValArr = [IDX,REQ_USER_ID];
  var sql = "";

  sql = `SELECT *
          FROM PROJECT_REQUEST`;
  sql +=` WHERE 1=1
            AND IDX=?
            AND REQ_USER_ID=?`;
  connection.query(sql, selectValArr, function(err, result){
    console.log(sql);
    if(err) {
      console.log(err);
      msg = '0';
    } else {
      msg = '1';
      //console.log("결과물",result);
    }
    //console.log("결과",msg);
    var returnMsg = {"msg":msg, "result": result};
    response.send(returnMsg);
    
  });
})

app.post('/deleteProject', function(request, response){
  console.log(request.body);
  var msg = "";
  var userId = request.body.userId;
  const IDX = request.body.idx;
  const REQ_USER_ID = userId;
  var deleteValArr = [IDX,REQ_USER_ID];
  var sql = "";
  //STAY_YN
  // , OUTSOURCING_YN
  // , BUDGET
  // , GOV_SUPPORT
  // , CATEGORY1
  // , CATEGORY2
  // , POSITION_NM
  // , PERSONAL_YN
  // , CORP_YN
  // , PERSONAL_NM
  // , NOW_STATUS1
  // , NOW_STATUS2
  // , NOW_STATUS3
  // , NOW_STATUS4
  // , DETAIL_CONT
  // , DETAIL_PRICE
  // , DUE_DT
  // , REGIST_DT
  // , UPDATE_DT
  // , DELETE_YN
  // , REQ_USER_ID
  // , APPROVAL_STATUS
  sql = `DELETE FROM PROJECT_REQUEST`;
  sql +=` WHERE 1=1
            AND IDX=?
            AND REQ_USER_ID=?`;
  connection.query(sql, deleteValArr, function(err, result){
    console.log(sql);
    if(err) {
      console.log(err);
      msg = '0';
    } else {
      msg = '1';
      console.log("결과물",result);
    }
    console.log("결과",msg);
    var returnMsg = {"msg":msg, "result": result};
    response.send(returnMsg);
    
  });
})

app.post('/serviceInsert', function(request, response){
  //console.log(request.body);
  // console.log(data.stay_yn);
  var msg = "";
  var userId = request.body.userId;
  var data = request.body.data;

  //const id = data.id;
  //ID는 여기서 쿼리 날린 후 MAX처리 하자.
  var maxSql = "SELECT IFNULL(MAX(ID)+1,1) as ID FROM PRODUCTS";
  let id = "";
  const sku = data.sku;
  const name = data.name;
  
  //var 최소값 = Math.min(변수1, 변수2, 변수3);
  const discount = "0";
  const offer_end = "2023-12-31 23:59:59";
  const rating = "0";
  const sale_count = "0";
  const seller_id = userId;
  const full_description = data.full_description;
  const short_description = data.short_description;
  const category_a = data.category_a;
  const category_b = data.category_b;
  const type_name1 = data.type_name1;
  const type_name2 = data.type_name2;
  const type_name3 = data.type_name3;
  const type_expln1 = data.type_expln1;
  const type_expln2 = data.type_expln2;
  const type_expln3 = data.type_expln3;
  const type_price1 = data.type_price1.replace(/[^0-9]/g, '');
  const type_price2 = data.type_price2.replace(/[^0-9]/g, '');
  const type_price3 = data.type_price3.replace(/[^0-9]/g, '');
  const price = Math.min(type_price1,type_price2,type_price3);
  const type_lt1 = data.type_lt1;
  const type_lt2 = data.type_lt2;
  const type_lt3 = data.type_lt3;
  const type_mod_num1 = data.type_mod_num1;
  const type_mod_num2 = data.type_mod_num2;
  const type_mod_num3 = data.type_mod_num3;
  
  console.log(request.body);
  var insertValArr = [];
  connection.query(maxSql, insertValArr, function(err, result){
    console.log(maxSql);
    if(err) {
      console.log(err);
      msg=0;
    } else {
      //console.log(result[0].ID);
      id = result[0].ID;
    }
    insertValArr = [id, sku, name, price, discount, offer_end, rating, sale_count, seller_id, full_description, short_description];
    var sql = "";
    sql = "INSERT INTO PRODUCTS (ID, SKU, NAME, PRICE, DISCOUNT, OFFER_END, RATING, SALE_COUNT, SELLER_ID, REGIST_DT, UPDATE_DT, DELETE_YN, FULL_DESCRIPTION, SHORT_DESCRIPTION)";
    sql +="VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now(), 'N', ?, ?);";
    connection.query(sql, insertValArr, function(err, result){
      console.log(sql);
      if(err) {
        console.log(err);
        msg=0;
      } else {

        var sql1_1 = `INSERT INTO PRODUCTS_CATEGORY
        (CATEGORY_NAME, CATEGORY_NUM, CATEGORY_CODE, PRODUCT_ID, REGIST_DT, UPDATE_DT, DELETE_YN)
        VALUES(?, 'A', ?, ?, now(), now(), 'N'); `
        var category_name_a = category_a =="00" ? "SERVICE A" : category_a=="01" ? "SERVICE B" : "SERVICE C"
        var sql1_1param = [category_name_a, category_a, id];
        var sql1_1s = mysql.format(sql1_1,sql1_1param);

        var sql1_2 = `INSERT INTO PRODUCTS_CATEGORY
        (CATEGORY_NAME, CATEGORY_NUM, CATEGORY_CODE, PRODUCT_ID, REGIST_DT, UPDATE_DT, DELETE_YN)
        VALUES(?, 'B', ?, ?, now(), now(), 'N'); `
        var category_name_b = category_b =="00" ? "SERVICE A" : category_b=="01" ? "SERVICE B" : "SERVICE C"
        var sql1_2param = [category_name_b, category_b, id];
        var sql1_2s = mysql.format(sql1_2,sql1_2param);
        
        var sql2 = ` INSERT INTO PRODUCTS_IMAGE
        (PRODUCT_ID, IMAGE_NAME, IMAGE_PATH, IMAGE_EXT, IMAGE_SIZE, REGIST_DT, UPDATE_DT, DELETE_YN, IMAGE_TYPE)
        VALUES(?, ?, ?, ?, ?, now(), now(), 'N', '0'); `
        var imageName = request.body.imgData1.name;
        var imagePath = request.body.imgData1.path.replace("researchf\\public","");
        var imageExt = request.body.imgData1.ext;
        var imageSize = request.body.imgData1.size;
        var sql2param = [id,imageName,imagePath,imageExt,imageSize];
        var sql2s = mysql.format(sql2,sql2param);

        
        for(let i = 0; i < request.body.imgData2.length; i++) {
          // console.log("사이즈",[i]);
          // console.log(request.body.imgData2[i]);
          var sql2_1 = ` INSERT INTO PRODUCTS_IMAGE
          (PRODUCT_ID, IMAGE_NAME, IMAGE_PATH, IMAGE_EXT, IMAGE_SIZE, REGIST_DT, UPDATE_DT, DELETE_YN, IMAGE_TYPE)
          VALUES(?, ?, ?, ?, ?, now(), now(), 'N', '1'); `
          var imageName_1 = request.body.imgData2[i].name;
          var imagePath_1 = request.body.imgData2[i].path.replace("researchf\\public","");
          var imageExt_1 = request.body.imgData2[i].ext;
          var imageSize_1 = request.body.imgData2[i].size;
          var sql2param_1 = [id,imageName_1,imagePath_1,imageExt_1,imageSize_1];
          var sql2s_1 = mysql.format(sql2_1,sql2param_1);
          connection.query(sql2s_1, function (err, result, field) {
            if(err) {
              console.log(err);
            } else {
            }
    
          });
        }
        
        var sql3_1 = ` INSERT INTO nonamedm17.PRODUCTS_VARIATION
        (PRODUCT_ID, TYPE_CODE, TYPE_NAME, TYPE_EXPLN, TYPE_PRICE, TYPE_LT, TYPE_MOD_NUM, REGIST_DT, UPDATE_DT, DELETE_YN)
        VALUES(?, '0', ?, ?, ?, ?, ?, now(), now(), 'N'); `
        var sql3param_1 = [id,type_name1,type_expln1,type_price1,type_lt1, type_mod_num1];
        var sql3s_1 = mysql.format(sql3_1,sql3param_1);

        var sql3_2 = ` INSERT INTO nonamedm17.PRODUCTS_VARIATION
        (PRODUCT_ID, TYPE_CODE, TYPE_NAME, TYPE_EXPLN, TYPE_PRICE, TYPE_LT, TYPE_MOD_NUM, REGIST_DT, UPDATE_DT, DELETE_YN)
        VALUES(?, '1', ?, ?, ?, ?, ?, now(), now(), 'N'); `
        var sql3param_2 = [id,type_name2,type_expln2,type_price2,type_lt2, type_mod_num2];
        var sql3s_2 = mysql.format(sql3_2,sql3param_2);

        var sql3_3 = ` INSERT INTO nonamedm17.PRODUCTS_VARIATION
        (PRODUCT_ID, TYPE_CODE, TYPE_NAME, TYPE_EXPLN, TYPE_PRICE, TYPE_LT, TYPE_MOD_NUM, REGIST_DT, UPDATE_DT, DELETE_YN)
        VALUES(?, '2', ?, ?, ?, ?, ?, now(), now(), 'N'); `
        var sql3param_3 = [id,type_name3,type_expln3,type_price3,type_lt3, type_mod_num3];
        var sql3s_3 = mysql.format(sql3_3,sql3param_3);
  
        connection.query(sql1_1s+sql1_2s+sql2s+sql3s_1+sql3s_2+sql3s_3, function (err, result, field) {
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
  });

})
app.post('/portfolioInsert', function(request, response){
  //console.log(request.body);
  // console.log(data.stay_yn);
  var msg = "";
  var userId = request.body.userId;
  var data = request.body.data;

  //const id = data.id;
  //ID는 여기서 쿼리 날린 후 MAX처리 하자.
  // var maxSql = "SELECT IFNULL(MAX(ID)+1,1) as ID FROM PRODUCTS";
  // let id = "";
  const seller_id = userId;
  const name = data.name;
  const client = data.client;
  const lt = data.lt;
  
  console.log(request.body); 
    
  var insertValArr = [seller_id, name, client, lt];
  var sql = "";
  sql = "INSERT INTO PRODUCTS_PORTFOLIO (SELLER_ID, NAME, CLIENT, LT, REGIST_DT, UPDATE_DT, DELETE_YN)";
  sql +="VALUES(?, ?, ?, ?, now(), now(), 'N');";
  connection.query(sql, insertValArr, function(err, result){
    console.log(sql);
    if(err) {
      console.log(err);
      msg="0";
    } else {
      const id = '';
      const maxSql = "SELECT MAX(IDX) AS ID FROM PRODUCTS_PORTFOLIO WHERE SELLER_ID='"+seller_id+"';";
      connection.query(maxSql, insertValArr, function(err, result){
        if(err) {
          console.log(err);
          msg="0";
        } else {

          var maxVal = result[0].ID;
          var sql2 = ` INSERT INTO PRODUCTS_PORTFOLIO_IMAGE
          (PORT_ID, IMAGE_NAME, IMAGE_PATH, IMAGE_EXT, IMAGE_SIZE, REGIST_DT, UPDATE_DT, DELETE_YN, IMAGE_TYPE)
          VALUES(?, ?, ?, ?, ?, now(), now(), 'N', '0'); `
          var imageName = request.body.imgData1.name;
          var imagePath = request.body.imgData1.path.replace("researchf\\public","");
          var imageExt = request.body.imgData1.ext;
          var imageSize = request.body.imgData1.size;
          var sql2param = [maxVal,imageName,imagePath,imageExt,imageSize];
          var sql2s = mysql.format(sql2,sql2param);
    
          
          for(let i = 0; i < request.body.imgData2.length; i++) {
            // console.log("사이즈",[i]);
            // console.log(request.body.imgData2[i]);
            var sql2_1 = ` INSERT INTO PRODUCTS_PORTFOLIO_IMAGE
            (PORT_ID, IMAGE_NAME, IMAGE_PATH, IMAGE_EXT, IMAGE_SIZE, REGIST_DT, UPDATE_DT, DELETE_YN, IMAGE_TYPE)
            VALUES(?, ?, ?, ?, ?, now(), now(), 'N', '1'); `
            var imageName_1 = request.body.imgData2[i].name;
            var imagePath_1 = request.body.imgData2[i].path.replace("researchf\\public","");
            var imageExt_1 = request.body.imgData2[i].ext;
            var imageSize_1 = request.body.imgData2[i].size;
            var sql2param_1 = [maxVal,imageName_1,imagePath_1,imageExt_1,imageSize_1];
            var sql2s_1 = mysql.format(sql2_1,sql2param_1);
            connection.query(sql2s_1, function (err, result, field) {
              if(err) {
                console.log(err);
              } else {
              }
      
            });
          }
          
    
          connection.query(sql2s, function (err, result, field) {
            if(err) {
              console.log(err);
              msg="0";
            } else {
              msg="1";
            }
    
          });

        }
      });
      
      response.send(msg);
    }
  });
  

})

app.post('/portfolioDetail', function(request, response){
  var msg = "";
  var userId = request.body.userId;
    
  var sql1 = " SELECT * FROM PRODUCTS_PORTFOLIO WHERE SELLER_ID=? AND DELETE_YN='N' ORDER BY IDX DESC ;";
  var sql1param = [userId];
  var sql1s = mysql.format(sql1,sql1param);
  
  var sql2 = " SELECT * FROM PRODUCTS_PORTFOLIO_IMAGE";

  connection.query(sql1s+sql2, function (err, result, field) {
    if(err) {
      console.log(err);
      msg="0";
    } else {
      msg="1";

      result[0].map((a,i)=>{
        const port_image = [];
        const port_image_temp = result[1].filter((e)=>{
          //console.log(result[0][i].ID);
          if(e.PORT_ID==result[0][i].IDX) {
            return true;
          }
        });
        port_image_temp.map((a,i)=>{
          //console.log(products_category_temp[i].CATEGORY_NAME)
          port_image.push({"path":port_image_temp[i].IMAGE_PATH, "type":port_image_temp[i].IMAGE_TYPE});
        })
        result[0][i].image=port_image;
      });
      response.send(result[0]);
    }
  });
  

})

app.post('/allProducts', function(request, response){

  var sql1 = `SELECT id, sku, name, price, discount, 
                     DATE_FORMAT(offer_end,'%Y-%m-%d %H:%i:%s') as offerEnd,
                     rating, sale_count as saleCount, seller_id as sellerId, 
                     full_description as fullDescription,
                     DATE_FORMAT(regist_dt,'%Y-%m-%d %H:%i:%s') as registDt,
                     DATE_FORMAT(update_dt,'%Y-%m-%d %H:%i:%s') as updateDt, delete_yn as deleteYn 
                FROM PRODUCTS;   `;
  var sql2 = `SELECT * FROM PRODUCTS_CATEGORY; `;
  var sql3 = `SELECT * FROM PRODUCTS_IMAGE ORDER BY IMAGE_TYPE ASC; `;
  var sql4 = `SELECT * FROM PRODUCTS_VARIATION; `;
  var sql5 = `SELECT * FROM PRODUCTS_TAG; `;
  var products = [];
  connection.query(sql1+sql2+sql3+sql4+sql5, function (err, result, field) {
    if(err) console.log(err);

    products=result[0];
    //result[0] : PRODUCTS, result[1] : CATEGORY, result[2] : IMAGE, result[3] : VARIATION, result[4] : TAG

    //var products_image_temp= [];
    result[0].map((a,i)=>{
      
      const products_category = [];
      const products_image = [];
      const products_variation = [];
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

      const products_variation_temp = result[3].filter((e)=>{
        //console.log(result[0][i].ID);
        if(e.PRODUCT_ID==result[0][i].id) {
          // var temp = result[3][i].TYPE_PRICE;
          // temp = temp.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g,',');
          // result[3][i].TYPE_PRICE = temp;
          return true;
        }
      });
      products_category_temp.map((a,i)=>{
        //console.log(products_category_temp[i].CATEGORY_NAME)
        products_category.push(products_category_temp[i].CATEGORY_NAME);
      })
      products_image_temp.map((a,i)=>{
        //console.log(products_category_temp[i].CATEGORY_NAME)
        products_image.push(products_image_temp[i].IMAGE_PATH);
      })
      products_variation_temp.map((a,i)=>{
        //console.log(products_category_temp[i].CATEGORY_NAME)
        products_variation.push(products_variation_temp[i]);
      })
      result[0][i].category=products_category;
      result[0][i].image=products_image;
      result[0][i].variation=products_variation;
      result[0][i].stock=10;
      result[0][i].tag=['research','illustrator','freelancer'];
    })

    response.send(result[0]);
  });
  


})

app.post('/allRequests', function(request, response){

  var sql1 = `SELECT IDX, STAY_YN, OUTSOURCING_YN, BUDGET, GOV_SUPPORT,
              CATEGORY1, CATEGORY2, POSITION_NM, PERSONAL_YN, CORP_YN, PERSONAL_NM,
              NOW_STATUS1, NOW_STATUS2, NOW_STATUS3, NOW_STATUS4, DETAIL_CONT, DETAIL_PRICE,
              DUE_DT, REGIST_DT, UPDATE_DT, DELETE_YN, REQ_USER_ID, APPROVAL_STATUS
                FROM PROJECT_REQUEST;   `;
  var requests = [];
  connection.query(sql1, function (err, result, field) {
    if(err) console.log(err);

    requests=result;
    console.log(requests);

    response.send(result);
  });
  


})


app.post('/uploadFiles', function(request, response){
  
  
  const storage = multer.diskStorage({
    destination: (request, file, callback) => {
      //업로드 파일의 저장 위치를 설정
      // callback(null, './file'); //개발 업로드 경로
      callback(null, './researchf/public/assets/img/');	//운영 업로드 경로
    },
    filename: (request, file, callback) => {
      const fileNamePlus = crypto.randomBytes(8).toString('hex'); // 랜덤값 생성
      const fileName = file.originalname.replace(" ","_");
      const fileExt = fileName.split('.').pop();

      callback(null, fileName.split('.'+fileExt)[0]+"_"+fileNamePlus+"."+fileExt);	// 파일이 저장될 때 이름 설정
    },
  });
  
  
  const limits = {
    files: 50,
    fileSize: 1024 * 1024 * 1024, //1G
  }
  
  const upload = multer({ storage, limits }).any();

  const reqFiles = [];
  upload(request, response, (err) => {
    if (err) {
      return response.json({ success: false, err });
    }

    for(let i = 0; i < request.files.length; i++) {
      reqFiles.push(request.files[i].filename);
    }
    //console.log(request.files);
    return response.json({
      success: true,
      //url: res.req.file.path,
      fileName: reqFiles,
      files: request.files
    });
  });

  return;
})


app.get('*',function(request,response){
  response.sendFile(path.join(__dirname,'/build/index.html'));
})

  
//connection.end();