const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  console.log(res.status(404));
  res.status(404).end();
});

module.exports = router;
