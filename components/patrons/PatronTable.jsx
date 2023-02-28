import React from 'react'
import { Table } from 'flowbite-react'
import PatronTableRow from './PatronTableRow'
import { useAtom } from 'jotai'
import { selectedUsersAtom } from '../../stores/global.store'

export default function PatronTable({ data }) {
  const [checked, setChecked] = useAtom(selectedUsersAtom)

  const tableHeaders = [
    '',
    'Full Name',
    'Address',
    'Email',
    'Contact Number',
    'Date Registered',
    '',
  ]

  const getIdOfChecked = (e, id) => {
    if (e.target.checked) {
      setChecked([...checked, id])
    } else {
      setChecked(checked.filter((item) => item !== id))
    }
  }

  return (
    <>
      <Table>
        <Table.Head className='bg-primary text-white'>
          {tableHeaders.map((header, index) => (
            <Table.HeadCell key={index}>{header}</Table.HeadCell>
          ))}
          <Table.HeadCell>
            <span className='sr-only'>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y text-black'>
          {data.map((user, index) => (
            <PatronTableRow
              key={index}
              data={user}
              handleCheck={getIdOfChecked}
              seq={('000' + (index + 1)).slice(-4)}
            />
          ))}
        </Table.Body>
      </Table>
    </>
  )
}
