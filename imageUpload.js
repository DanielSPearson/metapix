//The code to upload an imagefrom the local machine into the web app
const image_upload = document.querySelector("#image_upload");

//var uploaded_image = "";

image_upload.addEventListener("change", function() {
    console.log(image_upload.value);
    const reader = new FileReader()
    reader.addEventListener("load", () => {
//        uploaded_image = reader.result;
//        document.querySelector("#image").style.backgorundImage = `url(${uploaded_image})`;
        document.querySelector("#image").src = reader.result
    })
    
    reader.readAsDataURL(this.files[0])
});
