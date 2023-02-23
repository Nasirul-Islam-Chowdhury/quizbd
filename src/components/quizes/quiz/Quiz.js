import React from 'react';
import {Link} from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import QuizDetails from '../../quizDetails/QuizDetails';

const Quiz = ({ quiz }) => {
    return (
        <div className="flex justify-center md:m-0 mb-3">
            <div
                className="rounded-lg text-white bg-slate-700 shadow-lg">

                <img
                    className="rounded-lg w-full"
                    src={quiz.logo}
                    alt="" />

                <div className="p-6 flex justify-between items-center">
                    <h5
                        className="mb-2 text-xl  font-medium leading-tight dark:text-neutral-50">
                        {quiz.name}
                    </h5>
              <Link quiz={quiz} to={`quizDetails/${quiz.id}`}>
              <button
                        type="button"
                        className=" flex justify-center items-center gap-2 rounded bg-white text-black px-6 py-2 text-xs font-bold uppercase"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <p>Start Quiz</p>
                        <ArrowRightIcon className="h-6 w-6"></ArrowRightIcon>
                    </button>
              </Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz;