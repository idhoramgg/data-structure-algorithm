const palindrome = (s) => {
    const toChars = (s) => {
        let lowercase = s.toLowerCase()
        const a = "abcdefghijklmnopqrstuvwxyz"
        let ans = ""
        
        for (const c of lowercase) {
            for (let i = 0; i < a.length; i++) {
                if (c === a[i]) {
                    ans += c
                }
            }
        }
        return ans;
    }
    const isPal = (s) => {
        if (s.length <= 1) {
            return true
        } 
        
        return s[0] === s[s.length-1] && isPal(s.slice(1, s.length-1))
        
    }
    return isPal(toChars(s))
}
console.log(palindrome("Gateman sees name, garageman sees nametag"));
console.log(palindrome("makan daun"));




//another one

function fastestIsPalindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}
console.log(fastestIsPalindrome('waaaw')) //true
console.log(fastestIsPalindrome('ido')) //false
