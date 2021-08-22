const tableBody = document.getElementById("tableBody");

const submit = document.getElementById("submitBtn");

const artistField = document.getElementById("artistField");

const albumField = document.getElementById("albumField");

const yearField = document.getElementById("yearField");

const mediumField = document.getElementById("mediumField");

const table = document.getElementById("collectionTable");

const modal = document.getElementById("modalDiv");

let i = 0;

let x = 0;

class Item {
  constructor(artist, album, year, medium) {
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.medium = medium;
  }
}


const newItem = () => {
    let entry = new Item(
      artistField.value,
      albumField.value,
      yearField.value,
      mediumField.value
    );


let row = table.insertRow(1);

row.setAttribute("data-row", i++);

backgroundPick(row);

let cell0 = row.insertCell(0);

let cell1 = row.insertCell(1);

let cell2 = row.insertCell(2);

let cell3 = row.insertCell(3);

cell0.innerHTML = entry.artist;
cell1.innerHTML = entry.album;
cell2.innerHTML = entry.year;
cell3.innerHTML = entry.medium;


let deletebtn = document.createElement("button");
deletebtn.id = "deletebutton";
deletebtn.innerHTML = "<i class='bi bi-x-lg'></i>";
deletebtn.style.border = "hidden";
deletebtn.setAttribute("data-delete", i);
row.appendChild(deletebtn);



artistField.value = "";
albumField.value = "";
yearField.value = "";

deletebtn.addEventListener("click", deleteItem);
  };

const deleteItem = (e) => {

let place = e.target.parentElement.parentElement.rowIndex;

table.deleteRow(place);

}

const backgroundPick = (row) => {
let colors = ["#ff7675", "#a29bfe", "#00cec9", "#00b894", "#fab1a0", "#0984e3"];

x++;

row.style.backgroundColor = `${colors[x]}`;
}




submit.addEventListener("click", newItem);
