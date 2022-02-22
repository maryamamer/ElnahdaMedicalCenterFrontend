import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Auth = createContext();

export default Auth;

export const AuthProvider = ({ children }) => {

  const [authtokens, settokens] = useState(() =>
    localStorage.getItem("authtokens")
      ? localStorage.getItem("authtokens")
      : null
  );
  const [user, setuser] = useState(() =>
    localStorage.getItem("authtokens")
      ? localStorage.getItem("authtokens")
      : null
  );

  let [loading, setloading] = useState(true)

  // localStorage.getItem('authtokens') ? jwt_decode( localStorage.getItem('authtokens')) : null
  const history = useHistory();
  let loginuser = async (e) => {
    // e.preventDefault()
    // const response = await fetch('http://localhost:8000/api/token/',{
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json'

    //     },
    //     body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
    // })
    // let data = await response.json()
    // console.log('data:',data)
    // console.log('response:',response)

    e.preventDefault();
    let response = await axios
      .post("/api/token/", {
        'email': e.target.email.value,
        'password': e.target.password.value,
      })
      .then((res) => {
        if (res.status === 200) {
          settokens(res.data);
          setuser(jwt_decode(res.data.access));
          localStorage.setItem("authtokens", JSON.stringify(res.data));
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  //   let updatetoken = async () => {
  //     let response = await axios
  //       .post(
  //         "http://localhost:8000/api/token/refresh/",
  //         JSON.stringify({ 'refresh': authtokens?.refresh })
  //       )
  //       .then((res) => {
  //         if (res.status === 200) {
  //           settokens(res.data);
  //           setuser(jwt_decode(res.data.access));
  //           localStorage.setItem("authtokens", JSON.stringify(res.data));
  //           history.push("/");
  //         } else {
  //          logoutuser()
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   };

  let logoutuser = () => {
    settokens(null);
    setuser(null);
    localStorage.removeItem("authtokens");
    history.push("/Login");
  };

  let usercontext = {
    user: user,
    loginuser: loginuser,
    logoutuser: logoutuser,
    authtokens: authtokens
  };

  useEffect(() => {
    if (authtokens) {
      setuser(authtokens.access)
    }
    setloading(false)

  }, [authtokens, loading])

  return <Auth.Provider value={usercontext}>{loading ? null : children}</Auth.Provider>;
};
