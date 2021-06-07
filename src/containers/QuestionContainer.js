// in this file we will create a container that will contain text area and edit save toggle button.


// UI:
//      container

//          text area

//          toggle button EDIT

//          toggle button SAVE

// redux :

//      state

//          question        

//      dispatch

//          update question

import React, {useState, useReducer, useRef, useEffect} from 'react'
import { connect } from 'react-redux'
import {getLayout, getQuestion} from '../redux/selectors'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import {updateQuestion} from '../redux/actions'


const QuestionButton = styled(Button)`
    width:${props => props.layout === "mobile" ? "636px;" : "120px;"}
`;
const EditButton = styled(QuestionButton)`
    border-radius: 0px;
    background-color: #c5b3d5;
    color: #2e353f;
    border: 0px;
    font-family: Arial;
    font-weight: bold;
    font-size: 16pt;
`;
const SaveButton = styled(QuestionButton)`
    border-radius: 0px;
    background-color: #c5b3d5;
    color: #2e353f;
    border: 0px;
    font-family: Arial;
    font-weight: bold;
    font-size: 16pt;
`;

const QuestionFormControl = styled(FormControl)`
    width: ${props => props.layout === "mobile" ? "636px;" : "568px;"}
    border-radius: 0px;
    height: ${props => props.layout === "mobile" ? "104px;" : "50px;"}
    border: 0px;
    color: #8b8b8b;
    font-family: Arial;
    font-size: ${props => props.layout === "mobile" ? "22pt;" : "12pt;"}
    ${props => props.layout === "mobile" ? "text-align: center;" : ""}
    resize: none;
    padding: 10px;
`;

const InputGroupWrapper = styled(InputGroup)`
    border: 0px;
`;

const QuestionImageWrapper = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;    
    margin-top: 15px;    
    border-radius: 50%;
    width: 105px;
    height: 105px;
`;

const QuestionContainerWrapper = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;    
    width: 688px;
    

`;

const LineOnSideHeaderContainer = styled.h2`
    display: flex;
    width: 100%;
    padding: 0 20% 0 20%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-family: Arial;
    font-size: 22pt;
    &:after ,&:before {
        content: "";
        border-top: 1px solid;
        margin: 0 20px 0 0;
        flex: 1 0 20px;
    }

    &:after {
        margin: 0 0 0 20px;
    }

`;



    
// useEffect((edit) => {
//     setEdit(edit);
// }, [input]);

const QuestionContainer = ({layout, question = {}, onUpdateQuestion}) => {
    
    const [input, setInput] = useState(question.text);
    const [edit, setEdit] = useState(true);
    const inputEl = useRef(null);
    const onButtonClick = () => { 
        inputEl.current.focus();
    };
    
    return (
        <>
        <QuestionContainerWrapper>
            <QuestionImageWrapper src={question.imageURL} />
                <LineOnSideHeaderContainer>
                            Qestion
                </LineOnSideHeaderContainer>
                <InputGroupWrapper className="mb-3">
                    <QuestionFormControl ref={inputEl} type="text" 
                        layout={layout}
                        as={layout === "mobile" ? "textarea" : "input"}
                        rows={layout === "mobile" ? 2 : 1}
                        placeholder={input}
                        value={input} 
                        onChange={(e)=> {
                                setInput(e.target.value);
                                question.text === e.target.value ? setEdit(true) : setEdit(false)
                            } }/>
                    <InputGroup.Append>
                        {edit 
                        ? <EditButton 
                            layout={layout}
                            onClick={onButtonClick}
                            >
                            Edit
                            </EditButton> 
                        : <SaveButton 
                            layout={layout}
                            onClick={() => {
                                onUpdateQuestion(input);
                                setEdit(true);
                            }}
                            >
                            Save
                            </SaveButton >}
                    </InputGroup.Append>
                </InputGroupWrapper>


                
        </QuestionContainerWrapper>

        </>
    )
}

const mapStateToProps = (state) => ({
    question: getQuestion(state),
    layout: getLayout(state),
})

const mapDispatchToProps = (dispatch) => ({
   onUpdateQuestion: (text) => dispatch(updateQuestion(text)), 
});


export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer)

