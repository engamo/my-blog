import AboutPage from "./Pages/AboutPage";
import ArticleList from "./Pages/ArticleLists";
import ArticlePage from "./Pages/ArticlePage";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Awesome Blog</h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
