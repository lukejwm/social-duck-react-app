import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/homePage/Home.tsx";
import About from "./pages/aboutPage/About.tsx";
import Contact from "./pages/contactPage/Contact.tsx";
import Login from "./components/login/Login.tsx";
import Register from "./components/regsitration/Register.tsx";

// import HomePage from "./components/page/HomePage";
// import AddNewProductPage from "./components/page/AddNewProductPage";
// import NoPage from "./components/page/NoPage";

function App() {

  return (
    <>
        <Router>
            <div className="ScoialDuckApp">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path={"/about"} element={<About />} />
                        <Route path={"/contact"} element={<Contact />} />
                        <Route  path="/login" element={<Login />}></Route>
                        <Route  path="/register" element={<Register />}></Route>
                    </Route>
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default App
