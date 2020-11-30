
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveDelivery } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function DeliveryScreen(props) {
    const [deliveryMethod, setDeliveryMethod] = useState('самовывоз');
  
    const dispatch = useDispatch();
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(saveDelivery({ deliveryMethod }));
      props.history.push('placeorder');
    };
    return (
      <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                <h2>Способ доставки</h2>
                </li>

                <li>
                <div>
                    <input
                    type="radio"
                    name="deliveryMethod"
                    id="selfdelivery"
                    value="самовывоз"
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    checked
                    ></input>
                    <label for="deliveryMethod">Самовывоз</label>
                </div>

                <div>
                    <input
                    type="radio"
                    name="deliveryMethod"
                    id="courier"
                    value="курьер"
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    ></input>
                    <label for="deliveryMethod">Курьер</label>
                </div>

                <div>
                    <input
                    type="radio"
                    name="deliveryMethod"
                    id="newmail"
                    value="новая почта"
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    ></input>
                    <label for="deliveryMethod">Новая почта</label>
                </div>

                <li>
                    <button type="submit" className="button primary">
                        Continue
                    </button>
                </li>
                </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
  export default DeliveryScreen;