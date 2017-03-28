'use strict';

import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements';

const MasterScreen = ({ navigation }) => (
  <ItemList
    navigation={navigation}
    items={[
      {title: 'Item 1', key: '1'},
      {title: 'Item 2', key: '2'},
      {title: 'Item 3', key: '3'},
      {title: 'Item 4', key: '4'},
      {title: 'Item 5', key: '5'},
      {title: 'Item 6', key: '6'},
      {title: 'Item 7', key: '7'},
      {title: 'Item 8', key: '8'},
      {title: 'Item 9', key: '9'},
      {title: 'Item 10', key: '10'},
      {title: 'Item 11', key: '11'},
      {title: 'Item 12', key: '12'},
      {title: 'Item 13', key: '13'},
      {title: 'Item 14', key: '14'},
      {title: 'Item 15', key: '15'},
      {title: 'Item 16', key: '16'},
      {title: 'Item 17', key: '17'},
      {title: 'Item 18', key: '18'},
      {title: 'Item 19', key: '19'},
      {title: 'Item 20', key: '20'},
      {title: 'Item 21', key: '21'},
      {title: 'Item 22', key: '22'},
      {title: 'Item 23', key: '23'},
      {title: 'Item 24', key: '24'},
      {title: 'Item 25', key: '25'},
    ]}
  />
);

MasterScreen.navigationOptions = {
  title: 'Master',
};

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class ItemList extends React.PureComponent {

  _scrollPos = new Animated.Value(0);
  _scrollSinkY = Animated.event(
    [{nativeEvent: { contentOffset: { y: this._scrollPos } }}],
    {useNativeDriver: true},
  );

  _onPressItem = (item) => {
    this.props.navigation.navigate('Detail', {
      item,
    });
  };

  _onRefresh = () => {
    // Kick off a request to get new data here.
  };

  _renderItem = ({item}) => {
    if (Platform.OS === 'ios') {
      return (
        <ListItem
          key={item.key}
          onPress={() => this._onPressItem(item)}
          title={item.title}
          underlayColor="#d9d9d9"
        />
      );
    } else {
      return (
        <TouchableWithoutFeedback onPress={() => this._onPressItem(item)}>
          <View style={styles.item}>
            <Text style={styles.itemKey}>{item.key}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  };

  render() {
    return (
      <AnimatedFlatList
        data={this.props.items}
        getItemLayout={(data, index) => ({
          length: ITEM_AND_SEPARATOR_HEIGHT,
          offset: ITEM_AND_SEPARATOR_HEIGHT * index,
          index
        })}
        numColumns={1}
        onRefresh={this._onRefresh}
        onScroll={this._scrollSinkY}
        refreshing={false}
        renderItem={this._renderItem}
        style={styles.list}
      />
    );
  }
}

const ITEM_HEIGHT = 48;
const ITEM_AND_SEPARATOR_HEIGHT = ITEM_HEIGHT + (Platform.OS === 'ios') ? Dimensions.hairlineWidth : 0;
const styles = StyleSheet.create({
  list: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 0,
      },
      android: {
        paddingTop: 8,
      },
    }),
  },
  item: {
    width: Dimensions.get('window').width,
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
  },
  itemKey: {
    margin: 16,
    fontSize: 14,
  },
  itemTitle: {
    margin: 16,
    fontSize: 14,
  },
});

export default MasterScreen;
