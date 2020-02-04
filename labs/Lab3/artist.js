//alert( 'Hello, world!' );

//function display() {
//    
//  var e = document.getElementById("entry-form");
//       if(e.style.display == 'block')
//          e.style.display = 'none';
//       else
//          e.style.display = 'block';
//}

function toggle(){
  var entry = document.getElementById("entry-form");
 entry.classList.toggle('hide'); 
}

//function add() {
//  var node = document.createElement("LI");
//  var textnode = document.createTextNode("Water");
//  node.appendChild(textnode);
//  document.getElementById("myList").appendChild(node);
//}


function createInput() {
	const input_name = document.createElement('input')
	input_name.className = 'input_name'
	input_name.type = 'text'
	input_name.maxLength = 40
	input_name.placeholder = 'Artist Name'

	const input_desc = document.createElement('input')
	input_desc.className = 'input_desc'
	input_desc.type = 'text'
	input_desc.maxLength = 40
	input_desc.placeholder = 'About artist'

	const input_imgURL = document.createElement('input')
	input_imgURL.className = 'input_imgURL'
	input_imgURL.type = 'text'
	input_imgURL.placeholder = 'Image url'

	document.querySelector(".entryform").appendChild(input_name)
	document.querySelector('.entryform').appendChild(input_desc)
	document.querySelector('.entryform').appendChild(input_imgURL)

	const button_add = document.createElement('button')
	button_add.className = 'button_add'
	button_add.textContent = 'Add'
	button_add.onclick = addInputs
	document.querySelector('.inputContainer').appendChild(button_add)
}

function addInputs() {
	const arist_name = document.querySelector('.name-entry').value
	const arist_desc = document.querySelector('.about-entry').value
	const img_url = document.querySelector('.image-entry').value

	if (arist_name !== '' && arist_desc !== '' && img_url !== '') {
		addArtist(arist_name, arist_desc, img_url)
	}

}

function addArtist(name, description, picURL) {
    
	const div_profileContainer = document.createElement('div')
	div_profileContainer.className = 'profileContainer'

	const img = document.createElement('img')
	img.src = picURL
	img.alt = 'No Img'
	div_profileContainer.appendChild(img)
//
//	const div_profileTextContainer = document.createElement('div')
//	div_profileTextContainer.className = 'profileTextContainer'
//	div_profileContainer.appendChild(div_profileTextContainer)
//
//	const h3_name = document.createElement('h3')
//	h3_name.textContent = artist_name.value
//	div_profileTextContainer.appendChild(h3_name)
//
//	const p_description = document.createElement('p')
//	p_description.textContent = description
//	div_profileTextContainer.appendChild(p_description)
//
	const div_buttonContainer = document.createElement('div')
	div_buttonContainer.className = 'buttonContainer'
	div_profileContainer.appendChild(div_buttonContainer)

	const btn_delete = document.createElement('button')
	btn_delete.textContent = 'Delete'
	btn_delete.addEventListener('click', () => {
		btn_delete.parentNode.parentNode.parentNode.removeChild(btn_delete.parentNode.parentNode)
	})
	div_buttonContainer.appendChild(btn_delete)

	document.querySelector('.flexbox').appendChild(div_profileContainer)
}
