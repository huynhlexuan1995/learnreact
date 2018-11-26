import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks : [], //id: unique
            isDisplayForm : false
        }
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks =JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks:tasks
            });
        }
    }

    onGenerateData=()=>{
        var tasks = [
            {
                id:1,
                name:"Hoc Toan",
                status: true
            },
            {
                id:2,
                name:"Hoc Ly",
                status: false
            },
            {
                id:3,
                name:"Hoc hoa",
                status: true
            },
            {
                id:4,
                name:"Hoc Sinh",
                status: false
            }

        ];
        this.setState({
            tasks:tasks
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));

    }
    onToggleForm=()=>{
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        });
    }
    onCloseForm = ()=>{
        this.setState({
            isDisplayForm: false
        })
    }
    render() {
        var {tasks, isDisplayForm} = this.state;   //var tasks = this.state.tasks
        var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm}/> : '';
        return (
        <div className="container">
            <div className="text-center">
                <h1>Quan ly cong viec</h1><hr/>
            </div>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {/*Form*/}
                    {elmTaskForm}
                </div>

                <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={this.onToggleForm}
                    >    
                        <span className="fa fa-plus mr-5"></span>Them cong viec
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger ml-5" 
                        onClick={this.onGenerateData}
                    > Generate Data
                    </button>
                    { /*Search - Sort*/}
                    <Control/>
                    {/*List*/}
                    <TaskList tasks={ tasks }/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
