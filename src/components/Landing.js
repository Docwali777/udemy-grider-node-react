import React, {Component} from 'react'
import { Modal, Button, Icon, Carousel, SideNav, SideNavItem } from 'react-materialize'

const Landing = () => {
return(
  <div className='center'>
    <h1>Emaily</h1>
    Collect from your users
    <hr />
    <Modal
	header='Modal Header'
	trigger={<Button waves='light'>OR ME!<Icon right>insert_chart</Icon></Button>}>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua.</p>
</Modal>
<hr />
<Carousel images={[
	'http://www167.lunapic.com/do-not-link-here-use-hosting-instead/150146979255568?836826954',
	'https://lorempixel.com/250/250/nature/2',
	'https://lorempixel.com/250/250/nature/3',
	'https://lorempixel.com/250/250/nature/4',
	'https://lorempixel.com/250/250/nature/5'
]} />
<hr />
<SideNav
	trigger={<Button>SIDE NAV DEMO</Button>}
	options={{ closeOnClick: true }}
	>
	<SideNavItem userView
		user={{
			background: 	'http://www167.lunapic.com/do-not-link-here-use-hosting-instead/150146979255568?836826954',
			image: 'img/yuna.jpg',
			name: 'John Doe',
			email: 'jdandturk@gmail.com'
		}}
	/>
	<SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
	<SideNavItem href='#!second'>Second Link</SideNavItem>
	<SideNavItem divider />
	<SideNavItem subheader>Subheader</SideNavItem>
	<SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
</SideNav>
  </div>
)
}

export default Landing
