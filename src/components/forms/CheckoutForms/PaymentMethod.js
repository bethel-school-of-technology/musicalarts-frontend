import React, { useState } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';
//import API from "../../../utils/API";

import paymentclass from './PaymentMethod.module.css';

const PaymentMethodForm = () => {
  const [paymentmethod, setPaymentMethod] = useState({
    nameOnCard: '',
    cardNumber: '',
    cardExpirationDate: '',
    cardCvv: '',
  });

  const [payment, setPayment] = useLocalStorage('paymentmethod', {});
  const [disable, setDisable] = useState(false);
  const submitPaymentMethod = () => {
    if (
      paymentmethod.nameOnCard !== '' &&
      paymentmethod.cardNumber !== '' &&
      paymentmethod.cardExpirationDate !== '' &&
      paymentmethod.cardCvv !== ''
    ) {
      setPayment({ ...payment, paymentmethod });
      setDisable(true);
      alert('Successful!');
    } else {
      alert('missing fields');
    }
  };

  // function submitPaymentMethod() {
  //   console.log(paymentmethod.cardNumber);

  //   API.createPaymentMethod(paymentmethod).then((res) => {
  //     console.log(res);
  //   });
  // }
  return (
    <div>
      <h4 className={paymentclass.h4}>Payment Method</h4>
      <div>
        <input
          onChange={(e) =>
            setPaymentMethod({ ...paymentmethod, nameOnCard: e.target.value })
          }
          className={paymentclass.input}
          type='text'
          required
          id='nameoncard'
          placeholder='Name On Card'
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setPaymentMethod({ ...paymentmethod, cardNumber: e.target.value })
          }
          className={paymentclass.input}
          type='number'
          required
          id='cardnumber'
          placeholder='Credit or Debit Card Number'
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setPaymentMethod({
              ...paymentmethod,
              cardExpirationDate: e.target.value,
            })
          }
          className={paymentclass.input}
          type='text'
          required
          id='expirationdate'
          placeholder='Exp. (MM/YY)'
        />
      </div>
      <div>
        <input
          onChange={(e) =>
            setPaymentMethod({ ...paymentmethod, cardCvv: e.target.value })
          }
          className={paymentclass.input}
          type='number'
          required
          id='cvv'
          placeholder='CVV'
        />
      </div>
      <div>
        <button
          disabled={disable}
          className={paymentclass.button}
          onClick={submitPaymentMethod}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodForm;
