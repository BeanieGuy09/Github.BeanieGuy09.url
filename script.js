const myArray = ["taskWebsite/taskWebsite.html", "taskJog/taskJog.html", "taskSleep/taskSleep.html","taskRice/taskRice.html","taskAutoPets/autoPets.html", "taskShowdown/taskShowdown.html", "taskBlackjack/taskBlackjack.html", "taskTrail/taskTrail.html","taskFNF/taskFNF.html","taskCourt/taskCourt.html","taskDieDungeon/taskDieDungeon.html","taskChess/taskChess.html"];

// Function to pick a random item from the array
function getRandomSideQuest() {
    const randomIndex = Math.floor(Math.random() * myArray.length);
    console.log("Randomly chosen item:", myArray[randomIndex]);
    window.location.href= myArray[randomIndex];
}

// Usage
