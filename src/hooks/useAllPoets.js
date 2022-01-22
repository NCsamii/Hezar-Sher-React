import { useState, useEffect } from "react";
import {generatePoets} from "../generator/generatePoets";
import axios from "axios";
function  useAllPoets() {
    const [poets, setPoets] = useState([]);

    useEffect(() => {
        axios.get("https://ganjgah.ir/api/ganjoor/poets").then(({ data }) => {
           const finalPoets = generatePoets(data);
            setPoets(finalPoets);
        });
    }, []);

    return { poets };
}

export default useAllPoets;