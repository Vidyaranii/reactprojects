import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>
        Name: {name}, Age: {age}
      </p>
    </div>
  );
}export default UserForm
