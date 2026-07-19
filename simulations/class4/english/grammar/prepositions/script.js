
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Study With Prakash - How to Write Answers from a Passage</title>
  <style>
    :root {
      --primary: #1e3a8a; /* Deep Royal Blue */
      --primary-light: #3b82f6; /* Blue-500 */
      --accent: #d97706; /* Amber-600 */
      --success: #059669; /* Emerald-600 */
      --danger: #dc2626; /* Red-600 */
      --bg-gradient: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
      --card-bg: #ffffff;
      --text-main: #1f2937;
      --text-muted: #4b5563;
      --shadow: 0 10px 25px -5px rgba(30, 58, 138, 0.1), 0 8px 10px -6px rgba(30, 58, 138, 0.1);
      --font-family: 'Noto Sans', 'Noto Sans Devanagari', system-ui, -apple-system, sans-serif;
    }

    .high-contrast {
      --primary: #000080;
      --primary-light: #0000ff;
      --accent: #ffaa00;
      --success: #008000;
      --danger: #ff0000;
      --bg-gradient: linear-gradient(135deg, #000000 0%, #111111 100%);
      --card-bg: #1c1c1c;
      --text-main: #ffffff;
      --text-muted: #dddddd;
      --shadow: 0 0 15px rgba(255, 255, 255, 0.2);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: var(--font-family);
      -webkit-tap-highlight-color: transparent;
    }

    body {
      background: var(--bg-gradient);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      transition: background 0.3s, color 0.3s;
    }

    /* HEADER */
    header {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      position: sticky;
      top: 0;
      z-index: 100;
      transition: background 0.3s;
    }

    .high-contrast header {
      background: rgba(28, 28, 28, 0.95);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-container {
      background: var(--primary);
      color: white;
      font-weight: 800;
      padding: 8px 14px;
      border-radius: 12px;
      font-size: 1.1rem;
      box-shadow: 0 4px 6px rgba(30, 58, 138, 0.2);
    }

    .brand-title {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--primary);
    }
    
    .channel-tag {
      color: var(--accent);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
    }

    .controls-top {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    button.btn-header {
      background: var(--card-bg);
      border: 2px solid var(--primary);
      color: var(--primary);
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
      min-height: 44px;
    }

    button.btn-header:hover {
      background: var(--primary);
      color: white;
      transform: translateY(-2px);
    }

    /* GAMIFICATION BAR */
    .gamification-bar {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255, 255, 255, 0.5);
      padding: 6px 14px;
      border-radius: 15px;
      font-size: 0.9rem;
      font-weight: bold;
    }
    .high-contrast .gamification-bar {
      background: rgba(255, 255, 255, 0.1);
    }

    .xp-badge {
      background: var(--accent);
      color: white;
      padding: 2px 8px;
      border-radius: 10px;
      font-weight: 800;
    }

    .badge-unlocked {
      display: flex;
      align-items: center;
      gap: 4px;
      color: var(--success);
    }

    /* 5E NAVIGATION TABS */
    .nav-tabs {
      display: flex;
      justify-content: center;
      background: var(--card-bg);
      padding: 8px;
      margin: 15px auto;
      border-radius: 30px;
      max-width: 900px;
      width: 95%;
      box-shadow: var(--shadow);
      gap: 5px;
    }

    .tab-btn {
      flex: 1;
      border: none;
      background: transparent;
      padding: 12px 8px;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 25px;
      cursor: pointer;
      color: var(--text-muted);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      min-height: 52px;
      justify-content: center;
    }

    .tab-btn span.tab-icon {
      font-size: 1.2rem;
    }

    .tab-btn span.tab-label {
      font-size: 0.8rem;
    }

    .tab-btn.active {
      background: var(--primary);
      color: white;
      box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
    }

    /* MAIN CONTAINER */
    main {
      flex: 1;
      max-width: 1200px;
      width: 95%;
      margin: 0 auto 40px auto;
      display: flex;
      flex-direction: column;
    }

    .screen {
      display: none;
      animation: fadeIn 0.4s ease-out forwards;
    }

    .screen.active {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* CARDS & LAYOUT */
    .grid-2 {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 24px;
    }

    @media (max-width: 850px) {
      .grid-2 {
        grid-template-columns: 1fr;
      }
      .nav-tabs {
        border-radius: 15px;
        flex-wrap: wrap;
      }
      .tab-btn {
        flex: unset;
        width: 30%;
      }
    }

    .card {
      background: var(--card-bg);
      border-radius: 20px;
      padding: 24px;
      box-shadow: var(--shadow);
      border: 1px solid rgba(255,255,255,0.4);
      transition: background 0.3s, border 0.3s;
    }

    .high-contrast .card {
      border: 2px solid white;
    }

    h2 {
      color: var(--primary);
      font-size: 1.8rem;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    h3 {
      font-size: 1.3rem;
      margin-bottom: 8px;
      color: var(--text-main);
    }

    p {
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 15px;
      font-size: 1.05rem;
    }

    /* SCREEN 1: HOOK (ENGAGE) */
    .hook-hero {
      text-align: center;
      padding: 40px 20px;
    }

    .hook-title {
      font-size: 2.5rem;
      font-weight: 900;
      color: var(--primary);
      margin-bottom: 15px;
      animation: pulse 2.5s infinite alternate;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      100% { transform: scale(1.02); }
    }

    .nepal-context-box {
      background: #eff6ff;
      border-left: 6px solid var(--primary-light);
      padding: 20px;
      border-radius: 12px;
      margin: 25px 0;
      text-align: left;
    }
    .high-contrast .nepal-context-box {
      background: #001133;
      border-left: 6px solid var(--primary-light);
    }

    .prediction-area {
      background: var(--card-bg);
      border: 2px dashed var(--primary-light);
      border-radius: 15px;
      padding: 25px;
      margin-top: 25px;
    }

    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin-top: 15px;
    }

    .btn-option {
      background: var(--card-bg);
      border: 2px solid #e5e7eb;
      padding: 15px;
      border-radius: 12px;
      font-size: 1.05rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      text-align: left;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .btn-option:hover {
      border-color: var(--primary);
      background: #eff6ff;
    }

    .btn-option.selected {
      border-color: var(--primary);
      background: var(--primary);
      color: white;
    }

    /* SCREEN 2: EXPLORE (THE SCANNING & MORPHING LAB) */
    .explore-panel {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .passage-container {
      background: #fafafa;
      border: 2px solid #e5e7eb;
      border-radius: 15px;
      padding: 20px;
      position: relative;
    }
    .high-contrast .passage-container {
      background: #111;
      border-color: white;
    }

    .passage-title {
      font-size: 1.1rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--primary);
      margin-bottom: 12px;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 6px;
    }

    .passage-text {
      font-size: 1.15rem;
      line-height: 1.8;
      color: var(--text-main);
    }

    /* Interactive scanning sentences */
    .scan-sentence {
      cursor: pointer;
      padding: 2px 4px;
      border-radius: 4px;
      transition: all 0.2s;
      background: transparent;
      display: inline;
    }

    .scan-sentence:hover {
      background: #fef08a; /* Soft Yellow Hover */
      color: black;
    }

    .scan-sentence.active-clue {
      background: #fef08a; /* Highlight Yellow */
      border-bottom: 2px dashed #ca8a04;
      color: black;
      font-weight: bold;
    }

    /* Target Question Container */
    .question-banner {
      background: var(--primary);
      color: white;
      padding: 15px 20px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }

    /* MORPHING LAB */
    .morph-visualizer {
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 15px;
      padding: 20px;
    }
    .high-contrast .morph-visualizer {
      background: #181818;
      border-color: white;
    }

    .morph-step {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px dashed #cbd5e1;
      animation: slideIn 0.3s ease-out forwards;
    }

    .morph-step:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .step-header {
      font-size: 0.85rem;
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .step-content {
      font-size: 1.15rem;
      font-weight: 700;
      padding: 10px 14px;
      border-radius: 8px;
    }

    .step-badge {
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      color: white;
      font-weight: bold;
    }

    .btn-morph-action {
      background: var(--accent);
      color: white;
      font-size: 1.1rem;
      font-weight: bold;
      border: none;
      padding: 12px 24px;
      border-radius: 25px;
      cursor: pointer;
      width: 100%;
      transition: all 0.2s;
      margin-top: 15px;
      min-height: 48px;
    }

    .btn-morph-action:hover {
      background: #b45309;
      transform: translateY(-2px);
    }

    .btn-morph-action:disabled {
      background: #cbd5e1;
      color: #94a3b8;
      cursor: not-allowed;
      transform: none;
    }

    /* SCREEN 3: EXPLAIN (RULES OF THE GAME) */
    .explain-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .explain-card {
      border-top: 6px solid var(--primary-light);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 280px;
    }

    .rule-icon {
      font-size: 2.5rem;
      margin-bottom: 12px;
    }

    .rule-example-box {
      background: #f1f5f9;
      padding: 12px;
      border-radius: 10px;
      margin-top: 15px;
      font-size: 0.95rem;
    }
    .high-contrast .rule-example-box {
      background: #333;
    }

    /* SCREEN 4: PRACTICE (QUIZ) */
    .quiz-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .quiz-question {
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .quiz-options {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .quiz-opt-btn {
      background: var(--card-bg);
      border: 2px solid #e5e7eb;
      padding: 16px;
      border-radius: 12px;
      text-align: left;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.2s;
      font-weight: 600;
    }

    .quiz-opt-btn:hover {
      border-color: var(--primary-light);
      background: #eff6ff;
    }

    .quiz-opt-btn.correct {
      background: #d1fae5;
      border-color: var(--success);
      color: #065f46;
    }

    .quiz-opt-btn.wrong {
      background: #fee2e2;
      border-color: var(--danger);
      color: #991b1b;
    }

    .feedback-box {
      margin-top: 20px;
      padding: 15px;
      border-radius: 10px;
      display: none;
      animation: fadeIn 0.3s;
    }

    /* SCREEN 5: CHALLENGE */
    .challenge-card {
      border: 2px solid var(--accent);
      background: linear-gradient(to bottom right, #ffffff, #fffbeb);
      position: relative;
      overflow: hidden;
    }
    .high-contrast .challenge-card {
      background: #111;
      border-color: var(--accent);
    }

    .challenge-card::before {
      content: '📝';
      position: absolute;
      right: 15px;
      top: 15px;
      font-size: 4rem;
      opacity: 0.15;
    }

    /* DIALOGS / POPUPS */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.6);
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .overlay.active {
      opacity: 1;
      pointer-events: auto;
    }

    .modal {
      background: var(--card-bg);
      border-radius: 20px;
      max-width: 500px;
      width: 90%;
      padding: 30px;
      text-align: center;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);
      transform: scale(0.9);
      transition: transform 0.3s ease;
    }

    .overlay.active .modal {
      transform: scale(1);
    }

    .modal-icon {
      font-size: 4rem;
      margin-bottom: 15px;
    }

    .btn-action {
      background: var(--primary);
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 30px;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      margin-top: 20px;
      box-shadow: 0 4px 6px rgba(30, 58, 138, 0.2);
    }

    .btn-action:hover {
      background: var(--primary-light);
    }

    /* FOOTER */
    footer {
      text-align: center;
      padding: 20px;
      background: rgba(255,255,255,0.8);
      font-size: 0.9rem;
      font-weight: 500;
      margin-top: auto;
    }
    .high-contrast footer {
      background: #111;
    }

    .flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .badge {
      padding: 4px 10px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.8rem;
    }

    .badge-blue { background: #dbeafe; color: #1e3a8a; }
    .badge-amber { background: #fef3c7; color: #b45309; }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header>
    <div class="brand">
      <div class="logo-container">SwP</div>
      <div>
        <div class="brand-title">Study With Prakash</div>
        <div class="channel-tag" id="tag-sub">Nepal CDC English Simulator</div>
      </div>
    </div>

    <!-- GAMIFICATION AND SETTINGS -->
    <div class="controls-top">
      <div class="gamification-bar">
        <span>⭐ <span id="xp-val">0</span> XP</span>
        <span class="badge-unlocked" id="badge-alert">🏅 <span id="badge-name">Beginner</span></span>
      </div>
      <button class="btn-header" id="lang-btn" onclick="toggleLanguage()">
        🇳🇵 नेपाली
      </button>
      <button class="btn-header" id="contrast-btn" onclick="toggleContrast()" aria-label="Contrast Toggle">
        🌓
      </button>
    </div>
  </header>

  <!-- 5E NAVIGATION TABS -->
  <nav class="nav-tabs" aria-label="Simulation Stage Navigation">
    <button class="tab-btn active" onclick="switchTab(0)" id="tab-0">
      <span class="tab-icon">🪝</span>
      <span class="tab-label" id="lbl-tab-0">Hook</span>
    </button>
    <button class="tab-btn" onclick="switchTab(1)" id="tab-1">
      <span class="tab-icon">🔍</span>
      <span class="tab-label" id="lbl-tab-1">Explore</span>
    </button>
    <button class="tab-btn" onclick="switchTab(2)" id="tab-2">
      <span class="tab-icon">💡</span>
      <span class="tab-label" id="lbl-tab-2">Explain</span>
    </button>
    <button class="tab-btn" onclick="switchTab(3)" id="tab-3">
      <span class="tab-icon">📝</span>
      <span class="tab-label" id="lbl-tab-3">Practice</span>
    </button>
    <button class="tab-btn" onclick="switchTab(4)" id="tab-4">
      <span class="tab-icon">🏆</span>
      <span class="tab-label" id="lbl-tab-4">Challenge</span>
    </button>
  </nav>

  <!-- MAIN SCENE CONTAINER -->
  <main>
    
    <!-- SCREEN 1: HOOK (ENGAGE) -->
    <div id="screen-0" class="screen active">
      <div class="hook-hero card">
        <h1 class="hook-title" id="hk-title">Secrets of English: How to Answer Passage Questions</h1>
        <p id="hk-subtitle">Stop losing marks by copy-pasting directly! Let's master the art of writing flawless answers from any passage.</p>
        
        <!-- Local Nepal Context -->
        <div class="nepal-context-box">
          <h3 id="hk-np-heading">🇳🇵 The Copy-Paste Trap in Examinations</h3>
          <p id="hk-np-body">Have you ever got feedback from your teacher saying: <i>"Don't start your answer with 'Because'!"</i> or <i>"Your sentence is incomplete!"</i>? Many students in Nepal simply copy and paste exact sentences from their textbook passages, losing easy grammar and comprehension marks. Let's learn how to edit and build beautiful sentences instead!</p>
        </div>

        <!-- Interactive Prediction Activity -->
        <div class="prediction-area">
          <h3 id="hk-pred-q">Your Prediction Challenge:</h3>
          <p id="hk-pred-desc">Look at this question: <b>"Why did Anita go to Pokhara?"</b><br>Which of these options is the most grammatically perfect way to start your answer?</p>
          <div class="options-grid">
            <button class="btn-option" onclick="makePrediction('because')" id="opt-because">
              <span>❌</span> <span>"Because she wanted to visit..."</span>
            </button>
            <button class="btn-option" onclick="makePrediction('to')" id="opt-to">
              <span>⚠️</span> <span>"To visit Phewa Lake..."</span>
            </button>
            <button class="btn-option" onclick="makePrediction('anita')" id="opt-anita">
              <span>✅</span> <span>"Anita went to Pokhara to visit..."</span>
            </button>
          </div>
          <div id="prediction-feedback" class="feedback-box" style="margin-top:20px;"></div>
        </div>
      </div>
    </div>

    <!-- SCREEN 2: EXPLORE (SCANNING & MORPHING LAB) -->
    <div id="screen-1" class="screen">
      <div class="grid-2">
        
        <!-- Interactive Passage Scanner -->
        <div class="explore-panel">
          <div class="question-banner">
            <span>❓</span>
            <span id="target-question">Target Question: Why did Pasang visit Namche Bazaar?</span>
          </div>

          <div class="passage-container card">
            <div class="passage-title" id="p-title">A Journey to Everest Region</div>
            <div class="passage-text" id="p-body">
              <span class="scan-sentence" id="s1" onclick="scanSentence(1)">Pasang was a smart young boy from Solukhumbu.</span> 
              <span class="scan-sentence" id="s2"
