import styled from "styled-components";


export const EditUser = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    width: 100%;
    height: 500px;
    background-color: #f5f5f5;
    z-index: 1000; /* 필요하다면 */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;


export const CloseIconDiv = styled.div`
    max-width: 485px;
    width: 100%;
    height: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: end;
`

export const CloseIcon = styled.img`
    max-width: 30px;
    width: 100%;
    height: 30px;
    cursor: pointer;
`

export const EditProfile = styled.div`
    max-width: 485px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const EditProfileImg = styled.img`
    max-width: 100px;
    width: 100%;
    height: 100px;
    border-radius: 50%;
`


export const EditInputDiv = styled.div`
    max-width: 485px;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const PhoneNameEditInputDiv = styled.div`
    max-width: 485px;
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


export const PhoneNameEditInputTitle = styled.div`
    max-width: 485px;
    width: 100%;
    height: max-content;
    margin-left: 24px;
`


export const PhoneNameEditInput = styled.input`
    max-width: 460px;
    width: 100%;
    height: 35px;
    border: 1px solid gray;
    border-radius: 12px;
    color: #000;
    background-color: #F5F5F5;
    padding: 9px;
`

export const EmailAddressEditInputDiv = styled.div`
    max-width: 485px;
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const EmailAddressEditInputTitle = styled.div`
    max-width: 485px;
    width: 100%;
    height: max-content;
    margin-left: 24px;
`

export const EmailAddressEditInput = styled.input`
    max-width: 460px;
    width: 100%;
    height: 35px;
    border: 1px solid gray;
    border-radius: 12px;
    color: #000;
    background-color: #F5F5F5;
    padding: 9px;
`

export const PhoneNumberEditInputDiv = styled.div`
    max-width: 485px;
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const PhoneNumberEditInputTitle = styled.div`
    max-width: 485px;
    width: 100%;
    height: max-content;
    margin-left: 24px;
`

export const PhoneNumberEditInput = styled.input`
    max-width: 460px;
    width: 100%;
    height: 35px;
    border: 1px solid gray;
    border-radius: 12px;
    color: #000;
    background-color: #F5F5F5;
    padding: 9px;
`

export const EditUserButtonGroup = styled.div`
    max-width: 485px;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

export const EditBtn = styled.button`
    max-width: 145px;
    width: 100%;
    height: 50px;
    background-color: #BED18D;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
        transform: translateY(-3px); 
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    }
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.45); /* 반투명 검정 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* 맨 위에 */
`;
