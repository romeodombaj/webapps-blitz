function halfString(str, leng) {
    return str.slice(Math.floor(leng / 2), str.lenght)
}

const str = 'Javascript i nije toliko los';
console.log(halfString(str, str.length));