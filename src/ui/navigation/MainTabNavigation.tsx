import React from 'react';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeView from '../pages/home/HomeView';
import AddListingView from '../pages/add-listing/AddListingView';
import ListingView from '../pages/listing/ListingView';
import ProfileView from '../pages/profile/ProfileView';

import Icons from 'react-native-vector-icons/MaterialIcons';

import {createStackNavigator} from 'react-navigation-stack';

const HomeStack = createStackNavigator(
  {
    'Home': HomeView,
  },
  {
    defaultNavigationOptions: {
      initialRouteName: 'Home',
    },
  },
);

const AddListingStack = createStackNavigator(
  {
    Prodash: AddListingView,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      initialRouteName: 'Prodash',
    },
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileView,
    Listing: ListingView,
  },
  {
    defaultNavigationOptions: {
      initialRouteName: 'Profile',
    },
  },
);

interface LineProps extends ViewProps {
  focused: boolean;
}

const Line = styled.View<LineProps>`
  height: ${props => (props.focused ? '2px' : '0px')};
  background-color: #3789f8;
  width: 100%;
  top: -7px;
`;

const StyledIcon = styled(Icons)<LineProps>`
  top: ${props => (props.focused ? '-4px' : '-3px')};
`;

const IconComponent = ({tintColor, focused, iconName}: {tintColor: string; focused: boolean; iconName: string;}) => (
  <>
    <Line focused={focused} />
    <StyledIcon name={iconName} size={25} color={tintColor} focused={focused} />
  </>
);

const MainTabNavigator = createBottomTabNavigator(
  {
    'Home': {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}: {tintColor: string; focused: boolean;}) => (
          <IconComponent
            iconName="insert-drive-file"
            tintColor={tintColor}
            focused={focused}
          />
        ),
      },
    },
    Prodash: {
      screen: AddListingStack,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}: {tintColor: string; focused: boolean;}) => (
          <IconComponent
            iconName="room"
            tintColor={tintColor}
            focused={focused}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}: {tintColor: string; focused: boolean;}) => (
          <IconComponent
            iconName="add"
            tintColor={tintColor}
            focused={focused}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#3789F8',
      inactiveTintColor: 'rgba(43, 44, 46, 0.35)',
      style: {
        paddingTop: 8,
      },
      labelStyle: {
        fontFamily: 'Rubik-Regular',
        fontWeight: '500',
      },
    },
  },
);

export default MainTabNavigator;
