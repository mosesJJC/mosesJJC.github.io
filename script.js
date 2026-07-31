/* Color Palette: Progressive Metal Slate with Mild Light Blue Highlights */
:root {
    --bg-color: #0c0f14;
    --card-bg: #131821;
    --text-color: #e2e8f0;
    --text-muted: #94a3b8;
    --accent-blue: #38bdf8;       /* Mild clean light blue */
    --accent-blue-hover: #7dd3fc;
    --border-color: #1e293b;
    --dropdown-bg: rgba(19, 24, 33, 0.85); /* Glassmorphism transparent hue */
    --glow-shadow: rgba(56, 189, 248, 0.15);
}

/* Light Theme Override Class */
body.light-mode {
    --bg-color: #f8fafc;
    --card-bg: #ffffff;
    --text-color: #0f172a;
    --text-muted: #64748b;
    --accent-blue: #0284c7;
    --accent-blue-hover: #0369a1;
    --border-color: #e2e8f0;
    --dropdown-bg: rgba(255, 255, 255, 0.9);
    --glow-shadow: rgba(2, 132, 199, 0.1);
}

/* Global Styles & Animations */
body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

/* Keyframe Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease forwards;
}

.animate-slide-up {
    animation: slideUp 0.8s ease forwards;
}

/* Header Styling */
.guitar-header {
    background-color: var(--card-bg);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2.5rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(8px);
}

.nav-brand {
    font-weight: 900;
    font-size: 1.35rem;
    letter-spacing: 2px;
}

.nav-brand .highlight {
    color: var(--accent-blue);
}

.nav-links {
    display: flex;
    gap: 2rem;
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

/* Custom Interactive Buttons */
.guitar-btn {
    background-color: transparent;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    padding: 0.6rem 1.2rem;
    font-weight: 600;
    font-size: 0.85rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.25s ease;
    text-decoration: none;
    display: inline-block;
}

.guitar-btn:hover {
    border-color: var(--accent-blue);
    background-color: var(--glow-shadow);
    transform: translateY(-2px);
}

.primary-btn {
    background-color: var(--accent-blue);
    border-color: var(--accent-blue);
    color: #0c0f14;
    font-weight: 700;
}

body.light-mode .primary-btn {
    color: #ffffff;
}

.primary-btn:hover {
    background-color: var(--accent-blue-hover);
    border-color: var(--accent-blue-hover);
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
    backdrop-filter: blur(12px);
    min-width: 180px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    z-index: 1;
    animation: fadeIn 0.3s ease;
}

.dropdown-content a {
    color: var(--text-color);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 0.85rem;
    transition: background-color 0.2s ease, color 0.2s ease;
}

.dropdown-content a:hover {
    background-color: var(--accent-blue);
    color: #0c0f14;
}

.dropdown:hover .dropdown-content {
    display: block;
}

/* Main Layout & Sections */
.content-section {
    padding: 5rem 2rem;
    max-width: 950px;
    margin: 0 auto;
    text-align: center;
}

.section-title {
    font-size: 2.25rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
}

.section-desc {
    color: var(--text-muted);
    margin-bottom: 3rem;
    font-size: 1rem;
}

.hero-section {
    padding: 7rem 2rem;
    text-align: center;
    background: radial-gradient(circle at center, var(--glow-shadow) 0%, transparent 70%);
}

.sub-badge {
    display: inline-block;
    color: var(--accent-blue);
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.hero-content h1 {
    font-size: 3.25rem;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-content p {
    color: var(--text-muted);
    font-size: 1.15rem;
    max-width: 600px;
    margin: 0 auto 2rem auto;
}

.hero-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

/* Cards & Layout Containers */
.card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 2.5rem;
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    text-align: left;
}

.about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 2rem;
    align-items: center;
}

.about-text p {
    line-height: 1.6;
    color: var(--text-muted);
    margin-bottom: 1rem;
}

.spec-sheet {
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    border-radius: 8px;
}

.spec-sheet h3 {
    font-size: 0.9rem;
    color: var(--accent-blue);
    margin-top: 0;
    margin-bottom: 1rem;
    letter-spacing: 1px;
}

.spec-sheet ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.spec-sheet li {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 0.75rem;
}

.spec-sheet li span {
    color: var(--text-color);
    font-weight: 600;
}

/* Gallery Rigs Grid */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.gallery-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease;
    text-align: left;
}

.gallery-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-blue);
}

.gallery-placeholder {
    height: 160px;
    background: linear-gradient(135deg, var(--bg-color), var(--border-color));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-blue);
    font-weight: bold;
    font-size: 0.9rem;
    letter-spacing: 1px;
    border-bottom: 1px solid var(--border-color);
}

.gallery-info {
    padding: 1.5rem;
}

.gallery-info h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
}

.gallery-info p {
    margin: 0;
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.5;
}

/* Social Grid Links */
.social-grid {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.social-card {
    padding: 1rem 2rem;
    font-size: 0.95rem;
}

/* Contact Form Text Boxes */
.form-card input, .form-card textarea {
    width: 100%;
    padding: 0.85rem;
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    border-radius: 6px;
    margin-top: 0.4rem;
    box-sizing: border-box;
    font-family: inherit;
    transition: border-color 0.2s ease;
}

.form-card input:focus, .form-card textarea:focus {
    outline: none;
    border-color: var(--accent-blue);
}

.input-group {
    margin-bottom: 1.5rem;
}

.input-group label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-muted);
}

.feedback-text {
    margin-top: 1rem;
    font-weight: 600;
    color: var(--accent-blue);
}

/* Footer */
footer {
    text-align: center;
    padding: 2.5rem;
    background-color: var(--card-bg);
    border-top: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 0.85rem;
}
