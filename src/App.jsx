import React, { useState } from 'react';
import "./app.css"
import { data } from './data';

const App = () => {
  const [food, setFood] = useState(data);


  const filterShakes = () => {

    const myShakes = data.filter((mereShakes) => mereShakes.title === "shake")
    setFood(myShakes)
  }
  const filterLunch = () => {

    const myLunch = data.filter((meraLunch) => meraLunch.title === "lunch")

    setFood(myLunch)

  }
  const filterBreakfast = () => {

    const myBreakfast = data.filter((meraBreak) => meraBreak.title === "breakfast")

    setFood(myBreakfast)

  }
  const showAll = () => {
    setFood(data)
  }

  return (
    <div>
      <div className="navbar">
        <h1 >Our Menu</h1>
        <div className="horLine"></div>
        <div className="navlist">
          <li><button onClick={showAll}>All</button></li>
          <li><button onClick={filterBreakfast}>Breakfast</button></li>
          <li><button onClick={filterLunch}>Lunch</button></li>
          <li><button onClick={filterShakes}>Shakes</button></li>


        </div>
      </div>
      <div className="container">
        {
          food.map((foodData) => {
            return (
              <div key={foodData.id} className="data">
                <img src={foodData.Image} alt="" />
                <div className="text">
                  <div className="header">
                    <h3>{foodData.imageTitle}</h3>
                    <h3>{foodData.price}$</h3>
                  </div>
                  <p>{foodData.imageDetail}</p>
                </div>
              </div>

            )
          })
        }

      </div>
    </div>
  )
}

export default App
