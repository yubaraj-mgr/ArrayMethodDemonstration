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
  { name: "Sun Maya", netWorth: 900000 },
  { name: "Birkha", netWorth: 700000 },
  { name: "Amon", netWorth: 6000000 },
  { name: "Yubaraj", netWorth: 50000 },
  { name: "Sabina", netWorth: 2000000 },
  { name: "Sneha", netWorth: 900000 },
  { name: "Divya", netWorth: 3000000 },
  { name: "Bibash", netWorth: 300000 },
  { name: "Bikash", netWorth: 3000243 },
  { name: "Anmol", netWorth: 30003240 },
  { name: "Ram", netWorth: 30000340 },
  { name: "Prem", netWorth: 3003240 },
  { name: "Syam", netWorth: 3000234 },
  { name: "Bishal", netWorth: 305400 },
  { name: "Sanjay", netWorth: 3434000 },
  { name: "Mahmud", netWorth: 980000 },
  { name: "Priyanka", netWorth: 370000 },
  { name: "Ashish", netWorth: 36000 },
  { name: "Pradeep", netWorth: 20000 },
  { name: "Keshab", netWorth: 30000 },
  { name: "Himal", netWorth: 70000 },
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

// Start Show Only Millionaires
const onlyMillionaries = () => {
  const onlyMilli = newAddedUser.filter((e) => e > 1000000);
  const listofLi = document.querySelectorAll("#wealth li");
  const listofPersonLi = document.querySelectorAll("#person li");
  for (let i = 0; i < listofLi.length; i++) {
    listofLi[i].innerHTML = `$ ${onlyMilli[i]}`;
    if (onlyMilli[i] == undefined) {
      listofLi[i].innerHTML = ``;
      listofPersonLi[i].innerHTML = "";
    }
  }
};
showOnlyMillionaires.addEventListener("click", onlyMillionaries);
//End Millionaires

//Sort by Richest Start
const sortRichFirst = () => {
  const sort = newAddedUser.sort((a, b) => b - a);
  const listofLi = document.querySelectorAll("#wealth li");
  const listofPersonLi = document.querySelectorAll("#person li");
  for (let i = 0; i < listofLi.length; i++) {
    listofLi[i].innerHTML = `$ ${sort[i]}`;
  }
};

sortByRichest.addEventListener("click", sortRichFirst);
//Sort by Richest End

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
