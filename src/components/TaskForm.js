import React, { Component } from 'react';

class TaskForm extends Component {

    onCloseForm =()=>{
        this.props.onCloseForm();
    }
    render() {
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Them cong viec
                    <span 
                        className="fa fa-times-circle text-right"
                        onClick={this.onCloseForm}
                    ></span>
                </h3>
            </div>
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <label>Ten: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                        />
                    </div>
                    <label>Trang thai</label>
                    <select
                        className="form-control"
                        name     = "status"
                    >
                        <option value={true}>Kich hoat</option>
                        <option value={false}>An</option>
                    </select><br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">
                            <span className = "fa fa-plus mr-5"></span>Luu lai
                        </button>&nbsp;
                        <button type="submit" className="btn btn-danger">
                            <span className = "fa fa-plus mr-5"></span>Huy bo
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
  }
}

export default TaskForm;
