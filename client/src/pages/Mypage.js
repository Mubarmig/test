import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import dummyUsers from '../data/dummyUsers';

const Container = styled.div`
  width: 100%;
  margin-top: 10%;
  display: flex;
  justify-content: space-evenly;
`;

const SidebarContainer = styled.div`
  width: 10%;
`;

const UserContainer = styled.div`
  width: 80%;
  margin-left: 10%;
`;

const User = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.8em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const UserInfo = styled.p`
  margin: 10 0px;
  padding: 0;
`;

// 우선 더미데이터 이용. 추후 데이터 베이스에서 해당 user 조회 기능으로 수정할 예정
// 임의로 user의 id를 1로 해서 해당 유저 정보 조회
const user = dummyUsers.filter((el) => el.id === 1);

const Mypage = () => {
  return (
    <Container>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <UserContainer>
        <User>
          <UserInfo>EMAIL : {user[0].email}</UserInfo>
          <UserInfo>USERNAME : {user[0].username}</UserInfo>
          <UserInfo>MOBILE : {user[0].mobile}</UserInfo>
        </User>
      </UserContainer>
    </Container>
  );
};

export default Mypage;
