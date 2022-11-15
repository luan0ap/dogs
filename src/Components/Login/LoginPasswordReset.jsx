import React from 'react'
import { PASSWORD_RESET } from '../../Api'
import { useForm } from '../../Hooks/useForm'
import { useFetch } from '../../Hooks/useFetch'
import { Button } from '../Forms/Button'
import { Input } from '../Forms/Input'
import { Error } from '../Help/Error'
import { useNavigate } from 'react-router-dom'
import { Head } from '../Help/Head'

export const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const password = useForm()
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const { res } = await request(url, options)
      if (res.ok) navigate('/login')
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Resete sua senha"/>
      <h1 className='title'>Resete a sua senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Digite sua nova senha"
          type="password" name="password" {...password} />
        {loading ? <Button disebled>Resetando</Button> :
          <Button>Resetar</Button>}
      </form>
      <Error error={error} />
    </section>
  )
}
