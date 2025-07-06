const images = [
  "./img/t1.jpg",
  "./img/t2.jpg",
  "./img/t3.jpg",
  "./img/t4.jpg",
  "./img/t5.jpg",
  "./img/t6.jpg",
  "./img/t7.jpg",
  "./img/t8.jpg",
  "./img/t9.jpg",
  "./img/t10.jpg",
  "./img/t11.jpg",
  "./img/t12.jpg",
  "./img/t13.jpg",
  "./img/t14.jpg",
  "./img/t15.jpg",
];

const texts = [
  "Mehr Tee, weniger Drama.",
  "Ein Schluck Morgenruhe, bevor der Tag beginnt.",
  "Manchmal braucht es nur Tee und Zeit.",
  "Blumen am Rand, Wärme in der Hand.",
  "Herbsttage schmecken nach Gewürztee und Stille.",
  "Wintermorgen. Leise. Klar. Einfach sein.",
  "So leicht wie eine Blüte auf dem Wasser.",
  "Erde. Tee und Nüsse. Alles verbunden.",
  "Zimt, Tee und ein Hauch von Weihnachten.",
  "Montagmorgen. Stärker als jeder Kaffee.",
  "Goldene Ruhe in klarer Glastasse.",
  "Ein Moment für dich. Nur Tee und Wärme.",
  "Stille genießen, Tee trinken und weitermachen.",
  "Tee statt Worte. Reicht manchmal.",
  "Kurz durchatmen, lang Tee trinken.",
];

function renderImages() {
  let imageContainerVar = document.getElementById("imageContainer");
  imageContainerVar.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    imageContainerVar.innerHTML += `<img onclick="showOverlay(${i})" src="${images[i]}" alt="">`;
  }
}

function showOverlay(i) {
  let mainContainerVar = document.getElementById("mainContainer");

  mainContainerVar.innerHTML += `
      <div id="overlayContainer" class="overlay">
        <img onclick="closeOverlay()" class="closeButton" src="./img/close-button.png" alt="">
        <img id="overlayImage" src="${images[i]}" alt="" />
        <p>${texts[i]}</p>
        <img onclick="nextImage(${i})" class="nextButton" id="nextButton" src="./img/next-button.png" alt="">
        <img onclick="prevImage(${i})" class="prevButton" id="prevButton" src="./img/prev-button.png" alt="">
      </div>;
    `;
}

function closeOverlay() {
  document.getElementById("overlayContainer").classList.add("d_none");
  document.getElementById(
    "mainContainer"
  ).innerHTML = `<h2>My fancy teacup collection</h2>
      <div id="imageContainer"></div>`;
  renderImages();
}

function nextImage(i) {
  i = i + 1;
  if (i == images.length) {
    i = 0;
  }

  document.getElementById("overlayContainer").innerHTML = `
        <img onclick="closeOverlay()" class="closeButton" src="./img/close-button.png" alt="">
        <img id="overlayImage" src="${images[i]}" alt="" />
        <p>${texts[i]}</p>
        <img onclick="nextImage(${i})" class="nextButton" id="nextButton" src="./img/next-button.png" alt="">
        <img onclick="prevImage(${i})" class="prevButton" id="prevButton" src="./img/prev-button.png" alt="">
      `;
}

function prevImage(i) {
  i = i - 1;
  if (i == 0) {
    i = images.length - 1;
  }
  document.getElementById("overlayContainer").innerHTML = `
        <img onclick="closeOverlay()" class="closeButton" src="./img/close-button.png" alt="">
        <img id="overlayImage" src="${images[i]}" alt="" />
        <p>${texts[i]}</p>
        <img onclick="nextImage(${i})" class="nextButton" id="nextButton" src="./img/next-button.png" alt="">
        <img onclick="prevImage(${i})" class="prevButton" id="prevButton" src="./img/prev-button.png" alt="">
      `;
  console.log(i);
}
