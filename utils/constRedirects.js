import React, {useState} from 'react'

var gotoBooking = 0;

export function changePage(){
    console.log(gotoBooking)
    return gotoBooking
}

export function changeState(){
    gotoBooking = 1;
}