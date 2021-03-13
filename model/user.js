/** @format */

const Sequlize = require("sequelize");

const sequlize = require("../util/sequlize");

const user = sequlize.define("user", {



    id: {
        type: Sequlize.BIGINT,
        allownull: false,
        primaryKey: true,
        validate: {
            len: {
                args: 1,
                msg: "Name must be atleast 3 characters in length"
            }
        },

        unique: {
            args: true,
            msg: 'id exist'
        }

    },

    userName: {
        type: Sequlize.TEXT,
        allownull: false,

        validate: {
            len: {
                args: 1,
                msg: "Name must be atleast 3 characters in length"
            }
        },


    },

    amount: {
        type: Sequlize.FLOAT,
        allownull: false,

     


    },

    date: {
        type: Sequlize.DATE,
        allownull: false,
        validate: {
            len: {
                args: 1,
                msg: "Name must be atleast 3 characters in length"
            }
        },


    },


});

module.exports = user;
