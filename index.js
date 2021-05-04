let array = [-2, -3, 4, -1, -2, 1, 5, -3]
 
function largestSubarraySum(array){
    let result = 0
    //console.log(array)
    for (let i = 0; i < array.length; i++) {
        //console.log("current position is:", i, "and result is:", result)
        if (i === 0) {
            if (array[0] > result) {
               result += array[0] 
            }
        } else if ( result >= (result + array[i]) ) {
            if (result === 0 && array[i] < 0) {
                // catch error causing situation
            } else if (addNumber(result, array, i)) {
                result += array[i]
            } else {
                //console.log(result)
                return result 
            }
        } else { // result + array[i] > result
            result += array[i] 
        }
    }
    //console.log(result)
    return result
}

function addNumber(n, array, i) {
    let [current, next1, next2, next3, next4] = [ array[i], array[i+1], array[i+2], array[i+3], array[i+4] ]
    let sum = n + current
    //console.log(n, "n")
    if ( next1 && (sum + next1) > n ) {
        //console.log("next1")
        //console.log(sum + next1)
        return true
    } else if ( next2 && next1 && (sum + next1 + next2) > n ) {
        //console.log("next2")
        //console.log(sum + next1 + next2)
        return true
    } else if ( next3 && next2 && next1 && (sum + next1 + next2 + next3) > n ) {
        //console.log("next3")
        //console.log(sum + next1 + next2 + next3)
        return true
    } else if ( next4 && next3 && next2 && next1 && (sum + next1 + next2 + next3 + next4) > n ) {
        //console.log("next4")
        //console.log(sum + next1 + next2 + next3 + next4)
        return true
    } else {
        return false
    }
}
 
largestSubarraySum(array)