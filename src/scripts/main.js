const btn = document.getElementById("themeButton");
const btnIcon = document.getElementById("iconTest");
const container = document.querySelector("#theme");
    btn.addEventListener("click", function onClick(event) {
	btnIcon.classList.toggle("fa-moon");
	btnIcon.classList.toggle("fa-sun");
    container.classList.toggle('lightTheme');
    container.classList.toggle('darkTheme');

});