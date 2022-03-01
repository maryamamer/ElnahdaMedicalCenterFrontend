import { PayPalButtons } from "@paypal/react-paypal-js";
import toast from "react-hot-toast";
import '../CSS/Payment.css';
import { PayPalButton } from "react-paypal-button-v2";
import React, { useState, useEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import axios from "axios";

export function Payment() {
    const params = useParams();
    const [state, setState] = useState(0);
    const [doctor, setdoctor] = useState({});
    useEffect(() => {
        axios.get(`/doctors/${params.id}`).then((res) => setdoctor(res.data));
    }, []);
    return (
        <div className="card1">
            <img className="imgPay" src="https://images.unsplash.com/photo-1609429019995-8c40f49535a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="Airtable product" style={{ width: '100%' }} />
            <div className="card-details">
            <h1>دفع الكشف</h1>
            <h3>DR:{doctor.fullname}</h3>
                <input
                    type="number"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="price"
                />
                {/* <PayPalButtons
                    style={{ layout: "horizontal" }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: "10.00"
                                    },
                                    custom_id: "e-book-1234"  // the name or slug of the thing you're selling
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                            toast.success('Payment completed. Thank you, ' + details.payer.name.given_name)
                        });
                    }}
                    onCancel={() => toast(
                        "You cancelled the payment. Try again by clicking the PayPal button", {
                        duration: 6000,
                    })}
                    onError={(err) => {
                        toast.error(
                            "There was an error processing your payment. If this error please contact support.", {
                            duration: 6000,
                        });
                    }}
                /> */}
                <PayPalButton
                    options={{
                        clientId: "AYEgy6dlHP5vU5dK7AqTFs-eqfs3FPCpaI5XaHftPGFcF8MyP-gzNG3uWyGoOkZRqXR81-_43tbrHscn",
                        currency: "USD",
                    }}
                    amount={state}
                    onSuccess={(details, data) => {
                        alert("Transaction completed by " + details.payer.name.given_name);

                        console.log({ details, data });
                    }}
                    onCancel={() => toast(
                        "You cancelled the payment. Try again by clicking the PayPal button", {
                        duration: 6000,
                    })}
                    onError={(err) => {
                        toast.error(
                            "There was an error processing your payment. If this error please contact support.", {
                            duration: 6000,
                        });
                    }}
                />
            </div>
        </div>
    )
}