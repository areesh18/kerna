import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      title="Toggle theme"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '6px 10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'all 0.3s ease',
        fontSize: '0.85rem',
      }}
    >
      <span style={{ fontSize: '1rem' }}>{theme === 'dark' ? '☀️' : '🌙'}</span>
    </button>
  )
}

export default ThemeToggle