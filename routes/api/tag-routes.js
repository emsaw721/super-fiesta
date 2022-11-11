const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({

    include: [
      {
        model: Product
      }
    ]
  }).then((allTags) => {
    res.json(allTags)
  }).catch((err) => {
    res.json(err)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product
      }
    ]
  }).then((oneTag) => {
    if(!oneTag) {
      res.status(404).json({message: 'Tag not found!'})
    }
    res.json(oneTag)
  }).catch((err) => res.json(err))
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    // don't put id because will need to keep track if it --> will autoincrement anyway 
    tag_name: req.body.tag_name

  }).then(createdTag => {
    res.json(createdTag)
  }).catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      },
    }).then((updatedTag) => {
      res.json(updatedTag)
    }).catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((deletedTag) => {
    if(!deletedTag){
      res.status(404).json({message: 'No tag with this id found!'})
      return; 
    }
    res.json(deletedTag)
  }).catch((err) => res.json(err))
});

module.exports = router;
