import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStopwatch,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch, faPlus, faMinus);

function App() {
  const [counters, setCounters] = useState([0]);
  return (
    <div className="App">
      <header>
        <FontAwesomeIcon
          icon="stopwatch"
          style={{ color: "black", marginRight: 20 }}
        />
        <span>React Counter v2</span>
      </header>

      <main>
        <section>
          {counters.length < 3 && (
            <button
              onClick={() => {
                if (counters.length < 3) {
                  let copy = [...counters];
                  copy.push(0);
                  setCounters(copy);
                }
              }}
            >
              Add counter
            </button>
          )}
        </section>

        <section>
          {counters.map((counter, index) => {
            return (
              <Counter
                counter={counter}
                key={index}
                index={index}
                counters={counters}
                setCounters={setCounters}
              />
            );
          })}
        </section>
      </main>
      <footer>
        Made with <a href="https://reactjs.org/">React</a> at{" "}
        <a href="https://www.lereacteur.io/">Le Réacteur</a> by{" "}
        <a href="https://github.com/ClaireGillot">Claire.</a>
      </footer>
    </div>
  );
}

export default App;
