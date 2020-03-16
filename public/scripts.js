var shortenButton = document.querySelector("input[type=submit]");
var form = document.querySelector("form");
var urlLink = "";
var shortenUrls = [];
var urls = [];

// shortenButton.addEventListener("click", function(){
//   urlLink = document.querySelector("input[type=text]").value;
//   var xhttps = new XMLHttpRequest();
//   shortenUrl(xhttps, urlLink);
//   // urls.push(urlLink);
//   // var li = document.querySelector("#shortenIt-list");
//   // li.innerHTML = urls[0];
//   console.log(urlLink);
// });

form.addEventListener("submit", function(event) {
  console.log(event);
  urlLink = document.querySelector("input[type=text]").value;
  var xhttps = new XMLHttpRequest();
  shortenUrl(xhttps, urlLink);
});

function shortenUrl(xhttp, url) {
  url.push(url);
  // setup xhttp
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.sttue == 200) {
      console.log("this.responseText");
    }
  };
  server = "https://rel.ink/api/links/"
  xhttp.open("Post", server, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // xhttp.send("fname=Henry&lname=Ford");
  xhttp.send("url=" + url);

}

var copyButtons = document.querySelectorAll(".copyButton");
for (var i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function(){
    var prev = this.previousElementSibling;
    prev.select();
    prev.setSelectionRange(0, 99999);
    document.execCommand("copy");
    this.innerHTML = "copied!";
    for (var i = 0; i < copyButtons.length ; i++) {
      if (this != copyButtons[i]) {
        copyButtons[i].innerHTML = "copy";
      }
    }

    // alert(prev.textContent);
  });
}
