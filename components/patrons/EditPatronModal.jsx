import React from 'react'
import { Button, Label, Modal, TextInput, ToggleSwitch, Select } from 'flowbite-react'
import { AiFillEdit, AiOutlineFieldNumber } from 'react-icons/ai'
import { BiBookBookmark, BiRename } from 'react-icons/bi'
import { BsGenderMale, BsGenderFemale, BsGenderTrans } from 'react-icons/bs'

export default function EditPatronModal({ data }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [gender, setGender] = React.useState(data.sex_int)
  const [contactNumber, setContactNumber] = React.useState('')

  React.useEffect(() => {
    setContactNumber(data.contact_number.replace('+63', ''))
  }, [])

  React.useEffect(() => {
    console.log(contactNumber)
  }, [contactNumber])

  let requestData = {
    contact_number: `+63${contactNumber}`,
  }

  function handleGender() {}

  return (
    <React.Fragment>
      <button
        className='bg-primary border uppercase border-primary hover:bg-white hover:text-primary transition-all px-2 py-1 rounded text-white flex items-center'
        onClick={() => setIsOpen(true)}
      >
        <AiFillEdit className='mr-2' />
        Edit User
      </button>
      <Modal
        show={isOpen}
        size='md'
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
                disabled
              />
            </div>
            <div>
              <div className='block'>
                <Label htmlFor='lrn' value='Contact Number' />
              </div>
              <TextInput
                id='lrn'
                type='text'
                required={true}
                placeholder={data.contact_number.replace('+63', '')}
                onChange={(e) => setContactNumber(e.target.value)}
                defaultValue={data.contact_number.replace('+63', '')}
                addon='+63'
              />
            </div>
            <div>
              <div id='select'>
                <div className='block'>
                  <Label htmlFor='strand' value='Track/Strand' />
                </div>
                <Select id='strand' required={true} icon={BiBookBookmark}>
                  <option value='1'>STEM</option>
                  <option value='2'>ABM</option>
                  <option value='3'>GAS</option>
                  <option value='4'>HUMSS</option>
                </Select>
              </div>
            </div>
            <div>
              <div id='select'>
                <div className='block'>
                  <Label htmlFor='gender' value='Gender' />
                </div>
                <Select
                  id='gender'
                  required={true}
                  icon={gender === 1 ? BsGenderMale : gender === 2 ? BsGenderFemale : BsGenderTrans}
                  disabled={true}
                >
                  <option value=''>
                    {gender === 1 ? 'Male' : gender === 2 ? 'Female' : gender === 3 ? 'LGBTQ+' : ''}
                  </option>
                </Select>
              </div>
            </div>

            <div className='w-full'>
              <button className='bg-primary border uppercase border-primary hover:bg-white hover:text-primary transition-all px-2 py-2 rounded text-white flex items-center justify-center w-full'>
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
