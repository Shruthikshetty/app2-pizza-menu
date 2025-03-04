import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
//props are immutable
//one way data flow  data can only flow from parent to child
function Pizza({ pizza }) {
  /* if (pizza.soldOut) return null; */
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name}></img>
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <>
      <header className="header">
        <h1>Fast React Pizza Co.</h1>
      </header>
    </>
  );
}
function Menu() {
  const pizzas = pizzaData;
  return (
    <>
      <main className="menu">
        <h2> Our Menu</h2>

        {pizzas.length > 0 ? (
          <React.Fragment key="anything">
            <p>
              Authentic Italian cuisine . 6 Creative dishes to choose from . All
              from our stone stover , all organic , all delicious
            </p>

            <ul className="pizzas">
              {pizzaData.map((each, index) => (
                <Pizza key={index} pizza={each} />
              ))}
            </ul>
          </React.Fragment>
        ) : (
          <p>We're still working on our menu .Please come back later </p>
        )}
      </main>
    </>
  );
}
function Footer() {
  function getDate() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;

    if (hour >= openHour && hour <= closeHour) {
      return " We're currently open ";
    } else {
      return " We're currently closed ";
    }
  }
  return (
    /* React.createElement("h1",null,"we're cyrrently open") */

    <footer className="footer">
      <div className="order">
        <p>{getDate()}</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

// react 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//bable is used to convert jsx to js
