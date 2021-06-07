// header
import React from 'react';
import { connect } from 'react-redux'
import {getLayout} from '../redux/selectors'
import styled from "styled-components";
import DesktopBackground from '../assets/BG_Desktop.png'
import MobileBackground from '../assets/BG_Mobile.png'
import Logo from '../assets/Toluna-Logo.png'
import AddAnswerContainer from '../containers/AddAnswerContainer'
import QuestionContainer from '../containers/QuestionContainer'
import SearchBarContainer from '../containers/SearchBarContainer'
import AnswersListContainer from '../containers/AnswersListContainer'



const QuestionAnswerPageContainer = styled.div`
    margin: auto;
    background-image: url(${props => props.layout  === "mobile" ? MobileBackground:  DesktopBackground});
    width: ${props => props.layout  === "mobile" ? "750px":  "1152px"};
    height: ${props => props.layout  === "mobile" ? "1334px":  "1152px"};;
    font-family: Arial;
    font-size: 22pt;
`;

const LogoWrapper = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 194px;
    height: 70px;
`;

const QuestionAnswerPage = ({layout}) => {
    return (
        <QuestionAnswerPageContainer layout={layout}>
            <LogoWrapper src={Logo} alt="" />
            <QuestionContainer />
            <SearchBarContainer />
            <AnswersListContainer />
            <AddAnswerContainer />
        </QuestionAnswerPageContainer>
    )
}

const mapStateToProps = (state) => ({
    layout: getLayout(state),
  })
  
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAnswerPage)


