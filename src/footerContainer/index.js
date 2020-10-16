import React from 'react'
import FooterStatic from './footer/index'
import CopyRight from './copyRight/index'
const FooterContainer = () => {
    return (
        <footer id="wn__footer" className="footer__area bg__cat--8 brown--color">
			<FooterStatic/>
			<CopyRight/>
		</footer>
    )
}
export default FooterContainer