import axios from 'axios'

export default function Login({
  password,
  setAuthToken,
  setPassword,
  setUserId,
  setUsername,
  username,
}) {
  const handleUsernameInput = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordInput = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      username,
      password,
    }
    const url = `https://persona.api.ksfmedia.fi/v1/login`
    axios.post(url, user)
      .then(response => {
        if (response.status === 200) {
          setUserId(response.data.uuid)
          setAuthToken(response.data.token)
        } else {
          console.log(response.data.error)
        }
      })
      .catch(error => {
        console.log(error.response.data.error)
      })
  }

  return (
    <div className="mb-12">
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
          onChange={handleUsernameInput}
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
          onChange={handlePasswordInput}
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
