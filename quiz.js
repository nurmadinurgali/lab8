$(document).ready(function(){
     const correct = ["trachea", "The pattern of inheritance of a specific gene", "glucose and oxygen"];
     const questions = ["Which is not a part of the circulatory system?", "A pedigree chart shows:", "During photosynthesis plants take CO2 from the air and H2O from the soil and convert it into"];
     const choice_options = [["blood", "heart", "blood vessels", "trachea"], ["The genotypic ratios of the offspring", "The types of gametes produced by the parents", "The pattern of inheritance of a specific gene", "Which genes are co-dominant"], ["glucose and oxygen", "honey", "amino acids", "acid rain"]];
 
     const quizBox = $("#quiz-box");
 
     for (let i = 0; i < questions.length; i++) {
         quizBox.append("<div class='question'></div>");
         const currentQuestion = $(".question").eq(i);
         currentQuestion.append("<p class='d'> Q" + (i + 1) + ". " + questions[i] + "</p>");
 
         for (let j = 0; j < choice_options[i].length; j++) {
             currentQuestion.append("<label><input type='radio' name='q" + (i + 1) + "' value='" + choice_options[i][j] + "'>" + choice_options[i][j] + "</label>");
         }
     }
 
     let countCorrect = 0;
 
     $("button").click(function(event) {
         countCorrect = 0;
         for (let i = 0; i < questions.length; i++) {
             const selectedOption = $("input[name=q" + (i + 1) + "]:checked").val();
             if (selectedOption === correct[i]) {
                 countCorrect++;
             }
         }
         $("#quiz-box").append("<h2>Result of the quiz is: " + countCorrect);
     });
 });