var item = document.getElementById("item");
var btn = document.getElementById("enter");
var ul = document.querySelector("ul");

function getLength(){
	return item.value.length;
}

function createEle(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(item.value));
		ul.appendChild(li); 
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
