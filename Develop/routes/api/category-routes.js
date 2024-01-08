const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {  //rotuer is a variable making use of express using router function 
try {
  const categoryData = await Category.findAll( { 
    include :[{ model: Product }]
  })
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err)
}
  // find all categories
    // Category.findAll({
    //   include: [Product]
    // }) 
    // .then(categories => res.json(categories)) 
    // .catch(err => res.status(500).json(err) )
  // be sure to include its associated Products

});

router.get('/:id', async (req, res) => {     // : is a params lives in req object
  // find one category by its `id` value
try{
  const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product }]
  });
  if (!categoryData) {
    res.status(400).json({ message: "category not here "})
    return;
  }
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err)
}
    // Category.findOne(
    //   {where: {id: req.params.id} , include: [Product]})
    //   .then(category => res.json(category))
    //   .catch(err => res.status(500).json(err) )
  // be sure to include its associated Products//params object its a key and an object
});

router.post('/', async (req, res) => {
  // create a new category
try { 
  const categoryData = await Category.create(req.body);
  res.status(200).json(categoryData);
} catch (err) {
  res.status(400).json(err);
}

  // Category.create(req.body)
  // .then(category => res.json(category))
  //     .catch(err => res.status(500).json(err) )
});

router.put('/:id', async (req, res) => {  //put is shortword for update does require an id 
  // update a category by its `id` value //needs a param
try { 
  const categoryData = await Category.update(req.body, { 
    where: { 
      id: req.params.id,
    },
  })
  if (!categoryData) { 
    res.status(400).json({ message: "category not found"})
 return; 
}} catch (err) {
  res.status(400).json(err);
}
res.status(500).json(categoryData)
  // Category.update(req.body, {
  //   where: {
  //     id: req.params.id
  //   }
  // })
  // .then(category => res.json(category))
  //     .catch(err => res.status(500).json(err) )

});

router.delete('/:id', (req, res) => {  //very specific indicator 
  // delete a category by its `id` value
  Category.destroy( {
    where: {
      id: req.params.id
    }
  })
  .then(category => res.json(category))
      .catch(err => res.status(500).json(err) )

});

module.exports = router;

  
