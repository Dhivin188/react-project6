import React from "react";
// import  ReactDOM  from "react";
import Amazon from './Images/a.png'
import WATCH from './Images/images (1).jpg'
import SHOE from './Images/download.jpg'
import './file.css'
class Styles extends React.Component {
    render() {
        return(
            <diV>
<h1 style={{textAlign:"center",color:"blue"}}>Shop With us</h1>
<p style={{textAlign:"center",fontFamily:"sans-serif"}}> Its headquarters are in Seattle, Washington. Amazon.com is a vast Internet-based enterprise that sells books, music, movies, housewares, electronics, toys, and many other goods, either directly or as the middleman between other retailers and Amazon.com's millions of customers. </p>
<img className="img" style={{ marginLeft: "1px" }} src={Amazon} alt="abd" width={300} height={300} />
<img className="img" style={{ marginLeft: "18%" }} src={WATCH} alt="abd" width={300} height={300} />
<img className="img" style={{ marginLeft: "18%" }} src={SHOE} alt="abd" width={300} height={300} />
<h1 style={{color:"skyblue",textAlign:"center"}}> <a href="http://localhost:3000/about">Next</a></h1>
</diV>
        )
        }
    }
    export default Styles;