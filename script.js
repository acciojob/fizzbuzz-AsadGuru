//your JS code here. If required.


// fuinction to generate fizzbuzz output
const fizzBuzz = () => {
	let result = '';

	// loop from 1 to 20 

	for (let i = 1; i <= 20; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			result += 'FizzBuzz\n'; //multiples of both 3 and 5
		} else if ( i % 3 === 0) {
			result += 'Fizz\n'; //multiple of 3
		} else if ( i % 5 === 0) {
			result += 'Buzz\n'; //multiple of 5
		} else {
			result += i + '\n'; // number itself
		}
	}

	// alert the result
	alert(result);
};

// call the function to execute
fizzBuzz();