import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeNum);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container-sm text-center">
        <div className="row my-5 mx-5">
          <h1>Increment/Decrement couter using React-Redux</h1>
          <hr />

          <div className="input-group">
            <a
              onClick={() => dispatch(decNumber())}
              title="Decrement"
              className="btn btn-outline-danger"
              style={{ textDecoration: "none" }}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="form-control w-25 text-center"
              value={myState}
            />
            <a
              onClick={() => dispatch(incNumber())}
              title="Increment"
              className="btn btn-outline-success"
              style={{ textDecoration: "none" }}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
