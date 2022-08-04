import React, {useState} from 'react'

var gotoBooking = 0;

export function changePage(){
    return gotoBooking
}

export function changeState(){
    gotoBooking = 1;
}