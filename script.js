// implicit coercion

console.log(true+false)

console.log(22/'5')

console.log('number'+22+8)

console.log(55+"string")

console.log(1>null)
console.log(0>null)

console.log('foot'+ +'bar')

console.log('true'==true)

console.log(false=='false')

console.log(null=="")
            
console.log(!!'false'==!!'true')     

// explicit coercion

console.log(String(256))

console.log(String(-111))

console.log(String(null))

console.log(String(undefined))

console.log(String(true))

console.log(String(false))

//Q2

console.log(Boolean(''))
console.log(Boolean('Hello'))
console.log(Boolean(0))
console.log(Boolean(100))
console.log(Boolean(-0))
console.log(Boolean(-100))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(false))


console.log(Number(null))
console.log(Number(undefined))
console.log(Number(true))
console.log(Number(false))
console.log(Number('18'))
console.log(Number('14.98'))
console.log(Number(''))
console.log(Number('24s'))
console.log(Number(143))