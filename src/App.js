import './App.css';
import React, { useState} from 'react';
import './bootstrap.min.css';
import NavBar from './component/navbar';

function App() {
  let [topLeft, setTopLeft] = useState('');
  let [topRight, setTopRight] = useState('');
  let [bottomLeft, setBottomLeft] = useState('');
  let [bottomRight, setBottomRight] = useState('');
  //const box = document.querySelector('.box');
  //let initValue = getComputedStyle(box)['border-radius'];
  const cssStyle = useState({
    borderRadius: '50px',
    background: '#e0e0e0',
    boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff'
  })

  function handleTopLeft(e){
    setTopLeft(e.target.value)
  }

  function handleTopRight(e){
    setTopRight(e.target.value)
  }

  function handleBottomLeft(e){
    setBottomLeft(e.target.value)
  }

  function handleBottomRight(e){
    setBottomRight(e.target.value)
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
        <div className="col-6 box">
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

