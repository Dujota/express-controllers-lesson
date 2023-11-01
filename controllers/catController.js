// Controllers are in charge of getting all the data together and sending it back to the client in the response.

const getCats = (req, res) => {
  res.json({ msg: 'All cats' });
};
module.exports = {
  index: getCats,
};
