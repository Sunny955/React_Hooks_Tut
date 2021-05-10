import React, { useState } from "react";

const HooksObjects = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleSubmit = () => {
    let name1 = document.getElementById("input1").value;
    let name2 = document.getElementById("input2").value;

    if (name1 === "") {
      window.alert("Please enter your first name to proceed!!");
    } else {
      setName({ firstName: name1, lastName: name2 });
    }
  };
  return (
    <div>
      <input id="input1" type="text" placeholder="Enter First Name" />
      <br />
      <br />
      <input id="input2" type="text" placeholder="Enter Second Name" />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <h2>
        Hello {name.firstName} {name.lastName}
      </h2>
    </div>
  );
};

export default HooksObjects;
