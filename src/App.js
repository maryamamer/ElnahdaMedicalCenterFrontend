import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import "./App.css";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs"
import Doctors from "./pages/Doctors"
import patient_portal from "./pages/patient_portal"
import HomePage from "./pages/Home"
import EditPatient from "./pages/EditPatient";
import Footer from "./components/Footer"
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import Forget from "./pages/Forget";
import logout from "./components/logout";
import prescription from "./components/prescription"
import appointments from './components/appointments'
import Add_doctor from "./pages/add_doctor"
import Dr_Profile from "./pages/Dr_profile";
import Booking from "./components/booking";

import RestPass from "./pages/RestPass"

import Message from "./components/Message";
import Chatbot from './components/chatbot/Chatbot';
import Comment from "./components/comments";
import Recommend from "./components/recommendations";
import chat from "./components/liveChat/chat";
import AdminPanel from "./pages/AdminPanel";
import Edituser from "./pages/edituser";
import adduser from "./pages/adduser";
import DoctorList from "./pages/DoctorList";
import Editdoctor from "./pages/Editdoctor";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Toaster } from "react-hot-toast";
import { Payment } from "./pages/Payment.js";



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
            <Route path={"/admin/users"} exact component={AdminPanel} />
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