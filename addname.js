function addName(object, name, value) {
    object[name] = value;
    return object;
}
console.log(addName({}, "Brutus", 300))
console.log(addName({ piano: 500 }, "Brutus", 400))
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))