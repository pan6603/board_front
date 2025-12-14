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
import { getUserList } from "../../../service/api";
import type { User } from "../../../components /user/user";

export default function AccoutList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const edit_user = () => {
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

    // if(fetchUsers.length == 0){
    //     return (
    //         <div className="empty">등록된 할 일이 없습니다.</div>
    //     )
    // }

      /** 목록 조회 */
    const fetchUsers = async () => {
        try {
            const res = await getUserList();
            setUsers(res.data);
        } catch (error) {
            console.error("유저 목록 조회 실패", error);
            alert("목록을 불러오지 못했습니다.");
        } finally {
        setLoading(false);
        }
    };

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

    if (loading) return <div>로딩중...</div>;

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

                        {/* 데이터 출력 */}
                        {users.map((user) => ( 
                            <TableRow key={user.id}>
                                <TableRowFlex>
                                    <TableCell>{user.phone_name}</TableCell>
                                    <TableCell>{user.email_address}</TableCell>
                                    <TableCell>{user.phone_number}</TableCell>
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
                        ))}

                
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