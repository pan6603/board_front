import { 
    UserCreateContainer,
    UserAddFromDiv,
    UserAddFromTitle,
    ButtonGroup,
    SubmitButton,
    CancelButton,
    CancelButtonLink,
    UserAddFrom,
    PhoneNameDiv,
    EmailAddressDiv,
    PhoneNumberDiv,
    PhoneNameText,
    PhoneNameInput,
    EmailAddressText,
    EmailAddressInput,
    PhoneNumberText,
    PhoneNumberInput,
    UserProfile
} from "../../../styles/pages/accout/post/UserCreate"
import userProfileImg from '../../../assets/user_profile.png'


export default function UserCreate() {
    return (
        <>
            <UserCreateContainer>
                <UserAddFromDiv>
                    <UserAddFromTitle>
                        <UserProfile src={userProfileImg}/>
                    </UserAddFromTitle>

                    <UserAddFrom>
                        <PhoneNameDiv>
                            <PhoneNameText>PhoneName</PhoneNameText>
                            <PhoneNameInput />
                        </PhoneNameDiv>

                        <EmailAddressDiv>
                            <EmailAddressText>Email</EmailAddressText>
                            <EmailAddressInput />
                        </EmailAddressDiv>

                        <PhoneNumberDiv>
                            <PhoneNumberText>PhoneNumber</PhoneNumberText>
                            <PhoneNumberInput />
                        </PhoneNumberDiv>
                    </UserAddFrom>

                    <ButtonGroup>
                        <SubmitButton>Submit</SubmitButton>
                        <CancelButtonLink to="/">
                            <CancelButton>CanCel</CancelButton>
                        </CancelButtonLink>
                    </ButtonGroup>
                </UserAddFromDiv>
            </UserCreateContainer>
        </>
    )
}