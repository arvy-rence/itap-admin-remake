import React from 'react'
import { Label, Modal, TextInput, Select } from 'flowbite-react'
import { AiFillEdit } from 'react-icons/ai'
import { BiBookBookmark, BiRename } from 'react-icons/bi'
import { toast } from 'react-hot-toast'
import axios from '../../server/index'

export default function EditPatronModal({ data }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [fullName, setFullName] = React.useState(data.full_name)
  const [birthday, setBirthday] = React.useState(data.birthday)

  let requestData = {
    id: data.id,
    fullName: fullName,
    birthday: birthday,
  }

  async function handleEditPatron() {
    try {
      await toast.promise(
        axios.patch('/user/action/edit', requestData),
        {
          loading: 'Editing Patron',
          success: 'Edited Patron',
          error: 'Error Editing Patron',
        },
        {
          position: 'top-right',
          duration: 3000,
          className: 'font-inter',
        }
      )
      setIsOpen(false)
    } catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() => {
    setFullName(data.full_name)
    setBirthday(data.birthday)
    requestData.fullName = data.full_name
    requestData.birthday = data.birthday
  }, [])

  React.useEffect(() => {
    handleReset()
  }, [isOpen])

  function handleReset() {
    setFullName(data.full_name)
    setBirthday(data.birthday)
  }

  return (
    <React.Fragment>
      <button
        className='bg-primary border uppercase border-primary p-2 hover:bg-white hover:text-primary transition-all px-2 py-1 rounded text-white flex items-center'
        onClick={() => setIsOpen(true)}
      >
        <AiFillEdit className='mr-2' />
        Edit User
      </button>
      <Modal
        show={isOpen}
        size='lg'
        popup={true}
        onClose={() => setIsOpen(false)}
        className='font-inter'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='space-y-4 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
            <h3 className='text-2xl text-primary dark:text-white text-center font-bold uppercase'>
              Edit Patron {data.full_name}
            </h3>
            <div>
              <div className='block'>
                <Label htmlFor='fullName' value='Full Name' />
              </div>
              <TextInput
                id='fullName'
                type='text'
                icon={BiRename}
                required={true}
                placeholder={data.full_name}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <div className='block'>
                <Label htmlFor='fullName' value='Birthday' />
              </div>
              <div className='relative max-w-sm'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
                <input
                  type='date'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Select date'
                  defaultValue={data.birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>
            </div>
            <div className='w-full'>
              <button
                className='bg-primary border uppercase border-primary hover:bg-white hover:text-primary transition-all px-2 py-2 rounded text-white flex items-center justify-center w-full'
                onClick={handleEditPatron}
              >
                <AiFillEdit className='mr-2' />
                Edit User
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
