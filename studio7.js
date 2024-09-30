function streamsn(n, a) {
    return (n === a)
    ? streamsn(0, 1 + a)
    : pair(a, () => streamsn(n+1, a));
}

const n_of_n_stream = () => streamsn(0,1);