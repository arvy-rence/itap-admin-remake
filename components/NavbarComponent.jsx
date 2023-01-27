import React from 'react'
import { Navbar, Button } from 'flowbite-react'

export default function NavbarComponent({ activePage }) {
  return (
    <Navbar fluid={true} rounded={true} className='font-inter'>
      <Navbar.Brand href='https://flowbite.com/'>
        <img
          src='https://flowbite.com/docs/images/logo.svg'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          iTap Dashboard
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Button href='/'>Logout</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href='/dashboard/reports'
          active={activePage === '/dashboard/reports' ? true : false}
        >
          Reports
        </Navbar.Link>
        <Navbar.Link
          href='/dashboard/patrons'
          active={activePage === '/dashboard/patrons' ? true : false}
        >
          Patrons
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
