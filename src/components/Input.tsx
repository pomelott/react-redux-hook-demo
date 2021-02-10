import {useState} from 'react'
function Input (props:any) {
  const {placeholder = 'please input ..', value = ''} = props;
  const [stateValue, setValue] = useState(value);


  const handleChange = (e: React.ChangeEvent) => {
    const {onChange} = props;
    if (onChange) {
      onChange(e);
    }
    setValue((e.target as any).value)
  }
  return (
    <input placeholder={placeholder} className="border-2 rounded-sm border-gray-500 text-gray-500" type="text" value={stateValue} onChange={handleChange}/>
  )
}

export default Input;