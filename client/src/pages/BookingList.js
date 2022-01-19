import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
  width: 100%;
  margin-top: 10%;
  display: flex;
  justify-content: space-evenly;
`;

const SidebarContainer = styled.div`
  width: 10%;
`;

const ListContainer = styled.div`
  margin-left: 10%;
  width: 90%;
`;

const List = styled.div`
  /* border: 1px solid gray;
  border-radius: 5px; */
  /* padding: 0.8rem; */
`;

const BookingList = () => {
  return (
    <Container>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ListContainer>
        <List>부킹리스트</List>
      </ListContainer>
    </Container>
  );
};

export default BookingList;
