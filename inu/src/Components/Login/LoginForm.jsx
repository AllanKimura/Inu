import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        })
        .then((r) => {
            console.log(r, username, password);
            return r.json();
        })
        .then((json) => {
            console.log(json)
        });
    }
  return (
    <div>
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="Usuário"/>
                <input 
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                />
                <input 
                type="text"
                placeholder="Senha"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                />
                <button>Entrar</button>
            </form>
        </section>
        <Link to="/login/criar">Cadastro</Link>
    </div>
  )
}

export default LoginForm