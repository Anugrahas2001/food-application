import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        pinCode: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='signUp'>
            <div className='signUp-page'>
                <h1>Sign Up</h1>
                <div className='signUp-page-address'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type="text"
                                id="firstName"
                                placeholder='First Name'
                                name="firstName"
                                className='input'
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                id="lastName"
                                placeholder='Last Name'
                                name="lastName"
                                className='input'
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <input
                                type="tel"
                                id="phoneNumber"
                                placeholder='Phone Number'
                                name="phoneNumber"
                                className='input'
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="number"
                                id="pinCode"
                                placeholder='Pin Code'
                                name="pinCode"
                                className='input'
                                value={formData.pinCode}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <textarea
                            type="text"
                            id="address"
                            placeholder='Address'
                            name="address"
                            className='address'
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                        <br />

                        <div className="form-row">
                        <input
                            type="email"
                            id="email"
                            placeholder='Email'
                            name="email"
                            className='input'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            id="password"
                            placeholder='Password'
                            name="password"
                            className='input'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <br />

                        <button type="submit" className='submit'>Submit</button>
                    </form>
                    <div className='exist'>
                        Already have an account? <span className='login'><Link className='link' to='/login'>Log In</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
