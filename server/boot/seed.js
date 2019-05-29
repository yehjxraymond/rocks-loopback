"use strict";

module.exports = server => {
  const { Rock } = server.models;
  Rock.create([
    {
      name: "Andesite",
      weight: 1.0,
      image:
        "https://mineralseducationcoalition.org/wp-content/uploads/andesite_366069737.jpg",
      engraving: "I'm an Andesite",
      location: {
        lat: 1.293558,
        lng: 103.80375
      }
    },
    {
      name: "Basalt",
      weight: 1.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81WssD-z%2BdL._SX425_.jpg",
      engraving: "I'm a Basalt",
      location: {
        lat: 1.31474,
        lng: 103.877176
      }
    },
    {
      name: "Dacite",
      weight: 1.0,
      image:
        "https://flexiblelearning.auckland.ac.nz/rocks_minerals/rocks/images/dacite.jpg",
      engraving: "I'm a Dacite",
      location: {
        lat: 1.324361,
        lng: 103.862001
      }
    },
    {
      name: "Diorite",
      weight: 1.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81TVw5AlEkL._SX425_.jpg",
      engraving: "I'm a Diorite",
      location: {
        lat: 1.358996,
        lng: 103.802988
      }
    },
    {
      name: "Obsidian",
      weight: 1.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61Fk1UKrbcL._SX425_.jpg",
      engraving: "I'm an Obsidian",
      location: {
        lat: 1.348207,
        lng: 103.72057
      }
    }
  ]).then(() => {
    console.log("Seeded with some rocks");
  });
};
