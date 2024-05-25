const myArray = ["apple", "banana", "orange", "grape", "kiwi"];

// Function to pick a random item from the array
function getRandomSideQuest() {
    const randomIndex = Math.floor(Math.random() * myArray.length);
    console.log("Randomly chosen item:", myArray[randomIndex]);
    return myArray[randomIndex];
}

// Usage
