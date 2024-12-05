// Fetching the elements from HTML
const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

// Registers when button is clicked and activates a function.
addButton.addEventListener("click", function (){
    console.log("Leg til knappen er trykket!");

    // Creating a variable storing the value of another variable
    // Taking the global variable inputField and using the method .value to fetch a value stored in a new variable.
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    // Creates a new Element to the list with the content from input after button press.
    const todoItem = document.createElement("li");
    todoItem.textContent = inputFieldValue;
    todoList.appendChild(todoItem);

    // Creates a new button "Ferdig" to confirm the new elemented is completed.
    const finishedButton = document.createElement("button");
    finishedButton.textContent = "Ferdig";
    todoItem.appendChild(finishedButton);

    // Creates a function to apply the css "line-trhough" function to the element when "ferdig" is pressed, to show the task as being completed, by being crossed out.
    finishedButton.addEventListener("click", function () {
        console.log("Ferdi knappen er trykket!");
        todoItem.style.textDecoration = "line-through";
    });

    // Creates a new button "Slett" to the delete the created element.
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Slett";
    todoItem.appendChild(deleteButton);

    // Apllies the .remove function that allows the "Slett" button to when pressed delete the element it is connected to.
    deleteButton.addEventListener("click", function () {
        console.log("Slett knappen er trykket!");
        todoItem.remove();
    });
});