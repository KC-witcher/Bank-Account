// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  const returnArray = [];
  const withdrawalArray = [];

  let sumOfWithdrawals = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].withdrawals) {
      withdrawalArray.push(array[i].withdrawals);
    } else {
      withdrawalArray.push([0]);
    }
  }

  for (let i = 0; i < withdrawalArray.length; i++) {
    sumOfWithdrawals = 0;
    for (let j = 0; j < withdrawalArray[i].length; j++) {
      sumOfWithdrawals += withdrawalArray[i][j];
    }
    returnArray.push(sumOfWithdrawals);
  }

  return returnArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
