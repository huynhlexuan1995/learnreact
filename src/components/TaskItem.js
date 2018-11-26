import React, { Component } from 'react';
class TaskItem extends Component {
  render() {
  	var {tasks,index} = this.props;
    return (
	    <tr>
		    <td>{index}</td>
		    <td>{tasks.name}</td>
		    <td className="text-center">
		        <span className ={ tasks.status === true ? 'label label-danger' : 'label label-success' }>{tasks.status === true ? 'Kich Hoat' : 'An' }</span>
		    </td>
		    <td className="text-center">
		        <button type="button" className="btn btn-warning">
		            <span className="fa fa-pencil mr-5"></span>Sua
		        </button>&nbsp;
		        <button type="button" className="btn btn-danger">
		            <span className="fa fa-trash mr-5"></span>Xoa
		        </button>
		    </td>
		</tr>
    );
  }
}

export default TaskItem;
