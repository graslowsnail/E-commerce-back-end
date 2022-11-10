const sequelize = require('../../config/connection.js');
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//*****GET api/categories***********************************
router.get('/', (req, res) => {
  // be sure to include its associated Products
  Category.findAll({
    // find all categories
  })
    .then((dbCatagoryData) => res.json(dbCatagoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

}); // ***** END

//*****GET/categories/id************************************
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'category_name'
    ],
    include: [
      //will include products in specified catigory
      {
        model: Products,
        attributes: [
          'product_name',
          'category_id',
          'stock'
        ],
  },
    ],
  })
    .then((dbCatagoryData) => {
      if(!dbCatagoryData) {
        res.status(404).json({ message: 'no category with this id found' });
        return;
      }
      res.json(dbCatagoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

}); // ***** END

//expects
// {
//   "category_name": "Taskmaster goes public!",
//  }
//*****POST /api/categories
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then((dbCatagoryData) = res.json(dbCatagoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

}); //*********end

//*****PUT api/categories
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    })
    .then((dbCatagoryData) => {
      if(!dbCatagoryData) {
        res.status(404).json({ message: 'No category found with this id'});
        return;
      }
      res.json(dbCatagoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});//**** END

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCatagoryData) => {
      if (!dbCatagoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCatagoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

});//**** END

module.exports = router;
