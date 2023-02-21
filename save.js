function save() {
    const formData = new FormData(formElem);
// document.getElementsByClassName("form")
    console.log(formData);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    const jsonString = JSON.stringify(jsonData);
}

