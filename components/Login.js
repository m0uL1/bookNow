import React from 'react';
import style from './login.module.css'
function Login() {
    return (
      <div className={style.loginBox}>
        <h2>Login</h2>
        <form>
          <div className={style.userBox}>
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className={style.userBox}>
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <table className={style.aling_}>
            <tbody>
              <tr>
                <td className={style.submit}>
                  Login
                </td>
                <td className={style.or_}>or</td>
                <td  className={style.wallet}>
                  Wallet
                </td>
              </tr>
            </tbody>
          </table>
        </form>
    </div>
    );
};

export default Login;