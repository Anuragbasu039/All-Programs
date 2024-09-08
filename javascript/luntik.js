function luntik(a, b, c) {
    const totalDuration = a + 2 * b + 3 * c;
    concert1Duration = (Math.floor(totalDuration / 2));
    concert2Duration = (Math.ceil(totalDuration / 2));
    concertDuration = Math.abs(concert1Duration - concert2Duration);
    return concertDuration;
}
const a = 7;// Number of one-minute songs
const b = 3;// Number of two-minute songs
const c = 12;// Number of one-minute songs
const result = luntik(a, b, c);
console.log(result);