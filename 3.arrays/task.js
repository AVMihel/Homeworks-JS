function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length &&
         arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const { count, sum } = users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.sum += user.age;
      acc.count++;
    }
    return acc;
  }, { count: 0, sum: 0 });

  return count > 0 ? sum / count : 0;
}