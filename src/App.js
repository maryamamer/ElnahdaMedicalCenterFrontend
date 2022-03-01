import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import "./App.css";
import NavBar from "./components/NavBar";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs"
import Doctors from "./components/Doctors"
import patient_portal from "./components/patient_portal"
import HomePage from "./components/Home"
import EditPatient from "./components/EditPatient";
import Footer from "./components/Footer"
import ProfilePage from "./components/ProfilePage";
import Login from "./components/Login";
import Forget from "./components/Forget";
import logout from "./components/logout";
import prescription from "./components/prescription"
import appointments from './components/appointments'
import Add_doctor from "./pgaes/add_doctor"
import Dr_Profile from "./components/Dr_profile";
import Booking from "./components/booking";

import RestPass from "./components/RestPass"

import Message from "./components/Message";
import Chatbot from './components/chatbot/Chatbot';
import Comment from "./components/comments";
import Recommend from "./components/recommendations";
import chat from "./components/liveChat/chat";
import Admin from "./pgaes/adminpanel";
import Edituser from "./components/edituser";
import adduser from "./pgaes/adduser";
import DoctorList from "./pgaes/doctorlist";
import Editdoctor from "./pgaes/Editdoctor";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Toaster } from "react-hot-toast";
import { Payment } from "./components/Payment.js";



// import Dr_Profile from "./components/Dr_profile";


export default function App(props) {

  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <NavBar />

          <Switch>

            <Route path={"/"} exact component={HomePage} />
            <Route path={"/dr/:id"} exact component={Dr_Profile} />
            <Route path={"/booking/:id"} exact component={Booking} />
            <Route path={"/Home"} exact component={HomePage} />
            <Route path={"/ContactUs"} exact component={ContactUs} />
            <Route path={"/Chatbot"} exact component={Chatbot} />
            <Route path={"/AboutUs"} exact component={AboutUs} />
            <Route path={"/Logout"} exact component={logout} />
            <Route path={"/EditPatient/:id"} exact component={EditPatient} />
            <Route path={"/Doctors"} exact component={Doctors} />
            <Route path={"/patientPortal"} exact component={patient_portal} />
            <Route path={"/prescription"} exact component={prescription} />
            <Route path={"/appointments"} exact component={appointments} />
            <Route path={"/Message"} exact component={Message} />
            <Route path={"/Patient/:id"} exact component={ProfilePage} />
            <Route path={"/Login"} exact component={Login} />
            <Route path={"/Message"} exact component={Message} />
            <Route path={"/Forget"} exact component={Forget} />
            <Route path={"/RestPass"} exact component={RestPass} />
            <Route path={"/recommend/:id"} exact component={Recommend} />
            <Route path={"/comments"} exact component={Comment} />
            <Route path={"/chat"} exact component={chat} />
            <Route path={"/admin/users"} exact component={Admin} />
            <Route path={"/edituser/:id"} exact component={Edituser} />
            <Route path={"/add"} exact component={adduser} />
            <Route path={"/admin/doctors"} exact component={DoctorList} />
            <Route path={"/admin/add/doctor"} exact component={Add_doctor} />
            <Route path={"/admin/editdoctor/:id"} exact component={Editdoctor} />
            <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
              <Toaster position="top-center" />
              <Route path={"/Payment/:id"} exact component={Payment} />
            </PayPalScriptProvider>

          </Switch>
          <Footer />
        </Provider>
      </Router>
    </div>
  );





}