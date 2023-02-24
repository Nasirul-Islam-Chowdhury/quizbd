import Swal from "sweetalert2"

export const result = (quesion, option) => {
    if (quesion.correctAnswer === option) {
        Swal.fire(" Congratulatios! Correct Answer")
    } else {
        Swal.fire("Opps! Wrong Answer")
    }
}

