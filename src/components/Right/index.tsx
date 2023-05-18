import styled from "styled-components";
import { useContexto } from "../../hooks";


export function Right(){
  const {teams} = useContexto();
  console.log(teams)
    return(
        <WrapperSld>oi</WrapperSld>
    );
}

export const WrapperSld = styled.div`
width: 300px;
background-color: #a5a5a5;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;

export default WrapperSld;