var item = document.getElementById("item");
var btn = document.getElementById("addProductBtn");
var tbody = document.querySelector("tbody");

function getLength(){
	return item.value.length;
}

function createEle(){
	var tr = document.createElement("tr");
	
	var td1 = document.createElement("td");
	td1.appendChild(document.createTextNode(item.value));
	tr.appendChild(td1)
	
	var td2 = document.createElement("td");
	td2.appendChild(document.createTextNode("Remove"));
	tr.appendChild(td2)
	
	td2.onclick = function () {
	    this.parentElement.remove(this);
	};
	
	tbody.appendChild(tr); 
	item.value = "";
}

function addItemByMouseClick(){
	if(getLength() > 0)
	{
		createEle();
	}
}

function addItemByKeyPress(event){
	if(getLength() > 0 && event.keyCode === 13)
	{
		createEle();
	}
}

btn.addEventListener("click", addItemByMouseClick);
item.addEventListener("keypress", addItemByKeyPress);
