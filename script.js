let tableEl = document.querySelector("#myTable");
function createTable() {
  tableEl.innerHTML="";
  let rn = Number(prompt("Input number of rows"));
  let cn = Number(prompt("Input number of columns"));

  if (isNaN(rn) || isNaN(cn)) {
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("Enter valid positive numbers");
    return;
  }

  let tableBodyEl = document.createElement("tbody");

  for (let i = 0; i < rn; i++) {
    let tableRow = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      let tableData = document.createElement("td");
      tableData.textContent = `Row-${i} Column-${j}`;
      tableRow.append(tableData);
    }
    tableBodyEl.append(tableRow);
  }

  tableEl.append(tableBodyEl);
}
