'use strict';

import { StackNavigator } from 'react-navigation';
import MasterScreen from './MasterScreen';
import DetailScreen from './DetailScreen';

const MainNavigator = StackNavigator({
  Master: { screen: MasterScreen },
  Detail: { screen: DetailScreen },
});

export default MainNavigator;
