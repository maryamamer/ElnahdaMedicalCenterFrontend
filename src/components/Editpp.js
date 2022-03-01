import React from "react";
import pp from "../media/images/pp.png";
import "../CSS/Profile.css";


import { Link } from "react-router-dom";

function ProfilePage() {

    return (
        <>
            <div className="row">
                <div className="col-xl-2">
                    <div className="card ">
                        <div className="card-body">
                            {/* <div className="d-flex flex-column align-items-center text-center"> */}

                                <div className="mt-3">
                                    <div className="row" >
                                        <div className="col-md-4">
                                            <img
                                                src={pp}
                                                alt="Admin"
                                                className="rounded-circle"
                                                width={100}
                                                id="photo"
                                            />
                                            <div className="card " >
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <h6 className="mb-0">الاسم بالكامل</h6>
                                                        </div>
                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="text" class="form-control" value="من فضلك ادخل اﻻسم" />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <h6 className="mb-0"> البريد الألكتروني </h6>
                                                        </div>
                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="text" class="form-control" value="email@example.com" />
                                                        </div>

                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <h6 className="mb-0">الهاتف المنزلى</h6>
                                                        </div>
                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="text" class="form-control" value="0103337" />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <h6 className="mb-0">الجوال</h6>
                                                        </div>

                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="text" class="form-control" value="01057878" />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <h6 className="mb-0">العنوان</h6>
                                                        </div>
                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="text" class="form-control" value="من فضلك ادخل العنوان" />
                                                        </div>

                                                    </div>
                                                    <hr />
                                                    <div className="row">

                                                        <div class="col-sm-3"></div>
                                                        <div class="col-sm-9 text-secondary">
                                                            <input type="button" class="btn btn-primary px-4" value="حفظ التغيرات" />
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProfilePage;
