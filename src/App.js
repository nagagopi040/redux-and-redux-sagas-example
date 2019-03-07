import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from "./sagas/actions";
import { bindActionCreators } from 'redux';

class App extends Component {  
 	componentDidMount() {
    this.props.fetchUsers();
  }
  
	render() {
    const { users } = this.props
    console.log(this.props);
		return (
				<table>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Repos URL</th>
            <th>Site Admin</th>
          </tr>
          {users.map( (user, index) => {
            if(index%2 === 0){
              return(
                <tr>
                  <td>{user.id}</td>
                  <td>{user.login}</td>
                  <td>{user.repos_url}</td>
                  <td>{user.site_admin ? "YES" : "NO"}</td>
                </tr>
              )
            } else return null;
          })}
        </table>
		);
	}
}

const mapStateToProps = (state) => ({
  users : state.userReducers.users
})

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: bindActionCreators(fetchUsers, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);