/*
PSEUDOCODE

- User checks box.
- Event listener notices.
- Adds or subtracts 1 number of habits completed (depending on true or false for checkmark).
- Updates that amount of habits that were completed.
- User resets button at the end of the day or start of the new one.
    -- reset button will call 2 functions, 1 that will reset the checkboxes and the other that will reset the number of habits completed
*/

// function to reset the checklist
function resetChecklist() {
    document.getElementById('habit-checklist').reset();
}