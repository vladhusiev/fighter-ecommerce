import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState('наличные');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('delivery');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Способ оплаты</h2>
            </li>

            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cash"
                  value="наличные"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  checked
                ></input>
                <label for="paymentMethod">Наличные</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cardcash"
                  value="безналичные"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label for="paymentMethod">Безналичные</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="mailcash"
                  value="наложенный платёж"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label for="paymentMethod">Наложенный платёж</label>
              </div>
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default PaymentScreen;
