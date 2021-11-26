import '../Header/Header.css';
import imgLogo from '../../../../../Images/fullmarket_logo.png';
import imgName from '../../../../../Images/fullmarket_name.png';

export const Header=()=>{
    return(
        <>
        <div className='header'>
            <img className="logo" src={imgLogo} alt= "Full_Market"></img>
            <img className="logo_name" src={imgName} alt= "Full_Market"></img>
        </div>
        <div className='space'></div>
        </>
       
    )

}