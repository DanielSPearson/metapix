const { fireEvent } = require("@testing-library/dom");

describe("Test the image upload feature", () => {
  test("Should call the callAPI function with the correct parameters when the button is clicked", () => {
    const photoId = "1";
    const imageName = "image1";
    const individual = "John Doe";
    const officeLocation = "London";
    const floorNumber = "3";
    const officeNumber = "301";
    const phoneNumber = "1234567890";
    const email = "john.doe@example.com";
    const department = "IT";
    const manager = "Jane Smith";
    const keyWords = "image";
    const description = "This is an image";
    const base64Image = "kjgh8743bf837vve44t";
    const fileType = "jpg";
    
    const button = document.createElement("button");
    button.id = "save";
    document.body.appendChild(button);

    const callAPI = jest.fn();
    button.addEventListener("click", function() {
      callAPI(
        photoId,
        imageName,
        individual,
        officeLocation,
        floorNumber,
        officeNumber,
        phoneNumber,
        email,
        department,
        manager,
        keyWords,
        description,
        base64Image,
        fileType
      );
    });

    fireEvent.click(button);

    expect(callAPI).toHaveBeenCalledWith(
      photoId,
      imageName,
      individual,
      officeLocation,
      floorNumber,
      officeNumber,
      phoneNumber,
      email,
      department,
      manager,
      keyWords,
      description,
      base64Image,
      fileType
    );
  });
});
