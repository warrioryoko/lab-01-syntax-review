const { fetchQuote } = require('./fetchQuote');

describe('fetchQuote function', () => {
  it('returns an object from the futurama api containing a quote, character name, and image', async() => { 
    const quote = await fetchQuote();

    expect(quote).toMatchObject({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    });
  });
});
