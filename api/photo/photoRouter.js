const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const router = express.Router();

router.get('/:itemId/photo/', authRequired, async (req, res) => {
  const { itemID } = req.params;
  const response = await Model.findById('photo', itemID);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'This item does not have photos' });
  }
});
// POST a photo for an item
router.post('/', authRequired, async (req, res) => {
  const data = req.body;
  const response = await Model.create('photo', data);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({
      message: 'You have successfully created you a photo for the item',
    });
  }
});

module.exports = router;