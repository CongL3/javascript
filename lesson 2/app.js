// Lesson 1: Variables and Data Types
function runLesson1() {
    let output = '';

    // The following code is intentionally incomplete
    let int;           // Declare an integer variable named 'int' and initialize it to 25
    let double;        // Declare a floating-point variable named 'double' and initialize it to 22.5
    let char;          // Declare a character variable named 'char' and initialize it to 'J'
    let string;        // Declare a string variable named 'string' and initialize it to "Hello"

    /// Change code below here
    output += 'int: ' + int + '<br>';
    output += 'double: ' + double + '<br>';
    output += 'char: ' + char + '<br>';
    output += 'string: ' + string + '<br>';

    /// Change code above here

    document.getElementById('output1').innerHTML = output;
}

// Lesson 2: Conditional Statements
function runLesson2() {
    let output = '';

    // The function is intentionally left incomplete
    function determineGrade() {
        let score = Math.floor(Math.random() * 100);
        let grade;

        /// Change code below here

        if (score >= 90) {
            grade = 'A';
        }

        /// Change code above here
        output += 'Score: ' + score + '<br>';
        output += 'Grade: ' + grade + '<br>';
    }

    determineGrade();

    document.getElementById('output2').innerHTML = output;
}

// Lesson 3: Temperature Classification
function runLesson3() {
    let output = '';

    function classifyTemperature() {
        let temperature = Math.floor(Math.random() * (45 - (-10) + 1)) - 10; // Random temperature between -10 and 45
        let classification = 'Freezing';

        /// Change code below here

        /// Change code above here

        output += 'Temperature: ' + temperature + '°C<br>';
        output += 'Classification: ' + classification + '<br>';
    }

    classifyTemperature();

    document.getElementById('output3').innerHTML = output;
}
// Lesson 4: Day of the Week
function runLesson4() {
    let output = '';

    function determineDay() {
        let dayNumber = Math.floor(Math.random() * 7) + 1; // Random number between 1 and 7
        let dayName;

        /// Change code below here

        switch (dayNumber) {
            default:
                dayName = 'Invalid day number';
        }

        /// Change code above here
        output += 'Day Number: ' + dayNumber + '<br>';
        output += 'Day Name: ' + dayName + '<br>';
    }

    determineDay();

    document.getElementById('output4').innerHTML = output;
}

// Lesson 5: Loops
function runLesson5() {
    let output = '';

    /// Change code below here
    // Use a for loop to print numbers from 1 to 5
    // clue you need to put '<br>' at the end of your output


    
    /// Change code above here

    document.getElementById('output5').innerHTML = output;
}