import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, payOrder } from "../Redux/Actions/OrderActions";
import Message from "./../components/LoadingError/Error";
import Loading from "./../components/LoadingError/Loading";
import moment from 'moment';
import axios from "axios";
import { ORDER_PAY_RESET } from "../Redux/Constants/OrderConstants";

const OrderScreen = ({match}) => {
  window.scrollTo(0, 0);
  const [sdkReady, setSdkReady] = useState(false);
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading,error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const { loading:loadingPay,success:successPay } = orderPay;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100)
    };
  
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    const addPayPalScript = async() =>{
      const {data:clientId} = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () =>{
        setSdkReady(true)
      }
      document.body.appendChild(script);
    };
    if (!order || successPay) {
      dispatch({type:ORDER_PAY_RESET});
      dispatch(getOrderDetails(orderId));                                              
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId,successPay,order]);

  const successPaymentHandler=(paymentResult) =>{
    console.log(paymentResult);
    dispatch(payOrder(orderId,paymentResult));
  };

  return (
    <>
      <Header />
      <div className="container">
        {loading ? (
        <Loading/>
        ) : error ? (
        <Message variant="alert-danger">{error}</Message>
        ) : (
            <>
        <div className="row  order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>고객</strong>
                </h5>
                <p>{order.user.name}</p>
                <p>
                  <a href={`mailto:${order.user.email}`}>
                    {order.user.email}
                    </a>
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>주문 정보</strong>
                </h5>
                <p>배송: {order.shippingAddress.country}</p>
                <p>결제 방법: {order.paymentMethod}</p>
                {
                        order.isPaid ? (
                          <div className="bg-dark p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                            {moment(order.paidAt).calendar()} 결제 완료
                            </p>
                </div>
                    )
                    :
                    (
                      <div className="bg-danger p-2 col-12">
                  <p className="text-white text-center text-sm-start">
                  결제가 완료되지 않았습니다.
                  </p>
                </div>
                    )}
                
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>배송</strong>
                </h5>
                <p>
                주소: {order.shippingAddress.city}, {" "} 
                  {order.shippingAddress.address}, {" "} 
                  {order.shippingAddress.postalCode}
                </p>
                {
                        order.isDelivered ? (
                          <div className="bg-dark p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                            {moment(order.deliveredAt).calendar()} 배송 완료
                            </p>
                </div>
                    ):(
                      <div className="bg-danger p-2 col-12">
                  <p className="text-white text-center text-sm-start">
                  배송 완료 안됨
                  </p>
                </div>
                    )}
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">

            {
              order.orderItems.length === 0 ? (
                <Message variant="alert-info mt-5">주문 상품이 비었습니다.</Message>
              ):(
                <>
                {order.orderItems.map((item,index) =>(
                    <div className="order-product row" key={index}>
                    <div className="col-md-3 col-6">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="col-md-5 col-6 d-flex align-items-center">
                      <Link to={`/products/${item.product}`}>
                        <h6>{item.name}</h6>
                      </Link>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                      <h4>수량</h4>
                      <h6>{item.qty}</h6>
                    </div>
                    <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                      <h4>소계</h4>
                      <h6>{item.qty * item.price}원</h6>
                    </div>
                  </div>
                  ))}
                </>
              )}
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
            <tbody>
                <tr>
                  <td>
                    <strong>제품</strong>
                  </td>
                  <td>{order.itemsPrice}원</td>
                </tr>
                <tr>
                  <td>
                    <strong>배송비</strong>
                  </td>
                  <td>{order.shippingPrice}원</td>
                </tr>
                <tr>
                  <td>
                    <strong>총액</strong>
                  </td>
                  <td>{order.totalPrice}원</td>
                </tr>
              </tbody>
            </table>
            {!order.isPaid && (
              <div className="col-12">
                {loadingPay && (<Loading/>)}
                {!sdkReady ? (
                    <Loading/>
                  ):(
                    <PayPalButton 
                      amount={order.totalPrice} 
                      onSuccess={successPaymentHandler}   
                      />
                  )}
              </div>
            )}
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default OrderScreen;
