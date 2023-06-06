import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
const Orders = (props) => {
  const { loading, error, orders } = props;
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      {loading ? (
          <Loading/>
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ):(
          <>
          {orders.lelngth === 0 ? (
              <div className="col-12 alert alert-info text-center mt-3">
          주문 내역이 없습니다.
        <Link
          className="btn btn-success mx-2 px-3 py-2"
          to="/"
          style={{
            fontSize: "12px",
          }}
        >
          쇼핑 시작하기
        </Link>
      </div>
            ):(
        <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>상태</th>
              <th>주문 번호 생성 날짜</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) =>(
                <tr 
                className={`${
                  order.isPaid ? "alert-success" : "alert-danger"
                }`} 
                key={order._id}
                >
              <td >
                <a href={`/order/${order._id}`} className="link">
                  {order._id}
                </a>
              </td>
              <td>{order.isPaid ? <>결제 완료</> : <>결제가 완료되지 않음</>}</td>
              <td>
              {moment(order.createdAt).format("llll")}
              </td>
              <td>{order.totalPrice}원</td>
            </tr>
              ))}
          </tbody>
        </table>
      </div>
            )
          }
          </>
        )
      }


    </div>
  );
};

export default Orders;
