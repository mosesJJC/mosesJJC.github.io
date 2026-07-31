/* Color Palette Variables: Black, White, & Blue Highlights */
:root {
    --bg-color: #0f0f11;
    --card-bg: #18181b;
    --text-color: #ffffff;
    --text-muted: #a1a1aa;
    --accent-blue: #0074e4;
    --accent-blue-hover: #1a85ff;
    --border-color: #27272a;
    --dropdown-bg: rgba(24, 24, 27, 0.85); /* Transparent hue effect */
}

/* Light Theme Override Class */
body.light-mode {
    --bg-color: #f4f4f5;
    --card-bg: #ffffff;
    --text-color: #09090b;
    --text-muted: #52525b;
    --accent-blue: #0066cc;
    --accent-blue-hover: #0052a3;
    --border-color: #e4e4e7;
    --dropdown-bg: rgba(255, 255, 255, 0.9);
}

/* Global Styles */
body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
    scroll-behavior: smooth;
}

/* Epic Games Style Header */
.epic-header {
    background-color: var(--card-bg);
    border-bottom: 2px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-brand {
    font-weight: 900;
    font-size: 1.25rem;
    letter-spacing: 1px;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

.nav-item {
    color: var(--text-muted);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: color 0.2s ease;
}

.nav-item:hover {
    color: var(--accent-blue);
}

/* Epic Games Style Buttons & Dropdown */
.epic-btn {
    background-color: transparent;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: 0.85rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    display: inline-block;
}

.epic-btn:hover {
    border-color: var(--accent-blue);
    background-color: rgba(0, 116, 228, 0.1);
}

.primary-btn {
    background-color: var(--accent-blue);
    border-color: var(--accent-blue);
    color: white;
}

.primary-btn:hover {
    background-color: var(--accent-blue-hover);
}

/* Dropdown Menu with Transparent Hue */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: var(--dropdown-bg);
    backdrop-filter: blur(10px); /* Glassmorphism transparency hue */
    min-width: 160px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    z-index: 1;
}

.dropdown-content a {
    color: var(--text-color);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 0.85rem;
}

.dropdown-content a:hover {
    background-color: var(--accent-blue);
    color: white;
}

.dropdown:hover .dropdown-content {
    display: block;
}

/* Sections Layout */
.content-section {
    padding: 4rem 2rem;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.content-section h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
}

.hero-section {
    padding: 6rem 2rem;
    text-align: center;
    background: radial-gradient(circle at center, rgba(0, 116, 228, 0.15) 0%, transparent 70%);
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

/* Cards & Grid Systems */
.card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: left;
}

.team-grid, .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.gallery-item {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-weight: bold;
    color: var(--text-muted);
}

/* Working Text Boxes / Contact Form Styling */
.form-card input, .form-card textarea {
    width: 100%;
    padding: 0.75rem;
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    border-radius: 4px;
    margin-top: 0.5srem;
    box-sizing: border-box;
    font-family: inherit;
}

.input-group {
    margin-bottom: 1.25rem;
}

.input-group label {
    display: block;
    font-size: 0.85rem;
    font-weight: bold;
    color: var(--text-muted);
}

.feedback-text {
    margin-top: 1rem;
    font-weight: bold;
    color: var(--accent-blue);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

/* Footer */
footer {
    text-align: center;
    padding: 2rem;
    background-color: var(--card-bg);
    border-top: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 0.85rem;
}
