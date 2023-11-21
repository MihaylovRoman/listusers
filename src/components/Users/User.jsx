import React from 'react'

export const User = ({id, email, first_name, last_name, avatar, onCLickInvite, isInvited}) => {
    return (
        <li className='user_point'>
            <div className='user_container'>
                <img alt='ava' className='avatar' src={avatar}/>
                <div className='name-tag'>
                    <h3>{first_name} {last_name}</h3>
                    <p>{email}</p>
                </div>
            </div>
            <img onClick={() => onCLickInvite(id)} alt='act' className='action' src={`../img/${isInvited ? 'minus' : 'plus'}.png`}/>
        </li>
    )
}
