// 1 is "normal effective" 2 is "super effective"
// 0.5 would be "not very effective"
// 0 would be "no effect"

const types = {"grass": 0, "fire": 1, "water": 2};
const effectiveness = [
    [1, 1, 2],
    [2, 1, 1],
    [1, 2, 1]
];

function isAttackSuperEffective(atkType, defType) {
    return effectiveness[types[atkType]][types[defType]];
}

export default isAttackSuperEffective;