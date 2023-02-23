import { createBrowserRouter} from 'react-router-dom';
import QuizDetails from '../quizDetails/QuizDetails';
import Quizes from '../quizes/Quizes';
import Root from '../root/Root';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Quizes></Quizes>,
                loader: ()=>fetch("https://openapi.programming-hero.com/api/quiz")
            },
            {
                path: '/',
                element: <Quizes></Quizes>,
                loader: ()=>fetch("https://openapi.programming-hero.com/api/quiz")
            },
            {
                path: 'quizDetails/:quizDetails',
                element: <QuizDetails></QuizDetails>,
                loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizDetails}`)
            }
        ]
    }
    ])


