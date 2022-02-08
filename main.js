const str = `
010-1234-4567
asfasfasf@gmail.com
https://www.naver.com
The quick brown fox jumps over the lazy dog
abbccccdddd
http://localhost:1234
`

const regexp = /fox/gi

console.log(
  str.match(/\b\w{3,4}\b/g)
)