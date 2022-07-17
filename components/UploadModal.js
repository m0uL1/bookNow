import style from '../styles/uploadmodal.module.css'
const UploadModal = ({
  description,
  videoUrl,
  newVideo,
  setDescription,
  setVideoUrl,
  setNewVideoShow,
}) => {
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
    <div className={style.wrapper}>
      <div className={style.title}>Upload New Movie</div>
      <div className={style.inputField}>
          <div className={style.userBox}>
            <input type="" name="" required/>
            <label>Movie name </label>
          </div>
          <div className={style.userBox}>
            <input type="" name="" 
              onChange={e => setUserName(e.target.value)}
            required/>
            <label>Genre </label>
          </div>
          <div className={style.userBox}>
            <input type="" name="" required/>
            <label>Ticket price </label>
          </div>
          <div className={style.uploadBtn}>
            <button className={style.btn}>Upload Movie Poster</button>
            <input type="file" name="myfile" />
          </div>
      </div>
      <div className={style.modalButtons}>
        <button
          
          className={`${style.button} ${style.cancelButton}`}>
          Cancel
        </button>
        <button
          className={`${style.button} ${style.createButton}`}>
          Create New
        </button>
      </div>
    </div>
  )
}

export default UploadModal


