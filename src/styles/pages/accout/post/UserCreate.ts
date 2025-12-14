import styled from "styled-components";
import { Link } from 'react-router-dom';

export const UserCreateContainer = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 100vh;
    background-color: #F5F5F5;
`

export const UserAddFromDiv = styled.div`
    max-width: 500px;
    width: 100%;
    height: 600px;
    background-color: #FFFFFF;
    margin: 0 auto;
    margin-top: 30px;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding-bottom: 20px;
`

export const UserAddFrom = styled.form`
    max-width: 500px;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const PhoneNameDiv = styled.div`
    max-width: 500px;
    width: 100%;
    height: 80px;
    margin: 0 auto;
`

export const PhoneNameText = styled.div`
    width: max-content;
    height: max-content;
    color: #000;
    margin-left: 20px;
`

export const PhoneNameInput = styled.input`
    max-width: 350px;
    width: 100%;
    height: 40px;
    background-color: #F5F5F5;
    border-radius: 8px;
    border: 2px solid #FFFFFF;
    margin-left: 20px;
    color: #000;
`


export const EmailAddressDiv = styled.div`
    max-width: 500px;
    width: 100%;
    height: 70px;
    margin: 0 auto;
` 

export const EmailAddressText = styled.div`
    width: max-content;
    height: max-content;
    color: #000;
    margin-left: 20px;
`

export const EmailAddressInput = styled.input`
    max-width: 350px;
    width: 100%;
    height: 40px;
    background-color: #F5F5F5;
    border-radius: 8px;
    border: 2px solid #FFFFFF;
    margin-left: 20px;
    color: #000;
`


export const PhoneNumberDiv = styled.div`
    max-width: 500px;
    width: 100%;
    height: 70px;
    margin: 0 auto;
`

export const PhoneNumberText = styled.div`
    width: max-content;
    height: max-content;
    color: #000;
    margin-left: 20px;
`


export const PhoneNumberInput = styled.input`
    max-width: 350px;
    width: 100%;
    height: 40px;
    background-color: #F5F5F5;
    border-radius: 8px;
    border: none;
    margin-left: 20px;
    color: #000;
`;




export const UserAddFromTitle = styled.div`
    max-width: 600px;
    width: 100%;
    height: max-content;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(63, 87, 255);
    font-size: 24px;
    
`

export const UserProfile = styled.img`
    max-width: 100px;
    width: 100%;
    height: 100px;
`


export const ButtonGroup = styled.div`
    max-width: 600px;
    width: 100%;
    height: 50px;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
`

export const SubmitButton = styled.div`
    max-width: 145px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: #fff;
    background-color: rgb(63, 87, 255);

    &:hover {
        transform: translateY(-4px); 
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    }
`

export const CancelButton = styled.div`
    max-width: 145px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: #000;
    background-color: #f5f5f5;

    &:hover {
        transform: translateY(-4px); 
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    }
`

export const CancelButtonLink = styled(Link)`
    max-width: 145px;
    width: 100%;
    height: 50px;
`