import React from 'react';

const Blog = () => {
    return (
        <div className='lg:px-60 px-5'>
            <div>
                <h1 className='text-3xl mt-5 mb-2 text-slate-600 font-bold'>Purpose of React Router</h1>
                <p>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.The Router in React JS is a pure JavaScript package that allows you to use React to create complicated client-side apps. Initially launched in 2013, it has become one of the most prominent routing libraries in today's online applications. React Router makes it simple to manage the URL and state of your application. You specify all of the potential URL patterns in your app and which UI component should be displayed for each one using React Router. This Router decreases the amount of code an app requires to maintain its state and makes adding new features more accessible.</p>
            </div>
            <div>
                <h1 className='text-3xl mt-5 mb-2 text-slate-600 font-bold'>Context Api</h1>
                <p>Context API can solve many problems that modern applications face, related to state management, for example, props drilling. Many solutions can solve state management issues and props drilling, but they may increase your build size and compromise your app performance. Context API is a React built-in feature, so we don’t have to worry about performance overhead and library installing issues.

                    The props drilling problem occurs when you pass a prop somewhere down the tree. When a project grows, data passing through props becomes chaotic, making the code more vulnerable and complex. To tackle this problem, we use Context API. </p>
            </div>
            <div>
                <h1 className='text-3xl mt-5 mb-2 text-slate-600 font-bold'>React useRef Hook</h1>
                <p>The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.In general, we want to let React handle all DOM manipulation.

But there are some instances where useRef can be used without causing issues.

In React, we can add a ref attribute to an element to access it directly in the DOM.The useRef Hook can also be used to keep track of previous state values.

This is because we are able to persist useRef values between renders.</p>
            </div>
        </div>
    );
};

export default Blog;