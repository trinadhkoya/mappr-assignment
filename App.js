/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet,} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import GithubRepoList from "./src/containers/GithubRepoList";
import GithubRepoInfo from "./src/containers/GithubRepoInfo";

console.disableYellowBox=true;

const MainNavigator = createStackNavigator({
    RepoList: {screen: GithubRepoList},
    RepoInfo: {screen: GithubRepoInfo},
});

const App = createAppContainer(MainNavigator);

export default App;
