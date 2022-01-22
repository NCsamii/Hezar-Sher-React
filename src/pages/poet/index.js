import cssStyle from "./poet.module.css"; 
import { useParams } from "react-router-dom";
import useSinglePoet from "../../hooks/useSinglePoet";
import Poem from "../../components/Poem";
import vector11 from "../../assets/img/vactor1-1.png";
import refresh from "../../assets/img/refresh.png"

function Poet(){
    const { id } = useParams();
    const {
        name,
        refreshing,
        image,
        title,
        poem,
        info,
    } = useSinglePoet(id);
return (
    <div className={cssStyle.main}>
    <div className={cssStyle.imgTop}>
        <img  src={vector11}/>
    </div>
    <div className={cssStyle.sherBox}>
        <div className={cssStyle.leftBox}>
                   <img className={cssStyle.shaerImage} src={image} alt={name} />
                   <div className={cssStyle.poe}>
                   <Poem poemTitle={title} poem={poem} />
                   </div>
                   <div
                       className={cssStyle.refreshButton} onClick={refresh}
                   >
                   </div>
                   <div
                       className={cssStyle.refreshBtn}
                       onClick={refreshing}
                   >
                       <img src={refresh}  />
                   </div>
        </div>
        <div className={cssStyle.rightbox}>{info}</div>
    </div>
           </div>
)
}
export default Poet;