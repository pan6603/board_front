import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginPage = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 100vh;
    background-color: #E6F3FF;
    display: flex;
    justify-content: end;
    align-items: center;
`

export const Content = styled.div`
    max-width: 845px;
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ##F5F5F5;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
`

export const LoginForm = styled.form`
    max-width: 600px;
    width: 100%;
    height: 700px;
`

export const LoginFormTitle = styled.div`
    width: max-content;
    height: 39px;
    color: #000;
    margin: 0 auto;
    font-size: 26px;
    font-family: SemiBold;
`



export const ButtonCreateAcc = styled.div`
    max-width: 340px;
    width: 100%;
    height: 60px;
    background-color: #F9ED32;
    margin: 30px auto;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonCreateAccText = styled.div`
    width: max-content;
    height: max-content;
    font-size: 26px;
    color: #000;
`

export const CreateAccoutDiv = styled.div`
    max-width: 600px;
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CreateAccountLink = styled(Link)`
    margin: 8px auto;
    font-size: 14px;
    color: #777;
`

export const Or = styled.div`
    font-size: 24px;
    color: #777;
    text-align: center;
    margin-top: 30px;
`

export const SocialloginGroup = styled.div`
    max-width: 500px;
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
`

export const ButtonGoogle = styled.div`
    max-width: 220px;
    width: 100%;
    height: 55px;
    background-color: green;
    border-radius: 24px;
    display: flex;
    gap: 14px;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 

    &:hover {
        transform: translateY(-4px); 
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    }
`

export const GoogleImgDiv = styled.img`
    max-width: 32px;
    width: 100%;
    height: 32px;
    margin-left: 12px;
`

export const GoogleLoginText = styled.div`
    font-size: 14px;
    color: #000;
`

export const ButtonGithub = styled.div`
    max-width: 220px;
    width: 100%;
    height: 55px;
    background-color: green;
    border-radius: 24px;
    display: flex;
    gap: 14px;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 

    &:hover {
        transform: translateY(-4px); 
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    }
`

export const GithubImgDiv = styled.img`
    max-width: 32px;
    width: 100%;
    height: 32px;
    margin-left: 12px;
`

export const GithubLoginText = styled.div`
    font-size: 14px;
    color: #000;
`