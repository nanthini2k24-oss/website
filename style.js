let currentMsg = null;  // store current message

document.addEventListener("DOMContentLoaded", function () {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  const messages = [
    "Yes click pannu chlm 😭",
    "En thangoo la yes click pannu 🥺",
    "Papa paavom la yes click pannu 💕",
    "Yes click pannatha kiss tharuvae 😘"
    
  ];

  yesBtn.addEventListener("click", function () {
    window.location.href = "indexx.html";
  });

  noBtn.addEventListener("mouseover", function () {

    // Remove previous message
    if (currentMsg) {
      currentMsg.remove();
    }

    // Move No button
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Create new message
    const msg = document.createElement("div");
    msg.classList.add("floating-msg");

    const randomText = messages[Math.floor(Math.random() * messages.length)];
    msg.innerText = randomText;

    msg.style.left = x + "px";
    msg.style.top = (y - 30) + "px";

    document.body.appendChild(msg);

    currentMsg = msg; // store current message

  });

});
