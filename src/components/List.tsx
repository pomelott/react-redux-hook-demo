function List (props: any): JSX.Element {
  const handleItemClick = (index: any) => {
    const {itemClick} = props;
    if (itemClick && typeof itemClick === 'function') {
      itemClick(index)
    }
  }
  let content;
  if (props.data && props.data.length) {
    content = props.data.map((item: string, index: number) =>
      <li key={index} className="border p-2 border-gray-300" onClick={() => {handleItemClick(index)}}>{item}</li>
    )
  } else {
    content = '暂无内容！'
  }
  return (
    <ul className="border-2 border-gray-100">
      {content}
    </ul>
  )
}

export default List;