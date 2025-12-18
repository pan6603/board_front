import { 
   LoginPage,
   Content,
   LoginForm,
   LoginFormTitle,
   FullNameInput,
   EmailInput,
   PasswordInput,
   InputName,
   NameInp,
   FullNameInputLabel,
   EmailInputLabel,
   PasswordInputLabel,
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

export default function Login() {
    return (
        <>
            <LoginPage>
                <Content>
                    <LoginForm>
                        <LoginFormTitle>Create your Free Account</LoginFormTitle>

                        <FullNameInput>
                            <InputName>FullName</InputName>
                            <NameInp />
                            <FullNameInputLabel>Enter your Full Name here</FullNameInputLabel>
                        </FullNameInput>

                        <EmailInput>
                            <InputName>Email</InputName>
                            <NameInp />
                            <EmailInputLabel>Enter your Email here</EmailInputLabel>
                        </EmailInput>

                        <PasswordInput>
                            <InputName>Password</InputName>
                            <NameInp />
                            <PasswordInputLabel>Enter your Password here</PasswordInputLabel>
                        </PasswordInput>

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