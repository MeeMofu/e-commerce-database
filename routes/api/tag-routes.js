const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const inputCheck = require('../../utils/inputCheck');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [Product]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err.name);
      console.log(err.message);
      res.status(err.name).json(err.message);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findAll({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  const error = inputCheck(req.body, 'tag_name');
  if (error) {
    res.status(400).json({ message: error });
    return;
  }
  Tag.create(req.body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  const error = inputCheck(req.body, 'tag_name');
  if (error) {
    res.status(400).json({ message: error });
    return;
  }
  Tag.update(
      req.body,
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbPostData => {
      if (dbPostData[0]===0) {
        // Update returns an array with value 0 when no entries is found
        // !dbPostData wouldn't work
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json({ message: 'Successfully edited tag' });
    } )
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id : req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json({ message: 'Successfully deleted tag' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
