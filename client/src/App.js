import React ,{Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import CreateBook from './components/CreateBook'
import ShowBookDetails from './components/ShowBookDetails'
import ShowBookList from './components/ShowBookList'
import UpdateBookInfo from './components/UpdateBookInfo'

class App extends Component  {
  render(){
  return (
    <div className="App">
      <Router>
        <div>
          <Route path='/' component={ShowBookList}/>
          <Route path='/create-book' component={CreateBook}/>
          <Route path='/edit-book/:id' component={UpdateBookInfo}/>
          <Route path='/show-book/:id' component={ShowBookDetails}/>
        </div>
      </Router>
    </div>
  );
}}

export default App;
