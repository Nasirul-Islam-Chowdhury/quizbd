import { useState } from "react";
import Swal from "sweetalert2"

export const Result = (quesion, option) => {
    const [marks, setMarks] = useState(1);
    if (quesion.correctAnswer === option) {
        Swal.fire(" Congratulatios! Correct Answer")
       document.getElementById("cor").innerText= setMarks(marks);
     
       console.log("marks")
    } else {
        Swal.fire("Opps! Wrong Answer");
    }
}

