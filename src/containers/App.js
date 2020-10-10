import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      UserImages: []
    }
  }
  componentDidMount() {
    fetch('http://starlord.hackerearth.com/insta')
      .then(response => {
        console.log(response.body);
        return response.json();
      })
      .then(users => {
        this.setState({
          UserImages: users
        })
      })

  }

  onSearchChange = (event) => {
    // console.log(event.target.value)
    console.log(this.state.UserImages);
    let myData;
    if(event.target.value === 'asc'){
      myData = [].concat(this.state.UserImages)
    .sort((a, b) => a.likes > b.likes ? 1 : -1);
    }else if(event.target.value === 'dsc'){
      myData = [].concat(this.state.UserImages)
    .sort((a, b) => a.likes > b.likes ? -1 : 1);
    }
    else if(event.target.value === 'asctime'){
      myData = [].concat(this.state.UserImages)
    .sort((a, b) => a.timestamp.localeCompare(b.timestamp));
    }
    else if(event.target.value === 'dsctime'){
      myData = [].concat(this.state.UserImages)
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    }
  
    this.setState({
          UserImages: myData
        })
  }

  render() {
    const { UserImages } = this.state;
    
    return !UserImages.length ?
      <h1>loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Insta</h1>
          <div className="ph3">
            <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-light-purple ma2" value="asc" onClick={this.onSearchChange}>Filter Likes ascending </button >
            <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-hot-pink ma2" value="dsc" onClick={this.onSearchChange}>Filter Likes descending</button >
            <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-purple ma2" value="asctime" onClick={this.onSearchChange}>Filter timestamp ascending </button >
            <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-pink ma2" value="dsctime" onClick={this.onSearchChange}>Filter timestamp descending</button >
          </div>
          <Scroll>
            <ErrorBoundry>
              <CardList UserImages={UserImages} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );

  }

}

export default App;
