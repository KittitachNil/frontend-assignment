import { useState, useEffect } from "react";

export default function actions() {
  const [fruitBasket, setFruitBasket] = useState([]);
  const [vegetableBasket, setVegetableBasket] = useState([]);
  const [mainBasket, setMainBasket] = useState([
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ]);

  const handleSortItem = (data) => {
    if (data.type == "Fruit") {
      setFruitBasket((prevFruitBasket) => [...prevFruitBasket, data]);
    } else if (data.type == "Vegetable") {
      setVegetableBasket((prevVegetableBasket) => [
        ...prevVegetableBasket,
        data,
      ]);
    }
    setMainBasket((prevMainBasket) =>
      prevMainBasket.filter((item) => item != data)
    );

    data.timer = setTimeout(() => {
      returnItemToMainBasket(data);
    }, 5000);
    return () => clearTimeout(timer);
  };

  const returnItemToMainBasket = (data) => {
    if (data.type === "Fruit") {
      setFruitBasket((prevFruitBasket) =>
        prevFruitBasket.filter((item) => item != data)
      );
    } else if (data.type === "Vegetable") {
      setVegetableBasket((prevVegetableBasket) =>
        prevVegetableBasket.filter((item) => item != data)
      );
    }
    setMainBasket((items) => [...items, data]);
  };

  const handleReturnItem = (data) => {
    clearTimeout(data.timer);
    if (data.type == "Fruit") {
      setFruitBasket((prevFruitBasket) =>
        prevFruitBasket.filter((item) => item != data)
      );
    } else if (data.type == "Vegetable") {
      setVegetableBasket((prevVegetableBasket) =>
        prevVegetableBasket.filter((item) => item != data)
      );
    }
    setMainBasket((prevMainBasket) => [...prevMainBasket, data]);
  };

  return {
    fruitBasket,
    vegetableBasket,
    mainBasket,
    handleSortItem,
    handleReturnItem,
  };
}
