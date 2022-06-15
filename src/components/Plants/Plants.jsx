import React from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

let plants = [
  "https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/bird_paradise_flower.jpg",
  "https://morningchores.com/wp-content/uploads/2018/12/Velvet-palm-600x400.jpg",
  "https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/birds_nest_fern.jpg",
  "https://live.staticflickr.com/7523/27521082745_fc94a05059_b.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/71/Kalanchoe_tomentosa_Panda_Plant_%28fabooj%29.jpg"
]

function Plants() {
  const [plantNum, setPlantNum] = useState(0);
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log('in handleClick', plantNum);
    dispatch({type: "INCREMENT_PLANTS", payload: plantNum});
  }

  const updatePlantNum = () => {
    setPlantNum(Number(event.target.value));
  }

  return (
    <div>
      <h1>PLANTS</h1>
      {plants.map((plant, i) => 
        <img 
          key={i}
          src={plant}
        />
      )}
      <input type=" plant number" onChange={updatePlantNum}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Plants;
