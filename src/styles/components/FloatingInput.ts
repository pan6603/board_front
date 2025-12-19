import styled from "styled-components";


export const FloatingInputDiv = styled.div`
    max-width: 600px;
    width: 100%;
    height: 95px;
    margin: 30px auto;
    position: relative;
`

export const InputName = styled.div`
    font-size: 20px;
    font-family: Medium;
    width: max-content;
    height: 30px;
    color: #000;
`

export const NameInp = styled.input`
    max-width: 600px;
    width: 100%;
    height: 65px;
    border-radius: 24px;
    border: none;
    background-color: #F5F5F5;
    color: #000;
    padding: 30px;
`

interface InputLabelProps {
  up: boolean;
}

export const InputLabel = styled.label<InputLabelProps>`
    width: max-content;
    height: 30px;
    font-size: ${({ up }) => (up ? "14px" : "20px")};
    position: absolute;
    top: ${({ up }) => (up ? "36px" : "45px")};
    left: 35px;
    color: ${({ up }) => (up ? "#888" : "gray")};
    transition: all 0.2s ease;
    pointer-events: none; /* label 클릭 방지 */
`;
