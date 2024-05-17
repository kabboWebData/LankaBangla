const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const mysql = require('mysql');
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "lsbdata"


})
app.get('/temp', (req, res) => {


    const querry = ` SELECT * FROM lonkabangla.customer_table; `



    db.query(querry, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result)
        }


        //res.send(result)
    })


})
app.post('/createAcc', (req, res) => {
    const data = req.body;

    console.log(data)

    const querry1 = `INSERT INTO lonkabangla.customer_table VALUES ("124","${data.presentaddress}","${data.email}","${data.phnnum}","${data.bodID}","${data.nationality}","in123","${data.acontNum}","not","not","${data.ocupation}" ); `


    const querry2 = `INSERT INTO lonkabangla.customer_table (presentAddress,customer_email, customer_phn,customerDOB, nationality,inverstorID,BankACC, BO_ID, HeadOfSattlement,occupation   )
    VALUES ("${data.presentaddress}","${data.email}","${data.phnnum}","${data.bodID}","${data.nationality}","in123","${data.acontNum}","not","not","${data.ocupation}" );`


    db.query(querry2, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }


        //res.send(result)
    })
})






app.post('/provideBoID', (req, res) => {
    const data = req.body;

    console.log(data)



    const querry2 = `
    UPDATE   lonkabangla.customer_table
    SET BO_ID = ${data.provideID} WHERE customerCode=${data.id} ; `


    db.query(querry2, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }


        //res.send(result)
    })
})



app.post('/sendhsapprovefrist', (req, res) => {
    const data = req.body;
    const frist = data.frist
    const join = data.join
    const customerinfo = data.customerinfo

    console.log(frist)

    const querry1 = `insert into lonkabangla.firstacc
    values(${customerinfo.BONUM},"${frist.email2}","${frist.phnnum2}","${frist.nationality2}","${frist.BOD2}",
    "${frist.presentaddress2}");`


    const querry2 = `insert into lonkabangla.jointaccount
    values(${customerinfo.BONUM},'${join.email1}','${join.phnnum1}','${join.nationality1}',"${join.BOD1}","${join.presentaddress1}","${join.ocupation1}");`


    db.query(querry1, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })

})

app.post('/sendhsapprovejoin', (req, res) => {
    const data = req.body;
    const frist = data.frist
    const join = data.join
    const customerinfo = data.customerinfo

    console.log(join)

    const querry1 = `insert into lonkabangla.firstacc
    values(${customerinfo.BONUM},"${frist.email2}","${frist.phnnum2}","${frist.nationality2}","${frist.BOD2}",
    "${frist.presentaddress2}");`
    const querry2 = `insert into lonkabangla.jointaccount
    values(${customerinfo.BONUM},'${join.email1}','${join.phnnum1}','${join.nationality1}',"${join.BOD1}","${join.presentaddress1}","${join.ocupation1}");`


    // db.query(querry1, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         res.send(result);
    //     }
    // })
    db.query(querry2, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})
app.post('/HSupdate', (req, res) => {
    const data = req.body;
    console.log(data)
    const querry1 = `UPDATE  lonkabangla.customer_table
    SET HeadOfSattlement = '${data.approve}' WHERE customerCode=${data.id} ;  `
    db.query(querry1, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})


app.get('/hello', (req, res) => {
    const querry = 'SELECT * FROM lonkabangla.customer_table;'
    db.query(querry, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result)
        }


        //res.send(result)
    })





})
app.get('/customerdetail', (req, res) => {
    const querry = 'SELECT customerCode,customer_email,BankACC,BO_ID, HeadOfSattlement FROM lonkabangla.customer_table;'
    db.query(querry, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result)
        }



    })


})
app.get('/BOmngr', (req, res) => {
    const querry = 'SELECT customerCode,customer_email,BankACC,BO_ID,HeadOfSattlement FROM lonkabangla.customer_table;'
    db.query(querry, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result)
        }


        //res.send(result)
    })


})




app.get('/HSfech', (req, res) => {


    const querry = `select customerCode,FEmail,JFatherEmail  from
    (select *from lonkabangla.jointaccount INNER JOIN lonkabangla.firstacc ON 	jointaccount.Jcustomercode = firstacc.FcustomerCode) AS temp1 inner join lonkabangla.customer_table 
    on temp1.Jcustomercode = customer_table.customerCode `



    db.query(querry, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result)
        }


        //res.send(result)
    })


})

app.get('/', (req, res) => {
    res.send([{ value: 100 }]);
})

app.get('/users', (req, res) => {
    res.send([{ value: 100 }]);
})
app.listen(port, () => {
    console.log("listening to port ", port)
})