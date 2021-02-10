function Btn (props: any) {
  let finalClass = ["bg-blue-500 p-3 text-white text-base"];
  if (props.rounded) {
    finalClass.push(' rounded');
  }
  const handleClick = (e: React.MouseEvent) => {
    const {onClick} = props;
    if (onClick) {
      (onClick as Function)(e);
    }
  }
  return (
    <button className={finalClass.join('')} onClick={handleClick}>
      {props.children}
    </button>
  )
}
export default Btn;