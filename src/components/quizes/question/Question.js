import React from 'react';
import { } from 'react-router-dom'
import { result } from '../../result/result';

const Question = ({ quesion, details, questions }) => {
    return (
        <div className='px-80'>
            <div className='shadow-lg p-10 rounded py-10 mb-5 bg-white'>
                <ol className='text-xl text-slate-600 text-center font-semibold pt-5 flex'>
                Quiz: <li> {quesion.question}</li>
                </ol>
                <ol className='grid grid-cols-2'>
                    {
                        quesion.options.map(option =>
                            <div key={option} onClick={()=>result(option, details, questions)} className='p-5 border-2 m-2 hover:bg-gray-100 cursor-pointer rounded'>
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="accountType" value="personal" />
                                    <span className="ml-2">{option}</span>
                                </label>
                            </div>   
                        )
                    }
                </ol>
            </div>

        </div >
    );
};

export default Question;