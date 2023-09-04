import React, { useEffect } from 'react'
import Input from '../components/Input'
import PageContainer from '../components/PageContainer'
import Select from '../components/Select'
import { userLogin } from '../services/apis/Auth'

const Dashboard = () => {
    
  return (
    <PageContainer title="Dashboard">
      <h2 className=' font-bold'>Details</h2>
      <div>
        <Select label="whom to send" />
        <Input label="whom to send" />
      </div>
    </PageContainer>
  )
}

export default Dashboard