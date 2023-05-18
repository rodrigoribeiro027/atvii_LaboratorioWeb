import styled from "styled-components";
import LeftSld from "../../components/Left";
import RightSld, { Right } from "../../components/Right";

function Main() {
  return (
    <BodySld>
      <BarSld>Titulo</BarSld>
      <WrapperSld>
        <LeftSld>direita</LeftSld>
        <Right/>
      </WrapperSld>

    </BodySld>
  );
}

export default Main;

const BodySld = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color:${props=>props.theme.background};
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const BarSld = styled.div`
background-color: #fffb00;
width: 100%;
`;


const WrapperSld = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;



