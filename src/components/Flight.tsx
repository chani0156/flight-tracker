import React from 'react';

interface FlightProps {
  flight: any;
}

const Flight: React.FC<FlightProps> = ({ flight }) => {
  const departureTime = new Date(flight.departure.estimated).getTime();
  const arrivalTime = new Date(flight.arrival.estimated).getTime();

  if (isNaN(departureTime) || isNaN(arrivalTime)) {
    return <div>Invalid flight times</div>;
  }

  const totalFlightTime = arrivalTime - departureTime;
  const remainingFlightTime = arrivalTime - Date.now();

  const isLessThanHalf = remainingFlightTime < totalFlightTime / 2;
  const flightStyle = {
    color: isLessThanHalf ? 'red' : 'black',
  };

  return (
    <div style={flightStyle}>
      <h3>{flight.flight.iata}</h3>
      <p>{flight.departure.airport} to {flight.arrival.airport}</p>
      <p>Remaining Time: {(remainingFlightTime / 1000 / 60).toFixed(2)} minutes</p>
    </div>
  );
};

export default Flight;
