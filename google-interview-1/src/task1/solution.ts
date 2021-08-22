import { FACILITY } from "./data.interface";

type Borough = {
    [key in FACILITY]: boolean
}

const boroughs: Borough[] = require('./data.json');

function countBoroughScore(index: number, interests: FACILITY[]): number {
    let offset = 0;
    while (boroughs[index + offset] !== undefined || boroughs[index - offset] !== undefined) {
        const found = interests
            .map(interest => boroughs[index][interest] || boroughs[index + offset]?.[interest] || boroughs[index - offset]?.[interest])
            .every(x => x === true);

        if (found) {
            return offset;
        }

        offset++;
    }
    return Infinity;
}

export function findBestBorough(interests: FACILITY[]) {
    const boroughScores = boroughs.map((borough, index) => countBoroughScore(index, interests));
    const bestScore = Math.min(...boroughScores);
    
    return boroughScores
        .map((boroughScore, index) => ({boroughScore, index}))
        .filter(({boroughScore, index}) => boroughScore === bestScore)
        .map(({boroughScore, index}) => index);
}
