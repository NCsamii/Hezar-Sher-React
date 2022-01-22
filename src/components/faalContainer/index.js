import cssStyle from "./faalContainer.module.css";
import useHafezFaal from "../../hooks/useHafezFaal";
import Buttons from "../../components/buttons";
import { Link, useNavigate } from "react-router-dom";
import Poem from "../Poem";
function FaalContainer(props){
    const navigate = useNavigate();
    const { poemTitle, poem, poemAudio, interpretation } = useHafezFaal();
return (
    <div className={cssStyle.faalContainer}>
<div className={cssStyle.poemContainer}> 
<Poem poemTitle={poemTitle} poem={poem} />
                        <audio src={poemAudio} controls></audio>
</div>
    <div className={cssStyle.interpretationcontainer}>
        {interpretation}
        </div>    
        <Buttons theme="gray" content="بازگشت به صفحه اصلی"  onclick={() => {navigate('/');
                                }}  />  
                                  </div>
)
}
export default FaalContainer;