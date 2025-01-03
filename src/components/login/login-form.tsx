import {useAppDispatch} from '../../store/hooks.ts';
import {FormEvent, useState} from 'react';
import {login} from '../../store/auth-actions.ts';
import {AuthRequest} from '../../types/auth-request.ts';

export function LoginForm() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<AuthRequest>({
    email: '',
    password: '',
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.email.length > 0 && formData.password.length > 0) {
      dispatch(login(formData));
    }
  };

  return (
    <form onSubmit={onSubmit} className="login__form form">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Email"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Password"
          required
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}
