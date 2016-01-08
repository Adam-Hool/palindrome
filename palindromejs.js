var myPalindrome;
var myPalindromeNoSpaces;

function palindromeInput()
{
	var palindrome;
	palindrome = prompt("Enter palindrome");
    return palindrome;
}

function eliminateSpaces(palindrome)
{
	console.log(palindrome);

	var chars = palindrome.split('');

	console.log(palindrome);
    console.log(chars);
	for(var i = 0; i < chars.length; i++)
    {
    	
        console.log(palindrome);
        console.log(chars);
    	console.log("eliminateSpaces above while loop");
       if(chars.indexOf(' '))
        {
        	console.log(palindrome);
        	console.log(chars);
        	console.log("eliminateSpaces in while loop");
            chars.splice(chars[i],1);
        }
        
    }
    return chars;
}

function checkIfPalindrome(myPalindromeNoSpaces1)
{
	var reverseChar;
	reverseChar = myPalindromeNoSpaces1;
	reverseChar.reverse();
	console.log(reverseChar);
	console.log(myPalindromeNoSpaces1);
	if (myPalindromeNoSpaces1===reverseChar)
	{
		console.log("this is a palindrome");
	}
	else
	{
		console.log("this is not a palindrome");
	}
}

	myPalindrome=palindromeInput();
	myPalindromeNoSpaces=eliminateSpaces(myPalindrome);
	checkIfPalindrome(myPalindromeNoSpaces);


