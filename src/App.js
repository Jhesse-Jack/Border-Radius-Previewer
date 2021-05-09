import './App.css';
import React, { Component } from 'react';
import './bootstrap.min.css';
import NavBar from './component/navbar';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          topLeft: '10',
          topRight: '10',
          bottomLeft: '10',
          bottomRight: '10',
        };
        this.handleTopLeft = this.handleTopLeft.bind(this);
        this.handleTopRight = this.handleTopRight.bind(this);
        this.handleBottomLeft = this.handleBottomLeft.bind(this);
        this.handleBottomRight = this.handleBottomRight.bind(this);
    }
    handleTopLeft(e) {
      this.setState({
        topLeft: e.target.value
      });
      let tLeft = e.target.value
      document.getElementById("box").style.borderTopLeftRadius = (tLeft + 'px');
      //document.getElementById("")
    }
    handleTopRight(e){
      this.setState({
        topRight: e.target.value
      });
      let tRight = e.target.value
      document.getElementById("box").style.borderTopRightRadius = (tRight + 'px');
    }
    handleBottomLeft(e){
      this.setState({
        bottomLeft: e.target.value
      });
      let bLeft = e.target.value
      document.getElementById("box").style.borderBottomLeftRadius = (bLeft + 'px');
    }
    handleBottomRight(e){
      this.setState({
        bottomRight: e.target.value
      });
      let bRight = e.target.value
      document.getElementById("box").style.borderBottomRightRadius = (bRight + 'px');
    }
    render(){
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
                        onChange={this.handleTopLeft}
                        value={this.state.topLeft} 
                        />
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
                        onChange={this.handleTopRight}
                        value={this.state.topRight} 
                        />
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
                        onChange={this.handleBottomLeft}
                        value={this.state.bottomLeft} 
                        />
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
                        onChange={this.handleBottomRight}
                        value={this.state.bottomRight} 
                        />
                    </div>
                  </section>
                </section>
              </div>
              &nbsp;
              <div className="col-6 box" id="box">
                <p className="row insidebox">
                  {(this.state.topLeft !== "" && this.state.topRight !== "") ? (
                    <p> {this.state.topLeft}px : &nbsp; {this.state.topRight}px</p>
                  ) : null}
                </p>
                <p className="row insidebox">
                  {(this.state.bottomLeft !== "" && this.state.bottomRight !== "") ? (
                    <p> {this.state.bottomLeft}px : &nbsp; {this.state.bottomRight}px </p>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
        )
    }
}

export default App;