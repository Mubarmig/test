import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import BookingList from './pages/BookingList';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Header isLoggedIn={true} />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/mypage/userInfo" element={<Mypage />}></Route>
        <Route path="/mypage/booking-list" element={<BookingList />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
