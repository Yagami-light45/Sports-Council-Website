import React from 'react';
import { useParams } from 'react-router-dom';
import clubs from './Clubsdata.json';

export default function ClubDetail  ()  {
  const { clubname } = useParams();
  // Find the specific club data based on the URL path
  const club = clubs.find(c => c.name === clubname);

  if (!club) return <h2>Club not found!</h2>;

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>{club.name} Club</h1>
      <img src="https://imgs.search.brave.com/IwVBQDwOl6ndfg_gEt79gTw0Oza_V68JpuFgCUh8BFI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA1LzIzLzc4/LzM2MF9GXzgwNTIz/NzgwMV8xYm5oYkZ2/aWl6VVJkSUVGeVRX/NWlDaEFia0k1Y1Vu/WS5qcGc" alt={club.name} style={{ width: '600px', borderRadius: '20px' }} />
      <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>{club.description}</p>
      {/* Add more details like status or membership here */}
    </div>
  );
};