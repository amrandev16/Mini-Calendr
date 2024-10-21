
const monthNameEl =document.getElementById('month-name');
const dayNameEl =document.getElementById('day-name');
const dateNumEl =document.getElementById('day-number');
const yearhNameEl =document.getElementById('year');

const date = new Date();

monthNameEl.innerText = date.toLocaleString("en",{
    month:"long"
})

dayNameEl.innerText =date.toLocaleDateString("en",{
    weekday:"long"
});

dateNumEl.innerText = date.getDate();
yearhNameEl.innerText =date.getFullYear();