// saveDataHandler.test.js

const { JSDOM } = require('jsdom');
const JSZip = require('jszip');
const { saveAs } = require('file-saver');

// Mock imports
const imageUpload = {
  base64Image: 'data:image/png;base64,abcdefghijklmnopqrstuvwxyz',
  imageFile: { name: 'sample.png' },
};

// Mock FileSaver
jest.mock('file-saver', () => ({
  saveAs: jest.fn(),
}));

describe('Save Data Handler', () => {
  let document;
  let saveButton;
  let formInputs;

  beforeEach(() => {
    const dom = new JSDOM(`
      <html>
        <body>
          <input type="text" id="photoId" value="1">
          <input type="text" name="field1" value="value1">
          <input type="text" name="field2" value="value2">
          <button id="save">Save</button>
        </body>
      </html>
    `);

    document = dom.window.document;
    saveButton = document.querySelector('#save');
    formInputs = document.querySelectorAll('input[type=text]');

    const saveDataHandler = require('./path/to/your/saveDataHandler');
    saveDataHandler.default(saveButton, formInputs, imageUpload.base64Image, imageUpload.imageFile);
  });

  test('Save data when save button is clicked', () => {
    saveButton.dispatchEvent(new dom.window.Event('click'));

    expect(saveAs).toHaveBeenCalled();
  });
});
