import cssStyle from "./poetItems.module.css";
import { Link } from "react-router-dom";
function PoetItems(props){
    const { link, imageURL, title } = props;

return (
    <Link to={link} target="_blank">
    <div className={cssStyle.containerItem}>
        <img src={imageURL} alt={title} />
        <p>{title}</p>
    </div>
</Link>
)
}
export default PoetItems;