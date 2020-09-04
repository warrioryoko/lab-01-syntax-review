const fetch = require('node-fetch');
const query = 'quotes/1';
const url = `http://futuramaapi.herokuapp.com/api/${query}`;

const fetchQuote = async() => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const quote = json[0];

    // Okay, so apparently I can't do this:
    // const json = await response.json()[0];
    // I guess because I have to GET the response before
    // accessing a property on it? Go figure.
  
    return { name: quote.character, text: quote.quote, image: quote.image };
  } catch(e) {
    console.log(e);
  }
};

module.exports = {
  fetchQuote
};

