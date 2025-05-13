function loadXMLDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const xmlDoc = xhttp.responseXML;
    const cd = xmlDoc.getElementsByTagName("CD");
    renderTable(cd);
  };
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}

function renderTable(cd) {
  let table = "<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < cd.length; i++) {
    const artist = cd[i].getElementsByTagName("ARTIST")[0].textContent;
    const title = cd[i].getElementsByTagName("TITLE")[0].textContent;
    table += `<tr><td>${artist}</td><td>${title}</td></tr>`;
  }
  document.getElementById("demo").innerHTML = table;
}

// Asociar el evento al botón después de que se cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btnLoad");
  button.addEventListener("click", loadXMLDoc);
});
