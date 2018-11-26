const Mocha = require('mocha')
const assert = require('assert')
const mocha = new Mocha({
  reporter: 'spec'
});

const getSection = Mocha.Suite.create(mocha.suite, 'GET Routes');
const usersQueryTests = Mocha.Suite.create(getSection, '/users/query');
const usersListTests = Mocha.Suite.create(getSection, '/users/list');

getSection.beforeAll(function () {
  // do something before
});
getSection.afterAll(function () {
  // do something after
});

usersQueryTests.addTest(new Mocha.Test('user query test 1', function () {
  assert.equal(1, 1)
}));
usersQueryTests.addTest(new Mocha.Test('user query test 2', function () {
  assert.equal(1, 1)
}));

usersListTests.addTest(new Mocha.Test('user list test 1', function () {
  assert.equal(1, 1)
}));
usersListTests.addTest(new Mocha.Test('user list test 2', function () {
  assert.equal(1, 1)
}));


// creating tests in a for loop
const postSection = Mocha.Suite.create(mocha.suite, 'POST Routes');
const postTests = Mocha.Suite.create(postSection, '/messages/addnew');

const messages = [
  {
    title: "msg1",
    input: 1,
    expectedOutput: 1
  },
  {
    title: "msg2",
    input: 2,
    expectedOutput: 2
  }
]

for (const message of messages) {
  postTests.addTest(new Mocha.Test(`message test : '${message.title}'`, function () {
    assert.equal(message.input, message.expectedOutput)
  }));
}

mocha.run();