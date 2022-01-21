import cssStyle from "./buttons.module.css";
function Buttons(props){
const{content , Class , onclick , type , value , name , disable } = props;
return(
<button className={cssStyle[Class]} Class="test" type={type} name={name} onClick={onclick}>{content}</button>
    )
}
export default Buttons;