import { React, Component, useState, useEffect, Fragment  } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { useResolvedPath } from "react-router";
import { deleteuser } from "../actions/users";
import { useDispatch } from "react-redux";
import $ from 'jquery';
import jquery from 'jquery';

window.$ = window.jQuery = jquery;

export default class adminJQuery extends Component {
    componentDidMount() {
        $(document).ready(function () {
            // Activate tooltip
            $('[data-toggle="tooltip"]').tooltip();

            // Select/Deselect checkboxes
            var checkbox = $('table tbody input[type="checkbox"]');
            $("#selectAll").click(function () {
                if (this.checked) {
                    checkbox.each(function () {
                        this.checked = true;
                    });
                } else {
                    checkbox.each(function () {
                        this.checked = false;
                    });
                }
            });
            checkbox.click(function () {
                if (!this.checked) {
                    $("#selectAll").prop("checked", false);
                }
            });
        });
    }
}
