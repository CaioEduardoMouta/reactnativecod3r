import React, {Component } from 'react'
import { 
    View, 
    Text, 
    ImageBackground, 
    StyleSheet, 
    FlatList,
    TouchableOpacity,
    Platform, 
    Alert } from 'react-native'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'
import AsyncStorage  from "@react-native-community/async-storage"
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'
import AddTask from './AddTask'

const initialState = {
    showDoneTasks: true,
    showAddTask: true,
    visibleTasks: [],
    tasks: []
 }

export default class TaskList extends Component {
    state = {
       ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState')
        const state = JSON.parse(stateString) || initialState
        this.setState(state, this.filterTasks)
    }

    tooggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    isPending = task => {
        return task.doneAt === null
    } 

    filterTasks = () => {
        let visibleTasks = null
        if(this.state.showDoneTasks) {
            visibleTasks = [...this.setState.tasks]
        } else {
            const pending = task => task.doneAt === null
             
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })
        AsyncStorage.setItem('state', JSON.stringify(this.state))
    }

    tooggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            } 
        })

        this.setState({tasks}, this.filterTasks)
    }

    addTask = newTask => {
        if(!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Descrição não informada')
            return
        }

        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: null
        })

        this.setState({tasks, showAddTask: false }, this.filterTasks)
        
        deleteTask = id => {
            const tasks = this.state.tasks.filter(task => task.id !== id)
            this.setState({tasks}, this.filterTasks)
        }
    
    }
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM' )
        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask} 
                onCancel={() => this.setState({ showAddTask:false })}
                onSave={this.addTask}/>
                <ImageBackground source={todayImage}
                    style={styles.background}>
                        <View style={styles.iconBar}>
                            <TouchableOpacity onPress={this.toggleFilter}>
                                <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash' }
                                 size={20} color={commonStyles.colors.secundary}/>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.titleBar}>
                            <Text style={styles.title}>Hoje</Text>
                            <Text style={styles.subtitle}>{today}</Text>
                        </View>
                </ImageBackground>
                <View style={styles.taskList}>
                   <FlatList data={this.state.tasks}
                   keyExtractor ={item => `${item.id}`}
                   renderItem={({item}) => <Task {...item} tooggleTask={this.tooggleTask} onDelete={this.deleteTask} /> }/>       
                </View>
                <TouchableOpacity style={styles.addButton}
                    activeOpacity={0.7}
                    onPress={() => this.setState({ showAddTask: true})}>
                <Icon name="plus" size={20}
                color={commomStyles.colors.secundary} />
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
    background: {
        flex: 3
    },

    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secundary,
        fontSize: 50,
        marginLeft: 20, 
        marginBottom: 20
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secundary,
        fontSize: 20,
        marginLeft: 20, 
        marginBottom: 30
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 40 : 10 
    }

})