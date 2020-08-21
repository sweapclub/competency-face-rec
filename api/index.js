const express = require('express');
const router = express.Router();
const sql = require('./connector/sqlite');

router.get('/', function (req, res) {
  res.header('Content-Type', 'application/json');
  res.send('OKWhat');
});

router.get('/gate/walk-in', (req, res) => {
  res.header('Content-Type', 'application/json');
  sql
    .execQuery(
      `
      select  a.ID as id,a.name, c.companyName,programming,electronic,mechanic,img
      from recognition as r left join authorized as a
      on r.ID = a.ID left join company as c on a.companyID = c.companyID
      where strftime("%s",datetime('now','localtime')) - strftime("%s", timestamp_in) <= 10
      order by timestamp_in desc
      limit 1
  `
    )
    .then(
      (data) => {
        res.send(data);
      },
      (err) => {
        res.sendStatus(404);
      }
    );
});

// router.get('/detail/:roomID', (req, res) => {
//   res.header('Content-Type', 'application/json');
//   const roomID = req.params.roomID;
//   sql
//     .execQuery(
//       `
//   select a.ID,a.Name
//   from recognition as r
//   left join authirized as a on a.ID = r.ID
//   where r.areaID = '${roomID}'
//   order by r.timestamp_in desc
//   `
//     )
//     .then(
//       (data) => {
//         res.send(data);
//       },
//       (err) => {
//         res.sendStatus(404);
//       }
//     );
// });

module.exports = router;
