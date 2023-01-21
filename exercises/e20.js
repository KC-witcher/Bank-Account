// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]

export function separateNamesWithAFromRest(array) {
  const namesWithA = [];
  const namesWithoutA = [];
  const returnArray = new Array(2);
  returnArray[0] = new Array(namesWithA.length);
  returnArray[1] = new Array(namesWithoutA.length);

  for (let i = 0; i < array.length; i++) {
    let foundA = false;
    for (let j = 0; j < array[i].length; j++) {
      if (array[i].charAt(j) === "a") {
        foundA = true;
      }
    }
    if (foundA) {
      namesWithA.push(array[i]);
    } else {
      namesWithoutA.push(array[i]);
    }
  }

  for (const name of namesWithA) {
    returnArray[0].push(name);
  }
  for (const name of namesWithoutA) {
    returnArray[1].push(name);
  }

  return returnArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
