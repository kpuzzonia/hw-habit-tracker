// function called when there is a change to the form
function habitChange() {
    let totalHabits = 0;

    // get the checkbox elements 
    let habit1 = document.getElementById("habit1");
    let habit2 = document.getElementById("habit2");
    let habit3 = document.getElementById("habit3");
    let habit4 = document.getElementById("habit4");
    let habit5 = document.getElementById("habit5");

    // get boolean state and calculate number of habits checked
    totalHabits = (habit1.checked ? 1 : 0) + 
    (habit2.checked ? 1 : 0) +
    (habit3.checked ? 1 : 0) +
    (habit4.checked ? 1 : 0) +
    (habit5.checked ? 1 : 0) 
    ;

    // update the display
    document.getElementById("counter").textContent = totalHabits;
}


// function to reset the checklist and return habit counter to 0
function resetChecklist() {
    document.getElementById('habit-checklist').reset();
    document.getElementById("counter").textContent = 0;
}



