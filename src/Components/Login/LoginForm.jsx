import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Forms/Input'
import { Button } from '../Forms/Button'

export const LoginForm = () => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(e){
    e.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })

    .then(res => {
      console.log(res)
      return res.json()
    })

    .then(json => {
      console.log(json)
      return json
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
       
      <Input label="Usuário" type="text" name={username}/>

      <Input label="Senha" type="password" name={password}/>

      <Button>Entrar</Button>

      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </div>
  )
}
