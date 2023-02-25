import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Question from '../quizes/question/Question';

const QuizDetails = () => {
    const quizeDetails = useLoaderData();
    const details = quizeDetails.data;
    const questions = details.questions;
    return (
        <div className='text-slate-800 bg-slate-100 py-5'>
     <div className='text-xl font-semibold pl-5 sticky text-end pr-2'>
        <h1>total correct answer <span id='cor'>00</span></h1>
        <h1>total correct answer <span>00</span></h1>
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