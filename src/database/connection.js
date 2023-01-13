import sql from "mssql";
import config from "../config";


const dbSettings = {
    // user: 'jrtello', 
    // password: '3w4qJAXY', 
    // server: "192.168.4.252",
    // database: 'SIS_INTEGRADO_TESTEO',
    user: config.dbUser, 
    password: config.dbPassword, 
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: false,
        trustServerCertificate: true 
    },
};

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool
        //const result = await pool.request().query("SELECT * from FTE.TBL_FICHA_TECNICA");
        //console.log(result);
    } catch (error) {   
        console.error(error)
    }
    
}

export { sql }

//getConnection();

//sql.connect(dbSettings) 

//     server: "localhost",
//     port: 1433, 
//     database: 'Colegio',
//     //dialect: "mssql", 
//     options: {
//         encrypt: true,
//         trustServerCertificate: true 
//     },
//     authentication: {
//         type: 'default',
//         options: {
//             userName: 'warenas', //update me
//             password: '123456'  //update me
//         }
//     },
//     options: {
//         // If you are on Microsoft Azure, you need encryption:
//         encrypt: true,
//         database: 'your_database'  //update me
//     }
    
// }

// async function getConnection(){
//     const pool = await sql.connect(dbSettings)
//     const result = await pool.request().query("SELECT 1")
//     console.log(result)
// }

// getConnection();

// import { Connection } from "tedious";
// //var Connection = require('tedious').Connection;  
//     const config = {  
//         server: 'localhost',  //update me
//         authentication: {
//             type: 'default',
//             options: {
//                 userName: 'warenas', //update me
//                 password: '123456'  //update me
//             }
//         },
//         options: {
//             // If you are on Microsoft Azure, you need encryption:
//             encrypt: true,
//             database: 'Colegio'  //update me
//         }
//     }; 

//     async function getConnection(){
//         const pool = await sql.connect(config)
//         const result = await pool.request().query("SELECT 1")
//         console.log(result)
//     }

//     getConnection();

// getConnection();
   
    //     const connection = new Connection(config);  
    //     connection.on('connect', function(err) {  
    //         // If no error, then good to proceed.  
    //         console.log("Connected");  
    //         executeStatement();  
    //     });  
    
    
    // conect.connect();   