import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listUser } from "../../Redux/Actions/userActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const UserComponent = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(()=>{
    dispatch(listUser());
  },[dispatch]);
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">고객</h2>
        <div>
          <Link to="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i> 계정 만들기
          </Link>
        </div>
      </div>

      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="검색..."
                className="form-control"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>20개 보기</option>
                <option>30개 보기</option>
                <option>40개 보기</option>
                <option>모두 보기</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>상태 : 모두</option>
                <option>Active</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </header>

        {/* Card */}
        <div className="card-body">
          {loading ? (
              <Loading/>
              ): error ? (
              <Message variant="alert-danger">{error}</Message>
              ):(
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {users.map((user) => (
                  <div className="col" key={user._id}>
                <div className="card card-user shadow-sm">
                  <div className="card-header">
                    <img
                      className="img-md img-avatar"
                      src="images/favicon.png"
                      alt="User pic"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mt-5">{user.name}</h5>
                    <div className="card-text text-muted">
                      {user.isAdmin === true ? ( 
                        <p className="m-0">관리자</p>
                      ) : ( 
                        <p className="m-0">사용자</p>
                      )}
              
                      <p>
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
                ))}
            </div>
            )}

          {/* nav */}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  이전
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  이후
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default UserComponent;
