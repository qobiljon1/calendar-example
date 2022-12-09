const currentDate = document.querySelector(".current_date"),
    prevNextIcon = document.querySelectorAll(".icons span"),
    daysTag = document.querySelector(".days");

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth()


const renderCalendar = () => {
    let liTag = ''
        // ======================== firstDayofMonth ==========================//

    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),

        // ======================== lastDateofMonth ==========================//

        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),

        // ======================== lastDayofMonth ==========================//

        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),

        // ======================== lastDateofLastMonth ==========================//

        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    // ======================== last month day ==========================//
    for (let i = firstDayofMonth; i > 0; i--) liTag += `<li class='inactive'>${lastDateofLastMonth - i + 1}</li>`
        // ======================== all day ==========================//
    for (let i = 1; i <= lastDateofMonth; i++) {
        const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : ""
        liTag += `<li class=${isToday}>${i}</li>`
    }
    // ======================== next month day ==========================//
    for (let i = lastDayofMonth; i < 6; i++) liTag += `<li class='inactive'>${i- lastDayofMonth + 1}</li>`

    daysTag.innerHTML = liTag;

    currentDate.innerText = `${months[currMonth]} ${currYear}`
}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currMonth = date.getMonth();
            currYear = date.getFullYear();
        } else {
            date = new Date()
        }
        renderCalendar()
    })
})