import React, { useEffect, useState } from 'react';
import { getComputersFromDB } from './dataBase/computersRequests';

const App = () => {
  const [computers, setComputers] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const renderComputers = () => {
    getComputersFromDB()
      .then((res) => {
        setErrorMessage("")
        setComputers(res)
        console.log(res);
      }).catch((err) => {
        setErrorMessage(err.message)

      })
  }

  useEffect(() => {
    renderComputers()
  }, []);



  return (
    <div className="computers-app">
      <div className="add-new-Computer-section">
        <div>Add new Computer:</div>
        <div>Currently this function is not working!!!!!</div>
      </div>
      <div className="computers-container">
        <h2>Computers</h2>
        {computers.map((computer, i) => (
          <div key={"computer" + i}>
            <div>Model: {computer.model}</div>
            <div>Manufacturer: {computer.manufacturer}</div>
            <div>Disc: {computer.disc}</div>
            <div>Ram: {computer.ram}</div>
            <div>Price: {computer.price}</div>
            <br />
            <br />
          </div>
        ))}
      </div>
      {errorMessage !== "" && <div>{errorMessage}</div>}
    </div>
  );
}

export default App;
