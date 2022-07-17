import React from 'react';
import style from '../styles/login.module.css'
import styleModal from '../styles/uploadmodal.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import Home from './Home';

const Login = () => {
  const {loggedIn} = useWallet();
    return (
      <div>
          {loggedIn ? (<Home />) : (
        <div className={style.loginBox}>
          <u><h2>Register Theater</h2></u>
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
                      <WalletMultiButton />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
      </div>
     )}
    </div>

  );
};

export default Login;