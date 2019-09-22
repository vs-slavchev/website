function openPage(divID) {
    var pages = document.getElementById('page_container').children;

    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById(divID).style.display = "block";
}