let sum = 0
sum+=1
console.log(sum)
let addition=document.getElementById('sum1')
console.log(addition)
let Pa=document.getElementById('pe')

function increase(){
    sum+=1
addition.textContent=sum
console.log(sum)

}
increase ()

function save(){
    let sumDash=sum+" - "
    Pa.textContent+=sumDash
    addition.textContent=0
    sum=0
    console.log(sumDash)
}