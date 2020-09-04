const { copyAndPush } = require('./copyAndPush');

describe('copyAndPush function', () => {
  it('fed an array and an item to push to it, returns a copy of the original array with the new item added to the end', () => {

    const theseAreAFewOfMyFavoriteThings = ['raindrops on roses', 'whiskers on kittens', 'bright copper kettles', 'warm woolen mittens', 'brown paper packages tied up with string'];

    const pushTheThing = copyAndPush(theseAreAFewOfMyFavoriteThings, 1);

    expect(pushTheThing)
      .toEqual(['raindrops on roses', 'whiskers on kittens', 'bright copper kettles', 'warm woolen mittens', 'brown paper packages tied up with string', 1]);
  });
});
