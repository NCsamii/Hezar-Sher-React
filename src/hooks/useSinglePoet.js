import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { generateToCouplets } from "../generator/generateToCouplets";
function useSinglePoet(id) {
    const [name, setName] = useState("");
    const [info, setinfo] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [poem, setpoem] = useState([]);
    const [refresh, setrefresh] = useState(true);


    useEffect(() => {
        axios
            .get(`https://ganjgah.ir/api/ganjoor/poet/${id}`)
            .then(({ data }) => {
                const {
                    poet: { nickname, description, imageUrl },
                } = data;

                setName(nickname);
                setinfo(description);
                setImage(`https://ganjgah.ir${imageUrl}`);
            });
    }, [id]);

    useEffect(() => {
        if (refresh) {
            axios
                .get(`https://ganjgah.ir/api/ganjoor/poem/random?poetId=${id}`)
                .then(({ data }) => {
                    const { title, verses } = data;
                    setTitle(title);
                    const couplets = generateToCouplets(verses);
                    setpoem(couplets);
                    setrefresh(false);
                });
        }
    }, [id, refresh]);

    const refreshing = useCallback(() => {
        setpoem([]);
        setTitle("");
        setrefresh(true);
    }, []);

    return {
        name,
        info,
        image,
        title,
        poem,
        refreshing,
    };
}

export default useSinglePoet;
