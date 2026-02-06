function loadComponent(selector, file) {
    const element = document.querySelector(selector);
    if (element) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
            });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent("#footer", "footer.html");
    loadComponent("#footer2", "footer2.html");
});