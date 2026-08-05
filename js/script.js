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



/* ============================
   HAMBURGER MENU
============================ */


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


if(menuToggle && navMenu){

    menuToggle.addEventListener("click", ()=>{

        navMenu.classList.toggle("active");

    });


    // Tutup menu setelah klik link

    const navLinks = document.querySelectorAll("#nav-menu a");


    navLinks.forEach(link=>{

        link.addEventListener("click", ()=>{

            navMenu.classList.remove("active");

        });

    });

}