import { useEffect, useState } from 'react'
import './App.css'
// import { reactRefresh } from 'eslint-plugin-react-refresh';                                     



const Card = ({title}) => {
  const [ count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false); 
  useEffect( () => {
console.log(`${title} has been liked: ${hasLiked}`);
  });
  return(
    <div className='Card'  >
      <h2>{ title }</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Liked" : "Like"}
      </button>
    </div>
  )
}

const App = () => {


  return(
    <div>
      <h2>Fcntional Arrow component</h2>
        <Card title="Star wars" rating={5} iscool={true} actors={[{name: 'Actors'}]}/>
      <Card title="Avator" />
      <Card title="The lion king" />
    </div>
  )
   
}

export default App