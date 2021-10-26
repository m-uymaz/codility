// For Colity
// CHECK THE SEQUENCE OF AN ARR (A) FROM 1 TO (K)

function solution(A, K) {
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        if (A[0] !== 1 || A[n - 1] !== K)
            return false; 
        if (A[i] !== A[i + 1] && A[i] + 1 !== A[i + 1])
        return false;
    }
    return true;
}

// WARNIG: Take this solution with grain of salt!!!