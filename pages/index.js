import React,{useState} from 'react'
import Login from '../components/Login'
import Home from '../pages/home'
import { useWallet } from '@solana/wallet-adapter-react'
import BookNow from './booking/BookNow'
import { changePage } from '../utils/constRedirects'
export default function App() {

  /**
      <React.StrictMode>
          <div>

          <BookNow 
            details = "Today,  13 Jul, 03:15 PM at Innovative Multiplex, Marathahalli"
            movieTitle = "JugJugg Jeeyo"
            items = { {'A1':0,'B1':0,'C1':1,'D1':1,'E1':1,'F1':0,'G1':0,'H1':0,'I1':0,'J1':0,
                      'A2':0,'B2':0,'C2':1,'D2':1,'E2':1,'F2':0,'G2':0,'H2':0,'I2':0,'J2':0,
                      'A3':1,'B3':0,'C3':1,'D3':1,'E3':1,'F3':0,'G3':0,'H3':0,'I3':0,'J3':0,
                      'A4':0,'B4':0,'C4':1,'D4':1,'E4':1,'F4':0,'G4':0,'H4':0,'I4':0,'J4':0,
                      'A5':0,'B5':0,'C5':0,'D5':0,'E5':0,'F5':0,'G5':0,'H5':0,'I5':0,'J5':0,
                      'A6':0,'B6':0,'C6':0,'D6':1,'E6':0,'F6':0,'G6':0,'H6':0,'I6':0,'J6':0,
                      'A7':0,'B7':0,'C7':0,'D7':1,'E7':0,'F7':0,'G7':0,'H7':0,'I7':0,'J7':0,
                      'A8':0,'B8':0,'C8':0,'D8':0,'E8':0,'F8':0,'G8':0,'H8':0,'I8':0,'J8':0,
          } }
          />
          </div>
        </React.StrictMode> 



        <BrowserRouter>
        <Routes>

        
          <Route path="/bookNow:name" element={
            <BookNow 
                details = "Today,  13 Jul, 03:15 PM at Innovative Multiplex, Marathahalli"
                movieTitle = "JugJugg Jeeyo"
                items = { {'A1':0,'B1':0,'C1':1,'D1':1,'E1':1,'F1':0,'G1':0,'H1':0,'I1':0,'J1':0,
                          'A2':0,'B2':0,'C2':1,'D2':1,'E2':1,'F2':0,'G2':0,'H2':0,'I2':0,'J2':0,
                          'A3':1,'B3':0,'C3':1,'D3':1,'E3':1,'F3':0,'G3':0,'H3':0,'I3':0,'J3':0,
                          'A4':0,'B4':0,'C4':1,'D4':1,'E4':1,'F4':0,'G4':0,'H4':0,'I4':0,'J4':0,
                          'A5':0,'B5':0,'C5':0,'D5':0,'E5':0,'F5':0,'G5':0,'H5':0,'I5':0,'J5':0,
                          'A6':0,'B6':0,'C6':0,'D6':1,'E6':0,'F6':0,'G6':0,'H6':0,'I6':0,'J6':0,
                          'A7':0,'B7':0,'C7':0,'D7':1,'E7':0,'F7':0,'G7':0,'H7':0,'I7':0,'J7':0,
                          'A8':0,'B8':0,'C8':0,'D8':0,'E8':0,'F8':0,'G8':0,'H8':0,'I8':0,'J8':0,
              } }
            />
          } 
        />
          <Route path="/upload" element={<UploadMovie />} />
          <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        
    

  }
   */
  // @g00g1y5p4 
  const { publicKey, signMessage } = useWallet();
    return(
     <div>

        { 
          publicKey ? 
            ( changePage() ? 
                  <BookNow /> 
                : 
                <Home />
            ):
          <Login />
        }
      </div>
    )
  //  
}
