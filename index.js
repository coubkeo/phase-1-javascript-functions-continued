// code your solution here
function saturdayFun( fun = 'roller-skate'){
    return (`This Saturday, I want to ${fun}!`)
}
saturdayFun('bathe my dog')
const mondayWork = function(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`)
}
let wrapAdjective = function(style="*") {
    return function(adj="special") {
      return `You are ${style}${adj}${style}!`
    }
}