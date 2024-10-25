function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openModal(title, details) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-details").innerText = details;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
};
