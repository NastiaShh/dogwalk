import React, { useState } from 'react';
import Request from '../types/Request'

type RequestsProps = {
  onAddRequest?: (newRequest: Request) => void
}

function ApplicationForm({ onAddRequest }: RequestsProps): JSX.Element {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(false)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };


  return (
    <form>
      <div>
        <h1>Записаться на консультацию</h1>
        <input
          type="text"
          placeholder="Имя"
          aria-label="Имя"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="tel"
          placeholder="+7"
          aria-label="+7"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <input
          type="email"
          placeholder="email"
          aria-label="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" className="btn btn-primary">
          добавить
        </button>
      </div>
    </form>
  )
}

export default ApplicationForm
