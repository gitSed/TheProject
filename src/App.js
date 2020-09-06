import React, { useState } from 'react';

/* Own */
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const App = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const handleAdd = (value) => {
    setCategories((prev) => [value, ...prev]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory handleAdd={handleAdd} />

      <ol style={{ padding: 0, width: '100%' }}>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </ol>
    </>
  );
};

export default App;
