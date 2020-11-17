console.log("From fore ground")
function getImages(){
    images = document.getElementsByTagName("img");
    return images;
}
function quarter() {
    window.resizeTo(
      window.screen.availWidth / 9,
      window.screen.availHeight / 9
    );
  }
function feedKiller(){
    quarter();
    images = getImages();
    for(var i = 0;i<images.length; i++){
        images[i].src = ""
    }
}
feedKiller();