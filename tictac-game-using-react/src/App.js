import './App.css';
import React, { useEffect, useState } from 'react';



function App() {
  const str1 = "Some examples of unique words that are not commonly used in everyday language include sesquipedalian, mellifluous, pulchritudinous, and ephemeral."
  const str2 = "Some examples of unique words that are not commonly used in everyday language include sesquipedalian, mellifluous, pulchritudinous, and ephemeral."

  const total_word = str2.split(" ").length; //split the string into array of words

  const str1_word_count = str1.split(" ").length; //split the string into array of words

  //split the string into array of words
  const str2ArrDOC = str2.split(/[.!?]+/)
  let matchedWord = [[]];
  let plagarismcount = 0;

  for(let i=0; i<str2ArrDOC.length; i++){
    let str2Arr = str2ArrDOC[i].split(/[\s,]+/)
    let str1ArrDoc = str1.split(/[.!?]+/)
    if(str2Arr[i]!= null && str2Arr[i+1]!= null && str2Arr[i+2]!= null && str2Arr[i+3]!= null){

      for (let j=0;j<str1ArrDoc.length;j++){
        let str1ArrDocSplit = str1ArrDoc[j].split(/[\s,]+/)
        // console.log("str1 splitted:    "+str1ArrDocSplit)
        if(str1ArrDocSplit[j]!= null && str1ArrDocSplit[j+1]!= null && str1ArrDocSplit[j+2]!= null && str1ArrDocSplit[j+3]!= null){
          console.log("----------------------------------------------------------------------------------------------------")
          console.log(str2Arr[i] + " " + str2Arr[i+1] + " " + str2Arr[i+2] + " " + str2Arr[i+3])
          console.log("Comparing to :")
          console.log(str1ArrDocSplit[j] + " " + str1ArrDocSplit[j+1] + " " + str1ArrDocSplit[j+2] + " " + str1ArrDocSplit[j+3])
          console.log("----------------------------------------------------------------------------------------------------")
          if(str2Arr[i] == str1ArrDocSplit[j] && str2Arr[i+1] == str1ArrDocSplit[j+1] && str2Arr[i+2] == str1ArrDocSplit[j+2] && str2Arr[i+3] == str1ArrDocSplit[j+3]){
            // console.log(str2Arr[i] + "   Matched")
            matchedWord.push(str2Arr[i])
            matchedWord.push(str2Arr[i+1])
            matchedWord.push(str2Arr[i+2])
            matchedWord.push(str2Arr[i+3])
            plagarismcount += 4
          }
        }
        else{
          // console.log(str2Arr[i] + "   Not Matched")
        }
      }
    }
    //console.log(str2Arr)
    console.log("Matched Word: "+matchedWord)
    console.log("Plagarism Count: "+plagarismcount)
    console.log("Total Word: "+total_word)
    console.log("str1 words : "+ str1_word_count)
  }

  return (
    <div className="App">
      </div>
  );
}

export default App;
