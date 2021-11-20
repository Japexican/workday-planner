const checkHour = () => {
    const currHour = moment().hours();
    document.querySelectorAll("[data-hour]").forEach((item, i) => {
        const hour = item.getAttribute("data-hour");
        if (hour < currHour) {
            item.classList.add("past");
        } else if (hour == currHour) {
            item.classList.remove("past");
            item.classList.add("present");
        } else {
            item.classList.remove("past");
            item.classList.remove("present");
            item.classList.add("future");
        }
    });
};
setInterval(checkHour, 60000);
checkHour();

const currDay = new Date().toDateString().split(" ").splice(0, 3).join(", ");
document.querySelector("#currentDay").innerHTML = `Today is ${currDay}.`;

document.querySelectorAll(".saveBtn").forEach(function (element) {
    element.addEventListener("click", function () {
        const hour = this.parentElement.getAttribute("data-hour");
        const value = this.previousElementSibling.value;
        localStorage.setItem(hour,value);
        document.querySelector(".notification").classList.add("show")
        setTimeout(function(){
            document.querySelector(".notification").classList.remove("show")
        }, 2000)
    });
});

document.querySelectorAll("[data-hour]").forEach(function(element) {
    const hour =  element.getAttribute("data-hour")
    const value = localStorage.getItem(hour)
    element.children[1].value = value
})
