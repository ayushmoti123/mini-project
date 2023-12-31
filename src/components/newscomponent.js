import React, { Component } from 'react'

export class Newscomponent extends Component {
  

  render() {
    let{title,description,imageurl,newsurl}=this.props;
    return (
      <div>
        <div className="card mx-3">
        <img src={imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsurl} className="btn btn-sm btn-primary" >Read more</a>
        </div>
        </div>
    </div>
    )
  }
}

export default Newscomponent