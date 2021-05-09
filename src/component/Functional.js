import './App.css';
import React, { useState} from 'react';
import './bootstrap.min.css';
import NavBar from './component/navbar';

function App() {
  let [topLeft, setTopLeft] = useState('5');
  let [topRight, setTopRight] = useState('5');
  let [bottomLeft, setBottomLeft] = useState('5');
  let [bottomRight, setBottomRight] = useState('5');
  //const box = document.querySelector('.box');
  //let initValue = getComputedStyle(box)['border-radius'];
  const cssStyle = useState({
    borderRadius: '50px',
    background: '#e0e0e0',
    boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff'
  })

  function handleTopLeft(e){
    setTopLeft(e.target.value)
    let tLeft = e.target.value
    document.getElementById("box").style.borderTopLeftRadius = (tLeft + "px");
  }

  function handleTopRight(e){
    setTopRight(e.target.value)
    let tRight = e.target.value
    document.getElementById("box").style.borderTopRightRadius = (tRight + "px");
  }

  function handleBottomLeft(e){
    setBottomLeft(e.target.value)
    let bLeft = e.target.value
    document.getElementById("box").style.borderBottomLeftRadius = (bLeft + "px");
  }

  function handleBottomRight(e){
    setBottomRight(e.target.value)
    let bRight = e.target.value
    document.getElementById("box").style.borderBottomRightRadius = (bRight + "px");
  }

  return (
    <div className="container-fluid">
      <NavBar />
      <div className="App-header row">
        <div className="col-10 float-left left-section">
          <section className="row">
            <section className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text">Top left: </label>
                  &nbsp;
                </div>
                <input 
                  type="number" 
                  className="form-control" 
                  onChange={handleTopLeft}
                  value={topLeft} />
              </div>
            </section>
            <section className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Top Right: </span>
                  &nbsp;
                </div>
                <input 
                  type="number" 
                  className="form-control"
                  onChange={handleTopRight}
                  value={topRight} />
              </div>
            </section>
          </section>
          &nbsp;
          &nbsp;
          <section className="row">
            <section className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Bottom Left: </span>
                  &nbsp;
                </div>
                <input 
                  type="number" 
                  className="form-control"
                  onChange={handleBottomLeft}
                  value={bottomLeft} />
              </div>
            </section>
            <section className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Bottom Right: </span>
                  &nbsp;
                </div>
                <input 
                  type="number" 
                  className="form-control" 
                  onChange={handleBottomRight}
                  value={bottomRight} />
              </div>
            </section>
          </section>
        </div>
        &nbsp;
        <div className="col-6 box" id="box">
          <p className="row insidebox">
            {(topLeft !== "" && topRight !== "") ? (
              <p> {topLeft}px : &nbsp; {topRight}px</p>
            ) : null}
          </p>
          <p className="row insidebox">
            {(bottomLeft !== "" && bottomRight !== "") ? (
              <p> {bottomLeft}px : &nbsp; {bottomRight}px </p>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  )
}

// const styles = {
//   box: {
//     borderRadius: {topLeft}px {topRight}px {bottomLeft}px {bottomRight}px,
//   }
// }

export default App;

