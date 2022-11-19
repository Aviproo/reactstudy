import React from "react";
import About from "../About";
import Home from "../Home";
import System from "./System";
import HelpDesk from "./Helpdesk";
import Products from "./Products";
import ContactUs from "./Contactus";
import Form from "./Form";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import contactUs from "./Contactus";
function Header(props) {
  return (
    <div>
      <BrowserRouter>
        <div className="header">
          <Link to="" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/System" className="link">
            System
          </Link>
          <Link to="/Products" className="link">
            Product
          </Link>
          <Link to="/HelpDesk" className="link">
            Login
          </Link>
          <Link to="/contactUs" className="link">
            contactUs
          </Link>
        </div>

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/system" element={<System />} />
          <Route path="/products" element={<Products />} />
          <Route path="/helpdesk" element={<Form />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Header;
