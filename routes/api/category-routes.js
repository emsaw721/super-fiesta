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
  }).then(dbCategoriesData => {
    console.log(dbCategoriesData) 
    if(!dbCategoriesData) {
      res.status(404).json({messsage: 'No categories found!'}) 
      return; 
    }
    res.json(dbCategoriesData)
  }).catch((err) => res.json(err)) 
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.Category.id
    },
    attributes: ['id', 'category_name'],
    include: [{
      model: Product,
      attributes: ['id', 'product_name']
    }
    ]
  }).then(dbOneCategory => {
    if(!dbOneCategory){
      res.status(404).json({message: 'Category not found!'})
      return; 
    }
    res.json(dbOneCategory)
  }).catch((err) => res.json(err))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,

  }).then(dbCreatedCategory => {
    res.json(dbCreatedCategory)
  }).catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id: req.params.Category_id,
      name: req.params.category_name
  },
  {
    where: {
      id: req.params.Category_id
    }
  }).then(dbUpdatedCategory => {
    res.json(dbUpdatedCategory)
  }).catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.Category_id
    }
  }).then(dbDeletedCategory => {
    if(!dbDeletedCategory){
      res.status(404).json({message: 'No category with this id found!'})
      return; 
    }
    res.json(dbDeletedCategory)
  }).catch((err) => res.json(err))
});

module.exports = router;
