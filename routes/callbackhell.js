/* eslint-disable */

foo(x, () => {
  bar(x, () => {
    baz(x, () => {
      // And if this goes on!
    });
  });
});