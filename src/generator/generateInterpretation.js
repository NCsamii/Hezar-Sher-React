import hafezPoems from "../assets/json/hafez.json";

export function generateInterpretation(couplets) {
    const Poem = hafezPoems.find((each) => {
        for (let i = 0; i < couplets.length; i++) {
            for (let j = 0; j < couplets[i].length; j++) {
                if (each.poem.includes(couplets[i][j])) {
                    return true;
                }
            }
        }
    });

    return Poem.interpretation;
}