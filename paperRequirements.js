
function paperRequirements(firstBookCopyPress, secondBookCopyPress,thirdBookCopyPress){
    let firstBookPages = firstBookCopyPress * 100
    let secondBookPages = secondBookCopyPress * 200
    let thirdBookPages = thirdBookCopyPress * 300
    let totalPages = firstBookPages + secondBookPages + thirdBookPages
    return totalPages;

}

let TotalBook = paperRequirements(5,7,4)
console.log('You Need Total',TotalBook, 'pages')