import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 90,
    margin: 10,
    width: '90%',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default List;
