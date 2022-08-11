import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ToastContainer } from 'react-toastify'
// import { BrowserRouter } from 'react-router-dom'

// //
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'react-toastify/dist/ReactToastify.css'
// // import './style.css'
// import Context from './context/Context'
import  './quiz.css'
import {QuizApp} from './Quiz'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    //     <ToastContainer />
    //     <Context>
    //         <App />
        
    //     </Context>

    // </BrowserRouter>

    <QuizApp/>

);
