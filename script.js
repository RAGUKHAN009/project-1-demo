
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const pagination = document.querySelector('.pagination');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let slideIndex = 0;

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', (function (index) {
            return function () {
                showSlide(index);
            };
        })(i));
        pagination.appendChild(dot);
    }

    showSlide(slideIndex);

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
        updatePagination(index);
        slideIndex = index;
    }

    function updatePagination(index) {
        const dots = document.querySelectorAll('.pagination .dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    prevButton.addEventListener('click', function () {
        slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
        showSlide(slideIndex);
    });

    nextButton.addEventListener('click', function () {
        slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
        showSlide(slideIndex);
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

document.addEventListener('DOMContentLoaded', function () {
    const paragraph = document.querySelector('.limited-words');
    const button = document.querySelector('.seeMoreButton');

    button.addEventListener('click', function () {
        paragraph.classList.toggle('expanded');
        button.style.display = 'none';
    });
});

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

function CloseToMain() {
    let AI = document.getElementById('AllInventoryMainPage');
    let MS = document.getElementById('MotorCyclesMainPage');
    let OTHERS = document.getElementById('OthersMainPage');
    let SD = document.getElementById('SedanMainPage');
    let SUV = document.getElementById('SUVMainPage');
    let TRUCKS = document.getElementById('TrucksMainPage');
    AI.classList.remove('AllIn')
    MS.classList.remove('MotorS')
    OTHERS.classList.remove('OTHERS')
    SD.classList.remove('SD')
    SUV.classList.remove('SUV')
    TRUCKS.classList.remove('TRUCKS')
}

function AllInventory() {
    let AI = document.getElementById('AllInventoryMainPage');
    AI.classList.add("AllIn")
}

function MotorCycles() {
    let MS = document.getElementById('MotorCyclesMainPage');
    MS.classList.add("MotorS")
}

function Others() {
    let OTHERS = document.getElementById('OthersMainPage');
    OTHERS.classList.add("OTHERS")
}

function Sedan() {
    let SD = document.getElementById('SedanMainPage');
    SD.classList.add("SD")
}

function SUV() {
    let SUV = document.getElementById('SUVMainPage');
    SUV.classList.add("SUV")
}

function Trucks() {
    let TRUCKS = document.getElementById('TrucksMainPage');
    TRUCKS.classList.add("TRUCKS")
}