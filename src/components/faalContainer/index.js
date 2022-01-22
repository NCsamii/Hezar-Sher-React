import cssStyle from "./faalContainer.module.css";
import useHafezFaal from "../../hooks/useHafezFaal";
function FaalContainer(props){
    const { poemTitle, poem, poemAudio, interpretation } = useHafezFaal();
return (
    <div className={cssStyle.faalContainer}>
<div className={cssStyle.poemContainer}>
    
</div>
    <div className={cssStyle.container}></div>    
    </div>
)
}
export default FaalContainer;