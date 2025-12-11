import { useFormStatus } from 'react-dom';
import styles from './SubmitButton.module.css';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={styles.button}
    >
      {pending ? (
        <span className={styles.buttonContent}>
          <span className={styles.spinner} />
          Logging in…
        </span>
      ) : (
        'Login'
      )}
    </button>
  );
}

