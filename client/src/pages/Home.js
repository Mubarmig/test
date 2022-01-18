import Header from '../components/Header';

const Home = () => {
  return (
    <>
      {/* {일단 임의로 isLoggedIn 값을 true/false로 주어서 Header부분 작동여부 확인} */}
      <Header isLoggedIn={true} />
    </>
  );
};

export default Home;
