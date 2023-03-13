import React from "react";
import HeaderStyle from "./style";
import Logo from '../../assets/LogoMecBranca.svg';

function Header(props) {

  return (<HeaderStyle>
    <div id='header' className='color-1 d-flex flex-column align-items-center justify-content-center align-items-center'>

      <div className='header-top d-flex flex-row w-100 text-break'>
        {props.title &&
          <>
            <h1 className='title fw-bold d-none d-md-block'>
              {props.title}
            </h1>
            <h2 className='title fw-bold d-md-none'>
              {props.title}
            </h2>
          </>
        }

        {props.showLogo && true &&
          <img className='logo d-none d-lg-block' src={Logo} alt='Ministério da Educação' />
        }
      </div>

      <div className='divider' />

      <div className='header-bottom' /* <- tirar caso insira algo dentro da div */></div>
    </div>

  </HeaderStyle>);
}

export default Header;