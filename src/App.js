import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Main, Mypage, NotFound, PostDetail, Write } from "./pages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/post/:id" element={<PostDetail />}></Route>
            <Route path="/mypage" element={<Mypage />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
