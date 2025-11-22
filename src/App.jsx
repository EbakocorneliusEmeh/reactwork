

import { useEffect, useState } from 'react'
import './App.css'

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div className="Card">
      <h2>{title}</h2>
      <button 
  className={hasLiked ? "btn-liked" : "btn-like"}
  onClick={() => setHasLiked(!hasLiked)}
>
  {hasLiked ? "Liked" : "Like"}
</button>

<div style={{ marginTop: "10px" }}>
  <p>Count: {count}</p>

  <button className="btn-increase" onClick={() => setCount(count + 1)}>
    Increase
  </button>

  <button className="btn-decrease" onClick={() => setCount(count - 1)}>
    Decrease
  </button>
</div>

 </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

      <Card title="Star Wars" rating={5} iscool={true} actors={[{ name: 'Actors' }]} />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
