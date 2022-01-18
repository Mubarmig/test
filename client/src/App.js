import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Mypage from './pages/Mypage';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/mypage/userInfo" element={<Mypage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
