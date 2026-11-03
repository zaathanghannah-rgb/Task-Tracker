```jsx
import React from 'react';

const TodoInput = () => {
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="What needs to be done?"
      />
      <button className="add-btn">Add</button>
    </div>
  );
};

export default TodoInput;
```