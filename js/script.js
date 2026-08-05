console.log("Script berhasil terhubung!");
const sections = document.querySelectorAll(".skill, .pembelajaran");

sections.forEach(section => {

    const buttons = section.querySelectorAll(".tab-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // Menghapus tombol aktif
            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Mengaktifkan tombol yang diklik
            button.classList.add("active");

            // Menyembunyikan semua isi tab
            section.querySelectorAll(".skill-content, .tab-content").forEach(content => {
                content.classList.remove("active");
            });

            // Menampilkan isi sesuai tombol
            const target = button.getAttribute("data-target");
            const content = section.querySelector("#" + target);

            if (content) {
                content.classList.add("active");
            }

        });

    });
});



const gallery = document.querySelectorAll(".gallery img");

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popup-img");

const close = document.getElementById("close");

gallery.forEach(img => {

    img.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImg.src = img.src;

    });

});

close.addEventListener("click", () => {

    popup.style.display = "none";

});

popup.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

});