// module.exports = {
//   execQuery: function (qry) {
//     return new Promise((resolve, reject) => {
//       var connection = new Connection(config);
//       connection.connect((err) => {
//         var result = [];
//         if (err) {
//           reject(err);
//         }

//         var request = new Request(qry, function (err) {
//           if (err) {
//             reject(err);
//           }
//           resolve(result);
//           connection.close();
//         });

//         request.on("row", function (columns) {
//           result = JSON.parse(columns[0].value);
//         });

//         connection.execSql(request);
//       });
//     });
//   },
// };

var sqlite3 = require('sqlite3').verbose();

module.exports = {
  execQuery: function (qry) {
    return new Promise((resolve, reject) => {
      var db = new sqlite3.Database('db/face_recog_ta.db');
      // db.serialize(function () {
      const data = [];
      db.all(qry, [], async function (err, rows) {
        if (err != undefined) {
          console.log(err);

          reject([]);
        } else {
          resolve(rows);
        }
      });
      // });

      db.close();
    });
  },
};
