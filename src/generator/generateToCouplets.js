import hafezPoems from "../assets/json/hafez.json";

export function generateToCouplets(verses) {
    const couplets = [];

    verses.forEach((verse, index) => {
        if (index % 2 === 0) {
            return couplets.push([verse.text]);
        }
        couplets[couplets.length - 1].push(verse.text);
    });

    return couplets;
}
