import { useActionState, useState, useEffect } from 'react';
import { loginAction } from '../../actions/loginAction.js';
import { WelcomeCard, LoginCard } from '../index.js';
import '../../styles/global.css';

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, {
    status: 'idle',
    message: '',
    user: null
  });

  // Отдельный state для хранения авторизованного пользователя
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Обновляем loggedInUser при успешном логине
  useEffect(() => {
    if (state.status === 'success' && state.user) {
      setLoggedInUser(state.user);
    }
  }, [state.status, state.user]);

  // Функция для выхода - сбрасывает состояние без перезагрузки
  const handleLogout = () => {
    setLoggedInUser(null);
  };

  // Если пользователь авторизован
  if (loggedInUser) {
    return <WelcomeCard user={loggedInUser} onLogout={handleLogout} />;
  }

  return <LoginCard state={state} formAction={formAction} />;
}

