import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/nav'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const updateUsername = (event) => {
    setUsername(event.target.value)
  }

  const updatePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }
    fetch(
      'https://persona.api.ksfmedia.fi/v1/swagger-ui/#/login',
      requestOptions,
    )
      .then((response) => response.json())
      .then((data) => console.log('fetchedData', data))
  }

  return (
    <div className="px-8">
      <Nav />
      <h1 className="text-3xl font-bold mb-6">Log in</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-1" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={updateUsername}
          className="block px-4 py-2 mb-4 border border-gray-300 rounded w-64"
        />
        <label className="block mb-1" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={updatePassword}
          className="block px-4 py-2 mb-8 border border-gray-300 rounded w-64"
        />
        <button
          type="submit"
          className="px-8 py-2 bg-green-400 hover:bg-green-500 rounded"
        >
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login
