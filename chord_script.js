function uploadImage() {
    let fileInput = document.getElementById("file_input");
    let fileName = document.getElementById("file_name").value.trim();

    if (!fileName || fileInput.files.length === 0) {
        alert("Please enter a file name and select an image.");
        return;
    }

    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.onload = function(event) {
        let dataUrl = event.target.result;
        localStorage.setItem(fileName, dataUrl);
        alert("Image uploaded successfully!");
        fileInput.value = "";
        document.getElementById("file_name").value = "";
    };

    reader.readAsDataURL(file);
}

function searchImage() {
    let searchName = document.getElementById("search_name").value.trim();
    let imageData = localStorage.getItem(searchName);

    if (imageData) {
        let img = document.getElementById("image_preview");
        img.src = imageData;
        img.style.display = "block";
        document.getElementById("search_name").value = "";
    } else {
        alert("Image not found.");
    }
}
