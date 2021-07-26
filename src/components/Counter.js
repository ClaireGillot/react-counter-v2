import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Counter(props) {
  const { counter, index, counters, setCounters } = props;
  return (
    <div className="counter">
      <div className="wrapper">
        {counter > 0 ? (
          <button
            onClick={() => {
              const copy = [...counters];
              copy[index]--;
              setCounters(copy);
            }}
          >
            <FontAwesomeIcon className="icon" icon="minus" />
          </button>
        ) : (
          <div className="no-button"></div>
        )}

        <p>{counter}</p>

        {counter < 10 ? (
          <button
            onClick={() => {
              const copy = [...counters];
              copy[index]++;
              setCounters(copy);
            }}
          >
            <FontAwesomeIcon className="icon" icon="plus" />
          </button>
        ) : (
          <div className="no-button"></div>
        )}
      </div>

      <div>
        <button
          onClick={() => {
            const copy = [...counters];
            copy[index] = 0;
            setCounters(copy);
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Counter;
