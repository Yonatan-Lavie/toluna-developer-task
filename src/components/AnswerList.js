import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { removeAnswer } from '../redux/actions'
import { loadData } from '../redux/thunks'
import { getfilteredAnswers, getLayout } from '../redux/selectors'
import AnswerListItem from '../components/AnswerListItem'
import styled from "styled-components";

const ListWarrper = styled.div`
max-height: 500px;
overflow: auto;
/* this will hide the scrollbar in mozilla based browsers */
overflow: -moz-scrollbars-none;
scrollbar-width: none;
/* this will hide the scrollbar in internet explorers */
-ms-overflow-style: none;
::-webkit-scrollbar { 
  width: 0 !important;
  display: none;
`;
const AnswerListWarrper = styled.div`
  margin: auto;
  width: 688px;



`;
const AnswerListHeader = styled.div`
  margin: auto;
  width: 688px;
  height: 53px;
  border-bottom: 1px solid white;
  color: #fff;
  font-size: 16pt;
`;

const AnswerList = ({ layout, startLoadingData, answers= [], onRemovePressed }) => {
  useEffect(() => {
    startLoadingData();
}, []);

  return (
    <AnswerListWarrper>
      <AnswerListHeader className="d-flex bd-highlight" >
        <div className="p-2 w-25" style={{ textAlign: "right", borderRight: "1px solid #fff" }}>
            Image
        </div>
        <div className="p-2">
          Text
        </div>
      </AnswerListHeader>
      <ListWarrper>
        {answers.map(
          (item) => 
          <AnswerListItem answer={item} onRemovePressed={onRemovePressed} layout={layout}/>
          ) }
      </ListWarrper>

      
    </AnswerListWarrper>
  )
}

const mapStateToProps = (state) => ({
  answers: getfilteredAnswers(state),
  layout: getLayout(state),
})

const mapDispatchToProps = (dispatch) => ({
  startLoadingData: () => dispatch(loadData()),
  onRemovePressed: (answer) => dispatch(removeAnswer(answer)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AnswerList)


