import cssStyle from "./ganjineh.module.css";
import useAllPoets from "../../hooks/useAllPoets";
import vector11 from "../../assets/img/vector1-1.png"
function Ganjineh(){
    const {poets} = useAllPoets();
    return (
        <div className={cssStyle.container}>
            <div className={cssStyle.yellowDiv}>
<img src={vector11} />
            </div>
            <div className={cssStyle.blueDiv}></div>
            <div className={cssStyle.poetCarousel}></div>
        </div>
    )
}
export default Ganjineh;