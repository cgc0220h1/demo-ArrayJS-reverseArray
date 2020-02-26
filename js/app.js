function reverseArray() {
    let demoArray = [-3,5,1,3,2,10];
    let first = 0;
    let last = demoArray.length - 1;
    while (first < last) {
        let b = demoArray[first];
        demoArray[first] = demoArray[last];
        demoArray[last] = b;
        first++;
        last--;
    }
    alert(demoArray);
}