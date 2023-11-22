import React,{Component} from "react";
import loading from "./giphy.gif";
export default class Spinner extends Component{
    render(){
        return(
            <div>
                <img src={loading} width="100px" height="100px" alt="loading"></img>
            </div>
        )
    }
}