import React from 'react'
import PatronTable from '../../../components/patrons/PatronTable'
import axios from '../../../server/index'
import { FiUserMinus, FiUserPlus } from 'react-icons/fi'
import { useAtomValue } from 'jotai'
import { selectedUsersAtom } from '../../../stores/global.store'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function PatronsPage({ data }) {
  const selectedUsers = useAtomValue(selectedUsersAtom)
  const router = useRouter()

  async function handleDisable() {
    if (selectedUsers.length > 0) {
      // const { data } = await axios.patch('/user/action/disable', {
      //   users: selectedUsers,
      // })
      try {
        await toast.promise(
          axios.patch('/user/action/disable', {
            users: selectedUsers,
          }),
          {
            loading: 'Disabling Selected Users',
            success: 'Disabled Selected Users',
            error: 'Error Disabling Users',
          },
          {
            position: 'top-right',
            duration: 3000,
            className: 'font-inter',
          }
        )
      } catch (error) {
        console.log(error)
      }
    } else {
      toast('No users selected', {
        icon: '❗',
        position: 'top-right',
        duration: 3000,
        className: 'font-inter',
      })
    }
  }

  async function handleEnable() {
    if (selectedUsers.length > 0) {
      // const { data } = await axios.patch('/user/action/disable', {
      //   users: selectedUsers,
      // })
      try {
        await toast.promise(
          axios.patch('/user/action/enable', {
            users: selectedUsers,
          }),
          {
            loading: 'Enabling Selected Users',
            success: 'Enabled Selected Users',
            error: 'Error Enabling Users',
          },
          {
            position: 'top-right',
            duration: 3000,
            className: 'font-inter',
          }
        )
      } catch (error) {
        console.log(error)
      }
    } else {
      toast('No users selected', {
        icon: '❗',
        position: 'top-right',
        duration: 3000,
        className: 'font-inter',
      })
    }
  }

  return (
    <div className='font-inter px-[5%]'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold py-6 text-3xl text-primary'>Users</h1>
        <div className='flex gap-2'>
          <button
            className='bg-primary border font-bold uppercase border-primary hover:bg-white hover:text-primary transition-all px-4 py-2 rounded text-white flex items-center'
            onClick={handleEnable}
          >
            <FiUserPlus className='mr-2' />
            Enable Users
          </button>
          <button
            className='bg-primary border font-bold uppercase border-primary hover:bg-white hover:text-primary transition-all px-4 py-2 rounded text-white flex items-center'
            onClick={handleDisable}
          >
            <FiUserMinus className='mr-2' />
            Disable Users
          </button>
        </div>
      </div>
      <ul>
        <PatronTable data={data} />
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get('/user')
  return {
    props: {
      data: data.data || [],
    },
  }
}
