import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import '../style/Detail.css';

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.fid);
    axios
      .post("/app/game/newgetgamelist", qs.stringify({
          type: 1,
          page: 1,
          classId: 74
        }))
      .then(res => {
        console.log(res);
        this.setState({ films: res.data.data.film });
      });
  }
  render() {
    // var that = this;
    return (
      <div className="Detail">
        <h1>详情页</h1>
        {this.props.match.params.fid}
        {/* {
        this.state.films.map(function(item, index) {
          return (
            <div key={item.name}>
              
            </div>
          );
        })} */}
        <div className="footer-to"></div>
      </div>
    );
  }
}
