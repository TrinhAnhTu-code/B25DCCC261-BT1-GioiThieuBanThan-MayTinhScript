const button = document.getElementById("doiMau");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

const now = new Date();
const hour = now.getHours();

let loiChao = "";

if (hour < 12) {
    loiChao = "Chào buổi sáng! Chúc bạn một ngày tốt lành.";
} else if (hour < 18) {
    loiChao = "Chào buổi chiều! Chúc bạn học tập hiệu quả.";
} else {
    loiChao = "Chào buổi tối! Chúc bạn có một buổi tối vui vẻ.";
}

document.getElementById("loichao").innerText = loiChao;