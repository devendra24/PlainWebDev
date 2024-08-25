setInterval(() => {
    if (!document.getElementsByClassName("carousel")[0].style.backgroundImage.includes("1")) {
        document.getElementsByClassName("carousel")[0].style.backgroundImage = "url(./carousel1.jpg)";

    }
    else {
        document.getElementsByClassName("carousel")[0].style.backgroundImage = "url(./carousel2.jpg)";
    }
}, 4000)

document.addEventListener("DOMContentLoaded", function () {
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    const MAX_IMAGES = 5;
    loadFromLocalStorage();

    dropzone.ondrop = drop;
    dropzone.ondragover = allowDrop;
    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drop(ev) {
          ev.preventDefault();
          console.log(ev.dataTransfer.files)
          for (const file of ev.dataTransfer.files) {
            displayFile(file);
        }
      }
    //Write the code of all the dropzone functionality here
    fileInput.addEventListener("change", () => {
        const files = fileInput.files;

        if (files.length === 0) {
            alert('No files selected.');
            return;
        }

        for (const file of files) {
            displayFile(file);
        }
    })

    function displayFile(file) {
        console.log(file);
        const reader = new FileReader();
        reader.onload = function (e) {
            const data = {
                src: e.target.result,
                alt: file.name
            }
            //Complete the function here
            setLocalStorage(data);
            fileList.appendChild(createElementTODO(data));
        }
        reader.readAsDataURL(file);
    }


    //Function to load the data from localStorage
    function loadFromLocalStorage() {
        const storedImagesData = JSON.parse(localStorage.getItem('storedImagesData') || '[]');
        console.log("Loaded from localStorage:", storedImagesData);
        storedImagesData.forEach(data => {
            // Write rest of the code here
            fileList.appendChild(createElementTODO(data));
        });
    }

    function setLocalStorage(data){
        const storedImagesData = JSON.parse(localStorage.getItem('storedImagesData') || '[]');
        storedImagesData.push(data);
        localStorage.setItem("storedImagesData",JSON.stringify(storedImagesData));
    }

    function createElementTODO(data) {
        const div = document.createElement('div');
        div.className = 'file-name';

        const img = document.createElement('img');
        img.src = data.src;
        img.alt = data.alt;
        img.className = 'thumbnail';

        const textArea = document.createElement('textarea');
        textArea.className = "text-area";

        const button = document.createElement("button");
        button.className = "cancel-button";
        button.onclick = removeElement;
        button.textContent = "x";

        div.appendChild(img);
        div.appendChild(textArea);
        div.appendChild(button);
        return div;
    }

    function removeElement() {

    }
})
