import './App.css';
import AddFruit from './addFruit';
import ReadFruit from './readFruit';
import ClearBtn from './clearFruit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFruit } from './actions';
function App() {
      const [fruit,setFruit] = useState('')
      const dispatch = useDispatch()

      function handleFruit() {
        if (!fruit) {
          alert("Merci d'entrer un fruit")
        } else{
          dispatch(addFruit(fruit))
          setFruit('')
        }  
      }
  return (
    <div style={{border:"2px solid teal",width:"400px",margin:"auto",marginTop:"10px",padding:"40px"}}>
    <div className="App">
    <div>
            <label htmlFor="">Fruit a ajouté</label>
            <input type="text" name="" id="" onChange={(e)=>setFruit(e.target.value)} value={fruit}/>
            <button onClick={handleFruit}>Ajouter</button>
    </div>
    </div>
      <div>
      <ReadFruit />
      </div>
      <div style={{marginTop:"10px"}}>
        <ClearBtn />
      </div>
    </div>
  );
}

export default App;
