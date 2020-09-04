const fetch = require('node-fetch');
const query = 'quotes/1';
const url = `http://futuramaapi.herokuapp.com/api/${query}`;

const fetchQuote = async() => {
  try {
    const response = await fetch(url);
    const [{ character: name, quote: text, image }] = await response.json();

    // Still don't entirely have the hang of the destructuring, but getting there
  
    return { name, text, image };
  } catch(e) {
    console.log(e);
  }
};

module.exports = {
  fetchQuote
};

