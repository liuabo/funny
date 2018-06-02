import React, { Component } from "react";
import axios from "axios";
import { Carousel, WingBlank } from "antd-mobile";
import "../style/Home.css";
import "antd-mobile/dist/antd-mobile.css";



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      list: [],
      themeList: [],
      home_list: [],
      list_02: [],
      show : false
    };
    // this.gotoDetail = this.gotoDetail.bind(this);
  }
    gotoDetail(fid) {
    this.props.history.push("Detail/" + fid);
      console.log("点击帮助列表");
      console.log(this.state.show);
     if(this.state.show)
        {
            window.document.getElementById('foot').style.display = 'block';
        }
        else
        {
            window.document.getElementById("foot").style.display = "none";
        }

        this.setState({show: !this.state.show});
    }
    
  componentDidMount() {
      axios.get("/app/mainpage/newgetmainpagelist?page=1")
      .then((res)=>{
        // console.log(res);
        this.setState({
          films: res.data.data.bannerList,
          list: res.data.data.classList,
          themeList: res.data.data.themeList,
        });
      })
      axios.get("/app/mainpage/newgetmainpagelist?page=2")
        .then((res) => {
          // console.log(res);
          this.setState({
            list_02: res.data.data.themeList
          });
        })
       axios.get("/app/game/newgetclasslist")
      .then((res)=>{
        // console.log(res);
        this.setState({
          home_list: res.data.data.bannerList
        });
      })
  }
  render() {
    var that = this;
    return <div>
        <header className="common-header">
          <div className="left" />
          <h3 className="center">首页</h3>
          <a className="right iconfont icon-fangdajing" href="#/search" />
        </header>
        <WingBlank>
          <Carousel autoplay={true} infinite={true} selectedIndex={1} beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)} afterChange={index => console.log("slide to", index)}>
            {
              // console.log(this.state)
            }
            {this.state.films.map(function(item, index) {
              return <div key={item.id} onClick={() => that.gotoDetail(item.id)}>
                  <img className="Pic" src={item.image} />
                </div>;
            })}
          </Carousel>
        </WingBlank>
        <div className="layout3-list">
          {this.state.list.map(function(item, index) {
            return <div key={item.id}>
                <img className="Pic" src={item.image} />
                <h3>{item.name}</h3>
              </div>;
          })}
        </div>
        <div className="head">精品推荐</div>
        <section>
          {this.state.themeList.map(function(item, index) {
            //   console.log(item.gameList);
            var arr = item.gameList.slice(0, 2);
            // console.log(arr.slice(1));

            return <div className="themlist" key={item.id}>
                {arr.map(function(arr, index) {
                  return <div className="pic_box" key={arr.id}>
                      <img className="pic_01" src={arr.image} />
                      <h3>{arr.name}</h3>
                    </div>;
                })}
              </div>;
          })}
        </section>
        <div>
          <div className="theme-header">
            <h3>新品抢先玩</h3>
          </div>
          {this.state.themeList.map(function(item, index) {
            //   console.log(item.gameList);
            var arr = item.gameList.slice(0, 2);
            // console.log(arr);

            return <div className="themlist_01" key={item.id}>
                {arr.map(function(arr, index) {
                  return <div className="pic_box_01" key={arr.id}>
                      <img className="pic_01" src={arr.image} />
                      <div>
                        <h3>{arr.name}</h3>
                        <p>{arr.description}</p>
                      </div>
                      <h4 className="startGameBtn">开始</h4>
                    </div>;
                })}
              </div>;
          })}
        </div>
        <div className="theme-header">
            <h3>猜你喜欢</h3>
          </div>
          {this.state.list_02.map(function (item, index) {
              return <div key={item.id}>
                  <img className="like" src={item.image} />
                </div>;
            })}
            < div className = "theme2-list" >
             {
            this.state.list_02.map(function (item, index) {
              var arry = item.gameList
              // console.log(arry)
              return <div key={item.id}>
              {
                arry.map(function(item, index){
                  return(
                    <div key={item.id}>
                      <img className="like" src={item.image} />
                      <h3>{item.name}</h3>
                    </div>
                  )
                })
              }
                </div>;
            })}
            </div>
            <div className="theme-header">
              <h3>猜你喜欢</h3>
            </div>
            < div className = "theme3-list" >
               {
                this.state.list_02.map(function (item, index) {
                  var arry = item.gameList
                  // console.log(arry)
                  return <div key={item.id}>
                  {
                    arry.map(function(item, index){
                      {
                        var arr = arry.labelList;
                        // console.log(arr)
                      }
                      return(
                        <div key={item.id}>
                          <img className="liks" src={item.image} />
                          <div className="titl">
                          <h3>{item.name}</h3>
                          <h4>{item.description}</h4>
                          </div>
                        </div>
                      )
                    })
                  }
                    </div>;
                })}
            </div>
      </div>;
  }
}
