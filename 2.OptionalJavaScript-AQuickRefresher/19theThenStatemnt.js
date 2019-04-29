const wait1 = (fn) => {
return new Promise (resolve => setTimeout(resolve, 100))
}
const wait2 = (fn) => {
    return new Promise (resolve => setTimeout(resolve, 200))
    }

const wait3 = (fn) => {
        return new Promise (resolve => setTimeout(resolve, 300))
    }
wait1()
.then(wait2 )
.then(wait3)
.then(function() {
console.log('all good');
});