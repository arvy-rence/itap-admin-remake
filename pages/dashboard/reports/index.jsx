import React from 'react'
import { Card } from 'flowbite-react'
import LineChart from '../../../components/chart-components/LineChart'
import PieChart from '../../../components/chart-components/PieChart'
import lineData from './line-data'
import pieData from './pie-data'
import { TbUserCircle } from 'react-icons/tb'
import { BsGenderMale } from 'react-icons/bs'
import axios from '../../../server/index'

export default function ReportsPage({
  data,
  total,
  today,
  topBarangay,
  ageGroups,
  genderAnalytics,
}) {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' }).toUpperCase()
  return (
    <div className='font-inter flex flex-col justify-center items-center pb-5'>
      <h1 className='text-4xl font-bold text-primary pb-5'>iTap Report Dashboard</h1>
      <div className='w-[90%] flex flex-col gap-5'>
        <div className='grid grid-cols-4 gap-5 max-h-1/4 pt-2'>
          <Card className='bg-primary text-white flex-col'>
            <span className='flex text-2xl items-center font-bold gap-3 justify-center'>
              <TbUserCircle />
              <span>TOTAL PATRONS</span>
            </span>
            <span className='text-2xl text-center'>{total}</span>
          </Card>

          <div className='flex flex-col gap-2 items-center justify-center'>
            <Card className='w-full'>
              <span className='flex justify-between'>
                <span className='flex items-center font-bold text-lg gap-2'>
                  <BsGenderMale />
                  <span>MALE PATRONS</span>
                </span>
                <span>{data.male}</span>
              </span>
            </Card>
            <Card className='w-full'>
              <span className='flex justify-between'>
                <span className='flex items-center font-bold text-lg gap-2'>
                  <BsGenderMale />
                  <span>FEMALE PATRONS</span>
                </span>
                <span>{data.female}</span>
              </span>
            </Card>
          </div>

          <div className='flex flex-col gap-2 items-center justify-center'>
            <Card className='w-full'>
              <span className='flex justify-between'>
                <span className='flex items-center font-bold text-lg gap-2'>
                  <BsGenderMale />
                  <span>LGBTQIA+ PATRONS</span>
                </span>
                <span>{data.lgbt}</span>
              </span>
            </Card>
          </div>

          <Card className='bg-primary text-white flex-col'>
            <span className='flex text-2xl items-center font-bold gap-3 justify-center'>
              <TbUserCircle />
              <span>PATRONS TODAY</span>
            </span>
            <span className='text-2xl text-center'>{today}</span>
          </Card>
        </div>

        <Card className='h-[400px]'>
          <LineChart data={genderAnalytics} />
        </Card>

        <div className='h-[400px] w-full flex gap-5'>
          <Card className='h-[100%] w-2/5 flex flex-col'>
            <h1 className='text-primary text-2xl font-bold'>TOP 5 BARANGAY VISITORS</h1>
            <h2 className='text-primary text-lg opacity-70'>(FOR THE MONTH OF {currentMonth})</h2>
            <ol className='list-decimal'>
              {topBarangay.map((barangay, index) => {
                return (
                  <li className='text-primary text-lg ml-12' key={index}>
                    {barangay.barangay} with {barangay.count} visitors
                  </li>
                )
              })}
            </ol>
          </Card>
          <Card className='h-[100%] w-3/5 pt-2'>
            <h1 className='font-bold text-xl text-primary'>PATRON AGE PROFILE</h1>
            <PieChart data={ageGroups} />
          </Card>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get('/user/gender/count')
  const { data: patronToday } = await axios.get('/visitorlog/today')
  const { data: topBarangay } = await axios.get('/visitorlog/barangay-per-month')
  const { data: ageGroups } = await axios.get('/user/info/agegroup')
  const { data: genderAnalytics } = await axios.get('/visitorlog/gender-per-month')
  let total = 0
  // sum values of object
  for (const key in data.data) {
    total += data.data[key]
  }
  console.log(total)
  return {
    props: {
      data: data.data,
      total: total,
      today: patronToday.data,
      topBarangay: topBarangay.data,
      ageGroups: ageGroups.data,
      genderAnalytics: genderAnalytics.data,
    },
  }
}
