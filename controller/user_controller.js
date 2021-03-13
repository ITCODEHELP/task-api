const User_Model = require('../model/user');

const sequelize = require('../util/sequlize');

exports.Add_User_data = async (req, res, next) => {
    try {
        const username = req.body.username;
        const amount = parseInt(req.body.amount);
        const date = Date.now('2021-03-13 3:00:00');
        const id = Math.floor(Math.random() * 10000);

        User_Model.create({
            id: id,
            userName: username,
            amount: amount,
            date: date
        }).then(data => {

            if (data) {
                res.status(200).json({
                    status: "success"
                });
            } else {
                res.status(200).json({
                    status: "error"
                });
            }

        }).catch(err => {
            if (err) {
                console.log(err);
                res.status(200).json({
                    status: "INVALID"
                });
            }
        });

    } catch (error) {

    }
}


exports.Get_User_data = async (req, res, next) => {
    try {
        const param = req.param("time");

        if (param === 'Day') {
            console.log('1');

            sequelize.query(`SELECT SUM("amount"),count(*)     
            FROM generate_series
                    ( '2021-03-13'::timestamp 
                    , '2021-03-14'::timestamp
                    , '1 hour'::interval) dd
            LEFT JOIN users    
              ON dd = date_trunc('hour', "createdAt")        
            GROUP BY dd;`, {
                    type: sequelize.QueryTypes.SELECT
                })
                .then(function (users) {
                    console.log(users);
                    res.status(200).json({
                        status: "success",
                        doc: users
                    });
                    // We don't need spread here, since only the results will be returned for select queries
                })



           

        }else if (param === 'WEEK') {
            sequelize.query(`SELECT SUM("amount"),count(*)     
            FROM generate_series
                    ( '2021-03-07'::timestamp 
                    , '2021-03-13'::timestamp
                    , '1 day'::interval) dd
            LEFT JOIN users    
              ON dd = date_trunc('day', "createdAt")        
            GROUP BY dd;`, {
                    type: sequelize.QueryTypes.SELECT
                })
                .then(function (users) {
                    console.log(users);
                    res.status(200).json({
                        status: "success",
                        doc: users
                    });
                    // We don't need spread here, since only the results will be returned for select queries
                })
        }else if(param === 'MONTH') {
            sequelize.query(`SELECT SUM("amount"),count(*)     
            FROM generate_series
                    ( '2021-03-01'::timestamp 
                    , '2021-03-31'::timestamp
                    , '1 day'::interval) dd
            LEFT JOIN users    
              ON dd = date_trunc('day', "createdAt")        
            GROUP BY dd;`, {
                    type: sequelize.QueryTypes.SELECT
                })
                .then(function (users) {
                    console.log(users);
                    res.status(200).json({
                        status: "success",
                        doc: users
                    });
                    // We don't need spread here, since only the results will be returned for select queries
                })
        }
    } catch (error) {
        console.log(error);
    }
}




    