import React, { useState } from 'react';
import './App.css';
import Dropdown from './Dropdown/Dropdown';

function App() {

  const [value, setValue] = useState([]);

  const handleDropdownChange = (newValue) => setValue(newValue);
  
  return (
    <div className="multiselect-dropdown">
      <Dropdown
        value={value}
        onChange={handleDropdownChange}
      >
        <div value="option1">
          Option1
        </div>
        <div value="option2">
          Option2
        </div>
        <div value="option3">
          Option3
        </div>
        <div value="option4">
          Option4
        </div>
      </Dropdown>
    </div>
  );
}

export default App;
