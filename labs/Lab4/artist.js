
function toggleForm() {
    let artistForm = document.getElementById("entryForm");
    if (artistForm.style.display === "block") {
        artistForm.style.display = "none";
    } else {
        artistForm.style.display = "block";
    }
}

function searchArtist() {
    var i, searchInput, filter, list, li, thisCard, thisName;
    searchInput = document.getElementById("searchbar");
    filter = searchInput.value.toUpperCase();
    list = document.getElementById("artist_list");
    li = list.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        thisCard = li[i].getElementsByClassName("nameDiv")[0];
        thisName = thisCard.innerText.toUpperCase();
        if (thisName.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function loadArtist() {
    let load_list = document.getElementById("artist_list")
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let localData = JSON.parse(localStorage.getItem(key));
        let createProfile = addEntry(localData);
        load_list.appendChild(createProfile);
        console.log(localStorage.length)
        // console.log("from load artist")
        // console.log(localStorage.getItem(key))
    }
}
function addArtist() {


    toggleForm();

    //append to this big DIV in HTML file 
    let artist_list = document.getElementById("artist_list");

    //grab data from input and set to var     
    let artist_name = document.getElementById('name_entry').value;
    let artist_info = document.getElementById('about_entry').value;
    let artist_imgURL = document.getElementById('img_entry').value;

    let info = [artist_name, artist_info, artist_imgURL];
    // let random = Math.floor(Math.random() * 1000)
    let random = new Date(); 
    localStorage.setItem(random, JSON.stringify(info)); 


    newArtist = addEntry(info)

    artist_list.appendChild(newArtist);

    // console.log(JSON.stringify(info))

    for (var key in localStorage) {
        console.log(key + ':' + localStorage[key]);
      }
    console.log(localStorage)

}

function addEntry(info) {
    
    let li = document.createElement("li");
    li.className = "bulletList";

    
//create outer and inner Div, inner Div to attach photo, name, info divs 
    let outerDiv = document.createElement("div");
    outerDiv.className = "outerDiv";
    li.appendChild(outerDiv);


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
    imgElement.src = info[2];
    imgDiv.appendChild(imgElement);

    let nameElement = document.createElement("b");
    nameElement.innerText = info[0];
    nameDiv.appendChild(nameElement);

    let infoElement = document.createElement("p");
    infoElement.innerText = info[1];
    infoDiv.appendChild(infoElement);

//DELETE BUTTON
    let deleteDiv = document.createElement("div");
    deleteDiv.className = "deleteArist";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function() {
        deleteBtn.parentNode.parentNode.parentNode.parentNode.removeChild(outerDiv);
        for (var key in localStorage) {
            localStorage.removeItem(key);
        }
    };
    deleteDiv.appendChild(deleteBtn);
    innerDiv.appendChild(deleteDiv);

    // artist_list.appendChild(outerDiv);
    return li; 
}

loadArtist(); 

// https://randomuser.me/api/portraits/med/men/17.jpg
