const express = require("express");

const router = express.Router();

router
  .route("/")
  .post((req, res, next) => {
    res.send("Hello users");
  })
  .get((req, res, next) => {
    res.send("Hello users");
  })
  .put((req, res, next) => {
    res.send("Hello users");
  });
/*
router.get("/", (req, res, next) => {
  res.send("Hello users");
});

router.post('/', (req, res ,next) => {
    
})

router.put('/', (req, res ,next) => {
    
})
*/

module.exports = router;
