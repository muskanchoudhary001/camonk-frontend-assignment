import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import BlogPage from "@/pages/BlogPage"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import CreateBlogForm from "./components/blog/CreateBlogForm"
import PageNotFound from "./pages/PageNotFound"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/createblog" element={<CreateBlogForm />} />
         <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}



