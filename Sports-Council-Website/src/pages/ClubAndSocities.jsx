import React from 'react';
import { Link } from 'react-router-dom';
import clubs from './Clubsdata.json';

export default function ClubsGallery () {
  return (
    <div style={{ backgroundColor: '#f2f2f200', color: 'white', padding: '40px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#4cc9f0' }}>Sports</h1>
      <p style={{ textAlign: 'center' }}>Welcome to the Sports page! Explore our clubs at IIT Indore.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
        {clubs.map((club) => (
          <Link to={`/clubsAndSocieties/${club.name}`} key={club.id} style={{ textDecoration: 'none' }}>
            <div className="club-card" style={{ background: '#6b717c', borderRadius: '15px', overflow: 'hidden' }}>
              {club.image?(<img src={club.image} alt={club.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />):(<img src="https://imgs.search.brave.com/IwVBQDwOl6ndfg_gEt79gTw0Oza_V68JpuFgCUh8BFI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA1LzIzLzc4/LzM2MF9GXzgwNTIz/NzgwMV8xYm5oYkZ2/aWl6VVJkSUVGeVRX/NWlDaEFia0k1Y1Vu/WS5qcGc" alt={club.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />)}
              <div style={{ padding: '15px', textAlign: 'center', color: 'white' }}>
                <h3>{club.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
