const O_tab1 = document.getElementById("tab-1");
const O_tab2 = document.getElementById("tab-2");
const O_tabpanel1 = document.getElementById("tabpanel-1");
const O_tabpanel2 = document.getElementById("tabpanel-2");

O_tab1.addEventListener("click", (event) => {
    O_tabpanel1.classList.remove("isHidden");
    O_tabpanel2.classList.add("isHidden");
});
O_tab2.addEventListener("click", (event) => {
    O_tabpanel1.classList.add("isHidden");
    O_tabpanel2.classList.remove("isHidden");
});