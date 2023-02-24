import { createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../errorPage/ErrorPage';
import QuizDetails from '../quizDetails/QuizDetails';
import Quizes from '../quizes/Quizes';
import Root from '../root/Root';
import Statistics from '../statistics/Statistics';



export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>,
                loader: ()=>fetch("https://openapi.programming-hero.com/api/quiz")
            }
        ]
    }
    ])


