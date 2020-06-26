function openPage(divID) {
    var pages = document.getElementById('page_container').children;

    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById(divID).style.display = "block";
    sidebar_close();
}

function open_blog_post(id) {
    var post_content = document.getElementById(id);
    if (post_content.className.indexOf("w3-show") == -1) {
        post_content.className += " w3-show";
    } else { 
        post_content.className = post_content.className.replace(" w3-show", "");
    }
  }