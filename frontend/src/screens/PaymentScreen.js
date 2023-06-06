import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/cartActions";
import Header from "./../components/Header";

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>결제 수단 선택</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input 
              className="form-check-input" 
              type="radio" 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">페이팔 또는 신용카드</label>
            </div>
          </div>

          <button type="submit">
              계속
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
