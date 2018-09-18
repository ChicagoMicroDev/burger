var orm = require('../config/orm.js');


// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

    selectAll: function (tableInput, cb) {
        orm.selectAll("burgers",function (res) {
            cb(res);
        });
    },

    insertOne: function (val1,cb) {
        orm.insertOne("burgers", "burgers_name", "devoured", val1, false, function (res) {
            cb(res);
        });
    },

    updateOne: function (value, condi, cb) {
        orm.updateOne("burgers", "devoured", value, condi, function (res) {
            cb(res);
        });
    }

};


// Export at the end of the burger.js file.
module.exports = burger;