var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        // console.log("here", tableInput) ;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, col1, col2, val1, val2, cb) {
        var queryString = "INSERT INTO ?? (??,??) values (?,?)";
        console.log("Lookhere",queryString);


        connection.query(queryString, [table, col1, col2, val1, val2], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (table, col, value, condi, cb) {
        var queryString = "UPDATE ?? SET ?? = ? where id = ?";

        connection.query(queryString, [table, col, value, condi], function (err, result) {
            if (err) {
                throw(err)
            } else {
                cb(result);
            }

        })

    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;