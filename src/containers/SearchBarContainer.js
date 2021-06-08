import React, {useState} from 'react'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { connect } from 'react-redux'
import {updateSearchBar} from '../redux/actions'
import { getLayout } from '../redux/selectors';


const SearchButton = styled(Button)`
    width:${props => props.layout === "mobile" ? "636px;" : "120px;"}
    border-radius: 0px;
    background-color: #d6db44;
    color: #2e353f;
    border: 0px;
    font-family: Arial;
    font-weight: bold;
    font-size: 16pt;
`;

const SearchFormControl = styled(FormControl)`
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

const SearchBarContainerWrapper = styled.div`  
    display: block;
    margin-left: auto;
    margin-right: auto;    
    width: 688px;
`;

const TitleWarpper = styled.div`
    height: 83px;
    padding: 20px;
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

const SearchBarContainer = ({layout, onSubmitClick}) => {
    const [input, setInput] = useState("")
    return (
        <SearchBarContainerWrapper layout={layout}>
            <TitleWarpper>
                <LineOnSideHeaderContainer>
                    Answers
                </LineOnSideHeaderContainer>
            </TitleWarpper>

            <InputGroupWrapper >
                <SearchFormControl  
                            layout={layout}
                            as={layout === "mobile" ? "textarea" : "input"}
                            rows={layout === "mobile" ? 2 : 1}
                            placeholder="Search answers" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} />
                <InputGroup.Append>
                <SearchButton layout={layout} onClick={(e) => onSubmitClick(input)} >Search</SearchButton>
                </InputGroup.Append>
            </InputGroupWrapper>
        </SearchBarContainerWrapper>
    )
}

const mapStateToProps = (state) => ({
    layout: getLayout(state)
})

const mapDispatchToProps = (dispatch) => ({
    onSubmitClick: (text) => dispatch(updateSearchBar(text)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer)

