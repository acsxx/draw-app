import { useState } from "react";

function Draw() {
  const [candidate, setCandidate] = useState("");
  const [numberOfWinner, setNumberOfWinner] = useState(0);
  const [winners, setWinners] = useState([]);

  const setCanditates = (event) => setCandidate(event.target.value);
  const setNumberOfWinners = (event) => setNumberOfWinner(event.target.value);

  const f_createRandomNumber = (amount, arrLength) => {
    var randomNumbersArray = [];

    for (let i = 0; i < amount; i++) {
      var randomNumber = Math.floor(Math.random() * arrLength);

      if (randomNumbersArray.includes(randomNumber)) {
        i--;
      } else {
        randomNumbersArray.push(randomNumber);
      }
    }

    return randomNumbersArray;
  };

  const f_winners = (candidateArr, numberOfWinner) => {
    var randomNumbers = f_createRandomNumber(
      numberOfWinner,
      candidateArr.length
    );
    var winnersArr = [];

    for (let i = 0; i < randomNumbers.length; i++) {
      winnersArr.push(candidateArr[randomNumbers[i]]);
    }
    setWinners(winnersArr);
  };

  const f_draw = () => {
    var candidateArr = candidate.split("\n");

    if (parseInt(numberOfWinner) > candidateArr.length) {
      alert("Number of winners can not be more than count of candidates");
      return;
    }

    f_winners(candidateArr, parseInt(numberOfWinner));
  };
  return (
    <div className="form-group text-center m-5 p-5">
      <label htmlFor="candidates">Candidates</label>
      <textarea
        className="form-control mt-1 mb-2"
        id="candidates"
        rows="3"
        onChange={setCanditates}
        value={candidate}
      ></textarea>
      <label htmlFor="candidateNumber">Winner number</label>
      <input
        type="number"
        className="form-control mb-3"
        id="candidateNumber"
        placeholder="Example input"
        onChange={setNumberOfWinners}
        value={numberOfWinner}
      ></input>
      <label htmlFor="winners">Winner(s)</label>
      <fieldset disabled>
        <textarea
          className="form-control mt-1"
          id="winners"
          rows="3"
          readOnly
          value={winners}
        ></textarea>
      </fieldset>
      <button className="btn btn-primary m-3" onClick={f_draw}>
        Draw
      </button>
    </div>
  );
}

export default Draw;
