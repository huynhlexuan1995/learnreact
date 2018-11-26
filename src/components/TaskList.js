import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  render() {
    var {tasks} = this.props;
    var elmTask = tasks.map((tasks,index)=>{
        return <TaskItem key={tasks.id} index={index} tasks={tasks}/>
    });
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Ten</th>
                    <th className="text-center">Trang Thai</th>
                    <th className="text-center">Hanh Dong</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name="filterName"
                        />
                    </td>
                    <td>
                        <select
                            className="form-control"
                            name="filterStatus"
                        >
                            <option value={-1}>Tat ca</option>
                            <option value={0}>An</option>
                            <option value={1}>Kich Hoat</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {elmTask}
            </tbody>
        </table>
    );
  }
}

export default TaskList;
