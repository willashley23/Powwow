import React from 'react';
import {Router, Root} from 'react-router';
import { withRouter } from 'react-router';
import EventIndex from './event_index';
import EventIndexContainer from './event_index_container';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.props.requestBookmarks();
  } 

  // This might be causing issues since there is no current user at first
  handleClick() {
    if (this.props.currentUser) {
      this.props.router.push(`/users/${currentUser.id}`);
    } else {
      this.props.router.push("/home/login");
    }
  }

  render() {
    return (
      <div className="home">
        <div className="banner">
          <ul className="cb-slideshow">
            <li><span>Image 01</span>
              <div>
                <h3>Experience, Discover, Explore</h3>
                <h4>Turnout helps you find exciting events near you.</h4>
                <button className="get-started-button" onClick={this.handleClick}>Get Started</button>
              </div>
            </li>
            <li><span>Image 02</span></li>
            <li><span>Image 03</span></li>
            <li><span>Image 04</span></li>
            <li><span>Image 05</span></li>
            <li><span>Image 06</span></li>
          </ul>
          <div className="banner-header"><h2></h2></div>
        </div>
         <div className="events">
          <EventIndexContainer />
          {this.props.children}  
        </div> 
          <div className="categories-header">
            <h2 className="categories-h2">Browse Popular Categories</h2>
          </div>

        <div className="categories-container">
          <br/>
         
            <div className="categories-row top-row">

              <div className="category-card wide">
                <div className="category-text">
                  <h2>Music</h2>
                  <p className="category-card-p">Find everything from classical concerts to music festivals</p>
                </div>
                <img src= "assets/music.jpeg" className="category-image" />
              </div>

              <div className="category-card festivals">
                <div className="category-text">
                  <h2>Festivals</h2>
                  <p className="category-card-p">Music, tradition, family, and more</p>
                </div>
                <img src= "assets/social.jpeg" className="category-image" />
              </div>

            </div>
         

            <div className="categories-row center-row">
              <div className="category-card">
                <div className="category-text">
                  <h2>Parties</h2>
                  <p className="category-card-p">Happy hour and all night celebrations</p>
                </div>
                <img src= "assets/party.jpeg" className="category-image" />
              </div>

              <div className="category-card" id="lessons-card">
                <div className="category-text" id="lessons">
                  <h2>Lessons</h2>
                  <p className="category-card-p lessons-p">Piano, fencing, ping-pong, and everything in between</p>
                </div>
                <img src= "assets/lessons.jpeg" className="category-image" />
              </div>
              
              <div className="category-card">
                <div className="category-text">
                  <h2>Sports</h2>
                  <p className="category-card-p">Triathlons, races, anything is fair game</p>
                </div>
                <img src= "assets/sports.jpeg" className="category-image" />
              </div>
            </div>

            <div className="categories-row bottom-row">
              <div className="category-card">
                <div className="category-text">
                  <h2 className="arts-header">Arts</h2>
                  <p className="category-card-p" id="arts">Art shows, touring exhibits, and performances</p>
                </div>
                <img src= "assets/arts.jpeg" className="category-image" />
              </div>

              <div className="category-card wide celebrations">
                <div className="category-text">
                  <h2>Celebrations</h2>
                  <p className="category-card-p">Join in celebrations from cultures all around the globe</p>
                </div>
                <img src= "assets/colorrun.jpeg" className="category-image" />
              </div>
            </div>
          </div>
        </div> 
    )
  }
}

export default withRouter(Home);
// export default Search;