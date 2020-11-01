import React from 'react'
import SearchHeader from '../../SearchHeader'
import HeaderContent from './HeaderContent'
import HeaderLink from './HeaderLink'

const Header = () => {
    return (
        <div>
			<HeaderLink/>
			<SearchHeader/>
		</div>
    )
}

export default Header