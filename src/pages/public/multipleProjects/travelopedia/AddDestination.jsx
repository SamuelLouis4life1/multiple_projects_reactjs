import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function AddDestination(props) {

    const { t } = props;

    return (
        <>
            <div className="p-4 border">
                <form action="">
                    <div className="row col-8 offset-2">
                        <h4>Enter a new Destination</h4>
                        <div className="col-5 p-1">
                            <input type="text" className="form-control" placeholder="Enter city" />

                        </div>

                        <div className="col-5 p-1">
                            <input type="text" className="form-control" placeholder="Enter contry" />
                        </div>

                        <div className="col-5 p-1">
                            <botton className="btn btn-sucess form-control">Add</botton>

                        </div>

                    </div>
                </form>
            </div >
        </>
    );
}

export default withTranslation()(AddDestination);