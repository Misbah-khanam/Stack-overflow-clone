import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './HomeMainBar.css'
import Questions from './Questions'
import QuestionsList from './QuestionsList'
import {useSelector} from 'react-redux';

const HomeMainBar = () => {

  // var questionsList = [
  //   {
  //     id: 1,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     QuestionBody: "It meant to be",
  //     questionTags: ["java", "nodejs", "reactjs", "mern"],
  //     userPosted: "meera",
  //     askedOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "ayan",
  //       answeredOn: "jan 2",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 2,
  //     upVotes: 4,
  //     downVotes: 2,
  //     noOfAnswers: 5,
  //     questionTitle: "What is a function?",
  //     QuestionBody: "It meant to be",
  //     questionTags: ["java", "nodejs", "reactjs", "mern"],
  //     userPosted: "meera",
  //     askedOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "ayan",
  //       answeredOn: "jan 2",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 3,
  //     upVotes: 3,
  //     downVotes: 3,
  //     noOfAnswers: 3,
  //     questionTitle: "What is a function?",
  //     QuestionBody: "It meant to be",
  //     questionTags: ["java", "nodejs", "reactjs", "mern"],
  //     userPosted: "meera",
  //     askedOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "ayan",
  //       answeredOn: "jan 2",
  //       userId: 2,
  //     }]
  //   }
  // ]

  const location = useLocation();
  const user = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();

  const questionsList = useSelector(state => state.questionsReducer)
  console.log(questionsList)

  const redirect = () => {
    alert("login or signup to ask a question")
    navigate('/Auth')
  }

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div >
        {
          questionsList.data == null ?
            <h1>Loading.....</h1> :
            <>
              <p>{questionsList.data.length} questions</p>
              <QuestionsList questionsList={questionsList.data} />
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainBar