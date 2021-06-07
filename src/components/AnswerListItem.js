import {FiMinusCircle} from 'react-icons/fi'
import styled from "styled-components";

const AnswerListItemWarpper = styled.div`
  width: 688px;
  height: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid white;
  position: relative;
  &:hover {
    background-color: #fff;
    opacity: 0.3;
  }
`;

const AnswerImageWarpper = styled.div`
  flex: 3;
`; 
const AnswerImage = styled.img`
  border-radius: 50%;
  width: ${props => props.layout === "mobile" ? "119px;" : "93px;"}
  height: ${props => props.layout === "mobile" ? "119px;" : "93px;"}
  float: right;
`;

const RemoveButton = styled(FiMinusCircle)`
  height: 64px;
  width: 64px;
  color: #d6db4b;
  flex: 1;
  margin-right: 20px;
`;

const AnswerText = styled.div`
  flex: 8;
  margin: 20px;
  color: #fff;
  font-family: Arial;
  font-size: 20pt;
`;
const AnswerListItem = ({ layout, answer, onRemovePressed}) => {
    return (
      <AnswerListItemWarpper horizontal layout>
          <AnswerImageWarpper>
            <AnswerImage src={answer.imageURL} alt="" layout={layout}/>
          </AnswerImageWarpper>
          
          <AnswerText>{answer.text}</AnswerText>

          <RemoveButton onClick={() => onRemovePressed(answer)}/>
      </AnswerListItemWarpper>
    )
}

export default AnswerListItem
