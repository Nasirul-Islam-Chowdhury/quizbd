import Swal from "sweetalert2"


let correctMarks = 0;
let wrongMarks = 0;

export const Result = (quesion, option) => {
    if (quesion.correctAnswer === option) {
        Swal.fire(" Congratulatios! Correct Answer")
        correctMarks = correctMarks + 1;
        document.getElementById("correctAns").innerText = correctMarks;
    } 
    else {
        Swal.fire("Opps! Wrong Answer");
        wrongMarks = wrongMarks + 1;
        document.getElementById("wrongAns").innerText = wrongMarks;
    }
}
