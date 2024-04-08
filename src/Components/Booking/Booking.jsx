import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  
  color: #fff;
`;





const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const TicketSection = styled.div`
  background-color: #fff;
  color: #800080;
  padding: 20px;
  border-radius: 8px;
`;

const TicketType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TicketName = styled.span`
  font-weight: bold;
`;

const TicketPrice = styled.span``;

const QuantityInput = styled.input`
  padding: 8px;
  font-size: 1rem;
  width: 60px;
`;

const Subtotal = styled.div`
  font-weight: bold;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const Booking = () => {
  const [ticketQuantities, setTicketQuantities] = useState({
    'regular-advance': 0,
    'regular-gate': 0,
    'vip-advance': 0,
    'vip-gate': 0,
  });

  const handleQuantityChange = (event, ticketType) => {
    setTicketQuantities({
      ...ticketQuantities,
      [ticketType]: parseInt(event.target.value, 10) || 0,
    });
  };

  const calculateSubtotal = () => {
    const ticketPrices = {
      'regular-advance': 700,
      'regular-gate': 1000,
      'vip-advance': 2000,
      'vip-gate': 4500,
    };

    let subtotal = 0;
    Object.entries(ticketQuantities).forEach(([ticketType, quantity]) => {
      subtotal += ticketPrices[ticketType] * quantity;
    });
    return subtotal;
  };

  return (
    <Container>
      
      <TicketSection>
        <TicketType>
          <TicketName>Regular Advance</TicketName>
          <TicketPrice>700.00 KSh</TicketPrice>
          <QuantityInput
            type="number"
            min="0"
            value={ticketQuantities['regular-advance']}
            onChange={(e) => handleQuantityChange(e, 'regular-advance')}
          />
        </TicketType>
        
        <TicketType>
          <TicketName>VIP Advance</TicketName>
          <TicketPrice>2,000.00 KSh</TicketPrice>
          <QuantityInput
            type="number"
            min="0"
            value={ticketQuantities['vip-advance']}
            onChange={(e) => handleQuantityChange(e, 'vip-advance')}
          />
        </TicketType>
        <TicketType>
          <TicketName>VVIP</TicketName>
          <TicketPrice>4,500.00 KSh</TicketPrice>
          <QuantityInput
            type="number"
            min="0"
            value={ticketQuantities['vip-gate']}
            onChange={(e) => handleQuantityChange(e, 'vip-gate')}
          />
        </TicketType>
        <Subtotal>Subtotal: {calculateSubtotal()} KSh</Subtotal>
        <Button>Purchase</Button>
      </TicketSection>
    </Container>
  );
};

export default Booking;