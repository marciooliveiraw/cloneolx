import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import './App.css';

import { Template } from "./components/MainComponents";
import Header from "./components/partials/Header";
import Footer from './components/partials/Footer';

import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import NotFound from './pages/NotFound';

const Page = (props) => {
  return(
    <BrowserRouter>
      <Template>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ad/:id" element={<AdPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Template>
    </BrowserRouter>

    
  );
}

const mapStateToProps = (state) => {
  return{
    user:state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return{

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);