import React from 'react'
import { createAppContainer, createSwitchNavigator } from'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

import AuthOrApp  from './screens/AuthOrApp'
import menu from './screens/menu'
import commonStyles from './commonStyles'

const menuConfig = {
    initialRouteName: 'Today',
    contentComponent: menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight:'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080',
            fontWeight: 'bold',
        }
    }
}

const menuRoutes = {
    Today: {
        name: 'Today',
        screen: props => <TaskList title='Hoje' daysAheader={0} {...props}/>,
        navigationOptions: {
            title: 'Hoje'
        }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <TaskList title='Amanhã' daysAheader={1} {...props}/>,
        navigationOptions: {
            title: 'Amanhã'
        }
    },


    Week: {
        name: 'Week',
        screen: props => <TaskList title='Semana' daysAheader={7} {...props}/>,
        navigationOptions: {
            title: 'Semana'
        }
    },

    Month: {
        name: 'Month',
        screen: props => <TaskList title='Mês' daysAheader={30} {...props}/>,
        navigationOptions: {
            title: 'Mês'
        }
    },

}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig)

const MainRoutes = {
    AuthOrApp: {
        name: 'AuthOrApp',
        screen: AuthOrApp
    },
    Auth: {
        name:'Auth',
        screen: Auth
    },

    Home: {
        name: 'Home',
        screen: TaskList
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'AuthOrApp'
})

export default createAppContainer(MainNavigator)