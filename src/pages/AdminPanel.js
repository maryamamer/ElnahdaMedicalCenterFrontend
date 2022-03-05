import { React, Component, useState, useEffect, Fragment } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { useResolvedPath } from "react-router";
import { deleteuser } from "../actions/users";
import { useDispatch } from "react-redux";
import '../CSS/AdminPanel.css';
import '../JQuery/adminJQuery'

export default function AdminPanel() {

    const dispatch = useDispatch()
    const [user, setuser] = useState([])
    useEffect(() => {
        axios.get('/users/').then((res) => setuser(res.data))


    }, [])
    const removeuser = (id) => {
        dispatch(deleteuser(id))
      
    }
    return (
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                <Link to="/admin/doctors" className="btn btn-primary" data-toggle="modal"> <span>الأطباء</span></Link>
                                </div>
                                <div className="col-sm-6">
                                    <Link to="/add" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>إضافة</span></Link>
                                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>مسح</span></a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll" />
                                            <label for="selectAll"></label>
                                        </span>
                                    </th>
                                    <th>الصورة</th>
                                    <th>اسم المستخدم</th>
                                    <th>الأيميل</th>
                                    <th>العنوان</th>
                                    <th>رقم الجوال</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((u) => {
                                    return (
                                        <tr key={u.id}>
                                            <td>
                                                <span className="custom-checkbox">
                                                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                    <label for="checkbox1"></label>
                                                </span>
                                            </td>
                                                <td><img src={u.image} style={{ borderRadius: '50%', width: '80px', height: '80px' }}></img></td>
                                                <td>{u.username}</td>
                                                <td>{u.email}</td>
                                                <td>{u.address}</td>
                                                <td>{u.phone}</td>
                                                <td>
                                                    <Link to={`/edituser/${u.id}`} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
                                                    <Link to="/admin/users" className="delete" data-toggle="modal" onClick={()=>{removeuser(u.id)}} ><i className="material-icons"  data-toggle="tooltip" title="Delete">&#xE872;</i></Link>
                                                </td>
                                            </tr>
                                            )
                                })
                                }
                                        </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#">Previous</a></li>
                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" className="page-link">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Edit Modal HTML --> */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-success" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <!-- Edit Modal HTML --> */}
            <div div id="editEmployeeModal" className="modal fade" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Delete Modal HTML --> */}
            <div div id="deleteEmployeeModal" className="modal fade" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-danger" value="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

