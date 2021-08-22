const buildData: boolean[][] = require('./data.json');

export function findLongestConsecutiveDecreasingBuildHealth() {
    const calculateHealthPercentages = buildData.map(failingBuild => {
        return failingBuild.filter(x => x === true).length / failingBuild.length;
    });

    let longest = 1;
    let current = 1;
    for (let i = 0; i < calculateHealthPercentages.length; i++) {
        if (calculateHealthPercentages[i+1] !== undefined && calculateHealthPercentages[i] > calculateHealthPercentages[i+1]) {
            current++;
            if (current > longest) {
                longest = current;
            }
        } else {
            current = 1;
        }
    }

    return longest;
}