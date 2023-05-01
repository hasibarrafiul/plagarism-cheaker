import './App.css';
import React, { useEffect, useState } from 'react';



function App() {
  const str1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\
  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\
  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\
  tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\
  quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \
  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\
  recusandae alias error harum maxime adipisci amet laborum. Perspiciatis \
  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \
  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \
  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam \
  consequuntur! Commodi minima excepturi repudiandae velit hic maxime\
  doloremque. Quaerat provident commodi consectetur veniam similique ad \
  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo \
  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore \
  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium\
  modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam \
  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam \
  quasi aliquam eligendi, placeat qui corporis!\
  "
  const str2 = "amet consectetur adipisicing. Maxime mollitia,\
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\
  numquam harum eius sed odit fugiat iusto fuga praesentium\
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\
  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\
  nihil, eveniet aliquid culpa? officia aut! Impedit sit sunt quaerat, odit,\
  tenetur error, harum nesciunt ipsum debitis quas aliquid."

  //split the string into array of words
  const str1Arr = str2.split(/[.!?]+/)
  let matchedWord = [[]];

  for(let i=0; i<str1Arr.length; i++){
    let str2Arr = str1Arr[i].split(" ")
    let str1ArrDoc = str1.split(/[.!?]+/)
    if(str2Arr[i]!= null && str2Arr[i+1]!= null && str2Arr[i+2]!= null && str2Arr[i+3]!= null){

      for (let j=0;j<str1ArrDoc.length;j++){
        let str1ArrDocSplit = str1ArrDoc[i].split(" ")
        if(str1ArrDocSplit[j]!= null && str1ArrDocSplit[j+1]!= null && str1ArrDocSplit[j+2]!= null && str1ArrDocSplit[j+3]!= null){
          // console.log("----------------------------------------------------------------------------------------------------")
          // console.log(str2Arr[i] + " " + str2Arr[i+1] + " " + str2Arr[i+2] + " " + str2Arr[i+3])
          // console.log("Comparing to :")
          // console.log(str1ArrDocSplit[j] + " " + str1ArrDocSplit[j+1] + " " + str1ArrDocSplit[j+2] + " " + str1ArrDocSplit[j+3])
          // console.log("----------------------------------------------------------------------------------------------------")
          if(str2Arr[i] == str1ArrDocSplit[j] && str2Arr[i+1] == str1ArrDocSplit[j+1] && str2Arr[i+2] == str1ArrDocSplit[j+2] && str2Arr[i+3] == str1ArrDocSplit[j+3]){
            // console.log(str2Arr[i] + "   Matched")
            matchedWord.push(str2Arr[i])
            matchedWord.push(str2Arr[i+1])
            matchedWord.push(str2Arr[i+2])
            matchedWord.push(str2Arr[i+3])
          }
        }
        else{
          // console.log(str2Arr[i] + "   Not Matched")
        }
        console.log("Matched Word: "+matchedWord)
      }
    }

    console.log(str2Arr)
  }

  return (
    <div className="App">
      </div>
  );
}

export default App;
