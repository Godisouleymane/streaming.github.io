function changeColor(){
    var color = document.body;
    color.classList.toggle("dark-mode");
};


function change(){
    i = document.formlist.liste.selectedIndex;
    if (i == 0) return;
    url = document.formlist.liste.options[i].value;
    parent.location.href = url;
}