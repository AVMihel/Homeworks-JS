"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    arr.push((-b + discriminant ** 0.5) / (2 * a));
    arr.push((-b - discriminant ** 0.5) / (2 * a));
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent !== 'number' ||
      typeof contribution !== 'number' ||
      typeof amount !== 'number' ||
      typeof countMonths !== 'number') {
    return false;
  }

  const monthlyPercent = percent / 100 / 12;

  const loanBody = amount - contribution;
  if (loanBody <= 0) {
    return 0;
  }

  const monthlyPayment = loanBody * (
    monthlyPercent +
    (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1))
  );

  const totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}