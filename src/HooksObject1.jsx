import React, { useState } from "react";

const HooksObject1 = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        placeholder="First Name"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <br />
      <br />
      <input
        type="text"
        value={name.lastName}
        placeholder="Last Name"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>
        Hello {name.firstName} {name.lastName}
      </h2>
    </div>
  );
};

export default HooksObject1;
