const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({

    include: [
      {
        model: Product

      }
    ]
  }).then(allCategories => {
    console.log(allCategories)
    if (!allCategories) {
      res.status(404).json({ messsage: 'No categories found!' })
      return;
    }
    res.json(allCategories)
  }).catch((err) => {res.json(err)})
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
      }
    ]
  }).then(oneCategory => {
    if (!oneCategory) {
      res.status(404).json({ message: 'Category not found!' })
      return;
    }
    res.json(oneCategory)
  }).catch((err) => {res.json(err)})
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,

  }).then(createdCategory => {
    res.json(createdCategory)
  }).catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id: req.params.id,
      name: req.params.category_name
    },
    {
      where: {
        id: req.params.id
      },
    }).then(updatedCategory => {
      res.json(updatedCategory)
    }).catch((err) => {res.json(err)})
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(deletedCategory => {
    if (!deletedCategory) {
      res.status(404).json({ message: 'No category with this id found!' })
      return;
    }
    res.json(deletedCategory)
  }).catch((err) => {res.json(err)})
});

module.exports = router;
