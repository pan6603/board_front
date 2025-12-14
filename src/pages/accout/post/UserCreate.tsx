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
import { useState } from "react";
import { createUser } from "../../../service/users";
import { useNavigate } from "react-router-dom";



export default function UserCreate() {
  const navigate = useNavigate();

  const [phoneName, setPhoneName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const handleSubmit = async () => {
    try {
      await createUser({
        phone_name: phoneName,
        email_address: emailAddress,
        phone_number: phoneNumber,
      });

      alert("사용자 등록 완료");
      navigate("/");

    } catch (error) {
      alert("등록 실패");
      console.error(error);
    }
  };

  return (
    <>
      <UserCreateContainer>
        <UserAddFromDiv>
          <UserAddFromTitle>
            <UserProfile src={userProfileImg} />
          </UserAddFromTitle>

          <UserAddFrom>
            <PhoneNameDiv>
              <PhoneNameText>PhoneName</PhoneNameText>
              <PhoneNameInput
                value={phoneName}
                onChange={(e) => setPhoneName(e.target.value)}
              />
            </PhoneNameDiv>

            <EmailAddressDiv>
              <EmailAddressText>Email</EmailAddressText>
              <EmailAddressInput
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </EmailAddressDiv>

            <PhoneNumberDiv>
              <PhoneNumberText>PhoneNumber</PhoneNumberText>
              <PhoneNumberInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </PhoneNumberDiv>
          </UserAddFrom>

          <ButtonGroup>
            <SubmitButton onClick={handleSubmit}>
              Submit
            </SubmitButton>
            <CancelButtonLink to="/">
              <CancelButton>Cancel</CancelButton>
            </CancelButtonLink>
          </ButtonGroup>
        </UserAddFromDiv>
      </UserCreateContainer>
    </>
  );
}
