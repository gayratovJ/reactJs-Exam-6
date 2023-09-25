import { BrowserRouter, Route, Routes } from "react-router-dom";
import Front from "./components/layout/front";
import HeroPage from "./pages/HeroPage";
import Category from "./pages/Category";
import Posts from "./pages/Posts"
import Blog from "./pages/Blog"
import AboutUs from "./pages/AboutUs"
import MyPost from "./pages/MyPost"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />}>
          <Route index element={<HeroPage />} />
          <Route path="category" element={<Category />} />
          <Route path="posts" element={<Posts />} />
          <Route path="blog/:blogsId" element={<Blog />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="myposts" element={<MyPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
