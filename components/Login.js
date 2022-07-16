import React from 'react';
import style from './login.module.css'
import styleModal from './uploadmodal.module.css'
function Login() {
    return (
      <div className={style.loginBox}>
        <h2>Register Theater</h2>
        <form>
          <div className={style.userBox}>
            <input type="text" name="" required/>
            <label>Theater Name</label>
          </div>
          <div className={style.userBox}>
            <input type="text" name="" required/>
            <label>Theater Address</label>
          </div>
          <div className={style.userBox}>
              <center>
                <div className={styleModal.uploadBtn}>
                    <button className={styleModal.btn}>Theater InView</button>
                    <input type="file" name="myfile" />
                </div>
              </center>
          </div>
          <hr />
          <table className={style.aling_}>
            <tbody>
              <tr>
                <td className={style.submit}>
                  Register
                </td>
                <td className={style.or_}>or</td>
                <td  className={style.wallet}>
                   use Wallet
                </td>
              </tr>
            </tbody>
          </table>
        </form>
    </div>
  );
};

export default Login;