import { validateEmail } from '../utils/validation.js';
import { fetchUserData } from '../utils/api.js';

// Action функция для логина
export async function loginAction(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  // Валидация: проверяем, что все поля заполнены
  if (!email || !password) {
    return {
      status: 'error',
      message: 'Please fill in all fields',
      user: null
    };
  }

  // Валидация email
  if (!validateEmail(email)) {
    return {
      status: 'error',
      message: 'Please enter a valid email address',
      user: null
    };
  }

  // Если валидация прошла успешно, выполняем API-запрос
  try {
    const user = await fetchUserData();
    return {
      status: 'success',
      message: 'Login successful',
      user: user
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Failed to load user data. Please try again.',
      user: null
    };
  }
}

