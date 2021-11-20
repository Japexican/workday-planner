const checkHour = () => {
    const currHour = moment().hours();
    document.querySelectorAll("[data-hour]").forEach((item, i) => {
        const hour = item.getAttribute("data-hour");
        if (hour < currHour){
        item.classList.add("past")
    }else if(hour == currHour){
        item.classList.remove("past")
        item.classList.add("present")
    }else {
        item.classList.remove("past")
        item.classList.remove("present")
        item.classList.add("future")
    }
});
};
setInterval(checkHour,60000)
checkHour()

const currDay = new Date().toDateString().split(" ").splice(0,3).join(", ")
document.querySelector("#currentDay").innerHTML=`Today is ${currDay}.`
