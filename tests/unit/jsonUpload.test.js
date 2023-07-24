// formHandler.test.js

const { JSDOM } = require('jsdom');

// Mock the FileReader class
class FileReaderMock {
  readAsText() {
    this.onload({ target: { result: JSON.stringify({ field1: 'value1', field2: 'value2' }) } });
  }
}

describe('Form Handler', () => {
  let document;
  let fileInput;
  let formInputs;
  let textarea;

  beforeEach(() => {
    const dom = new JSDOM(`
      <html>
        <body>
          <input type="file" id="json-input">
          <input type="text" name="field1">
          <input type="text" name="field2">
          <textarea id="description" name="field3"></textarea>
        </body>
      </html>
    `);

    document = dom.window.document;
    global.FileReader = FileReaderMock;
    fileInput = document.getElementById('json-input');
    formInputs = document.querySelectorAll('input[type=text], textarea');
    textarea = document.querySelector('#description');

    require('./path/to/your/formHandler');
  });

  test('Populates form inputs when a file is selected', () => {
    const file = new Blob([JSON.stringify({ field1: 'value1', field2: 'value2' })], { type: 'application/json' });

    fileInput.files = [file];
    fileInput.dispatchEvent(new dom.window.Event('change'));

    expect(formInputs[0].value).toBe('value1');
    expect(formInputs[1].value).toBe('value2');
  });

  test('Textarea height changes based on input', () => {
    const initialHeight = textarea.style.height;

    textarea.value = 'Some text\nSome more text\nAnd even more text';
    textarea.dispatchEvent(new dom.window.Event('input'));

    expect(textarea.style.height).not.toBe(initialHeight);
  });
});
