import React, { useState } from "react";
import { Questions } from './Question'
import { v4 as uuid } from 'uuid'

export function QuizApp() {

    const [currentQuestion, setCurrenQustion] = useState(0)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [showScore, setShowScore] = useState(false)


    function handleCorrectAnswer(answ) {
        if (answ) {
            setScore((p) => p + 1)
        }
        setClicked(true)

    }

    function handleNextQuestion() {
        setClicked(false)
        if (currentQuestion < Questions.length - 1) {
            setCurrenQustion((p) => p + 1)
        } else {
            setShowScore(true)
        }
    }


    return (
        <div className="app_wrapper">
            {showScore ? (
                <div>
                    <div className="completed">Completed</div>
                    <div className="score_section">
                        Your score : {score} / {Questions.length}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="question_section_wrapper">
                        <div className="question_count">
                            {currentQuestion + 1} - savol
                        </div>
                        <div className="question">
                            {Questions[currentQuestion].question}
                        </div>
                    </div>
                    <div className="answer_section_wrapper">
                        {Questions[currentQuestion].answerList.map((i) => (
                            <li className="answer_list" key={uuid()}>
                                <button
                                    disabled={clicked}
                                    className={`answer_button ${clicked && i.isCorrect ? "correct" : ""}`}
                                    onClick={() => handleCorrectAnswer(i.isCorrect)}
                                >
                                    {i.answer}
                                </button>
                            </li>
                        ))}
                    </div>

                    <div>
                        <button className="next_button" onClick={handleNextQuestion}
                            disabled={!clicked}
                        >
                            Next</button>
                    </div>
                </div>
            )}
        </div>
    )
}