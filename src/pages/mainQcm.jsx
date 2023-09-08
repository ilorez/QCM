import './mainQcm.css'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// zustand 
import useStore from '../store'
import Result from './components/Result'
import ProgressCircle from './components/progressCircle'


function speakText(text, voicesToTry = [
  // Female voices
  'Google UK English Female',
  'Microsoft David Desktop - English (United States)',
  'Microsoft Zira Desktop - English (United States)',
  'Samantha',
  'Google US English',
  'Microsoft Eva Mobile - English (United States)',
  'Google UK English Female (x-af-x-sfg#male_1-local)',


  // Male voices (add more if needed)
  'Google UK English Male',
  'Microsoft George Desktop - English (United States)',
  'Microsoft Mark Mobile - English (United States)',
  'English (Great Britain)+Robert',
  'English (America)+Andy',
  'Google UK English Female (en-GB-WLS)',
  'English (West Midlands)+female5',

]) {
  // Check if the Web Speech API is supported
  if ('speechSynthesis' in window) {
    const synth = window.speechSynthesis;

    // Create a SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(text);

    // Find the first available voice from the list
    let selectedVoice = null;
    const voices = synth.getVoices();
    for (const voiceName of voicesToTry) {
      const voice = voices.find((v) => v.name === voiceName);
      if (voice) {
        selectedVoice = voice;
        break;
      }
    }

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    } else {
      console.warn('No suitable voice found. Using browser default voice.');
    }

    // Adjust the rate (1.0 is the normal rate, adjust as needed)
    utterance.rate = 0.7; // You can adjust the rate as needed

    // Speak the text
    synth.speak(utterance);
  } else {
    console.error('Web Speech API is not supported in this browser.');
  }
}






function QcmActions() {
  const { getQuestion, setCorrectness, incrementQuestionNum, questionNum } = useStore();
  const readQuestionAndChoices = (questionIndex) => {
    const myquestion = getQuestion(questionIndex);
    let fullText = "Question, " + myquestion.question + ", Choices: "
    myquestion.choices.forEach((choice, index) => {
      fullText += " Number " + (index + 1) + ", " + choice + ","
    });
    console.log(fullText)
    speakText(fullText)
  }
  const volumeIcon = `<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 5C13.621 5.46574 14.125 6.06966 14.4721 6.76394C14.8193 7.45821 15 8.22378 15 9C15 9.77623 14.8193 10.5418 14.4721 11.2361C14.125 11.9303 13.621 12.5343 13 13M15.7 2C16.744 2.84365 17.586 3.91013 18.1645 5.12132C18.7429 6.33252 19.0431 7.65776 19.0431 9C19.0431 10.3422 18.7429 11.6675 18.1645 12.8787C17.586 14.0899 16.744 15.1564 15.7 16M4 12H2C1.73478 12 1.48043 11.8946 1.29289 11.7071C1.10536 11.5196 1 11.2652 1 11V7C1 6.73479 1.10536 6.48043 1.29289 6.2929C1.48043 6.10536 1.73478 6 2 6H4L7.5 1.5C7.5874 1.33023 7.73265 1.19733 7.90949 1.1253C8.08633 1.05327 8.2831 1.04686 8.46425 1.10725C8.6454 1.16763 8.79898 1.29081 8.89723 1.45454C8.99549 1.61827 9.03194 1.81175 9 2V16C9.03194 16.1883 8.99549 16.3817 8.89723 16.5455C8.79898 16.7092 8.6454 16.8324 8.46425 16.8928C8.2831 16.9531 8.08633 16.9467 7.90949 16.8747C7.73265 16.8027 7.5874 16.6698 7.5 16.5L4 12Z" stroke="#bbb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const skipIcon = `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0719 9.0139C7.85295 8.23286 7.85295 6.96652 7.0719 6.18548L1.73998 0.853553C1.54472 0.658291 1.54472 0.341709 1.73998 0.146447C1.93524 -0.0488155 2.25182 -0.0488155 2.44708 0.146447L9.4539 7.15326C9.64603 7.3454 9.64603 7.6569 9.4539 7.84903L9.15529 8.14764C9.12808 8.17486 9.12808 8.21898 9.15529 8.24619C9.1825 8.2734 9.1825 8.31752 9.15529 8.34473L1.84986 15.6502C1.6546 15.8454 1.33802 15.8454 1.14275 15.6502C0.947492 15.4549 0.947492 15.1383 1.14275 14.9431L7.0719 9.0139ZM11.0132 9.01391C11.7943 8.23286 11.7943 6.96653 11.0132 6.18548L5.68128 0.853553C5.48602 0.658291 5.48602 0.341709 5.68128 0.146447C5.87654 -0.0488155 6.19312 -0.0488156 6.38838 0.146447L13.3952 7.15327C13.5873 7.3454 13.5873 7.6569 13.3952 7.84903L13.0966 8.14764C13.0694 8.17485 13.0694 8.21897 13.0966 8.24618C13.1238 8.2734 13.1238 8.31752 13.0966 8.34473L5.79117 15.6502C5.59591 15.8454 5.27933 15.8454 5.08407 15.6502C4.8888 15.4549 4.8888 15.1383 5.08407 14.9431L11.0132 9.01391Z" fill="#B8B2B2"/>
  </svg>`;
  return (

    <div className='flex justify-between  py-2 text-gray-400  ' >
      <div><button onClick={() => readQuestionAndChoices(questionNum)} className='hover:scale-105'><div dangerouslySetInnerHTML={{ __html: volumeIcon }} /></button></div>
      <div className='flex '><button className='flex items-center gap-1 hover:scale-105' onClick={() => {
        setCorrectness(questionNum, null);
        incrementQuestionNum();
      }}>Skip<div dangerouslySetInnerHTML={{ __html: skipIcon }} /></button></div>
    </div>

  )
}


function QcmHeader() {
  const { questions, questionNum } = useStore();
  const quiteIcon = `<svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H8.51724C9.06953 0 9.51724 0.447715 9.51724 1C9.51724 1.55228 9.06953 2 8.51724 2H5.75862C3.68279 2 2 3.68279 2 5.75862V17.2414C2 19.3172 3.68279 21 5.75862 21H8.51724C9.06953 21 9.51724 21.4477 9.51724 22C9.51724 22.5523 9.06953 23 8.51724 23H2C0.895431 23 0 22.1046 0 21V2C0 0.895431 0.895431 0 2 0ZM18.9485 10.3963L12.5845 4.03238C12.194 3.64186 11.5608 3.64186 11.1703 4.03238C10.7798 4.4229 10.7798 5.05607 11.1703 5.44659C12.8888 7.16509 11.6717 10.1034 9.24138 10.1034H5.75862C5.20634 10.1034 4.75862 10.5512 4.75862 11.1034C4.75862 11.6557 5.20634 12.1034 5.75862 12.1034H9.24138C11.6717 12.1034 12.8888 15.0418 11.1703 16.7603C10.7798 17.1508 10.7798 17.784 11.1703 18.1745C11.5608 18.565 12.194 18.565 12.5845 18.1745L18.9485 11.8106C19.339 11.42 19.339 10.7869 18.9485 10.3963Z" fill="white"/>
  </svg>`;
  let proValue = (questionNum) + "/" + questions.length
  let progressVal = (questionNum) * 10

  return (
    <div key='header' className='flex justify-between mb-10 align-baseline w-full '>
      {questionNum >= 0 && <ProgressCircle value={proValue} color1="#ccc" color2="#0FC5F2" progress={progressVal} size={40} borderSize={5} fontSize="11px" />}
      <div></div>
      <div key='quiteNutton' className='flex justify-center align-middle items-baseline'><Link to='/' className='flex self-center '><button className='bg-incorrect py-1 px-2 rounded-md hover:scale-105 hover:bg-red-600'><div dangerouslySetInnerHTML={{ __html: quiteIcon }} /></button></Link></div>
    </div>
  )
}


function QcmArea() {
  const { getQuestion, setCorrectness, incrementQuestionNum, questionNum } = useStore();
  const [focused, setFocused] = useState(null) //focused = index of choice that focused or clicked one time
  // is my store state if questionNum = -1 that mean we complete all question
  if (questionNum === -1) {
    return (
      <Result />
    )
  }
  const handleClick = (index) => {
    if (focused == index) {
      setCorrectness(questionNum, index);
      setFocused(null);
      incrementQuestionNum();
      return
    }

    setFocused(index)
  }
  const choices = getQuestion(questionNum).choices.map((choice, index) => {
    return (
      <li key={"choice_" + { questionNum } + "_" + index} ><button onClick={() => handleClick(index)} className=' bg-primary-one p-2 rounded-md  text-gray-700 shadow-md 
      focus:border-2 focus:bg-sky-50 focus:border-sky-400 focus:outline-none  
      transition duration-100 ease-in-out delay-100
      hover:bg-gray-100 ' >{choice}</button></li>
    )
  })
  return (
    <div className='flex flex-col bg-light-white pb-20 pt-4 rounded-lg shadow-md px-4 w-full'>
      <QcmActions />
      <div key='question' className='my-16 text-lg text-gray-900'>{getQuestion(questionNum).question}</div>
      <div key='select_choices'>
        <div key='message' className='text-gray-600 my-3 fo text-sm'>Choose answer</div>
        <div key='choices' className='flex flex-wrap gap-2 '>
          {choices}
        </div>
      </div>
    </div>
  );
}


function ParentController() {

  return (
    <div className='flex flex-col justify-center  max-w-2xl w-full place-items-center'>
      <QcmHeader />
      <QcmArea />
    </div >
  );
}


export default function QCM() {

  return (
    <main className='flex flex-col text-primary-two place-items-center'>
      <ParentController />
    </main>
  )
}


