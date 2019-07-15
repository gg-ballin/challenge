import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const API_ENDPOINT = 'https://reqres.in/api'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      searchfield: ''
    }
  }
  fetchData = (data) => {
    fetch(`${API_ENDPOINT}/users?page=${data}`)
      .then(response=> response.json())
      .then(result => {this.setState({users: result.data})});
  }
  componentDidMount() {
    this.fetchData()  
  }

  onSearchChange = (event) => {
    //this.setState({ searchfield: event.target.value })
    this.fetchData(event.target.value);
  }

  render() {
    const { users, searchfield } = this.state;
    let filteredUsers = []
    if(users.length) {
       filteredUsers = users.filter(user =>{
        return user.first_name.includes(searchfield);
      })
    }
    
    return !users.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Challenge</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList users={filteredUsers} />
          </Scroll>
        </div>
      );
  }
}

export default App;