import React from 'react';
import { withRouter } from 'react-router';
import {dateStringify} from '../reducers/selector';

class EventDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleTickets = this.handleTickets.bind(this);
  }
  
  componentDidMount() {
    if (!this.props.event) {
      this.props.requestEvent(this.props.params.id);
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  handleTickets() {
    if (this.props.currentUser === null) {
      this.props.router.push('/home/login');
    } else {
      this.props.createTicket(this.props.event.id)
      this.props.router.push(`/users/${currentUser.id}`);
    }
  }

  render() {
    let title;
    let date;
    let options;
    let dateStr;
    let d;
    let image_url;
    let style;
    let price;
    let description;
    let location;
    let tag;
    if(this.props.event) {
      title = this.props.event.title;
      date = this.props.event.date;
      image_url = this.props.event.image_url;
      price = this.props.event.price;
      description = this.props.event.description;
      location = this.props.event.location;
      tag = this.props.event.tag;
      if (this.props.event.image_url === "") {
        style = {
          backgroundImage: 'url(assets/default.png)'
        };
      } else {
        style = {
          backgroundImage: 'url(' + image_url + ')'
        };
      }
    // d = new Date(date)
    // dateStr = d.toLocaleDateString("en-us",options)
    // let parts = date.split('-');
    // parts[1] -= 1;
    // d = new Date(Date.UTC.apply(null, parts));
    // options = {
    //   month: "long",
    //   weekday: "long",
    //   year: "numeric",
    //   day: "numeric",
    //   timeZone: 'UTC'
    // };
    // dateStr = d.toLocaleDateString("en-us", options)
  }
    
    return(
      <div className="event-detail-container">
      <div style={style} className="event-detail-header">
         <h1 className="event-detail-title animated fadeInDown">{title}</h1>
         <h2 className="event-detail-date animated fadeInDown">{dateStringify(date)}</h2>
      </div>
      <div className="event-detail-body-wrapper">
      <div className="event-detail-menubar">
        <img src="assets/bookmark.png" className="event-detail-bookmark-icon"/>
        <button className="purchase-tickets-button" onClick={this.handleTickets}>Tickets</button>
        <span className="event-detail-price">${price}</span>
      </div>
      <div className="event-detail-body">
          <div className="event-detail-info">
            <div className="event-pair">
              <h2 className="detail-headings">When: </h2>
              <p className="event-detail-p">{dateStringify(date)}</p>
            </div>
             <div className="event-pair">
              <h2 className="detail-headings">Where: </h2>
              <p className="event-detail-p">{location}</p>
            </div>
             <div className="event-pair">
              <h2 className="detail-headings">Tags: </h2>
              <p className="event-detail-p event-detail-tag">#{tag}</p>
            </div>
            <div className="event-description">
              <h2 className="event-description-header">Event Description</h2>
              <p className="event-description-body">{description}</p>
            </div>
          </div>
      </div>
      </div>
      </div>
    );
  }
};

export default withRouter(EventDetailView);