function submitQuiz() {
    var total = 6;
    var score = 0;

    // Get user input
    var q1 = document.forms["quiz"]["q1"].value;
    var q2 = document.forms["quiz"]["q2"].value;
    var q3 = document.forms["quiz"]["q3"].value;
    var q4 = document.forms["quiz"]["q4"].value;
    var q5 = document.forms["quiz"]["q5"].value;
    var q6 = document.forms["quiz"]["q6"].value;

    var userAnswers = [q1, q2, q3, q4, q5, q6];

    var answers = ["c", "a", "c", "b", "b", "c"];

    for (var i = 0; i < total; i++) {
        if (userAnswers[i] == answers[i]) {
            score++;
        }
    }

    document.getElementById("result").innerHTML = "You got " + score + " out of " + total + " correct.";

    

    return false;
}
