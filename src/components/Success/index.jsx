import React from 'react'
import './style.css'
export const Success = ({ count }) => {
  return (
    <div className='success-block'>
      <img alt='qwe' src='./img/success.png' />
      <h3>Успешно</h3>
      <p>Всем {count} пользователям отправлено приглашение</p>
        <button onClick={() => window.location.reload()} className='sent-invite-btn'>Назад</button>
    </div>
  )
}
