import React from 'react'
import { Table } from 'flowbite-react'
import EditPatronModal from './EditPatronModal'

export default function PatronTableRow({ handleCheck, data, seq }) {
  // get year of birthday and and append a sequence number
  const year = data.created_at.split('-')[0]
  const id = `${year}-${seq}`

  function classifyGender(value) {
    // if 1 return Male else if 2 return Female else if 3 return LGBTQIA+ else

    if (value === 1) return 'Male'
    else if (value === 2) return 'Female'
    else if (value === 3) return 'LGBTQIA+'
  }
  return (
    <>
      <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
        <Table.Cell>
          <input type='checkbox' onChange={(e) => handleCheck(e, data.id)} />
        </Table.Cell>
        <Table.Cell
          className={`whitespace-nowrap font-medium text-gray-900 dark:text-white ${
            data.is_active ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {data.full_name.toUpperCase()}
        </Table.Cell>
        <Table.Cell className='whitespace-nowrap'>{`${data.province}, ${data.city} ${data.barangay}`}</Table.Cell>
        <Table.Cell>{data.email}</Table.Cell>
        <Table.Cell>{data.contact_number}</Table.Cell>
        <Table.Cell>{new Date(data.created_at).toLocaleDateString()}</Table.Cell>
        <Table.Cell className='whitespace-nowrap'>
          <EditPatronModal data={data} />
        </Table.Cell>
      </Table.Row>
    </>
  )
}
