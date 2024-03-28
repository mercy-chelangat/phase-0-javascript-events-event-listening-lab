function addingEventListener() {
    alert('I was clicked!');
}

const { addingEventListener } = require('./helpers.js'); // Assuming addingEventListener is exported from helpers.js
const sinon = require('sinon');
const { JSDOM } = require('jsdom');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    // Create a simple DOM using jsdom
    const dom = new JSDOM('<button id="button">Click me</button>');
    global.document = dom.window.document;

    input = document.getElementById('button');
    sinon.spy(input, 'addEventListener');
  });

  afterEach(function() {
    // Restore the original document after each test
    sinon.restore();
    delete global.document;
  });

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  });
});
