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
import Axios  from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'
import { server, showError } from '../common'
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
        const savedState = JSON.parse(stateString) || initialState
        this.setState({
            showDoneTasks: savedState.showDoneTasks
        }, this.filterTasks)

        this.loadTasks()
    }

    loadTasks = async () => {
        try{
            const maxDate = moment().format('YYYY-MM-10 23:59:59')
            const res = await Axios.get(`${server}/tasks?date=${maxDate}`)
            this.setState({ tasks: res.data })
        }catch(e) {
            showError(e)
        }
    }

    tooggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
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
        AsyncStorage.setItem('state', JSON.stringify({
                showDoneTasks: this.state.showDoneTasks
        }))
    }


    tooggleTask = async taskId => {
       try {
           await Axios.put(`${server}/tasks/${taskId}/toggle`)
           await this.loadTasks() 
        }catch(e) {
            showError(e)
       }
    }

    addTask = async newTask => {
        if(!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Descrição não informada')
            return
        }

        try{
            await Axios.post(`${server}/tasks`, {
                desc: newTask.desc,
                estimateAt: newTask.date
            })
            this.setState({  showAddTask: false }, this.loadTasks)

        }catch(e) {
            showError(e)
        }
 
       
    }  

    deleteTask = async id => {
       try {
        await Axios.delete(`${server}/tasks/${taskId}/toogle`)
        await this.loadTasks()
    }catch(e) {
            showError(e)
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