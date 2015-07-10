
var addbtn = document.getElementById("addList");
var mainList = document.getElementById("mainList");

// on click for add list button
addbtn.onclick = function(){

		var headingText = prompt("","Enter Task List Name");
		if(headingText == null)
			return;
	  	var newElement = document.createElement("div");
	  	newElement.className = "clsList";
	 	newElement.id = "list-" + getingId();

 		function getingId(){
  	 	//asigning id
	  	var nMainList = document.getElementById("mainList");
	  	if(nMainList.childNodes.length == 1){
				return "1";
		}
		else{
			var oldMainId = nMainList.lastChild.id.replace("list-","");
			newMainId = parseInt(oldMainId)+1;
				return newMainId;
		}
}


		  //new heading for list
		  var newHeading = document.createElement("p");
		  newHeading.innerHTML = headingText;
		  //new textbox
		  var newTextarea = document.createElement("input");
		  newTextarea.value = "Enter task";
		  newTextarea.id = "textArea-"+getingId();
		  newTextarea.type = "text";
		  newTextarea.onfocus = function (){
			newTextarea.value = "";
}
  	newTextarea.onkeyup = addNewItem;

	//creating cancle button
	var newCancelBtn = document.createElement("input");
	newCancelBtn.value = "x";
	newCancelBtn.id = "btnCancle-"+getingId();
	newCancelBtn.type = "button";
	newCancelBtn.onclick = function () {
		var ind = parseInt((this.parentNode.id.replace("list-","")));
		var a = mainList.childNodes[ind];
		mainList.removeChild(a);
	}
	//creating ul list
	var newList = document.createElement("ul");
	newList.id = "taskList-" + getingId();
	newElement.appendChild(newHeading);
	newElement.appendChild(newCancelBtn);
	newElement.appendChild(newTextarea);

	newElement.appendChild(newList);
	mainList.appendChild(newElement);

};

//creating and add new tasks to the list
function addNewItem(event){
	if(event.which == 13 || event.which == ' '){
		var newId = 1;

		var textBox = document.getElementById("textArea-"+this.parentNode.id.replace("list-",""));
		var nList = document.getElementById("taskList-"+this.parentNode.id.replace("list-",""));
		var nListItem = document.createElement("li");

			//asigning id to list
		if(nList.childNodes.length == 0){
			nListItem.id = "task-1";
		}
		else{
			var oldId = nList.lastChild.id.replace("task-","");
			 newId = parseInt(oldId)+1;
			nListItem.id = "task-"+newId;
		}

		var newItemTask = document.createElement("input");
		newItemTask.type = "checkbox";
		newItemTask.id = "a";
		newItemTask.className = "checkClass";
		newItemTask.onclick = changeClass;

		nListItem.appendChild(newItemTask);
		//creating text element for task
		//var nListItem2 = document.createElement("li");
		var newSpan = document.createElement("span");
		newSpan.id = "txt-"+newId;
		newSpan.className = "notDone";
		newSpan.innerHTML = textBox.value;
		newSpan.onclick  = function(){
			var parent = this.parentNode.parentNode;
			parent.removeChild(this.parentNode);
		}
		nListItem.appendChild(newSpan);

		nList.appendChild(nListItem);
		textBox.select();

	}
}


function changeClass(){
			var txtParentNode = this.parentNode.parentNode;
			var abc = this.parentNode.childNodes[1].className;

			if(this.parentNode.childNodes[1].className   == "notDone"){
				this.parentNode.childNodes[1].className = "done";
			}
			else{
				this.parentNode.childNodes[1].className = "notDone";
			}
			// if(document.getElementById().className   == "notDone"){
			// 	document.getElementById(this.parentNode.childNodes[1].id).className = "done";
			// }
			// else{
			// 	document.getElementById(this.parentNode.childNodes[1].id).className = "notDone";
			// }
		}

		// window.onload = function  () {
		// document.getElementById("mainList").innerHTML = "<div id=\"list-1\" class=\"clsList\"><p>home<\/p><input id=\"btnCancle-1\" type=\"button\" value=\"x\"><\/input><input id=\"textArea-1\" type=\"text\"><\/input><ul id=\"taskList-1\"><li id=\"task-1\"><input id=\"a\" class=\"checkClass\" type=\"checkbox\"><\/input><span id=\"txt-1\" class=\"notDone\">1<\/span><\/li><li id=\"task-2\"><input id=\"a\" class=\"checkClass\" type=\"checkbox\"><\/input><span id=\"txt-2\" class=\"notDone\">2<\/span><\/li><li id=\"task-3\"><input id=\"a\" class=\"checkClass\" type=\"checkbox\"><\/input><span id=\"txt-3\" class=\"notDone\">3<\/span><\/li><\/ul><\/div>";
		// // document.getElementById("mainList").innerHTML = "<div id="list-1" class="clsList"><p>home</p><input id="btnCancle-1" type="button" value="x"></input><input id="textArea-1" type="text"></input><ul id="taskList-1"><li id="task-1"><input id="a" class="checkClass" type="checkbox"></input><span id="txt-1" class="notDone">1</span></li><li id="task-2"><input id="a" class="checkClass" type="checkbox"></input><span id="txt-2" class="notDone">2</span></li><li id="task-3"><input id="a" class="checkClass" type="checkbox"></input><span id="txt-3" class="notDone">3</span></li></ul></div>";
		// }