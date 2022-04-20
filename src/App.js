import "./App.css";
import data from "./data";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import Person from "./Person";
const App = () => {
  return (
    <div className="background">
      <section className="header">
        <h1>/</h1>
        <h1>Reviews</h1>
      </section>
      <div className="container">
        <button className="btn">
          <AiFillCaretLeft className="icon"></AiFillCaretLeft>
        </button>
        <Person key={data[0].id} data={data[0]} />
        <button className="btn">
          <AiFillCaretRight className="icon"></AiFillCaretRight>
        </button>
      </div>
    </div>
  );
};

export default App;
