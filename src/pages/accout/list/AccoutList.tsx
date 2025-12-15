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
    EditUser,
    DeleteUser,
    DeleteUserDiv,
    ModalActions,
    DeleteBtn,
    CanCelBtn,
    CloseIconDiv,
    CloseIcon,
    EmptyState,
    EditUserButtonGroup,
    EditBtn,
    EditInputDiv,
    PhoneNameEditInputDiv,
    EmailAddressEditInputDiv,
    PhoneNumberEditInputDiv,
    PhoneNameEditInputTitle,
    PhoneNameEditInput,
    EmailAddressEditInputTitle,
    EmailAddressEditInput,
    PhoneNumberEditInputTitle,
    PhoneNumberEditInput
} from "../../../styles/pages/accout/list/AccoutList"
import deleteImg from '../../../assets/delete.png';
import editImg from '../../../assets/edit.png'
import closeImg from '../../../assets/close.png'
import { useState, useEffect } from "react";
import { getUserList, deleteUserApi, editUserApi, getUserDetailApi } from "../../../service/api";
import type { User } from "../../../components /user/user";

export default function AccoutList() {
    const [phoneName, setPhoneName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [users, setUsers] = useState<User[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const editPopup = async (id: number) => {
        try {
            setSelectedUserId(id);

            const res = await getUserDetailApi(id);

            setPhoneName(res.data.phone_name);
            setEmailAddress(res.data.email_address);
            setPhoneNumber(res.data.phone_number ?? "");

            setIsOpen(true);
        } catch (error) {
            console.error("유저 조회 실패", error);
            alert("유저 정보를 불러오지 못했습니다.");
        }
    };


    const deletePopup = (id: number) => {
        setSelectedUserId(id);
        setIsDeleteOpen(true);
    }

    const canCel = () => {
        setIsDeleteOpen(false);
    }

    const close = () => {
        setIsOpen(false);
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

    const editUser = async () => {
        if (!selectedUserId) return;

        try {
            await editUserApi(selectedUserId, {
                phone_name: phoneName,
                email_address: emailAddress,
                phone_number: phoneNumber,
            });

            alert("Edit > Success");

            setIsOpen(false);
            setSelectedUserId(null);
            fetchUsers();  
        } catch (error) {
            console.error("수정 실패", error);
            alert("수정실패");   
        }
    }


    useEffect(() => {
        fetchUsers();
    }, []);


    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'; 
        } else {
          document.body.style.overflow = 'auto'; 
        }

        return () => {
            document.body.style.overflow = 'auto'; 
        };
    }, [isOpen]);


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
                                        <TableCell>{user.phone_name}</TableCell>
                                        <TableCell>{user.email_address}</TableCell>
                                        <TableCell>{user.phone_number}</TableCell>
                                        <ActionButton>
                                            <EditButton onClick={() => editPopup(user.id)}>
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

            {isOpen && <Overlay />}

            {isOpen && 
                <EditUser>
                    <CloseIconDiv>
                        <CloseIcon src={closeImg} onClick={close}/>
                    </CloseIconDiv>

                    <EditInputDiv>
                        <PhoneNameEditInputDiv>
                            <PhoneNameEditInputTitle>PhoneName</PhoneNameEditInputTitle>
                            <PhoneNameEditInput 
                                value={phoneName}
                                onChange={(e) => setPhoneName(e.target.value)}
                            />
                        </PhoneNameEditInputDiv>

                        <EmailAddressEditInputDiv>
                            <EmailAddressEditInputTitle>Email</EmailAddressEditInputTitle>
                            <EmailAddressEditInput 
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                            />
                        </EmailAddressEditInputDiv>

                        <PhoneNumberEditInputDiv>
                            <PhoneNumberEditInputTitle>PhoneNumber</PhoneNumberEditInputTitle>
                            <PhoneNumberEditInput 
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </PhoneNumberEditInputDiv>
                    </EditInputDiv>

                    <EditUserButtonGroup>
                        <EditBtn onClick={editUser}>Edit</EditBtn>
                    </EditUserButtonGroup>
                </EditUser>
            }

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