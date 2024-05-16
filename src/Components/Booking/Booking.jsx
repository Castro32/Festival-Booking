import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const NavLink = styled(Link)`
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

const DetailsSection = styled.div`
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
`;

const DetailsInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
`;

const Booking = () => {
  const [ticketQuantities, setTicketQuantities] = useState({
    'regular-advance': 0,
    'regular-gate': 0,
    'vip-advance': 0,
    'vip-gate': 0,
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);

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

    return Object.entries(ticketQuantities).reduce((total, [ticketType, quantity]) => {
      return total + ticketPrices[ticketType] * quantity;
    }, 0);
  };

  return (
    <Container>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Navigation>

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
          <TicketName>Regular Gate</TicketName>
          <TicketPrice>1,000.00 KSh</TicketPrice>
          <QuantityInput
            type="number"
            min="0"
            value={ticketQuantities['regular-gate']}
            onChange={(e) => handleQuantityChange(e, 'regular-gate')}
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
          <TicketName>VIP Gate</TicketName>
          <TicketPrice>4,500.00 KSh</TicketPrice>
          <QuantityInput
            type="number"
            min="0"
            value={ticketQuantities['vip-gate']}
            onChange={(e) => handleQuantityChange(e, 'vip-gate')}
          />
        </TicketType>

        <Subtotal>Subtotal: {calculateSubtotal()} KSh</Subtotal>

        <DetailsSection>
          <h2>Enter Your Details</h2>
          <DetailsInput
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DetailsInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <DetailsInput
            type="tel"
            placeholder="Enter phone number you'll be paying with"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I have read and agree to Raha Festival's Privacy Policy, Terms and Conditions
          </CheckboxLabel>
        </DetailsSection>

            <NavLink
            to={{
            pathname: '/purchase',
            search: `?subtotal=${calculateSubtotal()}&phone=${phone}`,
            }}
            >
              <Button>Purchase</Button>
            </NavLink>
      </TicketSection>
    </Container>
  );
};

export default Booking;