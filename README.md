# react-test-tutorial

## Testing React

### Testing using Jest

Jest is a testing framework that you'll need to figure out how to use. Follow this tutorial to install and run Jest __exactly__. For example, your testing folder has to be called tests
with two underscores or it won't work and jest won't know what to look for:
```
__tests__
```
Link here > jest (https://facebook.github.io/jest/docs/getting-started.html#content)

### Testing React

To test React Facebook use the NPM module: react-test-utils.

You'll need to require this at the top of your file.
```
var ReactTestUtils = require('react-addons-test-utils')
```
It lets you change react components in your tests.

```javascript
test('Player', function(t) {
  var player = <Player test='testing' />;
  ReactTestUtils.renderIntoDocument(player);
  t.plan(1);
  t.equal(player.props.test, 'testing', 'test property should exists');
});
```
