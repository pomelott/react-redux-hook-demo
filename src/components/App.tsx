import Btn from './Btn';
import Input from './Input';
import List from './List';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {listenAction, readAction} from '../newStore/actions';
function App (props: any) {

  const dispatch = useDispatch();
  const [state, setState] = useState({
    inputValue: '去打球？'
  } as any);
  const listenList = useSelector((state: any) => state.listenList);
  const readList = useSelector((state: any) => state.readList);



  const handleChange = (e: React.ChangeEvent) => {
    setState({
      inputValue: (e.target as any).value
    })
  }

  const handleClick = (e: React.MouseEvent, type: string) => {
    if (type === 'listen') {
      dispatch({
        type: listenAction.DO_LISTEN,
        payload: state.inputValue
      })
    } else {
      dispatch({
        type: readAction.DO_READ,
        payload: state.inputValue
      })
    }
  }

  const handleListItemClick = (index: number, type: string) => {
    if (type === 'listen') {
      dispatch({
        type: listenAction.DELETE_LISTEN_ITEM,
        payload: index
      })
    } else {
      dispatch({
        type: readAction.DELETE_READ_ITEM,
        payload: index
      })
    }
  }

  return (
    <div>
        {/* 此处demo重复UI组件，暂不做抽离。实际项目中应根据情况抽离 */}
        {/* 听力列表 */}
        <h3 className='text-lg bg-blue-500 text-white p-3 mt-5'>{listenList.title}</h3>
        <Input onChange={handleChange} value={state.inputValue} placeholder="爷请输入..."/>
        <Btn rounded onClick={(e:any) => {handleClick(e, 'listen')}}>Add</Btn>
        <List data={listenList.list ? listenList.list : []} itemClick={(index: number) => {handleListItemClick(index, 'listen')}}/>
        {/* 阅读列表 */}
        <h3 className='text-lg bg-blue-500 text-white p-3 mt-5'>{readList.title}</h3>
        <Input onChange={handleChange} value={state.inputValue} placeholder="爷请输入..."/>
        <Btn rounded onClick={(e: any) => {handleClick(e, 'read')}}>Add</Btn>
        <List data={readList.list ? readList.list : []} itemClick={(index: number) => {handleListItemClick(index, 'read')}}/>
    </div>
  )
}

export default App;