const O_tab1 = document.getElementById("tab-1");
const O_tab2 = document.getElementById("tab-2");
const O_tabpanel1 = document.getElementById("tabpanel-1");
const O_tabpanel2 = document.getElementById("tabpanel-2");

O_tab1.addEventListener("click", (event) => {
    showTab1();
});
O_tab2.addEventListener("click", (event) => {
    showTab2();
});

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        showTab1();
    }
    else if (event.key === "ArrowRight") {
        showTab2();
    }
});

function showTab1() {
    O_tabpanel1.classList.remove("isHidden");
    O_tabpanel2.classList.add("isHidden");
    O_tab1.classList.add("isActive");
    O_tab2.classList.remove("isActive");
}

function showTab2() {
    O_tabpanel1.classList.add("isHidden");
    O_tabpanel2.classList.remove("isHidden");
    O_tab1.classList.remove("isActive");
    O_tab2.classList.add("isActive");
}