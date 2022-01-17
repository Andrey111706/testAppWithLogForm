export const RequireField = (value) => {
   return value? null: 'error'
}
export const EmailChecker = (value)=> {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : null
}
export const MoreThenZero = (value) => {
    if (value && value< 1) return `Choose more then 0 `
    return null
}

