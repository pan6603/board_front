import { 
   LoginPage,
   Content,
   LoginForm,
   LoginFormTitle,
//    EmailInput,
//    PasswordInput,
//    InputName,
//    NameInp,
//    EmailInputLabel,
//    PasswordInputLabel,
   ButtonCreateAcc,
   ButtonCreateAccText,
   AlreadyAccount,
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
import FloatingInput from "../../../components /input/FloatingInput";
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

                        {/* <EmailInput>
                            <InputName>Email</InputName>
                            <NameInp />
                            <EmailInputLabel>Enter your Email here</EmailInputLabel>
                        </EmailInput>

                        <PasswordInput>
                            <InputName>Password</InputName>
                            <NameInp />
                            <PasswordInputLabel>Enter your Password here</PasswordInputLabel>
                        </PasswordInput> */}

                        <ButtonCreateAcc>
                            <ButtonCreateAccText>Create Account</ButtonCreateAccText>
                        </ButtonCreateAcc>

                        <AlreadyAccount>Already have a account? Login</AlreadyAccount>

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