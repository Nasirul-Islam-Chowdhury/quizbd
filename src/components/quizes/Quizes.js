import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './quiz/Quiz';

const Quizes = () => {
    const quizesArray = useLoaderData();
    const quizes = quizesArray.data;
    return (

<div>
    <div>
        <h1 className='px-16 text-2xl font-bold text-slate-700 pt-10 pb-5'>Popular Contents</h1>
    </div>
<div className='md:grid md:grid-cols-4 gap-5 mx-auto px-16'>
              {
                  quizes.map(quiz =><Quiz quiz={quiz} key={quiz.id}></Quiz>)
              }
              </div>
</div>
          
    );
};

export default Quizes;