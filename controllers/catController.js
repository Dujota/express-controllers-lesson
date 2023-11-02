/* eslint-disable prefer-destructuring */
// Controllers are in charge of getting all the data together and sending it back to the client in the response.

// ONLY PLACE YOU WILL USE/REQUIRE MODELS is in a controller file

const Cat = require('../models/cat');

const getCats = (req, res) => {
  const cats = Cat.getAll();

  res.json({ cats });
};

const getOne = (req, res) => {
  const id = req.params.id;

  const cat = Cat.getOne(id);
  res.json(cat);
};

const search = (req, res) => {
  const field = req.query.field;
  const value = req.query.value;
  let cats = [];
  if (value === 'true' || value === 'false') {
    if (value === 'true') {
      cats = Cat.getByfield(field, true);
    } else {
      cats = Cat.getByfield(field, false);
    }
  } else if (field === 'id') {
    cats = Cat.getByfield(field, parseInt(value));
  } else {
    cats = Cat.getByfield(field, value);
  }

  res.json({ cats });
};

module.exports = {
  index: getCats,
  show: getOne,
  search,
};
