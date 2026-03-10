const fruitsArray = require("../fruits.json");

class FruitsModel {
  constructor(fruit) {
    this.genus = fruit.genus;
    this.name = fruit.name;
    this.id = fruit.id;
    this.family = fruit.family;
    this.order = fruit.order;
    this.nutritions = fruit.nutritions;
  }

  static showAllFruits() {
    return fruitsArray.map((f) => new FruitsModel(f));
  }

  static show(name) {
    const fruit = fruitsArray.find(
      (fruit) => fruit.name.toLowerCase() === name,
    );

    if (fruit) {
      return new FruitsModel(fruit);
    } else {
      throw "The fruit doesn't exist.";
    }
  }

  static create(data) {
    const newFruit = data;
    console.log(newFruit); // this is only for debugging

    newFruit["id"] = fruitsArray.length + 1; // referencing id of the new object, assigning it a index of the last item in the fruitsArray + 1, putting it behind

    fruitsArray.push(newFruit);

    return new FruitsModel(newFruit);
  }

  update(data) {
    const updateFruit = fruitsArray.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase(),
    );
    if (updateFruit) {
      updateFruit.name = data.name;
      return new FruitsModel(updateFruit);
    } else {
      throw "Fruit not found";
    }
  }

  delete() {
    const deleteFruit = fruitsArray.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase(),
    );

    if (deleteFruit) {
      const index = fruitsArray.indexOf(deleteFruit);
      fruitsArray.splice(index, 1);
    } else {
      throw "Fruit not found";
    }
  }

  //1. delete function
  //2. build an api with pokemon
}

module.exports = FruitsModel;
