import styled from "styled-components";

const dark = {
    name: "dark",
    background: "#4F4F4F",
    main: "#1C1C1C",
    title: "#ddd",
    text: "#ccc",
    imgbackground: "#F0F8FF"
};

const light = {
    name: "light",
    background: "#B0C4DE",
    main: "#F0F8FF",
    title: "#333",
    text: "#444",
    imgbackground: "#F0F8FF"
}

export {
    dark,
    light
};

export const BodySld = styled.div`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color:${props => props.theme.background};
    box-sizing: border-box;
    align-items: center;
`;
export const BarSld = styled.div`
    margin-bottom: 20px;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const Logo = styled.img`
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100px;
`;

export const Titulo = styled.h1`
    margin-top: 10px;
    color: ${(props) => (props.theme === "light" ? light.text : dark.text)};
    font-size: 1.6rem;
`;
export const Conteudo = styled.p`
    font-size: 1.2rem;
    text-align: justify;
    color: ${props => props.theme === 'light' ? light.text : dark.text};
    border-bottom: 1px solid #ccc;
    padding-top: 5px;
    padding-bottom: 5px;
`

export const TeamContainer = styled.div`
    margin-top: 5px;
    margin-bottom: 15px;
`
export const ConteudoMatch = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    color: ${props => props.theme === 'light' ? light.text : dark.text};
    margin-top: 5px;
`

export const ContainerMatch = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`

export const MatchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
`

export const MatchCont = styled.div`
    display: grid;
    grid-template-columns: 100px 10px 130px;
`

export const X = styled.span`
    text-align: center;
    font-weight: bold;
    margin-right: 5px;
    margin-left: 5px;
`;

export const Titulos = styled.h1`
    text-align: center;
    margin-top: 10px;
    color: ${props => props.theme === 'light' ? light.text : dark.text};
    font-size: 1.6rem;
`
export const ButtonTheme = styled.button`
    background-color: "red";
`

export const MainContainer = styled.div`
    background-color: ${props => props.theme === 'light' ? light.background : dark.background};
    color: ${props => props.theme === 'light' ? light.text : dark.text};
    padding: 40px;
    min-width: 90%;
    @media (max-width: 800px) {
        min-width: 80%;
    }
`

export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    background-color: ${props => props.theme === 'light' ? light.main : dark.main};
    color: ${props => props.theme === 'light' ? light.text : dark.text};
    border-radius: 5px;
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`