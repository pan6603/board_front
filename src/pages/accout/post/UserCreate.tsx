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
    UserProfileWrapper,
    UserProfile,
    ProfileOverlay
} from "../../../styles/pages/accout/post/UserCreate"
import userProfileImg from '../../../assets/user_profile.png'
import { useState, useRef } from "react";
import { createUser } from "../../../service/api";
import { useNavigate } from "react-router-dom";



export default function UserCreate() {
  // const [profileFile, setProfileFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

      alert("Success");
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
                <UserAddFrom encType="multipart/form-data">
                    <UserAddFromTitle>
                        <UserProfileWrapper onClick={() => fileInputRef.current?.click()}>
                            <UserProfile src={preview || userProfileImg} />
                            <ProfileOverlay>+</ProfileOverlay>
                            <input
                              type="file"
                              accept="image/*"
                              ref={fileInputRef}
                              style={{ display: "none" }}
                              onChange={(e) => {
                                if (!e.target.files) return;
                                const file = e.target.files[0];
                                setPreview(URL.createObjectURL(file));
                              }}
                            />
                        </UserProfileWrapper>
                    </UserAddFromTitle>

          
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
          

                    <ButtonGroup>
                        <SubmitButton onClick={handleSubmit}>
                          Submit
                        </SubmitButton>
                        <CancelButtonLink to="/">
                            <CancelButton>Cancel</CancelButton>
                        </CancelButtonLink>
                    </ButtonGroup>
                </UserAddFrom>
          </UserAddFromDiv>
      </UserCreateContainer>
    </>
  );
}
