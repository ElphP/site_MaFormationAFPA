"use strict";

function euclide(a, b)  {
    if (b === 0) return a;
    else return euclide(b, a%b)
  }