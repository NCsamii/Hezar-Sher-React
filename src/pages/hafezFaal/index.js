import FaalContainer from "../../components/faalContainer";
import cssStyle from "./hafezFaal.module.css";
function HafezFaal(){
return (
    <section className={cssStyle.faalSection}>
  <div className={cssStyle.Container}>
      <FaalContainer />
  </div>
    </section>
)
}
export default HafezFaal;