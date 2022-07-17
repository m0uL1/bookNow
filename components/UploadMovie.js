import React, { useState } from 'react';
import styleModal from '../styles/uploadmodal.module.css'

import style from '../styles/uploadmovie.module.css'
import Cards from './Cards'

const UploadMovie = () => {

    const [title_,setTitle] = useState('');
    const [genre,setGenre] = useState('');
    const [price,setPrice] = useState();
    const [url,setURL] = useState('');

    const UploadModal = () => {
      /**
         * <input
                  className={style.input}
                  type='text'
                  value={description}
                  onChange={e => setDescription(e.target.value)
                    onClick={() => setNewVideoShow(false)}
                    className={`${style.button} ${style.cancelButton}`}
                />
         */
      
        return (
          <div className={styleModal.wrapper}>
            <div className={styleModal.title}>Upload New Movie</div>
            <div className={styleModal.inputField}>
                <div className={styleModal.userBox}>
                  <input 
                  value={title_} 
                  onChange={e => setTitle(e.target.value)} required/>
                  <label>Movie name </label>
                </div>
                <div className={styleModal.userBox}>
                  <input 
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                  required/>
                  <label>Genre </label>
                </div>
                <div className={styleModal.userBox}>
                  <input  
                    type="text" inputMode="numeric"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                  required/>
                  <label>Ticket price </label>
                </div>
                <div className={styleModal.uploadBtn}>
                  <button className={styleModal.btn}>Upload Movie Poster</button>
                  <input type="file" name="myfile" />
                </div>
            </div>
            <div className={styleModal.modalButtons}>
              <button
                
                className={`${styleModal.button} ${styleModal.cancelButton}`}>
                Cancel
              </button>
              <button
                className={`${styleModal.button} ${styleModal.createButton}`}>
                Create New
              </button>
            </div>
          </div>
        )
      }

    return (
        <div>
            <div className={style.BackBox}>
              <img src="banner.jpeg" className={style.chairImage} />
                <div className={style.alingRight}>
                    <Cards title={title_} genre={genre} img={url} />
                </div>
                <div className={style.alingLeft}>
                    <UploadModal /> 
                </div>
            </div>
            
            <div className={style.footer}>
              <div className={style.inner_footer}>

                <div className={style.footer_items}>
                  <h1>Company Name</h1>
                  <p>Description of any product or motto of the company.</p>
                </div>

                <div className={style.footer_items}>
                  <h3>Quick Links</h3>
                  <div className={style.border1}></div> 
                    <ul>
                      <a href="#"><li>Home</li></a>
                      <a href="#"><li>Search</li></a>
                      <a href="#"><li>Contact</li></a>
                      <a href="#"><li>About</li></a>
                    </ul>
                </div>

                <div className={style.footer_items}>
                  <h3>Recipes</h3>
                  <div className={style.border1}></div>
                    <ul>
                      <a href="#"><li>Indian</li></a>
                      <a href="#"><li>Chinese</li></a>
                      <a href="#"><li>Mexican</li></a>
                      <a href="#"><li>Italian</li></a>
                    </ul>
                </div>

                <div className={style.footer_items}>
                  <h3>Contact us</h3>
                  <div className={style.border1}></div>
                    <ul>
                      <li><i className={
                        `${style.fa} ${style.fa_map_marker}`} aria_hidden="true"></i>XYZ, abc</li>
                      <li><i className={`${style.fa}`} aria_hidden="true"></i>123456789</li>
                      <li><i className={`${style.fa}`} aria_hidden="true"></i>xyz@gmail.com</li>
                    </ul> 
                  
                    <div className={style.social_media}>
                      <a href="#"><i className={style.fab }></i></a>
                      <a href="#"><i className={style.fab}></i></a>
                      <a href="#"><i className={style.fab}></i></a>
                    </div> 
                </div>
              </div>
            </div>
              <div className={style.footer_bottom}>
                Copyright &copy; blah blah blah.
              </div>
        </div>
    );
};
export default UploadMovie;