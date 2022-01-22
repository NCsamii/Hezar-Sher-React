
export function generatePoets(poets) {
    const poetId = [];

    for (let i = 0; i < poets.length; i++) {
        const poet = poets[i];

        poetId.push({
            id: poet.id,
            name: poet.nickname,
            image: `https://ganjgah.ir${poet.imageUrl}`,
        });
    }
    return poetId;
}
