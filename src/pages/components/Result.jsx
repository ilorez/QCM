import React from 'react'
import { Link } from 'react-router-dom'
import ProgressCircle from './progressCircle';
import "./Result.css"

// zustand 
import useStore from '../../store'
function getRandomResult(num) {


    // Define 10 different result ranges and their associated emojis and messages
    const resultRanges = [
        { min: 0.0, max: 0.1, emoji: "😢", message: "Feeling sad." },
        { min: 0.1, max: 0.2, emoji: "😐", message: "Just an average day." },
        { min: 0.2, max: 0.3, emoji: "😊", message: "Feeling good!" },
        { min: 0.3, max: 0.4, emoji: "🤗", message: "You're doing great!" },
        { min: 0.4, max: 0.5, emoji: "🙂", message: "Keep smiling!" },
        { min: 0.5, max: 0.6, emoji: "😄", message: "You're awesome!" },
        { min: 0.6, max: 0.7, emoji: "🤩", message: "Fantastic work!" },
        { min: 0.7, max: 0.8, emoji: "🥳", message: "Party time!" },
        { min: 0.8, max: 0.9, emoji: "😎", message: "You're a rockstar!" },
        { min: 0.9, max: 1.0, emoji: "🚀", message: "You're on fire!" },
    ];

    // Find the matching result range for the random number
    const matchingRange = resultRanges.find((range) => num >= range.min && num <= range.max);

    if (matchingRange) {
        return matchingRange;
    }

    // If no match is found, return a default emoji and message
    return { emoji: "😊", message: "Keep going!" };
}

function QuestionCard({ isCorrect, numOfQuestion }) {
    const { getQuestion, correctnessAnswers, userAnsawers } = useStore();
    const correctIcon = `<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.76302 16.716C7.07864 16.9815 7.54859 16.9461 7.82091 16.6363L20.9863 1.65986C21.3565 1.23877 21.3081 0.595666 20.8791 0.234736C20.463 -0.115272 19.8435 -0.0686429 19.4846 0.3397L9.53862 11.6538C8.22034 13.1535 5.83235 12.9709 4.75736 11.2883L2.2391 7.34666C1.94596 6.88782 1.33956 6.74792 0.875031 7.03194C0.397339 7.32401 0.252589 7.95139 0.554035 8.42322L5.64136 16.386C5.74564 16.5492 5.96134 16.599 6.12659 16.498C6.2571 16.4182 6.42401 16.4308 6.54106 16.5292L6.76302 16.716Z" fill="#02F29E"/>
    </svg>
    `;
    const incorrectIcon = `<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0352 10.2074C11.8636 9.03587 11.8636 7.13637 13.0352 5.9648L16.6248 2.37516C17.0213 1.97872 17.0143 1.33383 16.6093 0.94609C16.2166 0.570086 15.5954 0.576835 15.211 0.961282L11.6213 4.55092C10.4498 5.72249 8.55025 5.72249 7.37868 4.55092L4.10563 1.27786C3.70918 0.881417 3.06429 0.888423 2.67655 1.29339C2.30055 1.68609 2.3073 2.30729 2.69175 2.69174L5.9648 5.9648C7.13638 7.13637 7.13638 9.03586 5.9648 10.2074L1.27787 14.8944C0.881427 15.2908 0.888433 15.9357 1.2934 16.3234C1.6861 16.6994 2.3073 16.6927 2.69175 16.3083L7.37868 11.6213C8.55026 10.4497 10.4498 10.4497 11.6213 11.6213L16.6248 16.6248C17.0213 17.0213 17.6662 17.0143 18.0539 16.6093C18.4299 16.2166 18.4232 15.5954 18.0387 15.211L13.0352 10.2074Z" fill="#F24D27"/>
    </svg>`;
    let icon;
    let classes;
    const correctClasses = "text-correct border-correct";
    const incorrectClasses = "text-incorrect border-incorrect";
    const question = getQuestion(numOfQuestion);



    const choices = question.choices.map((choice, index) => {
        if (index === userAnsawers[numOfQuestion]) {
            icon = correctnessAnswers[numOfQuestion] ? correctIcon : incorrectIcon;
            classes = correctnessAnswers[numOfQuestion] ? correctClasses : incorrectClasses
        } else if (index === question.correctAnswer) {
            icon = correctIcon
            classes = correctClasses
        } else {
            icon = ""
            classes = "text-gray-700  border-white"
        }
        return (
            <li key={"choice_end_" + numOfQuestion + "_" + index}><button className={'flex items-center gap-4 bg-primary-one p-2 rounded-md border-2 shadow-md ' + classes} ><div dangerouslySetInnerHTML={{ __html: icon }} />{choice}</button></li>
        )
    })
    return (
        <div className='flex flex-col  bg-light-white pb-20 pt-4 rounded-lg shadow-md px-4'>
            {/* <QcmActions /> */}
            <div key='question' className='my-16 text-lg text-gray-900'>{getQuestion(numOfQuestion).question}</div>
            <div key='select_choices'>
                <div key='message' className={'text-gray-600 my-3 fo text-sm'}>Choices</div>
                <div key='choices' className='flex flex-wrap gap-2 '>
                    {choices}
                </div>
            </div>
        </div>
    );
}





// this component is showed or called when use complete all questions
function Result() {
    const { correctnessAnswers } = useStore();
    const correct = correctnessAnswers.filter((answer) => answer).length;
    const inCorrect = correctnessAnswers.length - correct
    const correctRange = correct / correctnessAnswers.length;
    // get random emoji 
    const { emoji, message } = getRandomResult(correctRange);
    const nextIcon = `<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6061 9.89832L9.60912 9.90129L11.0326 8.49643L2.42348 0L0.999978 1.40486L8.1826 8.49345L0.576477 16L1.99998 17.4049L9.6061 9.89832Z" fill="#808080"/>
    </svg>`;
    const startIcon = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.625 27.5V21.25M5.625 8.75V2.5M2.5 5.625H8.75M2.5 24.375H8.75M16.25 3.75L14.0823 9.38608C13.7298 10.3026 13.5535 10.7609 13.2794 11.1464C13.0365 11.488 12.738 11.7865 12.3964 12.0294C12.0109 12.3035 11.5526 12.4798 10.6361 12.8323L5 15L10.6361 17.1677C11.5526 17.5202 12.0109 17.6965 12.3964 17.9706C12.738 18.2135 13.0365 18.512 13.2794 18.8536C13.5535 19.2391 13.7298 19.6974 14.0823 20.6139L16.25 26.25L18.4177 20.6139C18.7702 19.6974 18.9465 19.2391 19.2206 18.8536C19.4635 18.512 19.762 18.2135 20.1036 17.9706C20.4891 17.6965 20.9474 17.5202 21.8639 17.1677L27.5 15L21.8639 12.8323C20.9474 12.4798 20.4891 12.3035 20.1036 12.0294C19.762 11.7865 19.4635 11.488 19.2206 11.1464C18.9465 10.7609 18.7702 10.3026 18.4177 9.38608L16.25 3.75Z" stroke="#1B56F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;


    const cards = correctnessAnswers.map((value, index) => {
        return (
            <div key={"card-" + index}>
                <QuestionCard isCorrect={value} numOfQuestion={index} />
            </div>
        )
    })


    return (
        <div className='flex flex-col gap-20 place-items-center'>
            <div className='flex flex-col  bg-light-white py-3 px-4 pb-20 shadow-md rounded-lg  w-full'>
                <div key="resultMessageWithFace" className='flex justify-between text-gray-800 text-2xl '>
                    <h2>{message}</h2>
                    <div className='bg-yellow-100 border-2 border-yellow-200 rounded-xl p-0.5'><span role="img" aria-label="Random Emoji">
                        {emoji}
                    </span></div>
                </div>
                <div key="resultSection" className='flex justify-around mt-20'>
                    <div key="circleProgress" className='font-bold '>

                        <ProgressCircle value={correctRange * 100 + "%"} color1="#F2B827" color2="#02F29E" progress={correctRange * 100} size={100} borderSize={10} fontSize="24px" />

                    </div>
                    <div key="ansawerCorrectenss" className='flex flex-col justify-center gap-2'>
                        <p className='text-correct flex  justify-between items-baseline gap-2 ' >Correct: <span className='bg-light-correct px-1.5 rounded-md border-2 border-correct'>{correct}</span></p>
                        <p className='text-incorrect flex  justify-between  gap-2 items-baseline'>Incorrect: <span className='bg-light-incorrect px-1.5 rounded-md border-2 border-incorrect'>{inCorrect}</span></p>
                    </div>
                </div>
                <div key='startNewQcmBtn' className='flex justify-center  '>
                    <Link to="/" ><button className='flex items-center gap-3 bg-primary-one py-2 px-6 shadow-md rounded-md hover:bg-gray-100 hover:scale-105 mt-20 text-blue-color'><div dangerouslySetInnerHTML={{ __html: startIcon }} /> Start new QCM <div dangerouslySetInnerHTML={{ __html: nextIcon }} /></button></Link>
                </div>
            </div>
            <div className='flex flex-col gap-4 '>
                {cards}
            </div>
        </div >
    )
}
export default Result;
