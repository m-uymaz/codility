// Check if a STRING has REAPEATING letter in it!
// 100% solution in Codility

// The first index is compared against the other Indices to find a match.
// If it finds -> returns the match.
function solution(S) {
    const split = S.split('')
    for (let i = 0; i < split.length; i++) {
        for (let j = i + 1; j < split.length; j++) {
            if (split[i] === split[j]) {
                return split[i];
            }
        }
    }
    return 'No match found!'
}

//WARNING: Be sure to check and test the code!!!
