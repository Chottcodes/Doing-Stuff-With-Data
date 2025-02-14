import { loadTableData } from "./getData.js";
const select = document.getElementById("results-per-page");
const tablebody = document.getElementById("table-body");
const id = document.getElementById("id");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
document.addEventListener("DOMContentLoaded",()=>{
    displayElements(10)
})
document.addEventListener("DOMContentLoaded", () => {
  
  select.addEventListener("change", (event) => {
    const selectedValue = parseInt(event.target.value);
    eraseTableBodyContent();
    displayElements(selectedValue);
  });

 
  id.addEventListener("click", () => {
    const selectedValue = parseInt(select.value);
    eraseTableBodyContent();
    loadDisplayDescending("Id", selectedValue);
  });

  firstName.addEventListener("click", () => {
    const selectedValue = parseInt(select.value);
    eraseTableBodyContent();
    loadDisplayDescending("FirstName", selectedValue);
  });

  lastName.addEventListener("click", () => {
    const selectedValue = parseInt(select.value);
    eraseTableBodyContent();
    loadDisplayDescending("LastName", selectedValue);
  });

  age.addEventListener("click", () => {
    const selectedValue = parseInt(select.value);
    eraseTableBodyContent();
    loadDisplayDescending("Age", selectedValue);
  });
});


const displayElements = async (limitNumber) => {
  const info = await loadTableData();
  let peopelsInfo = [];
  
  
  for (let i = 0; i <= `${limitNumber}` - 1; i++) {
    peopelsInfo.push(info[i]);
  }


  peopelsInfo.forEach((person) => {
    const tr = document.createElement("tr");
    for (let key in person) {
      if (key !== "Email") {
        const td = document.createElement("td");
        td.textContent = person[key];
        tr.appendChild(td);
      }
    }
    tablebody.appendChild(tr);
  });
  console.log(peopelsInfo);
};


const eraseTableBodyContent = () => {
  tablebody.innerHTML = "";
};


const sortDataByAscending = async (category) => {
  const dataToSort = await loadTableData();
  dataToSort.sort((a, b) => {
    const A = a[category];
    const B = b[category];
    if (A < B) return -1;
    if (A > B) return 1;
    return 0;
  });
  return dataToSort;
};


const sortDataByDescending = async (category) => {
  const dataToSort = await loadTableData();
  dataToSort.sort((a, b) => {
    const A = a[category];
    const B = b[category];
    if (A > B) return -1; 
    if (A < B) return 1;
    return 0;
  });
  return dataToSort;
};


const loadDisplayDescending = async (category, number) => {
  const sortedData = await sortDataByDescending(category); 
  displayElements(number, sortedData);  
};
console.log(await sortDataByDescending("FirstName"))

