"use strict";
const axios = require("axios");

const getJoke = async () => {
  const randomJoke = await axios({
    method: "get",
    headers: {
      Accept: "application/json"
    },
    url: "https://icanhazdadjoke.com/"
  });
  return randomJoke.data.joke;
};

module.exports = function(Rock) {
  Rock.observe("before save", async (ctx) => {
    if (ctx.instance) {
      if (!ctx.instance.engraving) {
        ctx.instance.engraving = await getJoke();
      }
    } else {
      if (ctx.data.engraving) {
        ctx.data.engraving = await getJoke();
      }
    }
  });
};
