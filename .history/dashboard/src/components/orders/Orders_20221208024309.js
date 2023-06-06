import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const Orders = (props) => {
  const {orders} = props
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">이메일</th>
          <th scope="col">가격</th>
          <th scope="col">결제 상태</th>
          <th scope="col">날짜</th>
          <th>상태</th>
          <th scope="col" className="text-end">
            자세히 보기
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) =>(
            <tr key={order._id}>
          <td>
            <b>{order.user.name}</b>
          </td>
          <td>{order.user.email}</td>
          <td>{order.totalPrice}원</td>
          <td>
          {
            order.isPaid ? (
              <span className="badge rounded-pill alert-success">
                {moment(order.paidAt).format("YYYY/MM/DD")} 결제 완료
              </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
              결제 안됨
              </span>
              )}
          </td>
          <td>{moment(order.createAt).format("YYYY/MM/DD")}</td>
          <td>
          {order.isDelivered ? (
              <span className="badge btn-success">배송 완료</span>
              ) : (
                <span className="badge btn-dark">배송 안됨</span>
              )}
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order/${order._id}`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr>
          ))
        }

        
        {/* Not paid Not delivered */}
        {/* <tr>
          <td>
            <b>Velcro Sneakers For Boys & Girls (Blue)</b>
          </td>
          <td>user@example.com</td>
          <td>$45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Orders;
