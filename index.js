import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Styles from './home';
import Form from './about';
import New from './joinus';

const routing = (
    <Router>
        <div>
            <i><h1 style={{color:"red", textAlign:"center"}}>ENJOY YOUR SHOPPING</h1></i>
            <Routes>
                <Route path="/" element={<Styles/>} />
                <Route path="/about" element={<Form/>} />
                <Route path="/joinus" element={<New/>} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
// ReactDOM.render(<Style />, document.getElementById('root'));
// ReactDOM.render(<Forms />, document.getElementById('root'));
// ReactDOM.render(<News />, document.getElementById('root'));
// import './index.css';
// import New from './joinus';
// ReactDOM.render(<New />, document.getElementById('root'));
// import Form from "./Form";
// ReactDOM.render(<Form/>,document.getElementById('root'));
// import Form  from './Form'
// ReactDOM.render(<Form/> ,document.getElementById('root'));
// import Reacthooks from "./Effecthooks"
// ReactDOM.render(<Reacthooks/>, document.getElementById('root'));

// class Tablecreation extends React.Component{
//     render(){
//         return(
//             <React.Fragment>
//                 <h1>hello</h1>
//                 <h2>hello</h2>
//             </React.Fragment>
//         )
//     }
// }

// ReactDOM.render(<Tablecreation/>,document.getElementById('root'))
// class Tablecreation extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>hello</h1>
//                 <h2>hello</h2>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Tablecreation/>,document.getElementById('root'))
// class Tablecreation extends React.Component {
//     render() {
//         return (
//             <table>
//                 <tr>

//                 </tr>
//             </table>
//         )
//     }
// }
// class Rowcreation extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <td> name1</td>
//                 <td>name2</td>
//             </React.Fragment>
//         )
//     }
// }
// ReactDOM.render(<Tablecreation />, document.getElementById('root'))
// ReactDOM.render(<Rowcreation />, document.getElementById('root'))
// import React,{Component} from 'react';
// import ReactDOM from 'react-dom';


// class Cartoon extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {Ilike:"Tom"};
//     }
//     static getDerivedStateFromProps(props,state) {
//         return {Ilike:props.A};
// }
// render(){
//     return(
//         <h1>This {this.state.Ilike} Cartoon is cool</h1>
//     );
// }
//     }
// ReactDOM.render(<Cartoon A="Jerry"/>,document.getElementById('root'));
// import React,{Component} from "react";
// import ReactDOM from "react-dom";
// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={I:"State"};
//     }componentDidMount(){
//         setTimeout(()=>{
//             this.setState({I:"DidMount"})
//         },2000)
//     }
// render(){
//     return(
//         <h1>{this.state.I}</h1>
//     );
// }
// }
// ReactDOM.render(<Header/>,document.getElementById('root'));
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoritecolor: "red" };
    // }
    // static getDerivedStateFromProps(props, state) {
    //     return { favoritecolor: props.favcol };
    // }/
//     shouldComponentUpdate(){
//         return true;
//     }
//     changeColor = () => {
//         this.setState({ favoritecolor: "blue" });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>My favorite Color is {this.state.favoritecolor}</h1>
//                 <button type="button" onClick={this.changeColor}>Change color</button>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Header favcol="Yellow" />, document.getElementById('root'));