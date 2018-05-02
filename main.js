function addHandlerBySelector (selector, type, handler){
    var elements=document.querySelectorAll(selector);
    for (var i=0; i<elements.length; i++) {
        elements[i].addEventListener(type, handler)
    }
}
function showAll() {
    var addClass = 'j-list-wrapper__active';
    var els=document.querySelectorAll(".j-list-wrapper");
    for (var i=0; i<els.length; i++) {
        if(els[i].className.indexOf(addClass)<0) {
            els[i].className += ' ' + addClass;
        }
    }
}
function listCheckboxChange() {
    var
        li = this.parentNode;

    list.setActiveStatus(
        li.getAttribute("data-index"),
        this.checked
    )
}
function run () {
    //  console.log("run");
    var activeElements = list.getActiveElements();
    if (activeElements.length > 0) {
        var randomNumber = Math.random() * (activeElements.length - 1);
        var randomIndex = Math.round(randomNumber);
        alert("сегодня будем хавать " + activeElements[randomIndex].name)
    }
    else {
        alert("Ничего не выбрано")
    }
}
addHandlerBySelector(".j-show-all", "click", showAll);
addHandlerBySelector(".j-run", "click", run);

list.onAdd=function(index, element) {
    var
        listWrappersList = document.querySelectorAll(".j-list-wrapper .j-list-wrapper_list");

    for (var i=0; i<listWrappersList.length; i++) {
        var
            list=listWrappersList[i],
            li=document.createElement("li");
        li.setAttribute("data-index", index);

        var
            checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.checked=element.active;
        checkbox.addEventListener('change', listCheckboxChange)

        li.appendChild(checkbox);

        var
            span=document.createElement("span");
        span.innerHTML=element.name;
        li.appendChild(span);

        list.appendChild(li)
    }
}


list.add ("борщ")
list.add ("грибной")
list.add ("с лапшой")
