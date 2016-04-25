'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var {
  StyleSheet,
  Text,
  NavigatorIOS,
  Component
} = React;

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'PropertyFinder',
          component: SearchPage
        }}/>
    );
  }
}