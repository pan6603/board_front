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
import { useNavigate } from "react-router-dom";
import { uploadProfileApi } from "../../../service/api";


export default function UserCreate() {
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const [phoneName, setPhoneName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // form 기본 동작 막기

    const formData = new FormData();

    formData.append("phone_name", phoneName);
    formData.append("email_address", emailAddress);
    formData.append("phone_number", phoneNumber);

    if (profileFile) {
      formData.append("profile_image", profileFile);
    }

    try {
      await uploadProfileApi(formData);
      alert("등록 완료");
      navigate("/");
    } catch (error) {
      console.error("등록 실패", error);
      alert("실패");
    }
  };



  // const handleSubmit = async () => {
  //   try {
  //     await createUser({
  //       phone_name: phoneName,
  //       email_address: emailAddress,
  //       phone_number: phoneNumber,
  //     });

  //     alert("Success");
  //     navigate("/");

  //   } catch (error) {
  //     alert("등록 실패");
  //     console.error(error);
  //   }
  // };


  return (
    <>
      <UserCreateContainer>
          <UserAddFromDiv>
                <UserAddFrom>
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
                                setProfileFile(file); 
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
