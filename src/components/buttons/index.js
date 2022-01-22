import cssStyle from "./buttons.module.css";
function Buttons(props){
const{content , theme , onclick , type , value , name , disable } = props;
return(
<button className={cssStyle[theme]}  type={type} name={name} onClick={onclick}>{content}</button>
    )
}
export default Buttons;