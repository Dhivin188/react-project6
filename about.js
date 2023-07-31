import React from "react";
import './file.css'
// import ReactDOM from "react-dom";
class Form extends React.Component {
    constructor() {
        super();
        this.state = { username: " ",phone:null,fees:null,errmsg:" " }
   
    }
    uservalue = (event) => {
        let n = event.target.name;
        let v = event.target.value;
        let err = " ";
        if (n === "phone") {
            if (v !== " " && !Number(v)) {
                event.preventDefault();
                alert("Invalid Must be a number");
            }
        }
        if (n === "fees") {
            if (v !== " " && !Number(v)) {
                event.preventDefault();
                alert("Invalid Must be a number");
            }
        }
        if (n === "ref") {
            if (v !== " " && !Number(v)) {
                event.preventDefault();
                alert("Invalid Must be a number");
            }
        }
        this.setState({ errmsg: err });
        this.setState({ [n]: v });
        // if (v !== " " && !Number(v)) {
        //     event.preventDefault();
        //     alert("Invalid Must be a number");
        // }
    }
    formsubmit = (event) => {
        event.preventDefault();
        alert("Successfully submitted " + this.state.username);
    }

    render() {
        return (
            <form className="di" onSubmit={this.formsubmit}>
                <h1 style={{ color: "red" }}>Registration Form</h1>
               <h2>
                <label style={{marginLeft:"-19%"}}>Choose a Sports:</label>
                <select >
                    <option >Cricket</option>
                    <option >Football</option>
                    <option >Kabadi</option>
                    <option >Swimming</option>
                </select></h2>
                
                {/* <h1>Hello this is {this.state.username}</h1> */}
                <h2>Enter your name:<input type="text" name="username" onChange={this.uservalue} /></h2>
                {/* <h1> My Age is {this.state.age}</h1> */}
               <h2 style={{marginLeft:"-2%"}}>Phone Number :<input age="text" name="phone" onChange={this.uservalue} /></h2>
               <h2> Your Address :<textarea rows={1} cols={27}></textarea></h2> 
               <h2 style={{marginLeft:"-8%"}}>Fees Amount :<input age="text" name="fees" onChange={this.uservalue} /></h2>
               <h2 style={{marginLeft:"-12%"}}>References :<input age="text" name="ref" onChange={this.uservalue} /></h2>
               <h2 style={{marginLeft:"-15%"}}>Total Fess :<input age="text" name="tot" onChange={this.uservalue} /></h2>
                <br></br>
            
                <button type="submit"><h2></h2>Submit</button>
                <h1 style={{color:"skyblue",textAlign:"center"}}> <a href="http://localhost:3000/joinus">Next</a></h1>
            </form>
        );
    }
}
// ReactDOM.render(<Form/> ,document.getElementById('root'));
export default Form;