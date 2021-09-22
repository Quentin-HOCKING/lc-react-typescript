import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddWilder from "./component/AddWilder";
import Wilder from "./Wilder";

function App(): JSX.Element {
  const [wilders, setWilders] = useState([]);
  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios.get('http://localhost:5000/api/wilders');
        console.log(result);
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWilders();
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>

      <main className="container">
        <h2>Wilders</h2>

        <section className="card-row">
          {wilders.map((wilder) => (
            <Wilder key={wilder._id} {...wilder} />
          ))}
        </section>
        <section>
          <AddWilder />
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
