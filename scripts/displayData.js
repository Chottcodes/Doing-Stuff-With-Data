import { loadTableData } from "./getData.js";
const select = document.getElementById("results-per-page");
const tablebody = document.getElementById("table-body");
const id = document.getElementById("id");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
let peopelsInfo = [];

let input;

document.addEventListener("DOMContentLoaded", () => {
  displayElements(loadTableData(), 10);
});

select.addEventListener("change", (event) => {
  const selectedValue = parseInt(event.target.value);
  input = selectedValue;
  peopelsInfo = [];
  displayElements(loadTableData(), selectedValue);
  eraseTableBodyContent();
});
id.addEventListener("dblclick", () => {
  dataDescending("Id", peopelsInfo.length);
  eraseTableBodyContent();

  peopelsInfo = [];
});
id.addEventListener("click", () => {
  dataAscending("Id", peopelsInfo.length);
  eraseTableBodyContent();
  console.log(peopelsInfo);
  peopelsInfo = [];
});
firstName.addEventListener("click", () => {
  dataAscending("FirstName", peopelsInfo.length);
  eraseTableBodyContent();
  peopelsInfo = [];
});
firstName.addEventListener("dblclick", () => {
  dataDescending("FirstName", peopelsInfo.length);
  eraseTableBodyContent();
  peopelsInfo = [];
});
lastName.addEventListener("click", () => {
  dataAscending("LastName", peopelsInfo.length);
  eraseTableBodyContent();
  peopelsInfo = [];
});
lastName.addEventListener("dblclick", () => {
  dataDescending("LastName", peopelsInfo.length);
  eraseTableBodyContent();
  peopelsInfo = [];
});
age.addEventListener("click", () => {
  dataAscending("Age", peopelsInfo.length);
  eraseTableBodyContent();
  peopelsInfo = [];
});
age.addEventListener("dblclick", () => {
  dataDescending("Age", peopelsInfo.length);
  eraseTableBodyContent();
  peopelsInfo = [];
});

const displayElements = async (data, limitNumber) => {
  const info = await data;

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
};

const eraseTableBodyContent = () => {
  tablebody.innerHTML = "";
};

const sortDataByAscending = (data, category) => {
  data.sort((a, b) => {
    const A = a[category];
    const B = b[category];
    if (A < B) return -1;
    if (A > B) return 1;
    return 0;
  });
  return data;
};

const sortDataByDescending = (data, category) => {
  data.sort((a, b) => {
    const A = a[category];
    const B = b[category];
    if (A > B) return -1;
    if (A < B) return 1;
    return 0;
  });
  return data;
};
const dataDescending = (catergory, input) => {
  const sortedData = sortDataByDescending(peopelsInfo, catergory);
  displayElements(sortedData, input);
  return sortedData;
};
const dataAscending = (catergory, input) => {
  const sortedData = sortDataByAscending(peopelsInfo, catergory);
  displayElements(sortedData, input);
  return sortedData;
};
