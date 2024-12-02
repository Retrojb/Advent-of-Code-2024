/**
 * Part of {@link https://adventofcode.com/2024/day/1/ Advent of Code }
 */
import {dataArray} from "./data/day1Data.js";

/**
 * Create empty arrays to separate out the data in the {@link ./data/day1Data}
 */
let locationIdSetOne = [];
let locationIdSetTwo = [];
let ascLocationIdSetOne = [];
let ascLocationIdSetTwo = [];
let distances = [];

/**
 * @function splitDataPairs
 * Functionally split the pairs
 * @returns void
 */
const splitDataPairs = () => {
    dataArray.trim().split('\n').forEach(pair => { 
        const num = pair.trim().split(/\s+/); 
            if (num.length === 2) { 
                const [num1, num2] = num.map(n => parseInt(n, 10)); locationIdSetOne.push(num1); locationIdSetTwo.push(num2); 
            } else { 
                console.error('Invalid pair:', pair); 
            } 
    });
     console.log('Location Set One:', locationIdSetOne); 
     console.log('Location Set Two:', locationIdSetTwo);
};

/**
 * @function sortDataArrays
 * Sorts the data array from lowest to highest value.
 * @returns void
 */
const sortDataArrays = () => {
    ascLocationIdSetOne = [...locationIdSetOne].sort((a, b) => a - b);
    ascLocationIdSetTwo= [...locationIdSetTwo].sort((a, b) => a - b);
};

/**
 * @function calculateDistanceBetween
 * Calculates the distance between the numbers in the 2 arrays of sorted data
 * @returns void
 */
const calculateDistanceBetween = () => {
    distances = ascLocationIdSetOne.map((value, index) => { 
        const distance = Math.abs(value - ascLocationIdSetTwo[index]); 
        if (isNaN(distance)) { 
            console.error('NaN detected:', { value, comparedValue: ascLocationIdSetTwo[index] }); 
        } 
        return distance; });
        console.log('Distances:', distances);
};

/**
 * @function totalDistance
 * Calculates the total distances between all number distances in the array
 * @returns int
 */
const totalDistance = () => {
    const total = distances.reduce((sum, current) => sum + current, 0);
    console.log(total);
    return total;
};

/**
 * Execute all
 */
export const execute = async () => {
   splitDataPairs()
   sortDataArrays()
   calculateDistanceBetween()
   totalDistance();
    
};

execute();

