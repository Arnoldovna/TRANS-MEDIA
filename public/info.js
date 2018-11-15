document.getElementById("close").addEventListener("click", function() {
    document.querySelector(".popUp-modal").style.visibility = "hidden";
});

document.getElementById("clickInfo").addEventListener("click", function() {
    console.log("hee2");

    document.querySelector(".popUp-modal").style.backgroundColor = "blue";
    document.querySelector(".popUp-modal").style.transition =
        "background-color 0.4s ease-in-out";
    document.querySelector(".popUp-modal").style.visibility = "visible";
    document.querySelector("#info").style.transform = "scale(1.2)";
});
