// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map(movie => movie.director);
    //let director = '';
    // [];
    //for (i=0;i<moviesArray.length;i++){
    //    directorsArray.push(moviesArray[i].director);
    //    director = moviesArray[i].director;
    //    if (directorsArray.indexOf(director) !== directorsArray.lastIndexOf(director)){
    //        directorsArray.splice(i,1)
    //    }
    //}
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let counter= 0;
    let steveDaBest = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1);
    counter = steveDaBest.length;
    // let counter = 0;
    // if (moviesArray.length===0){
    //     return 0;
    // } 
    // for (i=0;i<moviesArray.length;i++){
    //     for (j=0;j<moviesArray[i].genre.length;j++){
    //     if (moviesArray[i].director === 'Steven Spielberg' && moviesArray[i].genre[j] === 'Drama' ){
    //         counter +=1;
    //     }
    // }
    // }
    return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    for (i=0;i<moviesArray.length;i++){
        if ('score' in moviesArray[i] === false){
            moviesArray[i].score = 0;
        } 
        continue;
    }
    let scoreArr = moviesArray.map(movie => movie.score);
    let result = scoreArr.reduce((acc,cur) => acc + cur);
    let ans = result/moviesArray.length;
    let ans2 = ans.toFixed(2);
    return parseFloat(ans2,10);
    // if (moviesArray.length===0){
    //     return 0;
    // } 
    // let sum = 0;
    // let average = 0;
    // let result=0;
    // for (i=0;i<moviesArray.length;i++){
    //     if ('score' in moviesArray[i] === true){
    //         sum += moviesArray[i].score;
    //     }
    //     continue;        
    // }
    // average = sum/moviesArray.length;
    // result = average.toFixed(2);
    // return parseFloat(result,10);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let filteredArr = moviesArray.filter(movie => movie.genre.indexOf('Drama') !== -1);
    if (filteredArr.length === 0){
        return 0;
    }
    let score = filteredArr.reduce((acc,curr) => acc + curr.score,0); 
    let average = score/filteredArr.length;
    let rounded = average.toFixed(2);
    return parseFloat(rounded);
    // if (moviesArray.length===0){
    //     return 0;
    // } 
    // let sum = 0;
    // let average = 0;
    // let result=0;
    // for (i=0;i<moviesArray.length;i++){
    //     for (j=0;j<moviesArray[i].genre.length;j++){
    //         if ('score' in moviesArray[i] === true && moviesArray[i].genre[j] === 'Drama' && moviesArray[i].genre.length <= 1 ){
    //         sum += moviesArray[i].score;
    //         }
    //         continue;        
    //     }
    // }   
    // average = sum/moviesArray.length;
    // result = average.toFixed(2);
    // return parseFloat(result,10);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let yearArray = moviesArray.map(movie => movie.year);
    let orderedArr = yearArray.sort((a,b) => a-b);
    return orderedArr;
    // let orderedArray = [];
    // for (i=0;i<moviesArray.length;i++){
    //     for (j=1900;j<2025;j++){
    //         if (moviesArray[i].year === j){
    //             orderedArray.push(moviesArray[i]);
    //             orderedArray=orderedArray.sort();
    //         } else {
    //             continue;
    //         }
    //     }
    // }
    // return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titleArray = [];
    let orderedArray = [];
    let workingArr = [];
    titleArray =  moviesArray.map(movie => movie.title);
    orderedArray = titleArray.sort();
    if (orderedArray.length > 20){
        for (i=0;i<20;i++){
            workingArr.push(orderedArray[i]);
        }
    return workingArr;
}   else if (orderedArray.length <= 20){
    return orderedArray;
}
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let workingArr = JSON.parse(JSON.stringify(moviesArray));
  let newArr2 = workingArr.map(movie => movie.duration);
  console.log(newArr2.length);

 let splitedArr2 = newArr2.map(movie => movie.split(' '));
  
  for (i=0;i<splitedArr2.length;i++){ 

      let sumed = splitedArr2[i].reduce ((a,b) => parseInt(a)*60 + parseInt(b));
    console.log(sumed);
    if (typeof sumed !== 'number'){
      sumed = parseInt(sumed)*60;
    }
      workingArr[i].duration = parseInt(sumed);
  }
     return workingArr;
}

// for (i=0;i<clonedArr.length;i++){
// 
//   newArr = clonedArr[i].duration.split(" ");
//   
//   if (clonedArr.length > 0){
//     firstValue = parseInt(newArr[0], 10) *60;
//     secondValue = parseInt(newArr[1],10);
//     minutesDuration = firstValue + secondValue;
// 
//     clonedArr[i].duration = minutesDuration;
// 
//   }
// 
//   firstValue = parseInt(newArr[0], 10) *60;
// 
//   
// 
//   minutesDuration = firstValue;
// 
//   clonedArr[i].duration = minutesDuration;
// }
// 
//   return clonedArr;

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
    function bestYearAvg(moviesArray) {
       }
