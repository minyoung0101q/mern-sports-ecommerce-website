import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = (props) => {
  const {order,loading} = props;

  if(!loading){
// Calculate Price
const addDecimals = (num) =>{
  return (Math.round(num*100) / 100).toFixed(2);
};

order.itemsPrice = addDecimals(
  order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
);
}

  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>제품 이름</th>
          <th style={{ width: "20%" }}>제품 가격</th>
          <th style={{ width: "20%" }}>수량</th>
          <th style={{ width: "20%" }} className="text-end">
            총액
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item,index) =>(
            <tr key={index}>
          <td>
            <Link className="itemside" to="#">
              <div className="left">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "40px", height: "40px" }}
                  className="img-xs"
                />
              </div>
              <div className="info">{item.name}</div>
            </Link>
          </td>
          <td>{item.price}원 </td>
          <td>{item.qty} </td>
          <td className="text-end">{item.qty * item.price}원</td>
        </tr>
          ))}
        
        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>소계: </dt> <dd>{order.itemsPrice}원</dd>
              </dl>
              <dl className="dlist">
                <dt>배송비: </dt> <dd>{order.shippingPrice}원</dd>
              </dl>
              <dl className="dlist">
                <dt>총액: </dt>
                <dd>
                  <b className="h5">{order.totalPrice}원</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">상태: </dt>
                <dd>
                  {order.isPaid ? (
                  <span className="badge rounded-pill alert alert-success text-success">
                    결제 완료
                  </span>
                    ) : (
                  <span className="badge rounded-pill alert alert-danger text-danger">
                    결제 미완료
                  </span>
                  )}
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
