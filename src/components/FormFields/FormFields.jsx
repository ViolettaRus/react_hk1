import { useFormStatus } from 'react-dom';
import styles from './FormFields.module.css';

export default function FormFields({ isSuccess }) {
  const { pending } = useFormStatus();
  const isFormDisabled = pending || isSuccess;

  return (
    <>
      <div className={styles.fieldGroup}>
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isFormDisabled}
          placeholder="Enter your email"
          className={styles.input}
        />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          disabled={isFormDisabled}
          placeholder="Enter your password"
          className={styles.input}
        />
      </div>
    </>
  );
}

