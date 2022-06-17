var generate = function(numRows) {
    const output = [];
    let length = 1;
    while(output.length < numRows){
        if(!output.length){
            output.push([1])
        } else {
            const row = [];
            for(let i = 0; i < length; i++){
                if(i === 0 || i === length - 1){
                    row.push(1)
                } else {
                    row.push(output[output.length-1][i-1]+output[output.length-1][i])
                }
            }
            output.push(row)
        }
        length++;
    }
    return output
};