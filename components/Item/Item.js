import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = ({ Items }) => {
  return (
    <View style={styles.container}>
      <View>
        {Items.map(item => {
          return <Text>{item}</Text>;
        })}
      </View>
      <View style={{ flex: 1, alignContent: 'center' }}>
        {Items.map(() => {
          return (
            <TouchableOpacity
              style={{
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: '#d6d7da',
                backgroundColor: 'gray',
                height: 40,
                width: 30,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text>-</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View>
        {Items.map(() => {
          return <Text>3</Text>;
        })}
      </View>
      {Items.map(() => {
        return <Text>+</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,

    flexWrap: 'wrap',
    alignContent: 'space-between'
  }
});

export default Item;
