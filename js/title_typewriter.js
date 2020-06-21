var i = 0;
var text_content = ">vs_slavchev's cyberspace";

function type_title_animation() {
  if (i < text_content.length) {
    document.getElementById("title").innerHTML += text_content.charAt(i);
    i++;
    var delay = 50 + 100 * Math.random(5);
    setTimeout(type_title_animation, delay);
  }
}

