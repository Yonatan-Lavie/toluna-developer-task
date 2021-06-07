// in this file we will hold filtered answers list .


// UI:
//      container

//          list of answers




// redux :

//      state

//          answers filterd list        

//      dispatch

//          remove answer


import React from 'react'
import styled from "styled-components";
import AnswerList from '../components/AnswerList'




const AnswersListContainer = () => {
    return (
        <div>

            <AnswerList />            
        </div>
    )
}

export default AnswersListContainer
