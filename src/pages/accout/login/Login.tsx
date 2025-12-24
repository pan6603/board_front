import { 
   LoginPage,
   Content,
   LoginForm,
   LoginFormTitle,
   ButtonCreateAcc,
   ButtonCreateAccText,
   CreateAccoutDiv,
   CreateAccountLink,
   Or,
   SocialloginGroup,
   ButtonGoogle,
   ButtonGithub,
   GoogleImgDiv,
   GoogleLoginText,
   GithubImgDiv,
   GithubLoginText
} from "../../../styles/pages/accout/login/Login"
import GooglePng from '../../../assets/login/Google.png';
import GithubPng from '../../../assets/login/GitHub.png';
import FloatingInput from "../../../components/input/FloatingInput";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [passWord, setPassWord] = useState<string>("");

    return (
        <>
            <LoginPage>
                <Content>
                    <LoginForm>
                        <LoginFormTitle>Create your Free Account</LoginFormTitle>

                        <FloatingInput 
                            label="Enter your Email here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="Email"
                        />

                        <FloatingInput 
                            label="Enter your Password here"
                            value={passWord}
                            onChange={(e) => setPassWord(e.target.value)}
                            type="Password"
                        />

                        <ButtonCreateAcc>
                            <ButtonCreateAccText>Log in</ButtonCreateAccText>
                        </ButtonCreateAcc>

                        <CreateAccoutDiv>
                            <CreateAccountLink to="/add">Create Accout</CreateAccountLink>
                        </CreateAccoutDiv>
     
                        <Or> - OR -</Or>

                        <SocialloginGroup>

                            <ButtonGoogle>
                                <GoogleImgDiv src={GooglePng} />
                                <GoogleLoginText>Sing up with Google</GoogleLoginText>
                            </ButtonGoogle>

                            <ButtonGithub>
                                <GithubImgDiv src={GithubPng} />
                                <GithubLoginText>Sing up with Github</GithubLoginText>
                            </ButtonGithub>

                        </SocialloginGroup>
                    </LoginForm>
                </Content>
            </LoginPage>
        </>
    )
}