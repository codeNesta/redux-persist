// Imports: Dependencies
import React from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

// Imports: Redux Actions
import { login } from '../redux/actions/authActions';
import { increaseCounter, decreaseCounter } from '../redux/actions/counterActions';
// Screen Dimensions
const { height, width } = Dimensions.get('window');
// Screen: Counter
class Counter extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loggedInContainer}>
          <Text style={styles.loggedInText}>Logged In: </Text>
          <Text style={styles.loggedInText}>{`${this.props.loggedIn}`}</Text>
          <Button
            title="Login"
            onPress={this.props.loggedIn === false ? () => this.props.login(true) : () => this.props.login(false)}
            style={styles.loginButton}
          />
        </View>
        <Text style={styles.counterTitle}>Counter</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   loggedInContainer: {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom: 40,
   },
   loginButton: {
     marginTop: 20,
     paddingTop: 20,
   },
   counterContainer: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
   },
   loggedInText: {
     fontFamily: 'System',
     fontSize: 17,
     fontWeight: '400',
     color: '#000',
   },
   counterTitle: {
     fontFamily: 'System',
     fontSize: 32,
     fontWeight: '700',
     color: '#000',
   },
   counterText: {
     fontFamily: 'System',
     fontSize: 36,
     fontWeight: '400',
     color: '#000',
   },
   buttonText: {
     fontFamily: 'System',
     fontSize: 50,
     fontWeight: '300',
     color: '#007AFF',
     marginLeft: 40,
     marginRight: 40,
   },
});
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
  };
};



export default connect(mapStateToProps, {increaseCounter,decreaseCounter,login})(Counter);