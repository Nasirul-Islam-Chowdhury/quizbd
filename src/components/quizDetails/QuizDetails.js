import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Question from '../quizes/question/Question';

const QuizDetails = () => {
    const quizeDetails = useLoaderData();
    const details = quizeDetails.data;
    const questions = details.questions;
    return (
        <div className='text-slate-800 bg-slate-100 py-5'>
            <h1 className='text-center text-3xl font-bold pb-5'>Quiz of {details.name}</h1>
            {
            questions.map(quesion => <Question key={quesion.id} questions={questions} quesion={quesion} details={details}></Question>)
       }
        </div>
      
    );
};

export default QuizDetails;