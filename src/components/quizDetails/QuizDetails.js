import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Question from '../quizes/question/Question';

const QuizDetails = () => {
    const quizeDetails = useLoaderData();
    console.log(quizeDetails)
    const details = quizeDetails.data;
    const questions = details.questions;
    return (
        <div className='text-slate-800 bg-slate-100'>
     <div className='lg:text-xl p-2 text-sm lg:mt-0 mt-8 font-semibold fixed bg-white pl-5'>
        <h1>Total correct Answer <span id='correctAns'>00</span></h1>
        <h1>Total Wrong Answer <span id="wrongAns">00</span></h1>
      </div>
<div>
    
   <h1 className='text-center text-3xl font-bold pb-5'>Quiz of {details.name}</h1>
     
     <div>
     {
          questions.map(quesion => <Question key={quesion.id} details={details} questions={questions} quesion={quesion}></Question>)
     }
     </div>
</div>

        </div>
    
      
    );
};

export default QuizDetails;