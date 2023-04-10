document.querySelector("h1").style.backgroundColor = "green";

document.querySelector("h1").style.padding = "20px";

let sections = document.querySelectorAll("section");

sections[0].style.backgroundColor = "#FF9F84";
sections[1].style.backgroundColor = "#F9DB5E";

let cabecalhos_h3_esq = document.querySelectorAll("section.emergency-tasks h3");

for (let cabecalho of cabecalhos_h3_esq)
  cabecalho.style.backgroundColor = "#A500F3";

let cabecalhos_h3_dir = document.querySelectorAll(
  "section.no-emergency-tasks h3"
);

for (let cabecalho of cabecalhos_h3_dir)
  cabecalho.style.backgroundColor = "black";
