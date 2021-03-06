import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import HomeContainer from './home/home_container';
import SessionFormContainer from './auth/session_form_container';
import EventIndexContainer from './event/event_index_container';
import EventDetailViewContainer from './event/event_detail_view_container';
import NewEventFormContainer from './event_form/new_event_form_container';
import UserContainer from './auth/user_container';
import CategoriesContainer from './categories/categories_container';
import TicketModalContainer from './ticket_modal/ticket_modal_container';
import SearchContainer from './search/search_container';
import { updateFilter } from '../actions/filter_actions';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._redirectToHome = this._redirectToHome.bind(this);
    this._setFilterToUser = this._setFilterToUser.bind(this);
    this._userOnEnter = this._userOnEnter.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/home/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  _setFilterToUser(nextState, replace) {
    if(this.context.store.getState().filter === null){
      this.context.store.dispatch(updateFilter("myEvents"))
    }
  }

  _redirectToHome(nextState, replace) {
    if(location.hash[2] === '?') {
      replace('/home');
    }
  }

  _userOnEnter(nextState, replace) {
    this._ensureLoggedIn(nextState, replace)
    this._setFilterToUser()
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route  path="/" component={ App } onEnter={ this._redirectToHome }>
          <Route path= "home" component={ HomeContainer } >
            <Route path="login" component={ SessionFormContainer } />
            <Route path="signup" component={ SessionFormContainer } />
          </Route>
            <Route path="events/new" component={ NewEventFormContainer } onEnter={this._ensureLoggedIn } />
            <Route path="events/:id" component={ EventDetailViewContainer } >
              <Route path="tickets/new" component={ TicketModalContainer } />
            </Route>
            <Route path="users/:id" component={ UserContainer } onEnter={this._userOnEnter }/>
            <Route path="categories/:tag" component= { CategoriesContainer } />
            <Route path="search/:query" component= { SearchContainer } />
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;