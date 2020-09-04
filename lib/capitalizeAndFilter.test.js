const { capitalizeAndFilter } = require('./capitalizeAndFilter');

describe('capitalizeAndFilter function', () => {
  it('takes an array of strings, capitalizes first character of each, removes strings starting with "f"', () => {

    const stringsArr = ['bippity', 'boppity', 'foo'];

    expect(capitalizeAndFilter(stringsArr))
      .toEqual(['Bippity', 'Boppity']);
  });
});
