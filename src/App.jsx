import React from "react";
import actions from "./actions";
// import './App.css'

// components
import { Button } from "primereact/button";

function App() {
  const {
    fruitBasket,
    vegetableBasket,
    mainBasket,
    handleSortItem,
    handleReturnItem,
  } = actions();

  return (
    <React.Fragment>
      <div className="grid">
        <div className="col-12">
          <div className="flex justify-content-center gap-2">
            <div className="col-4">
              <div className="flex flex-column justify-content-center gap-3">
                {mainBasket.map((data, index) => (
                  <Button
                    key={index}
                    value={data.name}
                    size="large"
                    raised
                    className="py-3 m-1"
                    onClick={() => handleSortItem(data)}
                  >
                    {data.name}
                  </Button>
                ))}
              </div>
            </div>
            <div
              className="col-4 border-solid border-2 p-0"
              style={{ height: "80vh" }}
            >
              <h2 className="flex justify-content-center bg-cyan-100 mt-0 py-3">
                Fruit
              </h2>
              <div className="flex flex-column justify-content-center gap-3">
                {fruitBasket.map((data, index) => (
                  <Button
                    key={index}
                    value={data.name}
                    size="large"
                    raised
                    className="py-3 m-1"
                    onClick={() => handleReturnItem(data)}
                  >
                    {data.name}
                  </Button>
                ))}
              </div>
            </div>
            <div
              className="col-4 border-solid border-2 p-0 mr-3"
              style={{ height: "80vh" }}
            >
              <h2 className="flex justify-content-center bg-cyan-100 mt-0 py-3">
                Vegetable
              </h2>
              <div className="flex flex-column justify-content-center gap-3">
                {vegetableBasket.map((data, index) => (
                  <Button
                    key={index}
                    value={data.name}
                    size="large"
                    raised
                    className="py-3 m-1"
                    onClick={() => handleReturnItem(data)}
                  >
                    {data.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
