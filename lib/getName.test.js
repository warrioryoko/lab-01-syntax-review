const { getName } = require('./getName');

describe('getName function', () => {
  it('gets the name property of an object', () => {

    const screamo = { name: 'screamo the elf', age: 7, weight: '50 lbs' };
    const giveTheName = getName(screamo);

    expect(giveTheName)
      .toEqual('screamo the elf');
  });
});
