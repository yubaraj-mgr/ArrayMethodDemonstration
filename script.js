const addUser = document.querySelector("#addUser");
const doubleMoney = document.querySelector("#double");
const showOnlyMillionaires = document.querySelector("#onlyM");
const sortByRichest = document.querySelector("#sortR");
const addAllMoney = document.querySelector("#addAll");
const reset = document.querySelector("#reset");
const person = document.querySelector("#person");
const wealth = document.querySelector("#wealth");
const wrapper = document.querySelector(".wrapper");
const details = document.querySelector(".details");

const user = [
  { name: "Sun Maya", netWorth: 9000000 },
  { name: "Birkha", netWorth: 7000000 },
  { name: "Amon", netWorth: 6000000 },
  { name: "Yubaraj", netWorth: 3000000 },
  { name: "Sabina", netWorth: 700000 },
  { name: "Sneha", netWorth: 900000 },
  { name: "Divya", netWorth: 3000000 },
  { name: "Bibash", netWorth: 300000 },
];

let newAddedUser = [];
//Add User Start
const addUserObject = () => {
  let rNum = user[Math.floor(Math.random() * user.length)]; // This will make sure name and newWorth are matched
  let name = document.createElement("li");
  let netWorth = document.createElement("li");
  name.append(document.createTextNode(rNum.name));
  netWorth.append(document.createTextNode(`$ ${rNum.netWorth}`));
  person.append(name);
  wealth.append(netWorth);
  newAddedUser.push(rNum.netWorth);
};

addUser.addEventListener("click", addUserObject);
// Add User Finish

// Start Double User Money
const doubleUserMoney = () => {
  const double = newAddedUser.map((e) => e * 2);
  const listofLi = document.querySelectorAll("#wealth li");
  for (let i = 0; i < listofLi.length; i++) {
    listofLi[i].innerHTML = `$ ${double[i]}`;
  }
};

doubleMoney.addEventListener("click", doubleUserMoney);
// Finish Double User Money

//Start Add All Wealth
const totalSum = () => {
  const sum = newAddedUser.reduce((acc, value) => acc + value, 0);
  let TotalSum = document.createElement("h1");
  TotalSum.classList.add("sum");
  TotalSum.append(document.createTextNode(`Total Sum = ${sum}`));
  details.append(TotalSum);
};

addAllMoney.addEventListener("click", totalSum);
// Finish All Wealth

//Reset
const resetData = () => document.location.reload();

reset.addEventListener("click", resetData);
