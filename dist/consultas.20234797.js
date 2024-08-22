const wrapper = document.querySelector(".wrapper");
selectBtn = wrapper.querySelector(".select-btn");
searchInp = wrapper.querySelector("input");
options = wrapper.querySelector(".options");
let countries = [
    "holaaaa",
    "adios",
    "chao",
    "ayer",
    "hoy"
];
function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach((country)=>{
        let inSelected = country == selectedCountry ? "selected" : "";
        let li = '<li onclick = "updateName(this)" class="${isSelected}">${country}</li>';
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();
function updateName(selectedLi) {
    searchInp.value = "";
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

//# sourceMappingURL=consultas.20234797.js.map
