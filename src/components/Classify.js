import React, { Component } from 'react';
import { BrowserRouter as NavLink } from "react-router-dom";
import axios from "axios";
import '../style/Class.css';
import qs from 'qs'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }
    componentDidMount() {
        axios.get("/app/game/newgetclasslist")
            .then((res) => {
                // console.log(res);
                this.setState({
                    films: res.data.data.classList
                });
            })
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
        return ( <div className = "class" >
                <header className = "common-header" >
                <div className = "left" />
                <h3 className = "center" > 首页 </h3> <a className = "right iconfont icon-fangdajing"
                href = "#/search" />
                </header> {
                // this.state.films.map(function(item, index) {
                //     return ( <div key = { item.id } >
                //         <NavLink className = "singleLine-item"
                //         exact to = "/Detail" >
                //         <h2>
                //         <img className = "left-image"
                //         src = { item.image }
                //         /> <span className = "left-word" > { item.name } </span> </h2 > <i className = "iconfont icon-arrow-right-copy" > </i> </NavLink > </div>
                //     )
                // })
            } </div>
    )
}
}