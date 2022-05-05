import * as React from 'react';
import {  SafeAreaView } from 'react-native'
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Drawer from './Drawer';
import Stack from './Stack'
import tab from './Tab'

export default props => {
    <SafeAreaView style={{flex: 1}}>
        <createAppContainer>
            <Drawer />-
            {/* <Tab /> */}
            {/*<Stack />*/}
        </createAppContainer>
    </SafeAreaView>
}