import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from "axios";
import BookingForm from './BookingForm';
import { Card, Button } from 'react-bootstrap';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleBooking = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };


  if (!show) {
    return <div>Loading...</div>;
  }

  return (
     <div className='my-3'>
        <div className="card" >    
     <div className="card-body">
      <div class="row">
                        <div class="col-md-5 how-img">
                        <Card key={show.id} style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Img variant="top" src={show.image?.medium} class="img-fluid"/>
          <Card.Body style={{ background:'#282c34',color:'white' }}>
            <Card.Title>{show.name}</Card.Title>
            <Card.Text>Language : {show.language}</Card.Text>
            <Card.Text>Ratings : {show.rating.average?show.rating.average:"Null"}</Card.Text>
           
          </Card.Body>
        </Card>
        </div>
                        <div class="col-md-6">
                            <h4> <h1>{show.name}</h1></h4>
                                        
                        <p class="text-muted"><h5>{show.summary.slice(3,1000)}</h5></p>
                        </div>
                    </div>
        
      
      {showForm ? (
        <BookingForm movie={show} onClose={handleFormClose} />
      ) : (
        <button onClick={handleBooking}>Book Ticket</button>
      )}
      <br />
    
  </div>
   </div>
      </div>
    
    
  );
};

export default ShowDetails;
