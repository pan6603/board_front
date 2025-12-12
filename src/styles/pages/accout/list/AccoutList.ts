import styled from "styled-components";

export const AccoutContainer = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 1117px;
    margin: 0 auto; /* 화면 중앙 */
    background-color: #FFFFFF;
`

export const UserInfo = styled.div`
    max-width: 1194px;
    width: 100%;
    height: 651px;
    background-color: #FFFFFF;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
`

export const UserInfoTitle = styled.div`
    max-width: 1194px;
    width: 100%;
    height: 67px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserTitle = styled.div`
    max-width: 182px;
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(63, 87, 255);
    font-size: 24px;
`

export const AddNew = styled.div`
    max-width: 107px;
    width: 100%;
    height: 40px;
    background-color:#3F57FF;
    color: #fff;
    border-radius: 24px;
    margin-right: 20px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #3246E6; /* 살짝 진한 색 */
        transform: translateY(-3px); 
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    }
`

export const AddNewLink = styled.a`
    max-width: 107px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    cursor: pointer;
`

export const UserInfoList = styled.div`
    max-width: 1194px;
    width: 100%;
    height: 544px;
    background-color: red;
`

export const ColumnName = styled.div`
    max-width: 1194px;
    width: 100%;
    height: 48px;
    background-color: #CAD8EC;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ColumnNameDiv = styled.div`
    max-width: 1094px;
    width: 100%;
    height: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    width: max-content;
    height: max-content;
    font-size: 14px;
    font-weight: 550;
    color: #000;

    &:nth-child(4) {
        margin-right: 50px; 
    }
`

export const TableRow = styled.div`
    max-width: 1194px;
    width: 100%;
    height: 64px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TableRowFlex = styled.tr`
    max-width: 1094px;
    width: 100%;
    height: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const TableCell = styled.td`
    width: max-content;
    height: max-content;
    font-size: 12px;

    &:nth-child(1) {
        margin-left: 10px; 
    }

    &:nth-child(2) {
        margin-left: 60px; 
    }

    &:nth-child(3) {
        margin-left: 40px; 
    }

`

export const ActionButton = styled.div`
    max-width: 128px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const EditButton = styled.div`
    max-width: 56px;
    width: 100%;
    height: 32px;
    background-color: #BAD384;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        transform: translateY(-4px); 
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    }
`

export const DeleteButton = styled.div`
    max-width: 56px;
    width: 100%;
    height: 32px;
    background-color: #DC888B;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        transform: translateY(-4px); 
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    }
`

export const ActionIcon = styled.img`
    max-width: 20px;
    width: 100%;
    height: 20px;
`


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.45); /* 반투명 검정 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* 맨 위에 */
`;


// AddNew 클릭시 
export const UserCreateContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    width: 100%;
    height: 300px;
    background-color: #f5f5f5;
    z-index: 1000; /* 필요하다면 */
    border-radius: 10px;
`;

export const DeleteUser = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    width: 100%;
    height: 150px;
    background-color: #f5f5f5;
    z-index: 1000; /* 필요하다면 */
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DeleteUserDiv = styled.div`
    max-width: 300px;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalActions = styled.div`
    max-width: 300px;
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DeleteBtn = styled.div`
    max-width: 145px;
    width: 100%;
    height: 50px;
    background-color: #D08C8D;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
        transform: translateY(-3px); 
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    }
`

export const CanCelBtn = styled.div`
    max-width: 145px;
    width: 100%;
    height: 50px;
    background-color: #F5F5F5;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
        transform: translateY(-3px); 
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
    }
`
