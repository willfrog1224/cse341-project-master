//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

router.get('/', (req, res, next) => {
  const p = path.join(__dirname, '..', 'data', 'products.json');
  fs.readFile(p, (err, content) =>{

    if (err) {
      conlog.log(err);
    }
    let products = JSON.parse(content);
    const criteria = req.query.criteria;
    if(criteria){
      products = products.filter(
        (product) => product.name.search(criteria) >= 0
        );
    }

    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
    });

  });

});

module.exports = router;
