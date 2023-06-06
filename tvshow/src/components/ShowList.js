import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Navbar from './Navbar';


const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <Navbar/>
    <div className='container '>
      <div className='row'>
      {shows.map((show) => (
      <div className='col bg-blur"'>
        <Card key={show.show.id} style={{ width: '18rem', marginBottom: '1rem',  }} >
          <Card.Img variant="top" src={show.show.image?.medium} />
          <Card.Body style={{ background:'white',color:'black'}}>
            <Card.Title>{show.show.name}</Card.Title>
            <Card.Text>Language : {show.show.language}</Card.Text>
            <Card.Text>Ratings : {show.show.rating.average?show.show.rating.average:"Null"}</Card.Text>
            <Link to={`/shows/${show.show.id}`}>
              <Button variant="primary">View Summary</Button>
            </Link>
          </Card.Body>
        </Card>
        </div>
       
       
      ))}
    </div>
    </div>
    </div>

  );
};

export default ShowList;
