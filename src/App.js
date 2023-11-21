
import React from 'react';
import './App.css';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {

  const [users, setUsers] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [searchValue, setSearchValue] = React.useState('')
  const [invites, setInvites] = React.useState([])
  const [success, setSuccess] = React.useState(false)



  React.useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data)
    }).catch(err => {
      console.warn(err)
      alert('Ошибка при получении пользователей')
    }).finally(() => setLoading(false))
  }, [])

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }

  const stateSuccess = () => {
    setSuccess(true)
  }

  return (
    <div className="App">
      {
        success ? (<Success count={invites.length}/>)
          :
          (<Users invites={invites}
            onClickInvite={onClickInvite}
            onChangeSearch={onChangeSearch}
            searchValue={searchValue}
            items={users}
            isLoading={isLoading}
            stateSuccess={stateSuccess}
          />)
        }
    </div>
  );
}

export default App;
