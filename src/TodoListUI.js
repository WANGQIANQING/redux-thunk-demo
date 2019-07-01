import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Input,List } from "antd";

class TodoListUI extends Component {
  render() {
    return (
      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
        <div>
          <Input placeholder="TodoInfo"
                 style={{ width: '300px', marginRight: '10px' }}
                 value={this.props.inputValue}
                 onChange={this.props.changeInput}
          />
          <Button type="primary" onClick={this.props.addItem}>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '500px' }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {
              this.props.deleteItem(index)
            }}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoListUI;