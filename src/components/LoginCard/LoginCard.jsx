import FormFields from '../FormFields';
import SubmitButton from '../SubmitButton';
import styles from './LoginCard.module.css';

export default function LoginCard({ state, formAction }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            🔐
          </div>
          <h1 className={styles.title}>
            Welcome Back
          </h1>
          <p className={styles.subtitle}>
            Sign in to your account to continue
          </p>
        </div>

        <form action={formAction}>
          <FormFields isSuccess={false} />
          {state.status === 'error' && (
            <div className={styles.errorMessage}>
              <span>⚠️</span>
              <span>{state.message}</span>
            </div>
          )}
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}


