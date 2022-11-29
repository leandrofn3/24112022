import Styled from 'styled-components'

interface QuartoProps {
    img: string;
}
export const SectionQarto = Styled.section`
height: 20vw;
display: flex;
justify-content: space-around;
align-items: center;
background-color: blue;
`;

export const DivQarto = Styled.div`
height: 90%;
width: 25%;
box-shadow: 3px, 3px;
border: 0.5px solid;
background-color: gray;
padding: 5px;
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
`;

export const img = Styled.img`
<img src="../assets/images/img1.jpg" alt="" />
height: 100px;
width: 100px;
`

export const Quartoh3 = Styled.h3`
font-size: 2rem;
margin-bottom: 0.3rem;
background-color: white;
`;

export const QuartoP = Styled.p`
font-size: 1.3rem;
background-color: yellow;


`;