import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  input[type='radio'] {
    margin-right: 10px;
  }
`;

const PaymentDetails = styled.div``;

const PaymentSteps = styled.p`
  margin-bottom: 10px;
`;

const MobileNumberInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  input {
    margin-left: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

const ProceedButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Purchase Component
const Purchase = () => {
  const location = useLocation(); // Use useLocation hook
  const { ticketQuantities } = location.state || {};

  // Calculate subtotal
  const calculateSubtotal = () => {
    if (!ticketQuantities) return 0;
    
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

  const subtotal = calculateSubtotal();
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('mpesa');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <Container>
      <Title>Pay using Mpesa:</Title>
      <PaymentOptions>
        <PaymentOption>
          <img src="./mpesa.png" height={40} width={40} alt="" />
          <input
            type="radio"
            value="mpesa"
            checked={selectedPaymentOption === 'mpesa'}
            onChange={() => setSelectedPaymentOption('mpesa')}
          />
          M-PESA
        </PaymentOption>
      </PaymentOptions>
      <PaymentDetails>
        <h3>Pay "Raha Festival" {subtotal} KSh</h3>
        {selectedPaymentOption === 'mpesa' && (
          <div>
            <PaymentSteps>1. Provide your MPESA mobile number below</PaymentSteps>
            <PaymentSteps>
              2. Click Proceed and a prompt will appear on your phone requesting you to confirm transaction by providing
              your MPESA PIN
            </PaymentSteps>
            <PaymentSteps>3. Once completed, you will receive the confirmation SMS for this transaction</PaymentSteps>
            <MobileNumberInput>
              Provide your Mpesa [KE] Mobile number
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="e.g 7XX XXX XXX"
              />
            </MobileNumberInput>
            <ProceedButton>Proceed</ProceedButton>
          </div>
        )}
      </PaymentDetails>
    </Container>
  );
};

export default Purchase;
