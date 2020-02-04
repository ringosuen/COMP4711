
function toggleForm() {
    let artistForm = document.getElementById("entryForm");
    if (artistForm.style.display === "block") {
        artistForm.style.display = "none";
    } else {
        artistForm.style.display = "block";
    }
}

function addEntry() {
    toggleForm();
    
//append to this big DIV in HTML file 
    let artist_list = document.getElementById("artist_list");

//grab data from input and set to var     
    let artist_name = document.getElementById('name_entry').value;
    let artist_info = document.getElementById('about_entry').value;
    let artist_imgURL = document.getElementById('img_entry').value;
    
//create outer and inner Div, inner Div to attach photo, name, info divs 
    let outerDiv = document.createElement("div");
    outerDiv.className = "outerDiv";

    let innerDiv = document.createElement("div");
    innerDiv.className = "innerDiv";
    outerDiv.appendChild(innerDiv);

//create Div for Photo and Name/Info
    let imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    innerDiv.appendChild(imgDiv);
    
    let textDiv = document.createElement("div");
    textDiv.className = "textDiv";
    innerDiv.appendChild(textDiv);
    
    let nameDiv = document.createElement("div");
    nameDiv.className = "nameDiv";
    textDiv.appendChild(nameDiv);
    
    let infoDiv = document.createElement("div");
    infoDiv.className = "infoDiv";
    textDiv.appendChild(infoDiv);

    //set image, name, and info
    let imgElement = document.createElement("img");
    imgElement.src = artist_imgURL;
    imgDiv.appendChild(imgElement);

    let nameElement = document.createElement("b");
    nameElement.innerText = artist_name;
    nameDiv.appendChild(nameElement);

    let infoElement = document.createElement("p");
    infoElement.innerText = artist_info;
    infoDiv.appendChild(infoElement);

//DELETE BUTTON
    let deleteDiv = document.createElement("div");
    deleteDiv.className = "deleteArist";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function() {
        deleteBtn.parentNode.parentNode.parentNode.parentNode.removeChild(outerDiv);
    };
    deleteDiv.appendChild(deleteBtn);
    innerDiv.appendChild(deleteDiv);

    artist_list.appendChild(outerDiv);
}