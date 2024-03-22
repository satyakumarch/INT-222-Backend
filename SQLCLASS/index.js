const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:'12203506@Satya'
  });
  try{

 

  connection.query("show table",(err,result)=>{
    if(err) throw err;
    console.log(result);
  });
}catch (err){
    console.log(err);
}



let  getRandomUser=()=> {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
  
    };
  }







  // let  createRandomUser=()=> {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
//   }
//   console.log(createRandomUser());
