import { React, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { add_user } from "../actions/users";
import { useDispatch, connect } from "react-redux";
import { get_doctor } from "../actions/doctor";

function Adduser({ doctor,isdoctor }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_doctor());
  }, []);
  const [userinfo, setuserinfo] = useState({
    password: "",
    last_login: "",
    is_superuser: "",
    first_name: "",
    last_name: "",
    is_staff: "",
    is_active: "",
    date_joined: "",
    username: "",
    fullname: "",
    email: "",
    report: null,
    phone: "",
    date_of_birth: "",
    address: "",
    age: "",
    image: null,
    gender: "",
    guardian_number: "",
    guardian_relation: "",
    doctor_id: "",
  });

  console.log(userinfo);
  const history = useHistory();

  const onChange = (e) =>
    setuserinfo({ ...userinfo, [e.target.name]: e.target.value });

  const handlechange = (e) => {
    let checked = e.target.checked;
    if (checked) {
      setuserinfo({ ...userinfo, [e.target.name]: true });
    } else {
      setuserinfo({ ...userinfo, [e.target.name]: false });
    }
  };
  const [repassword,setrepassword]=useState('')
  const handleimage = (e) => {
    let img = e.target.files[0];
    setuserinfo({ ...userinfo, image: img });
  };
  const handlefile = (e) => {
    let file = e.target.files[0];
    setuserinfo({ ...userinfo, report: file });
  };
  const {
    password,
    last_login,
    is_superuser,
    is_staff,
    is_active,
    date_joined,
    username,
    fullname,
    email,
    report,
    phone,
    date_of_birth,
    address,
    age,
    image,
    gender,
    guardian_number,
    guardian_relation,
    doctor_id,
  } = userinfo;

  const adduser = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("username", username);
    fd.append("email", email);
    fd.append("password", password);
    fd.append("fullname", fullname);
    fd.append("image", image);
    fd.append("report", report);
    fd.append("date_of_birth", date_of_birth);
    fd.append("is_superuser", is_superuser);
    fd.append("is_active", is_active);
    fd.append("last_login", last_login);
    fd.append("date_joined", date_joined);
    fd.append("age", age);
    fd.append("address", address);
    fd.append("is_staff", is_staff);
    fd.append("phone", phone);
    fd.append("doctor_id", doctor_id);
    fd.append("gender", gender);
    fd.append("guardian_number", guardian_number);
    fd.append("guardian_relation", guardian_relation);
 
    dispatch(add_user(fd,username,password,email,repassword));
  };


  return (
    <>
      <form
        method="post"
        className=" bg-light m-3"
        noValidate
        onSubmit={(e) => adduser(e)}
      >
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="username">اسم المستخدم</label>
            <input
              type="text"
              className="form-control"
              value={username}
              id="username"
              name="username"
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="password">الرقم السري</label>
            <input
              type="text"
              className="form-control"
              value={password}
              id="password"
              name="password"
              onChange={(e) => onChange(e)}
              required
            />
            <label htmlFor="repassword">اعادة الرقم السري</label>
            <input
              type="text"
              className="form-control"
              value={repassword}
              id="repassword"
              name="repassword"
              onChange={(e)=>{setrepassword(e.target.value)}}
              required
            />
          <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="email">ميل المستخدم</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="address">العنوان</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={address}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="fullname">الاسم بالكامل</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="gender">النوع</label>

            <select
              className="custom-select "
              onChange={(e) => onChange(e)}
              name="gender"
              value={gender}
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="date_of_birth">تاريخ الميلاد</label>
            <input
              type="date"
              className="form-control"
              id="date_of_birth"
              name="date_of_birth"
              value={date_of_birth}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">الهاتف</label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="age">العمر</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={age}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="image">صورة ان يوجد</label>
            <input
              type="file"
              className="form-control"
              // multiple
              accept="image/*"
              // value={image}
              id="image"
              name="image"
              onChange={(e) => handleimage(e)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="last_login">تاريخ أخر زيارة</label>
            <input
              type="date"
              className="form-control"
              id="last_login"
              name="last_login"
              value={last_login}
              onChange={(e) => onChange(e)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                value={is_staff}
                id="is_staff"
                name="is_staff"
                onChange={(e) => handlechange(e)}
              />
              <label htmlFor="is_staff" className="custom-control-label">
                من العاملين بالمركز ؟
              </label>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="report">ملف به أخر تطورات</label>
            <input
              type="file"
              className="form-control"
              id="report"
              name="report"
              onChange={(e) => handlefile(e)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="is_active"
              name="is_active"
              value={is_active}
              onChange={(e) => handlechange(e)}
            />
            <label htmlFor="is_active" className="custom-control-label">
              هل مازال متواصل معنا؟
            </label>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="date_joined">تاريخ تسجيل الدخول</label>
            <input
              type="date"
              className="form-control"
              value={date_joined}
              id="date_joined"
              name="date_joined"
              onChange={(e) => onChange(e)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="guardian_number">بطاقة الواصي ان وجد</label>
            <input
              type="text"
              className="form-control"
              id="guardian_number"
              name="guardian_number"
              value={guardian_number}
              onChange={(e) => onChange(e)}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="guardian_relation">علاقة الواصي ان وجد</label>
            <select
              className="custom-select "
              onChange={(e) => onChange(e)}
              name="guardian_relation"
              value={guardian_relation}
              id="guardian_relation"
            >
              <option value="first degree">First Degree</option>
              <option value="second degree">Second Degree</option>
            </select>
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="custom-control custom-checkbox mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="is_superuser"
            value={is_superuser}
            name="is_superuser"
            onChange={(e) => handlechange(e)}
          />
          <label className="custom-control-label" for="is_superuser">
            ادمن؟
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="doctor_id">الطبيب الخاص</label>
          <select
            className="custom-select "
            onChange={(e) => onChange(e)}
            name="doctor_id"
            value={doctor_id}
            id="doctor_id"
          >
            {doctor.map((d) => {
              return <option value={d.id}>{d.id}</option>;
            })}
          </select>
        </div>
        <input className="btn btn-primary" type="submit" value="تأكيد" />

        <Link to="/admin/users">
          {" "}
          <button className="btn btn-secondary btn-outline-light">
            الرجوع
          </button>
        </Link>
      </form>
    </>
  );
}
const mapStateToProps = (state) => ({
  users: state.user,
  isdoctor:state.user.isdoctor,
  doctor: state.getdoctor.doctor,
});

export default connect(mapStateToProps, { add_user })(Adduser);
