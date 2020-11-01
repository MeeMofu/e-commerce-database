const router = require('express').Router();
const { Category, Product } = require('../../models');
const inputCheck = require('../../utils/inputCheck');


// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [{
      model:Product,
      attributes:{exclude:['categoryId']}
    }]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model:Product,
      attributes:{exclude:['categoryId']}
    }]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  const error = inputCheck(req.body, 'category_name');
  if (error) {
    res.status(400).json({ message: error });
    return;
  }
  Category.create(req.body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  const error = inputCheck(req.body, 'category_name');
  if (error) {
    res.status(400).json({ message: error });
    return;
  }
  Category.update(
      req.body,
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbPostData => {
      if (dbPostData[0]===0) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json({ message: 'Successfully edited category' });
    } )
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id : req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json({ message: 'Successfully deleted category' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
