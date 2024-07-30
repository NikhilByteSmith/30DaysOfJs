// Task 1: Update paragraph text on button click
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("introParagraph").innerText = "Moral values are fundamental beliefs that guide our actions and decisions. They influence our personal and professional relationships, helping us navigate the complexities of life with integrity and empathy.";
});

// Task 2: Toggle image visibility on double click
document.getElementById("toggleImageButton").addEventListener("dblclick", function() {
    const image = document.getElementById("toggleImage");
    image.style.visibility = image.style.visibility === "hidden" ? "visible" : "hidden";
});

// Task 3: Change background color on mouseover
document.getElementById("introParagraph").addEventListener("mouseover", function() {
    this.classList.add("highlight");
});

// Task 4: Reset background color on mouseout
document.getElementById("introParagraph").addEventListener("mouseout", function() {
    this.classList.remove("highlight");
});

// Task 5: Log key pressed in console
document.getElementById("agreeInput").addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Task 6: Display input value in console on keyup
document.getElementById("agreeInput").addEventListener("keyup", function() {
    console.log(`Current input: ${this.value}`);
});

// Task 7: Log form data to console and prevent default form submission
document.getElementById("reflectionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(`Reaction: ${document.getElementById("responseSelect1").value}`);
    console.log(`Importance of friends: ${document.getElementById("responseSelect2").value}`);
});

// Task 8: Display selected option in a paragraph
document.getElementById("responseSelect1").addEventListener("change", function() {
    document.getElementById("responseDisplay").innerText = `You selected: ${this.value}`;
});

// Task 9: Log text of clicked list item
document.getElementById("valueList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log(`Value clicked: ${event.target.textContent}`);
    }
});

// Task 10: Add new value to list and log it
document.getElementById("addValueButton").addEventListener("click", function() {
    const newValue = document.getElementById("newValueInput").value;
    if (newValue) {
        const li = document.createElement("li");
        li.textContent = newValue;
        document.getElementById("valueList").appendChild(li);
    }
    document.getElementById("valueList").addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            console.log(`Newly added value clicked: ${event.target.textContent}`);
        }
    });
});
