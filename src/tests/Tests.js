import React from 'react';

const Tests = () => {
    const Unique = (array) => console.log("for Unique = " + [...new Set(array)])

    const Intersection = (...arg) => {
        return console.log("for Intersection = " + (arg.reduce((main, curr) => main.filter(value => curr.includes(value)))))
    }

    const IsEmptyDeep = (obj) => {
        let isEmpty = null
        const checker = (deeperObj) => {
            if(deeperObj === 0) {return isEmpty=false}
            if (!!deeperObj ===  false) {return isEmpty = true}
            if(typeof deeperObj ==='object' && (deeperObj.length === 0 || undefined)){return isEmpty = true}
            if(typeof deeperObj === "string" || typeof deeperObj === 'number' || typeof deeperObj === 'boolean'){return isEmpty = false}
            if (typeof deeperObj ==="object"){checker(Object.values(deeperObj)[0])}
        }
        checker(obj)
        return console.log('Is Empty = ' + isEmpty)
    }

    Unique([1, 2, 3, 1, 2, 4, 5, 2, 1, 3, 4, 2, 5, 7, 8, 43])
    Intersection([1, 2, 4], [2, 3, 4], [2, 4, 6])
    IsEmptyDeep([[[[[[[[{a:{b:{c:[0]}}}]]]]]]]])

    return (
        <div>
            Open console to see results=)
        </div>
    );
};

export default Tests;