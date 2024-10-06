import React from 'react'
import { AuthProvider } from './src/components/context/AuthContext'
import Router from './src/components/routes/Router'

const App = () => {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  )
}

export default App