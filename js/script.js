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

/* ============================
   LANGUAGE SWITCHER
============================ */

const btnID = document.getElementById("btn-id");
const btnEN = document.getElementById("btn-en");

const translatableElements = document.querySelectorAll("[data-id][data-en]");

function changeLanguage(language) {

    translatableElements.forEach(element => {

        if (language === "id") {
            element.textContent = element.getAttribute("data-id");
        } else {
            element.textContent = element.getAttribute("data-en");
        }

    });

    // Tombol bahasa aktif
    if (btnID && btnEN) {

        btnID.classList.remove("active");
        btnEN.classList.remove("active");

        if (language === "id") {
            btnID.classList.add("active");
        } else {
            btnEN.classList.add("active");
        }

    }

}


// Tombol Indonesia
if (btnID) {
    btnID.addEventListener("click", () => {
        changeLanguage("id");
    });
}


// Tombol English
if (btnEN) {
    btnEN.addEventListener("click", () => {
        changeLanguage("en");
    });
}

/* ============================
   CULTURAL CONTEXT TOGGLE
============================ */

const cultureButton = document.getElementById("cultureButton");
const cultureDetails = document.getElementById("cultureDetails");
const cultureButtonText = document.getElementById("cultureButtonText");

if (cultureButton && cultureDetails && cultureButtonText) {

    cultureButton.addEventListener("click", () => {

        cultureDetails.classList.toggle("show");

        const isOpen = cultureDetails.classList.contains("show");

        if (isOpen) {

            cultureButtonText.setAttribute(
                "data-id",
                "Tutup Konteks Budaya ↑"
            );

            cultureButtonText.setAttribute(
                "data-en",
                "Close Cultural Context ↑"
            );

        } else {

            cultureButtonText.setAttribute(
                "data-id",
                "Jelajahi Konteks Budaya →"
            );

            cultureButtonText.setAttribute(
                "data-en",
                "Explore Cultural Context →"
            );

        }

        // Mempertahankan bahasa yang sedang aktif
        const currentLanguage =
            localStorage.getItem("language") || "id";

        cultureButtonText.textContent =
            currentLanguage === "en"
                ? cultureButtonText.getAttribute("data-en")
                : cultureButtonText.getAttribute("data-id");

    });

}
/* ============================
   CERTIFICATE POPUP
============================ */

const certificateItems = document.querySelectorAll(".certificate-item");

const certificatePopup =
    document.getElementById("certificate-popup");

const certificatePopupImage =
    document.getElementById("certificate-popup-image");

const certificateClose =
    document.getElementById("certificate-close");


/* OPEN CERTIFICATE */

certificateItems.forEach(item => {

    const image = item.querySelector("img");

    image.addEventListener("click", () => {

        certificatePopupImage.src = image.src;

        certificatePopupImage.alt = image.alt;

        certificatePopup.classList.add("show");

        document.body.classList.add("popup-open");

    });

});


/* CLOSE BUTTON */

if (certificateClose) {

    certificateClose.addEventListener("click", () => {

        closeCertificatePopup();

    });

}


/* CLICK OUTSIDE IMAGE */

if (certificatePopup) {

    certificatePopup.addEventListener("click", (event) => {

        if (event.target === certificatePopup) {

            closeCertificatePopup();

        }

    });

}


/* ESC KEY */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeCertificatePopup();

    }

});


/* CLOSE FUNCTION */

function closeCertificatePopup() {

    if (!certificatePopup) return;

    certificatePopup.classList.remove("show");

    document.body.classList.remove("popup-open");

    certificatePopupImage.src = "";

}