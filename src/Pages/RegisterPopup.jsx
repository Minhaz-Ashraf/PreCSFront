import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom';
import apiurl from '../util';
import { toast } from 'react-toastify';

const RegisterPopup = ({ isPopupOpen, closePopup }) => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [valid, setValid] = useState(true);
    const [error, setError] = useState('');
    const navigate  = useNavigate();

    const handleChange = (value, country) => {
        setPhone(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberPattern.test(phoneNumber);
    };

    const handleSubmit = async () => {
        try {
            const response = await apiurl.post('/register', {
                fullname,
                email,
                phone,
            });
            navigate("/registration-successfull")
            console.log('User registered successfully');
            // Optionally, you can reset the form or close the popup here
        } catch (error) {
            console.error('Failed to register user', error);
            toast.error('Failed to register user')
            setError('Please fill all required fields');
        }
    };

    return (
        <>
            {isPopupOpen && (
                <div
      className={`fixed inset-0 flex items-center justify-center popup-backdrop z-50  sm:px-52  px-6 ${
        isPopupOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white pb-9  rounded-lg md:w-[48%] w-full  relative  ">
                        <button
                            className="cursor-pointer  text-[39px] right-2 top-2 absolute text-primary"
                            onClick={closePopup}
                        >
                            <IoClose />
                        </button>
                        <span>
                            <p className='font-montserrat font-semibold text-[21px] mt-14 mx-5 text-center text-black'>Thank You for showing interest in registering with Connecting Soulmate.</p>
                            <p className='text-center font-DMsans text-[14px] px-8 mt-2'>We are launching our website & app in the next few days. Please fill in the details, so we will keep you notified:</p>
                        </span>
                        <div className='mx-8 mt-3'>
                            <label htmlFor="name" className='font-DMsans font-medium focus:outline-none'>Name <span className='text-primary'>*</span></label>
                            <input
                                name='fullname'
                                className='w-full bg-[#F0F0F0] rounded-lg h-12 px-3 mt-2'
                                placeholder='Enter Your Full Name'
                                type="text"
                                value={fullname}
                                required
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className='mx-8 mt-3'>
                            <label htmlFor="name" className='font-DMsans font-medium focus:outline-none'>Email <span className='text-primary'>*</span></label>
                            <input
                                name='email'
                                className='w-full bg-[#F0F0F0] rounded-lg h-12 px-3 mt-2'
                                placeholder='Enter Your Email'
                                type="email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mx-8 mt-3 relative">
                            <label htmlFor="username" className="font-DMsans  font-medium  focus:border-none">Phone Number <span className='text-primary'>*</span></label>
                            <label>
                                <PhoneInput
                                    className="mt-2 mb-9"
                                    containerStyle={{ width: "120%" }}
                                    buttonStyle={{ width: "9%" }}
                                    inputStyle={{ width: "83%", height: "50px", backgroundColor: "#F0F0F0" }}
                                    country={"in"}
                                    value={phone}
                                    onChange={(value, country) => handleChange(value, country)}
                                    inputProps={{
                                        required: true,
                                    }}
                                />
                            </label>
                            <p className="absolute -bottom-6 text-start text-[13px] text-red-600">Please enter a WhatsApp phone number*</p>
                            {!valid && (
                                <p className="absolute -bottom-10 text-start text-[13px] text-red-600">Please enter a valid phone number*</p>
                            )}
                        </div>
                        {error && (
                            <p className="text-start mx-8  text-[12px] text-red-600">{error}</p>
                        )}
                        <div
                            className="mb-3  background text-white text-center mx-6 mt-12 py-3 rounded-lg font-DMsans cursor-pointer"
                            onClick={handleSubmit}
                        >
                            Submit
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RegisterPopup;
