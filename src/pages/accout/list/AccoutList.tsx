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
    CloseIcon
} from "../../../styles/pages/accout/list/AccoutList"
import deleteImg from '../../../assets/delete.png';
import editImg from '../../../assets/edit.png'
import closeImg from '../../../assets/close.png'
import { useState, useEffect } from "react";

export default function AccoutList() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const edit_user = () => {
        console.log("유저 생성 함수 호출!");
        setIsOpen(true);
    };

    const delete_user = () => {
        console.log("유저 삭제하기!");
        setIsDeleteOpen(true);
    }

    const canCel = () => {
        setIsDeleteOpen(false);
    }

    const close = () => {
        setIsOpen(false);
    }


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
                        <TableRow>
                            <TableRowFlex>
                                <TableCell>임채성</TableCell>
                                <TableCell>pan5158@naver.com</TableCell>
                                <TableCell>010-6603-3800</TableCell>
                                <ActionButton>
                                    <EditButton onClick={edit_user}>
                                        <ActionIcon src={editImg}></ActionIcon>
                                    </EditButton>
                                    <DeleteButton onClick={delete_user}>
                                        <ActionIcon src={deleteImg}></ActionIcon>
                                    </DeleteButton>
                                </ActionButton>
                            </TableRowFlex>
                        </TableRow>
                        <TableRow>
                            <TableRowFlex>
                                <TableCell>임채성</TableCell>
                                <TableCell>pan5158@naver.com</TableCell>
                                <TableCell>010-6603-3800</TableCell>
                                <ActionButton>
                                    <EditButton onClick={edit_user}>
                                        <ActionIcon src={editImg}></ActionIcon>
                                    </EditButton>
                                    <DeleteButton onClick={delete_user}>
                                        <ActionIcon src={deleteImg}></ActionIcon>
                                    </DeleteButton>
                                </ActionButton>
                            </TableRowFlex>
                        </TableRow>
                
                    </UserInfoList>
                </UserInfo>
            </AccoutContainer>

            {isOpen && <Overlay />}

            {isOpen && 
                <EditUser>
                    <CloseIconDiv>
                        <CloseIcon src={closeImg} onClick={close}/>
                    </CloseIconDiv>
                </EditUser>
            }

            {/* 삭제하기 */}
            {isDeleteOpen && <Overlay />}
            {isDeleteOpen && 
            <DeleteUser>
                <DeleteUserDiv>
                    <ModalActions>
                        <DeleteBtn>Delete</DeleteBtn>
                        <CanCelBtn onClick={canCel}>CanCel</CanCelBtn>
                    </ModalActions>
                </DeleteUserDiv>    
            </DeleteUser>}
        </>
    )
}