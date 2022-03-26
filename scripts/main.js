let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/聖人/エレイン-1.png') {
      myImage.setAttribute('src','img/聖人/エレイン-2.png');
    } else if(mySrc === 'img/聖人/エレイン-2.png') {
      myImage.setAttribute('src','img/聖人/エレイン-1.png');
    }
}