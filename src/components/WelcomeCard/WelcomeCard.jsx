import styles from './WelcomeCard.module.css';

export default function WelcomeCard({ user, onLogout }) {
  const displayName = user.username || user.name || 'User';

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          👤
        </div>
        <h2 className={styles.title}>
          Welcome back!
        </h2>
        <p className={styles.name}>
          {displayName}
        </p>
        <p className={styles.email}>
          {user.email}
        </p>
        <button
          onClick={onLogout}
          className={styles.logoutButton}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

