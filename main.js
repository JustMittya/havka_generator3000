var elements=document.querySelectorAll(".j-show-all");
for (var i=0; i<elements.length; i++) {
    elements[i].addEventListener("click", function () {
        var addClass = 'j-list-wrapper__active';
        var els=document.querySelectorAll(".j-list-wrapper");
        for (var i=0; i<els.length; i++) {
            if(els[i].className.indexOf(addClass)<0) {
                els[i].className += ' ' + addClass;
            }
        }
    })
}
