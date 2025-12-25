import { 
    EditUser,
    CloseIconDiv,
    CloseIcon,
    EditProfile,
    EditProfileImg,
    EditInputDiv,
    PhoneNameEditInputDiv,
    PhoneNameEditInputTitle,
    PhoneNameEditInput,
    EmailAddressEditInputDiv,
    EmailAddressEditInputTitle,
    EmailAddressEditInput,
    PhoneNumberEditInputDiv,
    PhoneNumberEditInputTitle,
    PhoneNumberEditInput,
    EditUserButtonGroup,
    EditBtn,
    // Overlay
} from "../../../styles/pages/accout/detail/EditPopup"
// import { useState } from "react";
import closeImg from '../../../assets/close.png'
// import DefaultUserProfile from '../../../assets/user_profile.png';
// import { getUserList, editUserApi, getUserDetailApi } from "../../../service/api";



export default function EditPopup() {
    // const [phoneName, setPhoneName] = useState("");
    // const [emailAddress, setEmailAddress] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [profileImg, setProfileImg] = useState<string>("");

    // const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    // const [isOpen, setIsOpen] = useState(false);
    // const [users, setUsers] = useState<User[]>([]);
    

    //   const editPopup = async (id: number) => {
    //     try {
    //         setSelectedUserId(id);

    //         const res = await getUserDetailApi(id);
 
    //         setProfileImg(res.data.profile_image);
    //         setPhoneName(res.data.phone_name);
    //         setEmailAddress(res.data.email_address);
    //         setPhoneNumber(res.data.phone_number ?? "");

    //         setIsOpen(true);
    //     } catch (error) {
    //         console.error("유저 조회 실패", error);
    //         alert("유저 정보를 불러오지 못했습니다.");
    //     }
    // };

    // const editUser = async () => {
    //     if (!selectedUserId) return;

    //     try {
    //         await editUserApi(selectedUserId, {
    //             phone_name: phoneName,
    //             email_address: emailAddress,
    //             phone_number: phoneNumber,
    //         });

    //         alert("Edit > Success");

    //         setIsOpen(false);
    //         setSelectedUserId(null);
    //         fetchUsers();  
    //     } catch (error) {
    //         console.error("수정 실패", error);
    //         alert("수정실패");   
    //     }
    // }

    // const fetchUsers = async () => {
    //     try {
    //         const res = await getUserList();
    //         console.log(res.data)
    //         // setUsers(res.data);
    //     } catch (error) {
    //         console.error("유저 목록 조회 실패", error);
    //         alert("목록을 불러오지 못했습니다.");
    //     } 
    // };


    return (
        <>
            {/* {isOpen && <Overlay />} */}

            <EditUser>
                <CloseIconDiv>
                    <CloseIcon src={closeImg} />
                </CloseIconDiv>

                <EditProfile>
                    <EditProfileImg
                        // src={
                        //     profileImg
                        //     ? `http://localhost:3000${profileImg}`
                        //     : DefaultUserProfile
                        // }
                    />
                </EditProfile>
                <EditInputDiv>
                    <PhoneNameEditInputDiv>
                        <PhoneNameEditInputTitle>PhoneName</PhoneNameEditInputTitle>
                        <PhoneNameEditInput 
                            // value={phoneName}
                            // onChange={(e) => setPhoneName(e.target.value)}
                        />
                    </PhoneNameEditInputDiv>

                    <EmailAddressEditInputDiv>
                        <EmailAddressEditInputTitle>Email</EmailAddressEditInputTitle>
                        <EmailAddressEditInput 
                            //  value={emailAddress}
                            //  onChange={(e) => setEmailAddress(e.target.value)}
                        />
                    </EmailAddressEditInputDiv>

                    <PhoneNumberEditInputDiv>
                        <PhoneNumberEditInputTitle>PhoneNumber</PhoneNumberEditInputTitle>
                        <PhoneNumberEditInput 
                            // value={phoneNumber}
                            // onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </PhoneNumberEditInputDiv>
                </EditInputDiv>  

                <EditUserButtonGroup>
                    <EditBtn>Edit</EditBtn>
                </EditUserButtonGroup>      
            </EditUser>
        </>
    )
}