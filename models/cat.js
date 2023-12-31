/* eslint-disable prefer-destructuring */
const db = require('../utils/mock-db');

const cats = db.cats;

function getAllCats() {
  return cats;
}

function getCatById(id) {
  let catId = id;

  if (typeof catId !== 'number') {
    catId = parseInt(catId);
  }

  return cats.find((cat) => cat.id === catId);
}

function getByfield(field, value) {
  return cats.filter((cat) => cat[field] === value);
}

module.exports = {
  getAll: getAllCats,
  getOne: getCatById,
  getByfield,
};
