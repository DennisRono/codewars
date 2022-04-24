// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const hashtag = (a) => {
    return (a.length>1&&a.length<140)?"#"+a.split(' ').map((w) => { return w[0].toUpperCase() + w.substring(1); }).join(""):false
}

console.log(hashtag("Codewars"));

// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");

// let w = words.map((word) => {return word[0].toUpperCase()+word.substring(1);}).join("")

// console.log(w);
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(generateHashtag(""), false, "Expected an empty string to return false")
  Test.assertEquals(generateHashtag(" ".repeat(200)), false, "Still an empty string")
  Test.assertEquals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
  Test.assertEquals(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
  Test.assertEquals(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
  Test.assertEquals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
  Test.assertEquals(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
  Test.assertEquals(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
  Test.assertEquals(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
  Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long")
  });
  });
  