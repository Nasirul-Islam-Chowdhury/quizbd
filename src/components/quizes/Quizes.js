import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './quiz/Quiz';

const Quizes = () => {
    const quizesArray = useLoaderData();
    const quizes = quizesArray.data;
    return (

<div>
    <div>
        <p className='text-xl px-16 mt-5 italic'>Welcome to our quiz community. Play a quiz and test your skill. There are some quiz for everyone!</p>
        <h1 className='px-16 text-2xl font-bold text-slate-700 pt-5 pb-5'>Popular Contents</h1>
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