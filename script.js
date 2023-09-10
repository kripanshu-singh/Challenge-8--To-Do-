// localStorage.clear();
let form = document.getElementById("form");
let taskbar = document.querySelector(".items");
let task = JSON.parse(localStorage.getItem("Tasks")) ?? [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = e.target.task.value;
  if (value === "") {
    alert;
  } else {
    task.unshift({
      value: value,
      isChecked: false,
      hour:
        current.getHours() >= 12 ? current.getHours() - 12 : current.getHours(),
      minute: current.getMinutes(),
    });
    e.target.reset();
    localStorage.setItem("Tasks", JSON.stringify(task));
    e.preventDefault();
    displayTask();
  }
});

let displayTask = () => {
  let final = "";
  task.forEach((element, i) => {
    let checkedMessage = element.isChecked
      ? "Mark&nbsp;as&nbsp;uncheck"
      : "Mark&nbsp;as&nbsp;check";
    final += `          
          <div class="tasks" id="tasks">

            <div class ="firstChild" 
            title = ${checkedMessage}
            onclick="strikeOut(${i},${element.isChecked})"
            >
              <span class="timeContain">
                ${element.hour}:${element.minute} 
              </span>
              <span class="content"
                style=text-decoration:${
                  element.isChecked ? "line-through" : ""
                };>
                ${element.value}
              </span>
            </div>
            
            <div class="secondChild" title="Delete">
              <span class="delete">
              <img src="Asset/delete.png" class="deletepng" alt="" onclick="remove(${i})" />
              </span>
            </div>

          </div>`;
  });
  if (final === "") {
    taskbar.innerHTML = `
    <div class="emptyDiv">
      <span class="emptySpan"> Your Task list is Empty </span>
    </div>`;
  } else {
    taskbar.innerHTML = final;
  }
};
let remove = (i) => {
  task.splice(i, 1);
  localStorage.setItem("Tasks", JSON.stringify(task));
  displayTask();
};
let strikeOut = (i, checkedStatus) => {
  let temp = task[i];
  if (checkedStatus) {
    temp.isChecked = false;
  } else {
    temp.isChecked = true;
  }
  task[i] = temp;
  localStorage.setItem("Tasks", JSON.stringify(task));
  displayTask();
};

let current = new Date();
let hour = current.getHours();
let minute = current.getMinutes();
let date = current.getDate();
let month = current.getMonth();
let year = current.getFullYear();
let day = current.getDay();
let moth_name = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let dayname = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currmonth = moth_name[month];
let currday = dayname[day];
if (hour >= 12) {
  hour = hour - 12;
}
let Datecontain = document.querySelector(".DateandAddContainer");
Datecontain.innerHTML = `
<div class="date" id="date">${date}</div>
<div class="YearandMonth" id="YearandMonth">${currmonth} ${year}<div>
<div class="DayName" id="DayName">${currday}</div>
`;

displayTask();
