import React, {useEffect,useState} from 'react'
import '../css/Login.css'


export default function Login() {
    const [page ,setPage]= useState(1)
    
  return (
    <div className='login_page'>
{page===1?(         <div className="login-kotta">
            <div className="teper-login">
            <div className="login-ichi">
                   <h1>Вход в личный кабинет</h1>
                <div className="login_butoon">
                    <button id='login_but1' onClick={()=>setPage(2)}>Войти</button>
                    <button id='login_but2' onClick={()=>setPage(3)}>Зарегестрироваться</button>
                </div>
                   </div>
            </div>
         </div>):(page===2?(<div>
          <div className="login-kotta">
            
            <div className="teper-login1">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(1)}  size="35px"></box-icon>
              </div>
              <div className="page2-ichi">
                <h1>Вход в личный кабинет</h1>
                <div className="page2-login-inp">
                  <input type="text"  placeholder="Логин" /><br />
                  <input type="password" if placeholder="Пароль"  /><br />
                  <div className="page-2-but">
                  <button>Войти</button>
                  </div>
                  <div className="page-2-but">
                  <p>Забыли пароль?</p>
                  </div>
                </div>
              </div>
            </div>
         </div>
         </div>):(page===3?(<div>
          <div className="login-kotta">
            
            <div className="teper-login1">
              <div className="nazat" >
              <box-icon name='x'  color="#ACACAC" onClick={()=>setPage(1)}  size="35px"></box-icon>
              </div>
              <div className="page3-ichi">
                <h1>Регистрация</h1>
                <div className="page3-form">
                  <div className="page_form-checboc">
                    <div className="checboc-block1">
                      <input type="radio"  />
                      <p>Физическое лицо</p>
                    </div>
                  </div>
                  <div className="page_form-checboc1">
                    <div className="checboc-block1">
                      <input type="radio" />
                      <p>Организация</p>
                    </div>
                  </div>
                  <div className="page_form-checboc1">
                    <div className="checboc-block1">
                      <input type="radio" />
                      <p>Водитель</p>
                    </div>
                  </div>
                  <button>Далее</button>
                </div>
                
              </div>
            </div>
         </div>
         </div>):(<div></div>)))}
    </div>
  )
}
