import React from 'react'
import './style.css'
import { Skeleton } from './Skeleton'
import { User } from './User'


export const Users = ({ items, isLoading, searchValue, onChangeSearch, invites, onClickInvite, stateSuccess }) => {

  return (
    <div className='wrapper'>
      <div className='input'>
        <input value={searchValue} onChange={onChangeSearch} type='text' placeholder='Найти пользователя..' />
      </div>
      {
        isLoading ? (
          <div className='skeleton-list'>
            <Skeleton />

          </div>
        ) : (
          <ul className='users-list'>
            {
              items.filter(obj => {
                const fullName = (obj.first_name + " " + obj.last_name).toLowerCase()
                return fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())

              }).map((obj) => <User onCLickInvite={onClickInvite} isInvited={invites.includes(obj.id)} key={obj.id} {...obj} />)
            }
          </ul>
        )
      }
      {
        invites.length > 0 && (
          <button onClick={stateSuccess} className='send-invite-btn'>Отправить приглашение</button>
        )
      }
    </div>
  )
}
