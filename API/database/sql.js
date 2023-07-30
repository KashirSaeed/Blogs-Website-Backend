// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host:'bvgaid4eeed6ty9o3r5b-mysql.services.clever-cloud.com',
//     user:'usywsikatsjc8rbx',
//     password:'OVpiEBThYtSKGiFIPSRl',
//     database:'bvgaid4eeed6ty9o3r5b',
//     port:'3306'

// });

// connection.connect( (err)=>{
//     if(err) throw err;
//     console.log("database connected ");
// } );

// module.exports = {connection};

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'bvgaid4eeed6ty9o3r5b-mysql.services.clever-cloud.com',
    user:'usywsikatsjc8rbx',
    password:'OVpiEBThYtSKGiFIPSRl',
    database:'bvgaid4eeed6ty9o3r5b',
    port:'3306'

});

connection.connect( (err)=>{
    if(err) throw err;
    console.log("database connected ");
} );

module.exports = connection.promise();