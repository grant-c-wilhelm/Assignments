function multiMapper(arr) {
    arr.map((xray) => {
        xray.map((yray, j) => {
            xray[j + 1] !== undefined ?
                typeof xray[j+1] === typeof yray ?
                    console.log(` ${xray[j+1]} and ${yray} ARE the same datatype`) :
                    console.log(` ${xray[j+1]} and ${yray} are NOT of the same datatype`)
                :
                null

        })
    })
}
const multiD2 = [[true, 1, true, {}, {}, 'hi','hello'], [false, 'false', true], [1, '2', 3], [true, 2, 3], [1, 2, 3]]
multiMapper(multiD2)


