import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios'

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


const Purchase = () => {
  const [searchParams] = useSearchParams();
  const subtotal = searchParams.get('subtotal');
  const phone = searchParams.get('phone');




  const [selectedPaymentOption, setSelectedPaymentOption] = useState('mpesa');


    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Phone Number:', phone);
      console.log('Amount:', subtotal);
  
      try {
        const payload = {
          amount: subtotal,
          phone: phone
        };
  
        const url = 'http://localhost:5050/api/stk';
        const response = await axios.post(url, payload);
        console.log(response.data);
  
        // Handle the response from the backend as needed
        if (response.status === 200) {
          // Success
          console.log('STK Push initiated successfully');
        } else {
          // Error
          console.error('Error initiating STK Push');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
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
    defaultValue={phone}
    //onChange={(e) => setMobileNumber(e.target.value)}
    placeholder="e.g 7XX XXX XXX"
  />
</MobileNumberInput>
<ProceedButton onClick={handleSubmit}>Proceed</ProceedButton>
          </div>
        )}
      </PaymentDetails>
    </Container>
  );
};

export default Purchase;