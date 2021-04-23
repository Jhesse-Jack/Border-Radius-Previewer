//import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';
import './bootstrap.min.css';
import NavBar from './component/navbar';

function App() {
  let [topLeft, setTopLeft] = useState('');
  let [topRight, setTopRight] = useState('');
  let [bottomLeft, setBottomLeft] = useState('');
  let [bottomRight, setBottomRight] = useState('');

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
                  onInput={handleTopLeft}
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
                  onInput={handleTopRight}
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
                  onInput={handleBottomLeft}
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
                  onInput={handleBottomRight}
                  value={bottomRight} />
              </div>
            </section>
          </section>
        </div>
        &nbsp;
        {/* <div className="col-2 box-wrap">
          <p> Border-radius </p>
        </div> */}
        <div className="col-6 square">
          <p className="row">
            {topLeft}px : &nbsp; {topRight}px : &nbsp; {bottomLeft}px : &nbsp; {bottomRight}px
          </p>
        </div>
      </div>
    </div>
  )
}

export default App;

