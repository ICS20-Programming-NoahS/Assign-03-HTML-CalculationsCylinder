// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: Apr 2023
// This file contains the JS functions for index.html


"use strict";
/**

This function calculates the volume and surface area of a cylinder.
*/
function calculatecylinder() {
// calculations of the volume and surface area of a cylinder

let radius = parseFloat(document.getElementById("radius-of-cylinder").value);
  
let height = parseFloat(document.getElementById("height-of-cylinder").value);
  
// calculating the volume of the cylinder
let volume = Math.PI * radius ** 2 * height;

// calculating the surface area of the cylinder
let surfaceArea = 2 * Math.PI * radius * height + 2 * Math.PI * radius **2;

// display of the volume and surface area of the cylinder
document.getElementById("calc").innerHTML = "The volume of the cylinder is: " + volume.toFixed(2) + " cm³ and the surface area of the cylinder is: " + surfaceArea.toFixed(2) + " cm².";
}