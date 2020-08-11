/*
PROGRAMMERS Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/1ea6e6a2-2ef1-45de-bcab-b99a8f775870_programmers.gif

This component keeps track of a list of pioneers in the field of programming on the one hand,
and the id of the currently celebrated programmer on the other. That's two slices of state!
We can only feature one awesome programmer at a time.

Find comments below to help you along.
*/

import React, { useState } from 'react';

// Use this variable ONLY to initialize a slice of state!
// There is something in the JSX right now breaking this rule.
const listOfAwesome = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Grace Hopper' },
  { id: '3', name: 'Evelyn Boyd Granville' },
  { id: '4', name: 'Mary Kenneth Keller' },
  { id: '5', name: 'Frances Allen' },
  { id: '6', name: 'Carol Shaw' },
];

export default function Programmers() {
  // We'll have to use the state hook twice, as we need two slices of state.
  // The programmers on the one hand, and the id of the featured programmer on the other.
  //list of programmers would be in a state for when I'm manipulating it. NOt useful in this instance, but in general wil lbe useful.
  //useState returns an array where the first item is the value & the second is the setter fn. This is destructured below to put brackets around people. We don't the return value of use state, we want the first item of the array that useState returns.
  const [people] = useState(listOfAwesome)
  const [featuredPerson, setFeaturedPerson] = useState(null)

  const getNameOfFeatured = () => {
    // This is not an event handler but a helper function. See its usage below.
    // It's going to need information from both slices of state!
    // Using the currently celebrated id, find inside the programmers slice of state
    // the _name_ of the currently celebrated programmer, and return it.
        // I couldn't figure out the syntax for getNameOfFeatured when setFeaturedPerson was passed only the id of that person. So I had it passed the whole object of that person which made life easier, but I still am not understanding how to solve it when confronted with that situation. finished MVP finally

    // let nameOfFeatured = people.filter(person => person.id = featuredPerson)//people with id of featuredPerson //this doesn't work bc .filter will return an array, not the value of.
    let nameOfFeatured = people.find(person => person.id === featuredPerson )?.name
    //.find would let me grab everything, but return just what asking for.
    return nameOfFeatured
    // return featuredPerson.name
  };

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: 'royalblue', // 🤔
  };

  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {
          /* Nasty bug! We should map over a slice of state, instead of 'listOfAwesome'.
          We might say: "it works, though!" But if the list of programmers is not state,
          we could never add or edit programmers in the future. The list would be a static thing. ;)" <changed next line to people.map, not listOfAwesome.map>*/
          people.map(dev =>
            <div key={dev.id}>
              {dev.name} <button onClick={() => { /* set the featured id passing dev.id */ setFeaturedPerson(dev.id)}}>Feature</button>
            </div>
          )
        }
      </div>
      {
        // Ternaries are fantastic to render "one thing or the other" depending on the "truthiness" of something.
        // Pseudo-code: if the currently featured id is truthy render div 1, otherwise render div 2. Fix!
        featuredPerson
          ? <div style={style}>🎉 Let&apos;s celebrate {getNameOfFeatured()}! 🥳</div>
          : <div style={style}>Pick an awesome programmer</div>
      }
    </div>
  );
}
