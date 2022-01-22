import axios from "axios";
import { useEffect, useState } from "react";
import { generateToCouplets } from "../generator/generateToCouplets";
import {generateInterpretation} from "../generator/generateInterpretation";
function useHafezFaal(){
    const [poemTitle , setPoemTitle]= useState("");
    const [poem, setPoem] = useState([]);
    const [poemAudio, setPoemAudio] = useState("");
    const [interpretation, setInterpretation] = useState("");
    useEffect(() => {
        axios
            .get("https://ganjgah.ir/api/ganjoor/hafez/faal")
            .then(({ data }) => {
                const { title, verses, recitations } = data;
                setPoemTitle(title);
                const couplets = generateToCouplets(verses);
                setPoem(couplets);
                setPoemAudio(recitations[0].mp3Url);
                const interpretationn  = generateInterpretation(couplets);
                setInterpretation(interpretationn);
            });
    }, []);
return { poemTitle, poem, poemAudio, interpretation }
}
export default useHafezFaal;