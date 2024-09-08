function ApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        const applePosition = a + apples[i];
        if (applePosition >= s && applePosition <= t) {
            appleCount++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        const orangePosition = b + oranges[i];
        if (orangePosition >= s && orangePosition <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}
const s = 7; // Starting point of Sam house
const t = 11; // Ending location of Sam house
const a = 5; // Location of the Apple tree
const b = 15; // Location of the Orange tree
const apples = [-2, 2, 1]; // Distances at which each apple falls from the tree
const oranges = [5, -6]; // Distances at which each orange falls from the tree

ApplesAndOranges(s, t, a, b, apples, oranges);
