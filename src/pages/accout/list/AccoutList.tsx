/* eslint-disable react-hooks/set-state-in-effect */
import { 
    AccoutContainer,
    UserInfo,
    UserInfoTitle,
    UserTitle,
    AddNew,
    AddNewLink,
    UserInfoList,
    ColumnName,
    ColumnNameDiv,
    Column,
    TableRow,
    TableRowFlex,
    TableCell,
    ActionButton,
    EditButton,
    DeleteButton,
    ActionIcon,
    Overlay,
    DeleteUser,
    DeleteUserDiv,
    ModalActions,
    DeleteBtn,
    CanCelBtn,
    EmptyState,
} from "../../../styles/pages/accout/list/AccoutList"
import deleteImg from '../../../assets/delete.png';
import editImg from '../../../assets/edit.png'
import { useState, useEffect } from "react";
import { getUserList, deleteUserApi } from "../../../service/users.api";
import type { User } from "../../../components/user/user";
import DefaultUserProfile from '../../../assets/user_profile.png';
import EditPopup from "../detail/EditPopup";

export default function AccoutList() {
    const [users, setUsers] = useState<User[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    // const [phoneName, setPhoneName] = useState("");
    // const [emailAddress, setEmailAddress] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
  


    const deletePopup = (id: number) => {
        setSelectedUserId(id);
        setIsDeleteOpen(true);
    }

    const canCel = () => {
        setIsDeleteOpen(false);
    }


    /** 목록 조회 */
    const fetchUsers = async () => {
        try {
            const res = await getUserList();
            setUsers(res.data);
        } catch (error) {
            console.error("유저 목록 조회 실패", error);
            alert("목록을 불러오지 못했습니다.");
        } 
    };
    
    /** 삭제 하기 */
    const deleteUser = async () => {
        if (!selectedUserId) return;

        try {
            await deleteUserApi(selectedUserId);
            alert("Delete");

            setIsDeleteOpen(false);
            setSelectedUserId(null);

            fetchUsers(); 
        } catch (error) {
            console.error("삭제 실패", error);
            alert("삭제 실패");
        }
    };




    useEffect(() => {
        fetchUsers();
    }, []);


    // useEffect(() => {
    //     if (isOpen) {
    //       document.body.style.overflow = 'hidden'; 
    //     } else {
    //       document.body.style.overflow = 'auto'; 
    //     }

    //     return () => {
    //         document.body.style.overflow = 'auto'; 
    //     };
    // }, [isOpen]);

    


    return (
        <>
            <AccoutContainer>
                <UserInfo>
                    <UserInfoTitle>
                        <UserTitle>UserInfo</UserTitle>
                        <AddNew>
                            <AddNewLink to="/add">AddNew</AddNewLink>
                        </AddNew>
                    </UserInfoTitle>
                    <UserInfoList>
                        <ColumnName>
                            <ColumnNameDiv>
                                <Column>PhoneNumber</Column>
                                <Column>Email Address</Column>
                                <Column>Phone Number</Column>
                                <Column>Action</Column>
                            </ColumnNameDiv>
                        </ColumnName>

                        {users.length === 0 ? (
                            <TableRow>
                                <TableRowFlex>
                                    <EmptyState>데이터가 비워 있습니다.</EmptyState>
                                </TableRowFlex>
                            </TableRow>
                            ) : (
                            users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableRowFlex>
                                        <img
                                            src={
                                                user.profile_image ? 
                                                `http://localhost:3000${user.profile_image}`: DefaultUserProfile
                                            }
                                            alt="profile"
                                            style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            marginRight: "8px",
                                            background: "red"
                                            }}
                                        />
                                        <TableCell>{user.phone_name}</TableCell>
                                        <TableCell>{user.email_address}</TableCell>
                                        <TableCell>{user.phone_number}</TableCell>
                                        <ActionButton>
                                            <EditButton onClick={() => setIsOpen(true)}>
                                                <ActionIcon src={editImg} />
                                            </EditButton>
                                            <DeleteButton onClick={() => deletePopup(user.id)}>
                                                <ActionIcon src={deleteImg} />
                                            </DeleteButton>
                                        </ActionButton>
                                    </TableRowFlex>
                                </TableRow>
                            ))
                        )}
                
                    </UserInfoList>
                </UserInfo>
            </AccoutContainer>

            {/* 수정 상세화면 */}
            {isOpen && <Overlay />}
            {isOpen && <EditPopup />}
    
         

            {/* 삭제하기 */}
            {isDeleteOpen && <Overlay />}
            {isDeleteOpen && 
            <DeleteUser>
                <DeleteUserDiv>
                    <ModalActions>
                        <DeleteBtn onClick={deleteUser}>Delete</DeleteBtn>
                        <CanCelBtn onClick={canCel}>CanCel</CanCelBtn>
                    </ModalActions>
                </DeleteUserDiv>    
            </DeleteUser>}
        </>
    )
}