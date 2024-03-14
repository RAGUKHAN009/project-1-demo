document.addEventListener("DOMContentLoaded", function () {
    var listItems = document.querySelectorAll(".CartsNavList li");
    var contents = document.querySelectorAll(".content");

    listItems.forEach(function (item) {
        item.addEventListener("click", function () {
            var targetId = this.getAttribute("data-target");

            listItems.forEach(function (li) {
                li.classList.remove("blue");
            });

            this.classList.add("blue");

            contents.forEach(function (content) {
                content.classList.remove("active");
            });

            document.getElementById(targetId).classList.add("active");
        });
    });
});



const searchInput = document.getElementById('searchInput');
const inventoryList = document.getElementById('myList');
const items = inventoryList.getElementsByTagName('li');

searchInput.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();

    Array.from(items).forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchText)) {
            item.classList.add('activ');
        } else {
            item.classList.remove('activ');
        }
    });
    setTimeout(() => {
        Array.from(items).forEach(item => {
            item.classList.remove('activ');
        });
    }, 1000);
});


////////////////

function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const numDays = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const calendarBody = document.getElementById("calendarBody");
    calendarBody.innerHTML = "";

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startingDay) {
                const cell = document.createElement("td");
                row.appendChild(cell);
            } else if (date > numDays) {
                break;
            } else {
                const cell = document.createElement("td");
                cell.textContent = date;
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }

    document.getElementById("monthYear").textContent = `${months[month]} ${year}`;
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
}

function changeTimezone(timezone) {
    const options = { timeZone: timezone, month: 'long', year: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);
    const [month, year] = currentDate.split(' ');
    currentMonth = months.indexOf(month);
    currentYear = parseInt(year);
    generateCalendar(currentYear, currentMonth);
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = (new Date()).getMonth();
let currentYear = (new Date()).getFullYear();

generateCalendar(currentYear, currentMonth);