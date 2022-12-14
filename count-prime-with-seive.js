const countPrime = (n) => {
    const seive = [];
    let nonPrime = 1;
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (!seive[i]) {
            let prd = 2;
            for (let j = i * i; j <= n; j = i * prd) {
                if (!seive[j]) {
                    seive[j] = j;
                    nonPrime++;
                }
                prd++;
            }
        }
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            nonPrime--;
            break;
        }
    }
    return n - (nonPrime + 1);
};
console.log(countPrime(1000000));
//output => 78498
//source => https://primes.utm.edu/howmany.html