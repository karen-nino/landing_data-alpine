import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import mainbuilder from './containers/mainbuilder/mainbuilder';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContactMessage from './containers/MainContent/Pages/ContactMessage';
import FloatingButton from './containers/MainContent/Sections/FloatingButton'; // Adjust the path accordingly


class App extends Component {

  render() {
    let layout = null;
     console.log('TopBar '+this.props.topbar);
     console.log('loginpage '+this.props.loginpage);
     console.log('islight '+this.props.islight);

     layout = (
      <Layout topbar={this.props.topbar} islight={this.props.islight} loginpage={this.props.loginpage}>

        <Switch>
          <Route path="/" component={mainbuilder} />
          <Route path="/ContactMessage" component={ContactMessage} />
        </Switch>
        <FloatingButton style={{ position: 'fixed', bottom: '20px', right: '20px' }}/> {/* Add the FloatingButton component here */}

      </Layout>
    );

    return (
      <div className="App">
        {layout}
      </div>
    );
  }
}
const mapStatetoProps = state =>{
  return {
      topbar: state.ui_red.topbar,
      loginpage: state.ui_red.loginpage,
      islight: state.ui_red.islight,
  };
}

export default withRouter(connect(mapStatetoProps)(App));

