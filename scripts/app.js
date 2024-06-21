// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.


// I was confused on how to tackle this one. 
// went to the docs to find a method I clearly hadn't used yet, found .substring()
// .substring() - returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is given
// it can take in up to 2 indexs. If you want a specific part of the string returned you set the first index to the char you want it to start with, you then set the second index to the point where you want it to end. If you want the rest of the string returned you don't need to set a second index.

// since I want the first letter removed I set my first index to 1 as the string starts at 0. I then want to remove the last letter so I set the second index to one less then the length of the string.
// I'm sure there are other ways to solve this.  This one just made the most sense to me.
function removeChar(str){
    return str.substring(1, str.length -1);
}

// other methods to solve it
// didn't think slice would have worked here, it does.
// could have done -1 instead of str.length -1

function removeChar(str){
    return str.slice(1, -1);
}