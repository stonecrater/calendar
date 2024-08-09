const monthEl = document.getElementById("month"); // 
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-num");
const yearEl = document.getElementById("year");

const date = new Date();
monthEl.innerText = date.toLocaleString("en", { month: "long" });

dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" });

dayNumberEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();




function updateClock() {
    const now = new Date();  
    let hours = now.getHours(); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Get seconds
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM

    // converting 24-hour format to 12-hour format
    hours = hours % 12; // this code is to convert 24-hour format to 12-hour format
    hours = hours ? String(hours).padStart(2, '0') : '12'; // If hours is 0, set to 12

    // display time in text
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update the clock immediately and then set an interval to update it every second
updateClock();
setInterval(updateClock, 1000);