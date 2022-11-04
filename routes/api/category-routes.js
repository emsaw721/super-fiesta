const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({

  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id: req.params.category_id,
      name: req.params.category_name

  },
  {
    where: {
      id: req.params.category_id
    }
  }).then((updatedCategory) => {
    res.json(updatedCategory)
  }).catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.category_id
    }
  }).then((deletedCategory) => {
    res.json(deletedCategory)
  }).catch((err) => res.json(err))
});

module.exports = router;
