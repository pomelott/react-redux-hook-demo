import React from 'react';
import Btn from './Btn';
import Input from './Input';
import List from './List';
import store from '../store';
class App extends React.Component {
  state: any;
  constructor (props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = Object.assign({
      name: 'tate',
      des: {
        age: 18,
        local: 'beijing'
      },
      inputState: '去打球？'
    }, store.getState());
  }
  componentDidMount () {
    store.subscribe(this.handleSub.bind(this))
  }

  handleSub () {
    this.updateState();
  }

  updateState () {
    // console.log(this.state, store.getState(), Object.assign({}, this.state, store.getState()))
    this.setState(Object.assign({}, this.state, store.getState()))
  }

  handleClick (e: React.MouseEvent) {
    console.log(e.target)
    store.dispatch({
      type: 'addList',
      payload: this.state.inputState
    })
  }


  handleChange (e: React.ChangeEvent) {
    // console.log((e.target as any).value);
    this.setState({
      inputState: (e.target as any).value
    })
  }

  handleListItemClick (index: any) {
    console.log(index)
    store.dispatch({
      type: 'deleteItem',
      payload: index
    })
  }

  render () {
    return (
      <div className="dark-theme">
        <Input onChange={this.handleChange} value={this.state.inputState} placeholder={this.state.placeHolder}/>
        <Btn rounded onClick={this.handleClick}>Add</Btn>
        <List data={this.state.list} itemClick={this.handleListItemClick.bind(this)}/>
      </div>
    )
  }
};

export default App;