// AddressForm.js
import React, { useState } from 'react';

const Address = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, phone, address, pin });
    onClose();
  };

  return (
    <div className="popups">
      <div className="popup-contents">
        <span className="close" onClick={onClose}><i class="fa-regular fa-rectangle-xmark"></i></span>
        <center>
          <br />
        <h2>New Address</h2>
        <br/>
        <form onSubmit={handleSubmit}>
          <label className='label'>Name:</label>
          <input type="text" value={name} className='input-1' onChange={(e) => setName(e.target.value)} required />
          <br/> 
          <label className='label'>Phone:</label>
          <input type="text" value={phone} className='input-2' onChange={(e) => setPhone(e.target.value)} required />
          <br/>
          <label className='label'>Address:</label>
          <textarea type="text" value={address} className='text-area' onChange={(e) => setAddress(e.target.value)} required ></textarea>
          <br/>
          <label className='label'>Pin:</label>
          <input type="text" value={pin} className='input-3' onChange={(e) => setPin(e.target.value)} required />
          <br/>
          <button type="submit" className='submit'>Add Address</button>
        </form>
        </center>
      </div>
    </div>
  );
};

export default Address;
