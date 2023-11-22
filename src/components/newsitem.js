import React, { Component } from 'react'
import Newscomponent from './newscomponent';
import Spinner from './Spinner';

export class Newsitem extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      page:1,
      loading:true
  }
  }
  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08191b7d50a14e38b4aa1f6a13064c8c&pageSize=${this.props.pagesize}`;
    let data=await fetch(url);//response stored in data
    let parseddata=await data.json();
    this.setState({articles:parseddata.articles,
    total:parseddata.totalResults,
    loading:false});
  }
  handlePrev=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08191b7d50a14e38b4aa1f6a13064c8c&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);//response stored in data
    let parseddata=await data.json();
    this.setState({articles:parseddata.articles,
    page:this.state.page-1,
    loading:false});
}
  handleNext=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=08191b7d50a14e38b4aa1f6a13064c8c&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);//response stored in data
    let parseddata=await data.json();
    this.setState({articles:parseddata.articles,
      page:this.state.page+1,
      loading:false});
  }
  render() {
    return (
      <div className='container my-3'>
        {this.state.loading===true && <Spinner/>}
        <h2>Newsmonkey-Headlines</h2>
        <div className='row'>
           {
            this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
                 <Newscomponent  title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
                    </div>
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1}className="btn btn-dark" onClick={this.handlePrev}>&larr;Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>


        </div>
        
        
        
        
      </div>
    )
  }
}

export default Newsitem