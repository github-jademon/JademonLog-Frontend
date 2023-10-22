import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "layout/header/Header";
import { Main, Mypage, NotFound, PostDetail, Setting, Write } from "./pages";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const app = document.querySelector(".app-container");
    let header = document.querySelector(".header");
    const handleScroll = (e) => {
      const scrollTop = app.scrollTop;
      if (scrollTop <= 25) {
        header.classList.remove("header--scroll");
      } else {
        header.classList.add("header--scroll");
      }
    };
    app.addEventListener("scroll", handleScroll);
    return () => {
      app.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/post/:id" element={<PostDetail />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route path="/mypage" element={<Mypage />}></Route>
            <Route path="/saves" element={<Mypage />}></Route>
            <Route path="/lists" element={<Mypage />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
