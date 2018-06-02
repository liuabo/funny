import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./style/App.css";

import './iconfont/iconfont.css';

import Home from "./components/Home";
import Crunchies from "./components/Crunchies";
import Classify from "./components/Classify";
import My from "./components/My";
import Detail from "./components/Detail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={Home} />
          <Route exact path="/Crunchies" component={Crunchies} />
          <Route exact path="/Classify" component={Classify} />
          <Route exact path="/My" component={My} />
          <Route path="/Detail/:fid" component={Detail} />
          <footer id="foot">
          <NavLink activeClassName="active" className="home" exact to="/"><div className="foot iconfont"><p className="icon-tubiao15"></p><h2>首页</h2></div></NavLink>
          <NavLink activeClassName="active" className="crunchies" exact to="/Crunchies"><div className="foot iconfont"><p className="icon-jiangbei"></p><h2>榜单</h2></div></NavLink>
          <NavLink activeClassName="active" className="classify" exact to="/Classify"><div className="foot iconfont"><p className="icon-fenlei"></p><h2>分类</h2></div></NavLink>
          <NavLink activeClassName="active" className="my" exact to="/My"><div className="foot iconfont"><p className="icon-wode"></p><h2>我的</h2></div></NavLink>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
