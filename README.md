# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by improperly updating state within a useEffect hook's callback. 

The `bug.js` file contains the buggy code. The useEffect hook attempts to increment the `count` state variable on every render, leading to an infinite render cycle. 

The `bugSolution.js` file provides the corrected code, showcasing the proper way to use useEffect to avoid infinite loops.