import React, { useState } from 'react';
import style from '../styles/booknow.module.css'
import Chair from './Chair';
import Screen from './Screen';
import BookedChair from './BookedChair'
import buttonStyle from '../styles/payment.module.css'
import TickChair from './TickChair';




const row1 = ['A1','B1','C1','D1','E1','F1','G1','_','_','_','H1','I1','J1']
const row2 = ['A2','B2','C2','D2','E2','F2','G2','_','_','_','H2','I2','J2']
const row3 = ['A3','B3','C3','D3','E3','F3','G3','_','_','_','H3','I3','J3']
const row4 = ['A4','B4','C4','D4','E4','F4','G4','_','_','_','H4','I4','J4']
const row5 = ['A5','B5','C5','D5','E5','F5','G5','_','_','_','H5','I5','J5']
const row6 = ['A6','B6','C6','D6','E6','F6','G6','_','_','_','H6','I6','J6']
const row7 = ['A7','B7','C7','D7','E7','F7','G7','_','_','_','H7','I7','J7']
const row8 = ['A8','B8','C8','D8','E8','F8','G8','_','_','_','H8','I8','J8']


const BookNow = (props) => {

    var selectedChair = [];

    var selectedChair_=[];

    const [showPrice, setPrice] = React.useState(false)
    const [chair, listsOfChair] = useState([]);


    const selectChair = (chairID) => {

        if (props.items[chairID] == 0 ){
            props.items[chairID] = -1
        }else{
            props.items[chairID] = 0
        }

        selectedChair_  = chair.filter(function(ele){ 
            return ele != chairID; 
        });

        function arrayEquals(a, b) {
            return Array.isArray(a) &&
                Array.isArray(b) &&
                a.length === b.length &&
                a.every((val, index) => val === b[index]);
        }

        if (arrayEquals(chair,selectedChair_)){
            listsOfChair( selectedChair => [...selectedChair,chairID]);
            setPrice(true)
        }else{
            listsOfChair(chair.filter(function(ele){ return ele != chairID }));
        }
    }


    const Chair_ = (args) => {
        return (
            <td key={args.id_} className={style.clicke} onClick={() => selectChair(args.id_)}>
                <center>
                    { props.items[args.id_] < 0 ? <TickChair /> : <Chair /> }
                </center>
            </td>
        );
    };


    const Nochair_ = (args) => {
        return (
            <td key={args.id_} className={style.AlreadyBooked}>
                <center><BookedChair /></center>
            </td>
        );
    };

    const Results = (pay) => {
        return(
            <div className={style.Invoice}>
                <h2>Invoice</h2>
                <table className={style.tableInvoice}>
                    <tbody>
                        <tr>
                            <td>
                                <center>
                                    <h4>Number of tickets booked: </h4>
                                </center>
                            </td>
                            <td>
                                <center>
                                    <h4> { pay.count }</h4>
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                    <h4> For 1 Ticket:</h4>
                                </center>
                                
                            </td>
                            <td>
                                <center>
                                    <h4> 0.056 SOL</h4>
                                </center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                    <h5> -Calculation:</h5>
                                </center>
                            </td>
                            <td>
                                <center>
                                    <h4> {pay.count}*0.056 </h4>
                                </center>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center>
                                    <h4>Total SOL:</h4>
                                </center>
                            </td>
                            <td>
                                <center>
                                    <h4>
                                    {pay.count*0.056}
                                    </h4>
                                </center>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                <center>
                    <button className={buttonStyle.button} value={pay.count}>
                        {pay.count*0.056} SOL
                    </button>
                </center>
            </div>
        );
    }


    return (
        <React.StrictMode>
            <div className={style.main}>
            {showPrice? <Results count={chair.length} /> : null}
                <div>
                    <div className={style.navHeader}>
                        <div className={style.navMovieName}>
                            <span >{props.movieTitle}</span>
                        </div>
                        <div className={style.navMovieDetails}>
                            <span >{props.details}</span>
                        </div>
                    </div>
                    <div className={style.wakeBox}>
                        <Chair />
                        <div className={style.Available}>
                            <p>Available</p>
                        </div>
                        <BookedChair />
                        <div className={style.Booked}>
                            <p>Booked</p>
                        </div>
                        <TickChair />
                        <div className={style.seleted}>
                            <p>Selected</p>
                        </div>

                    </div>
                    <p> Each seat tooks 0.056 SOL</p>
                    <div className={style.seatBox}>

                    <table className={style.seatTable}>
                        <thead>
                        <tr>
                            <th className={style.forMargin}></th><th>A</th><th>B</th><th>C</th>
                            <th>D</th><th>E</th><th>F</th><th>G</th>
                            <th></th><th></th><th></th>

                            <th>H</th><th>I</th>
                            <th>J</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr key='1'>
                                <th>1</th>
                                {
                                    row1.map(key =>{
                                        if (key == '_'){
                                            return <td></td>
                                        }
                                        if (props.items[key] == 1){
                                            return <Nochair_ id_={key} />
                                        }else {
                                            return <Chair_ id_={key} />
                                        }
                                    })
                                }
                            </tr>
                            <tr key='2'>
                            <th>2</th>
                                {
                                    row2.map(key =>{
                                        if (key == '_'){
                                            return <td></td>
                                        }
                                        if (props.items[key] == 1){
                                            return <Nochair_ id_={key} />
                                        }else{
                                            return <Chair_ id_={key} />
                                        }
                                    })
                                } 
                            </tr>

                            <tr key='3'>
                            <th>3</th>
                                {
                                    row3.map(key =>{
                                        if (key == '_'){
                                            return <td></td>
                                        }
                                        if (props.items[key] == 1){
                                            return <Nochair_ id_={key} />
                                        }else{
                                            return <Chair_ id_={key} />
                                        }
                                    })
                                }
                            </tr>
                            <tr key='4'>
                            <th>4</th>
                            {
                                    row4.map(key =>{
                                        if (key == '_'){
                                            return <td></td>
                                        }
                                        if (props.items[key] == 1){
                                            return <Nochair_ id_={key} />
                                        }else{
                                            return <Chair_ id_={key} />
                                        }
                                    })
                                }
                            </tr>

                            <tr key='5'>
                            <th>5</th>
                            {
                                    row5.map(key =>{
                                        if (key == '_'){
                                            return <td></td>
                                        }
                                        if (props.items[key] == 1){
                                            return <Nochair_ id_={key} />
                                        }else{
                                            return <Chair_ id_={key} />
                                        }
                                    })
                                }
                            </tr>

                            <tr key='6'>
                                <th> 6 </th>
                                {
                                    row6.map(key =>{
                                        if (key == '_'){
                                            return <td></td>
                                        }
                                        if (props.items[key] == 1){
                                            return <Nochair_ id_={key} />
                                        }else{
                                            return <Chair_ id_={key} />
                                        }
                                    })
                                }
                            </tr>

                            <tr>
                                <th>_</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
                            </tr>

                            <tr >
                                <th>_</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
                            </tr>

                            <tr key='7'>
                            <th>7</th>
                            {
                                    row7.map(key =>{
                                        if (key == '_'){
                                            return <td></td>
                                        }
                                        if (props.items[key] == 1){
                                            return <Nochair_ id_={key} />
                                        }else{
                                            return <Chair_ id_={key} />
                                        }
                                    })
                                }
                            </tr>


                            <tr key='8'>
                            <th>8</th>
                            {
                                    row8.map(key =>{
                                        if (key == '_'){
                                            return <td></td>
                                        }
                                        if (props.items[key] == 1){
                                            return <Nochair_ id_={key} />
                                        }else{
                                            return <Chair_ id_={key} />
                                        }
                                    })
                                }
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <Screen />
                </div>   
            </div>  
            </React.StrictMode>
    );
};

export default BookNow;