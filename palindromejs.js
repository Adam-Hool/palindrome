"use strict";

var myPalindrome;
var myPalindromeNoSpaces;
var reversedPalindromeNoSpaces;

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
	for(var i = 0; i < chars.length; i++)
    {
       if(chars[i]===" ")
        {
            chars.splice(i,1);
        }
        
    }
    return chars;
}

function reversePalindrome(myPalindromeNoSpaces1)
{ 
	var reversedPalindrome;
	console.log(reversedPalindrome, "not reversed");
	reversedPalindrome=myPalindromeNoSpaces1.slice(0);
	console.log(reversedPalindrome,"reversed")
    
	/*for(var i = 0; i < regPalindrome.length-1; i++)
	{
        reversedPalindrome[i]=regPalindrome[i];
	}*/
	reversedPalindrome.reverse();
	console.log(reversedPalindrome," reversed palindrome in function")
	return reversedPalindrome;
}

function checkIfPalindrome(myPalindromeNoSpaces1,reversedMyPalindromeNoSpaces1)
{
	var reverseChar;
	var regChar;
    
    
	regChar=myPalindromeNoSpaces1;
	reverseChar=reversedMyPalindromeNoSpaces1;

    console.log(reverseChar, "reversedchar");
    console.log(regChar, "regChar");

	if (regChar===reverseChar)
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
    reversedPalindromeNoSpaces=reversePalindrome(myPalindromeNoSpaces);
	checkIfPalindrome(myPalindromeNoSpaces,reversedPalindromeNoSpaces);


