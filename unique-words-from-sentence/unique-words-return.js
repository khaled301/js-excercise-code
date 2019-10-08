let sentenceArr = ["My dog dog eats food", "She eats food food too too", "My dog food is good good"],
  transformedArr = [],
  uniqueValueArr = [],
  uniqueValueSetDefault = new Set(),
  uniqueValueSetCompare = new Set();

//Store sentence array all words to one single array

for (let i = 0; i < 1; i++) {

  let tempArray = sentenceArr[0].split(' ');

  tempArray.forEach(innerElem => {
    uniqueValueSetDefault.add(innerElem);
  });

}

for (let i = 1; i < sentenceArr.length; i++) {

  let tempArray = sentenceArr[i].split(' ');

  tempArray.forEach(innerElem => {

    if (uniqueValueSetDefault.has(innerElem)) {

      // uniqueValueSetDefault.delete(innerElem);

    }
    else {

      uniqueValueSetDefault.add(innerElem);
      uniqueValueSetCompare.add(innerElem);

    }
  });

}


console.log(uniqueValueSetCompare);

