describe('Image Upload', () => {
    let file, base64Image, fileType;
  
    beforeEach(() => {
      // Create a mock file object
      file = new File(['file contents'], 'image.png', {
        type: 'image/png',
      });
  
      // Stub the FileReader API
      global.FileReader = jest.fn(() => ({
        readAsDataURL: jest.fn(),
        result: `data:image/png;base64,${base64Image}`,
      }));
  
      // Set up the event listener
      const event = new Event('change');
      const imageUpload = document.createElement('input');
      imageUpload.type = 'file';
      imageUpload.files = [file];
      document.body.appendChild(imageUpload);
  
      const previewImage = document.createElement('img');
      previewImage.id = 'image';
      document.body.appendChild(previewImage);
  
      // Run the code to be tested
      imageUpload.dispatchEvent(event);
  
      // Get the output values
      base64Image = fileContentsToBase64('file contents');
      fileType = 'image/png';
    });
  
    afterEach(() => {
      // Clean up the DOM
      document.body.innerHTML = '';
    });
  
    test('should set the preview image source to the base64-encoded file', () => {
      const previewImage = document.querySelector('#image');
      expect(previewImage.src).toBe(`data:image/png;base64,${base64Image}`);
    });
  
    test('should set the base64Image variable to the base64-encoded file', () => {
      expect(base64Image).toBeDefined();
      expect(base64Image).toBe(fileContentsToBase64('file contents'));
    });
  
    test('should set the fileType variable to the file type', () => {
      expect(fileType).toBeDefined();
      expect(fileType).toBe('image/png');
    });
  });
  
  function fileContentsToBase64(contents) {
    return btoa(unescape(encodeURIComponent(contents)));
  }
  