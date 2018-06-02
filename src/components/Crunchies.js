import React, { Component } from 'react';
import { Tabs, WhiteSpace } from "antd-mobile";
import { StickyContainer } from "react-sticky";
import axios from 'axios';
import qs from "qs";

import "../style/Crunch.css";


export default class Crunchies extends Component {
    constructor(props) {
        super(props);
        this.state = {
         films: [],
         list: []
        }
    }
    componentDidMount() {
      axios
        .post("/app/game/newgetgameleaderboard", qs.stringify({
            type: 1,
            page: 1
          }))
        .then(res => {
          console.log(res);
          this.setState({
            films: res.data.data.gameList
          });
        });
         axios
           .post("/app/game/newgetgameleaderboard", qs.stringify({
               type: 2,
               page: 1
             }))
           .then(res => {
             console.log(res);
             this.setState({ list: res.data.data.gameList });
           });
    }
    render() {
        const tabs = [{ title: "总榜" }, { title: "新锐" }];
        var arry = this.state.films;
        return <div className="Crunchies">
            <header className="common-header">
              <div className="left" />
              <h3 className="center">首页</h3>
              <a className="right iconfont icon-fangdajing" href="#/search" />
            </header>
            <div className="crun" style={{ height: "100%", backgroundColor: "#fff" }}>
              <WhiteSpace />
              <StickyContainer>
                <Tabs tabs={tabs} initalPage={"t2"} tabBarUnderlineStyle={true}>
                  <div style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
                   {
                     this.state.films.map(function(item, index){
                      return <div key={item.id}>
                          <li className="item">
                          <span class="rank">{index+1}</span>
                            <div>
                              <img src={item.image} />
                              <div className="wordBox">
                                <h3 className="top">{item.name}</h3>
                                <div><span className="playCount">{item.playCount}在玩</span></div>
                                <p className="bottom">{item.description}</p>
                              </div>
                            </div>
                            <button className="startGameBtn">开始</button>
                          </li>
                          
                        </div>;
                     })
                   }
                   <div className="bot"></div>
                  </div>
                  <div style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
                    {
                     this.state.list.map(function(item, index){
                      return <div key={item.id}>
                          <li className="item">
                          <span class="rank">{index+1}</span>
                            <div>
                              <img src={item.image} />
                              <div className="wordBox">
                                <h3 className="top">{item.name}</h3>
                                <div><span className="playCount">{item.playCount}在玩</span></div>
                                <p className="bottom">{item.description}</p>
                              </div>
                            </div>
                            <button className="startGameBtn">开始</button>
                          </li>
                          
                        </div>;
                     })
                   }
                   <div className="bot"></div>
                  </div>
                </Tabs>
              </StickyContainer>
              <WhiteSpace />
            </div>
          </div>;
    }
} 