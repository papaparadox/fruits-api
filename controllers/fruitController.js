const FruitsModel = require("../models/FruitsModel");

const showAllFruits = async (req, res) => {
  try {
    const fruits = await FruitsModel.showAllFruits();
    res.status(200).send(fruits);
  } catch (err) {
    res.status(500).send({ error: err }); // important to return errors, as it stop further executions
  }
};

const show = async (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    const fruit = await FruitsModel.show(name);
    res.status(200).send(fruit);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

const createFruit = async (req, res) => {
  try {
    const newFruit = await FruitsModel.create(req.body);
    res.status(201).send(newFruit);
  } catch (err) {
    res.status(409).send({ error: err });
  }
};

const updateFruit = async (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    const fruit = await FruitsModel.show(name);
    const result = await fruit.update(req.body);

    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

const deleteFruit = async (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    const fruit = await FruitsModel.show(name);
    const result = await fruit.delete();

    res.status(200).send({ message: `The fruit ${name} was deleted` }); // doesn't return the fruit deleted, however need to setup a custom message to notify the client that specific thing was deleted
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

module.exports = { showAllFruits, show, createFruit, updateFruit, deleteFruit };
