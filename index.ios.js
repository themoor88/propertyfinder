'use strict';

var React = require('react-native');
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

class HelloWorld extends Component {
  render() {
    return <Text style={styles.text}> Hello World (Again)</Text>
  }
}

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'PropertyFinder',
          component: HelloWorld
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
