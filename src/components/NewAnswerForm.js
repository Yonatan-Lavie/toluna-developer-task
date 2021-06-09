import React, { useState, useReducer } from 'react'
import { connect } from 'react-redux'
import {BsPlusCircle} from 'react-icons/bs'
import styled from "styled-components";
import {getLayout, getNextAnswerId} from '../redux/selectors'
import { addNewAnswer } from '../redux/actions';


const AddButton = styled(BsPlusCircle)`
    height: ${props => props.layout === "mobile" ? "126px;" : "64px;"}
    width: ${props => props.layout === "mobile" ? "126px;" : "64px;"}
    color: #d6db4b;
    margin-left: 300px; 
`;

const AddButtonWarpper = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;    
    margin-top: 50px;
    width: 688px;
    color: #fff;
    
`;

const AnswerFormWarpper = styled.div`
    display: flex;
    flex-direction: row;
    height: 53px;
    width: 688px;
    border: 1px solid #fff;
    font-size: 12pt;
    
`;

const ChoseFileButton = styled.input`
    width:100%;
    font-size: 12pt;
    margin: auto;
    padding-left: 5px;
`;
const SaveButton = styled.button`
    width:100%;
    font-size: 16pt;
    background-color: #80ccff; 
    border: none
`;

const AnswerInput = styled.input`
    padding: 5px;
    background: transparent;
    border: none;
    border-left: 1px solid white;
    border-right: 1px solid white;
    color: #fff;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #fff;
    }
`;

const AddAnswerForm = ({layout, toggle, onSaveAnswer, nextId}) => {
    const [answerText, setAnswerText] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    
    const getBase64 = (file) => {
        return new Promise((resolve,reject) => {
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result);
           reader.onerror = error => reject(error);
           reader.readAsDataURL(file);
        });
    }
    
    const onFileChange = function(event){ 
            const file = event.target.files[0];
            getBase64(file).then(base64 => {
              setSelectedFile(base64); 
            });
        }; 

    return (
        <>
            <AnswerFormWarpper>
                    <ChoseFileButton 
                        onChange={onFileChange}
                        type="file" 
                        accept="image/png, image/jpeg"
                        />
                    <AnswerInput 
                        placeholder="Answer text..."
                        onChange={(e) => setAnswerText(e.target.value)}
                        />
                    <SaveButton onClick={() => {
                        if(selectedFile !== null && answerText !== ""){
                            onSaveAnswer(selectedFile,answerText,nextId);
                            toggle();
                        }
                    }}>Save</SaveButton>
            </AnswerFormWarpper>
        </>
    )
}

const AddAnswerButton = ({toggle}) => {
    
    return (
        <AddButtonWarpper>
            <AddButton onClick={toggle}/>
        </AddButtonWarpper>
    );
}

const NewAnswerForm = ({onSaveAnswer,nextId}) => {
    const [buttonClicked, toggle] = useReducer(buttonClicked => !buttonClicked, false)
    return (
        <>
        <AddButtonWarpper>
            {buttonClicked === false  ? <AddAnswerButton toggle={toggle}/>: <AddAnswerForm onSaveAnswer={onSaveAnswer} nextId={nextId} toggle={toggle}/>}
        </AddButtonWarpper>
            
        </>
        
    );
}

const mapStateToProps = (state) => ({
    layout: getLayout(state),
    nextId: getNextAnswerId(state),
})

const mapDispatchToProps = (dispatch) => ({
    onSaveAnswer: (imageURL,text,id) => dispatch(addNewAnswer(imageURL,text,id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAnswerForm)


// <AnswerFormWarpper>
// <Tester style={{flexGrow: 1, order:1}}>
//     <ChoseFileButton>Choose File</ChoseFileButton>
//     {fileName}
// </Tester>
// <Tester style={{flexGrow: 1, order:2}}>
//     <AnswerInput 
//         placeholder="Answer text..."
//         onChange={(e) => setAnswerText(e.target.value)}
//         />
// </Tester>
// <Tester style={{flexGrow: 8, order:3}}>
//     <SaveButton>Save</SaveButton>
// </Tester>
// </AnswerFormWarpper>