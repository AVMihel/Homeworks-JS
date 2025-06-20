"use strict";

// Задача 1
function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: undefined, max: undefined, avg: undefined };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
  }

  const avg = parseFloat((sum / arr.length).toFixed(2));
  return { min, max, avg };
}

// Задача 2
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let sumOdd = 0;
  for (const num of arr) {
    if (num % 2 === 0) sumEven += num;
    else sumOdd += num;
  }
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let countEven = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }
  return countEven === 0 ? 0 : sumEven / countEven;
}

// Задача 3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (const data of arrOfArr) {
    const currentResult = func(...data);
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }

  return maxWorkerResult;
}
