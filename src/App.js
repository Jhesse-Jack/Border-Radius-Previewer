//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './bootstrap.min.css';

function App() {
  return (
    <div className="App container-fluid">
      <div className="App-header row">
        <div className="col float-left left-section">
          <section className="row">
            <section className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Top left: </span>
                  &nbsp;
                </div>
                <input type="text" className="form-control" />
              </div>
            </section>
            <section className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Top Right: </span>
                  &nbsp;
                </div>
                <input type="text" className="form-control" />
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
                <input type="text" className="form-control" />
              </div>
            </section>
            <section className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Bottom Right: </span>
                  &nbsp;
                </div>
                <input type="text" className="form-control" />
              </div>
            </section>
          </section>
        </div>
        &nbsp;
        &nbsp;
        <br />
        &nbsp;
        &nbsp;
        <div className="col-3 box-wrap">
          <p> Border-radius </p>
        </div>
      </div>
    </div>
  )
}

export default App;

{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div>
); 



             <label for="top-right">
                Top Right
                <input 
                  placeholder="Top Right Radius"
                  type="text" />
              </label>*/}
