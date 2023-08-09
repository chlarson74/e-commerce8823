const router = require('express').Router();

//imports the model
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint: WHAT DOES THIS MEAN?

router.get('/', async (req, res) => { //check on the async - I added that based on 22-Stu_One-to-One Activity - readerRoutes.js
  // find all categories // check out 22-Stu_One-to-One Activity - readerRoutes.js
  try {
    const categoryData = await Category.findAll({  //await needed the async added to line 8
      include: [{ model: Product }], // be sure to include its associated Products
    });
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => { //check on the async - I added that based on 22-Stu_One-to-One Activity - readerRoutes.js
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }], // be sure to include its associated Products
    });
    if (!categoryData) {
      res.status(404).json({message: 'no category found with that id'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => { //check on the async - I added that based on 22-Stu_One-to-One Activity - readerRoutes.js
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => { //check on the async - I added that based on 22-Stu_One-to-One Activity - readerRoutes.js
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => { //check on the async - I added that based on 22-Stu_One-to-One Activity - readerRoutes.js
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({message: 'No category found with that id'});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
