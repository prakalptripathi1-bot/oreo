const hearts = document.querySelector(".hearts");

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=Math.random()*20+18+"px";

heart.style.animation=`float ${Math.random()*3+5}s linear forwards`;

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,500);

document.querySelector("button")?.addEventListener("click",function(e){

e.preventDefault();

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="page2.html";

},8000);

});const noBtn = document.getElementById("noBtn");

if (noBtn) {

    noBtn.addEventListener("mouseover", () => {

        const x = Math.random() * (window.innerWidth - 150);

        const y = Math.random() * (window.innerHeight - 100);

        noBtn.style.position = "fixed";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

    });

}/* ===========================
   TYPEWRITER EFFECT
=========================== */

const typeBox = document.querySelector("#typewriter");

if (typeBox) {

    const original = typeBox.innerHTML;

    typeBox.innerHTML = "";

    let i = 0;

    function typeLetter() {

        if (i < original.length) {

            let ch = original.charAt(i);

if (ch === "§") {
    typeBox.innerHTML += "<br><br>";
} else {
    typeBox.innerHTML += ch;
}
            i++;

            setTimeout(typeLetter, 22);

        }

    }

    typeLetter();

}const finalBtn = document.getElementById("finalBtn");

if(finalBtn){

    finalBtn.onclick = function(){

        document.getElementById("endingScreen").style.display="flex";

    }

}