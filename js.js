let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.getElementById("demo").innerHTML = Math.floor(Math.random() * 6) +1;
})