import React, { Component } from 'react';
import { Tabs, WhiteSpace } from "antd-mobile";
import { StickyContainer, Sticky } from "react-sticky";

export default class Home extends Component {
    render() {
        const tabs = [
            { title: 'First Tab' },
            { title: 'Second Tab' },
            { title: 'Third Tab' },
            ];
            function renderTabBar(props) {
              return <Sticky>
                  {({ style }) => <div style={{ ...style, zIndex: 1 }}>
                      <Tabs.DefaultTabBar {...props} />
                    </div>}
                </Sticky>;
            }
        return <div className="Home">
            <div>
              <WhiteSpace />
              <StickyContainer>
                <Tabs tabs={tabs} initalPage={"t2"} renderTabBar={renderTabBar}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "250px",
                      backgroundColor: "#fff"
                    }}
                  >
                    Content of first tab
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "250px",
                      backgroundColor: "#fff"
                    }}
                  >
                    Content of second tab
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "250px",
                      backgroundColor: "#fff"
                    }}
                  >
                    Content of third tab
                  </div>
                </Tabs>
              </StickyContainer>
              <WhiteSpace />
            </div>
          </div>;
    }
} 