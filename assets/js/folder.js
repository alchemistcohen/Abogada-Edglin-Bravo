document.addEventListener("DOMContentLoaded", function () {
	const folder = document.querySelector(".folder");

	folder.addEventListener("click", () => {
		folder.classList.toggle("open");
	});
});
