import React, { useState } from 'react';

function BookingForm({ movie, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user details in local storage
    localStorage.setItem('userDetails', JSON.stringify(formData));
    onClose();
  };

  return (
   
    <div class="d-flex align-items-center flex-column bd-highlight mb-3 justify-content-center">
        
        
        <div class="p-2 bd-highlight">
            <h2>Movie Ticket Booking</h2>
        </div>
        <div>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Name:
       
          <input
            type="text"
            name="movieName"
            value={movie.name}
            onChange={handleChange}
            disabled
          />

        </label>
        <br />   <br />
        <label>
          Name: 
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />   <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />   <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default BookingForm;
