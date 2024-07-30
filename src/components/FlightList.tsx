import React, { useEffect, useState } from 'react';
import { getFlights } from '../services/aviationService';
import Flight from './Flight';

const FlightList: React.FC = () => {
  const [flights, setFlights] = useState<any[]>([]);

  const fetchFlights = async () => {
    const flightsData = await getFlights();
    setFlights(flightsData);
  };

  useEffect(() => {
    fetchFlights();
    const interval = setInterval(fetchFlights, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {flights.map(flight => (
        <Flight key={flight.flight.iata} flight={flight} />
      ))}
    </div>
  );
};

export default FlightList;
