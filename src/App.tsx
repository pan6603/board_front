import AccoutList from "./pages/accout/list/AccoutList"
import UserCreate from "./pages/accout/post/UserCreate";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccoutList />}/>
          <Route path="/add" element={<UserCreate />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
