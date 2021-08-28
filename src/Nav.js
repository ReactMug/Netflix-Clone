import React,{useEffect,useState} from 'react'
import './Nav.css'
function Nav() {
 const [Show, HandleShow] = useState(false);
 useEffect(() => {
     window.addEventListener('scroll',()=>{
         if(window.screenY>100){
            HandleShow(true)
         }else HandleShow(false)
     })
     return () => {
         window.removeEventListener('scroll',null );
     }
 }, [])
 
    return (
        <div className={`nav ${Show===true && 'nav__black'}`}>
            <img
                src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'
                className='nav__logo'
                alt='Netflix Logo'
            />
            <img
                src='https://images.squarespace-cdn.com/content/v1/575a6067b654f9b902f452f4/1552683653140-0UUVQSSUEWVC73AWAEQG/300Logo.png'
                className='nav__avatar'
                alt='Netflix Logo'
            />
        </div>
    )
}

export default Nav
