import cssStyle from "./poem.module.css";
function Poem(props){
    const {poem , poemTitle} = props;
    return (
<div className={cssStyle.poemCon}>
<p className={cssStyle.poemtitle}>{poemTitle}:</p>
                    <div className={cssStyle.poem}>
                        {poem.map((couplet, coupletIndex) => {
                            return (
                                <div
                                    key={`couplet-${coupletIndex}`}
                                    className={cssStyle.poemcouplet}
                                >
                                    {couplet.map((verse, verseIndex) => {
                                        return (
                                            <div
                                                key={`verse-${coupletIndex}-${verseIndex}`}
                                                className={cssStyle.poemverse}
                                            >
                                                {verse}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>{" "}
</div>
    )
}
export default Poem;