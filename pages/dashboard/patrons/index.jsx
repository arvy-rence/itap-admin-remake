import React from 'react'
import axios from '../../../server/index'

export default function PatronsPage({ data }) {
  return (
    <div className='font-inter px-[5%]'>
      <h1 className='font-bold'>Admins</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.username}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get('/admin')
  return {
    props: {
      data: data.data || [],
    },
  }
}
