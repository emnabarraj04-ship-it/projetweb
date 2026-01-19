function checkQuiz() {

    var reponses = {
        q1: 'b',
        q2: 'a',
        q3: 'c',
        q4: 'c',
        q5: 'a',
        q6: 'b',
        q7: 'c',
        q8: 'a',
        q9: 'b',
        q10: 'c'
    };

    var score = 0;
    var total = 10;
    var resultat = "";

    for (var i = 1; i <= total; i++) {
        var nomQuestion = "q" + i;
        var choix = document.querySelector("input[name='" + nomQuestion + "']:checked");

        if (choix) {
            if (choix.value === reponses[nomQuestion]) {
                score++;
                resultat += "<li>Question " + i + " : Correct</li>";
            } else {
                resultat += "<li>Question " + i + " : Faux</li>";
            }
        } else {
            resultat += "<li>Question " + i + " : Non répondue</li>";
        }
    }

    document.getElementById("resultat").innerHTML =
        "<h2>Votre score : " + score + " / " + total + "</h2><ul>" + resultat + "</ul>";
}

