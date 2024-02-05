// import React from 'react'
import * as Yup from "yup";

export const CheckoutSchema =  Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    sector: Yup.string().required("Required"),
    streetNumber: Yup.string().required("Required"),
    houseNumber: Yup.string().required("Required"),
    otherInfo: Yup.string().required("Required"),
    paymentMethod: Yup.string().required("Required"),
    cardNumber: Yup.string().required("Required"),
    expiryDate: Yup.string().required("Required"),
    cvccvv: Yup.string().required("Required"),
    momoNumber: Yup.string().required("Required"),
    // phoneNumber: Yup.string().phoneNumber().required("Required"),
});

