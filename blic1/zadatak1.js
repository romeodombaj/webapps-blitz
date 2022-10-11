function jedanKljuc(obj) {
    var arr = new Array;

    obj.forEach(element => {
        if (Object.keys(element).length == 1) {
            arr.push(element);
        }
    });

    console.log(arr);

}

let obj = [{ '1': 'A' }, { '1': 'C', '2': 'A' }, { '2': 'C' }];
jedanKljuc(obj)