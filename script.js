/* CSS Variables to easily handle Light and Dark Mode themes */
:root {
    --bg-color: #f4f7f6;
    --text-color: #333333;
    --card-bg: #ffffff;
    --nav-bg: linear-gradient(135deg, #6e8efb, #a777e3);
    --primary-btn: #6e8efb;
    --primary-btn-hover: #5c7cfa;
}

/* Dark mode theme variables */
body.dark-mode {
    --bg-color: #1a1a1a;
    --text-color: #f4f7f6;
    --card-bg: #2d2d2d;
    --nav-bg: linear-gradient(135deg, #2c3e50, #4ca1af);
    --primary-btn: #4ca1af;
    --primary-btn-hover: #3a8b96;
}

/* Global styles with smooth transitions for theme switching */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Header & Navigation Bar Styling */
header {
    background: var(--nav-bg);
    color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 1rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
}

.nav-links a:hover {
    opacity: 0.8;
}

/* Search bar and button layout inside nav */
.nav-actions {
    display: flex;
    gap: 10px;
    align-items: center;
}

#searchInput {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.2);
    color: white;
    outline: none;
}

#searchInput::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

/* Buttons styling */
#darkModeToggle, .card button {
    background-color: var(--primary-btn);
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 0.95rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#darkModeToggle:hover, .card button:hover {
    background-color: var(--primary-btn-hover);
}

/* Main content layout */
main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}

.card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
    transition: background-color 0.3s ease;
}

.card button {
    margin-top: 15px;
    width: 100%;
}

/* Footer styling */
footer {
    background-color: var(--card-bg);
    border-top: 1px solid rgba(0,0,0,0.05);
    text-align: center;
    padding: 1rem;
    font-size: 0.9rem;
    transition: background-color 0.3s ease;
}
