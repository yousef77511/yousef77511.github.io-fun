<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colorful Fun Web</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Comic+Neue:wght@700&display=swap">
    <style>
        /* Reset styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Global Styles */
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(45deg, #6a11cb, #2575fc);
            background-size: 400% 400%;
            color: #fff;
            text-align: center;
            padding: 20px;
            overflow-x: hidden;
            min-height: 100vh;
            animation: gradientBG 15s ease infinite;
            transition: all 0.5s;
        }

        @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
        }

        h1, h2 {
            margin-bottom: 20px;
            font-weight: 700;
        }

        h1 {
            font-size: 2.5rem;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        h2 {
            color: #ffcc00;
        }

        /* Container for content */
        .container {
            max-width: 1000px;
            margin: 40px auto;
            background: rgba(255, 255, 255, 0.15);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.5s;
        }

        /* Magic Buttons - Consistent Styling */
        .magic-btn {
            color: white;
            padding: 18px 36px;
            border: none;
            font-size: 22px;
            cursor: pointer;
            border-radius: 50px;
            transition: all 0.3s ease-in-out;
            font-weight: 700;
            margin: 20px 10px;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            background: linear-gradient(45deg, #ff00cc, #cc00ff, #00ccff);
            background-size: 200% 200%;
            animation: gradientPulse 3s ease infinite, float 4s ease-in-out infinite;
            transform-style: preserve-3d;
            perspective: 1000px;
        }

        .magic-btn:hover {
            animation: gradientPulseFast 1s ease infinite, floatFast 2s ease-in-out infinite;
            transform: scale(1.05) rotateY(10deg);
            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }

        .magic-btn::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                to bottom right,
                rgba(255,255,255,0.3) 0%,
                rgba(255,255,255,0) 60%
            );
            transform: rotate(30deg);
            transition: all 0.3s;
        }

        <!-- Confetti Canvas -->
    <canvas id="confetti-canvas" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 999; display: none;"></canvas>

    <script>
        // Create floating emoji background
        function createEmojiBackground() {
            const emojis = ['🌈', '✨', '🎨', '🎉', '🎊', '🎈', '🎁', '🎆', '🎇', '🦄', '🐶', '🐱', '🐻', '🐼', '🦊', '🐸', '🐵', '🦋', '🌸', '🌺', '🌻', '🌼', '🌞', '🌝', '🍭', '🍬', '🍫', '🍩', '🍪', '🧁', '🎂', '🍦', '🍨', '🍧', '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏓', '🎯', '🎮', '🎲', '♟️', '🎨', '🎭', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🪕', '🎻', '🚀', '🛸', '🛰️', '🧩', '🎠', '🎡', '🎢', '🚂', '🚲', '🛴', '🛵', '🏍️', '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛶', '🚤', '🛥️', '⛵', '🛳️', '🚢', '✈️', '🛫', '🛬', '🪂', '🚁', '🚟', '🚠', '🚡', '🛺', '🚜', '🏎️', '🏍️', '🛵', '🚲', '🦽', '🦼', '🛴', '🛹', '🛼', '🛷', '⛸️', '🥌', '🎣', '🏹', '🪃', '🥏', '🪀', '🪁', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳', '🪁', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳', '🪁'];
            const container = document.getElementById('emojiBackground');
            
            for (let i = 0; i < 30; i++) {
                const emoji = document.createElement('div');
                emoji.classList.add('emoji-bg');
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.left = `${Math.random() * 100}%`;
                emoji.style.animationDuration = `${15 + Math.random() * 30}s`;
                emoji.style.animationDelay = `${Math.random() * 15}s`;
                emoji.style.fontSize = `${20 + Math.random() * 30}px`;
                container.appendChild(emoji);
            }
        }

        .magic-btn:hover::before {
            animation: shine 1.5s infinite;
        }

        @keyframes gradientPulse {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        @keyframes gradientPulseFast {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        @keyframes floatFast {
            0%, 100% { transform: translateY(-5px); }
            50% { transform: translateY(5px); }
        }

        @keyframes shine {
            to {
                top: 100%;
                left: 100%;
            }
        }

        /* Challenge Button */
        .challenge-button {
            background: linear-gradient(45deg, #ff0066, #ff00cc);
            color: white;
            padding: 12px 25px;
            border: none;
            font-size: 18px;
            cursor: pointer;
            border-radius: 50px;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(255, 0, 102, 0.4);
            font-weight: 600;
            margin: 10px;
            position: fixed;
            bottom: 100px;
            right: 30px;
            z-index: 101;
        }

        .challenge-button:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(255, 0, 204, 0.6);
        }

        /* Dancing Party Overlay */
        .dancing-party {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #ff00cc, #00ffcc, #cc00ff, #ffcc00);
            background-size: 400% 400%;
            animation: gradientBG 5s ease infinite;
            z-index: 999;
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 3rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .dancing-text {
            font-size: 4rem;
            margin-bottom: 30px;
            animation: bounce 0.5s infinite alternate;
        }

        .dancing-people {
            font-size: 10rem;
            animation: dance 1s infinite;
        }

        @keyframes dance {
            0%, 100% { transform: rotate(-10deg); }
            50% { transform: rotate(10deg); }
        }

        @keyframes bounce {
            to { transform: translateY(-20px); }
        }

        /* List Styling */
        ul {
            list-style: none;
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
        }

        li {
            font-size: 1.2em;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            transition: all 0.3s;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            flex: 1 0 200px;
            max-width: 250px;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.1);
        }

        li:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 15px rgba(0,0,0,0.2);
        }

        /* Footer Styling - Cool Design */
        .footer {
            margin-top: 50px;
            padding: 50px 20px 30px;
            background: linear-gradient(135deg, rgba(106,17,203,0.8) 0%, rgba(37,117,252,0.8) 100%);
            color: white;
            font-size: 1em;
            border-radius: 30px 30px 0 0;
            text-align: center;
            backdrop-filter: blur(10px);
            border-top: 2px solid rgba(255,255,255,0.3);
            position: relative;
            overflow: hidden;
            box-shadow: 0 -10px 30px rgba(0,0,0,0.2);
        }

        .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, #ff00cc, #cc00ff, #00ccff, #ffcc00);
            background-size: 400% 400%;
            animation: gradientBG 5s ease infinite;
        }

        .footer-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            max-width: 1200px;
            margin: 0 auto 30px;
            gap: 30px;
        }

        .footer-section {
            flex: 1;
            min-width: 250px;
            padding: 20px;
            position: relative;
        }

        .footer-section h3 {
            color: #ffcc00;
            margin-bottom: 20px;
            font-size: 1.4em;
            position: relative;
            display: inline-block;
        }

        .footer-section h3::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 50px;
            height: 3px;
            background: #ffcc00;
            border-radius: 3px;
        }

        .footer-section p {
            margin: 15px 0;
            transition: all 0.3s;
        }

        .footer-section a {
            color: white;
            text-decoration: none;
            transition: all 0.3s;
            position: relative;
        }

        .footer-section a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: #ffcc00;
            transition: all 0.3s;
        }

        .footer-section a:hover {
            color: #ffcc00;
        }

        .footer-section a:hover::after {
            width: 100%;
        }

        .footer-bottom {
            padding-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
            font-size: 0.9em;
        }

        .footer-bottom p {
            margin: 10px 0;
        }

        /* Floating bubbles in footer */
        .bubble {
            position: absolute;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            pointer-events: none;
            animation: floatBubble 10s infinite ease-in-out;
        }

        @keyframes floatBubble {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0.5;
            }
            50% {
                transform: translateY(-50px) translateX(20px);
                opacity: 0.8;
            }
        }

        /* Bookmark Button */
        #bookmark {
            position: fixed;
            right: 30px;
            bottom: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(45deg, #ffcc00, #ff9500);
            color: #333;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 204, 0, 0.4);
            z-index: 100;
            transition: all 0.3s;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
        }

        #bookmark.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        #bookmark:hover {
            transform: scale(1.1) translateY(0);
            box-shadow: 0 8px 20px rgba(255, 204, 0, 0.6);
        }

        /* Magic Effects */
        .magic-sparkle {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            pointer-events: none;
            animation: sparkle 1s forwards;
        }

        @keyframes sparkle {
            0% {
                transform: translate(0, 0) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) scale(1);
                opacity: 0;
            }
        }

        /* Magic Text Effect */
        .magic-text {
            position: relative;
            display: inline-block;
        }

        .magic-text::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, #ff00cc, #cc00ff, #00ccff, #ffcc00);
            background-size: 300% 300%;
            z-index: -1;
            border-radius: 10px;
            animation: gradientBG 4s ease infinite;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .magic-text:hover::after {
            opacity: 0.5;
        }

        /* Moving Emojis */
        .emoji {
            display: inline-block;
            animation: emojiFloat 3s infinite ease-in-out;
        }

        @keyframes emojiFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(5deg); }
            50% { transform: translateY(0) rotate(0deg); }
            75% { transform: translateY(-5px) rotate(-5deg); }
        }

        /* Button Container */
        .button-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin: 30px 0;
        }

        /* Magic Button Special Effects */
        .magic-btn .sparkle {
            position: absolute;
            width: 20px;
            height: 20px;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            animation: buttonSparkle 1.5s infinite;
        }

        @keyframes buttonSparkle {
            0% {
                transform: scale(0) translate(0, 0);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: scale(1) translate(var(--sparkle-x), var(--sparkle-y));
                opacity: 0;
            }
        }

        /* Magic Button Inner Glow */
        .magic-btn .inner-glow {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50px;
            box-shadow: inset 0 0 15px rgba(255,255,255,0.3);
            opacity: 0;
            transition: opacity 0.3s;
        }

        .magic-btn:hover .inner-glow {
            opacity: 1;
        }
    </style>
</head>
<body>
    <!-- Main Container -->
    <div class="container">
        <h1>Welcome to Colorful Fun Web! <span class="emoji">🌈</span></h1>
        <p>Experience a vibrant world of interactive fun! <span class="emoji">🎨</span></p>
        
        <div class="button-container">
            <button class="magic-btn" onclick="showConfetti()">
                <span class="inner-glow"></span>
                Click for Magic! ✨
                <div class="sparkle" style="--sparkle-x: -20px; --sparkle-y: -20px;"></div>
                <div class="sparkle" style="--sparkle-x: 20px; --sparkle-y: -20px;"></div>
                <div class="sparkle" style="--sparkle-x: 0px; --sparkle-y: 20px;"></div>
            </button>
            <button class="magic-btn" onclick="activateSuperMagic()">
                <span class="inner-glow"></span>
                Super Magic! 🎇
                <div class="sparkle" style="--sparkle-x: -15px; --sparkle-y: -15px;"></div>
                <div class="sparkle" style="--sparkle-x: 15px; --sparkle-y: -15px;"></div>
                <div class="sparkle" style="--sparkle-x: 0px; --sparkle-y: 15px;"></div>
            </button>
        </div>
        
        <!-- HTML List -->
        <h2>What You'll Find Here:</h2>
        <ul>
            <li>Colorful Animations <span class="emoji">✨</span></li>
            <li>Interactive Elements <span class="emoji">👆</span></li>
            <li>Surprise Effects <span class="emoji">🎁</span></li>
            <li>Fun Games <span class="emoji">🎮</span></li>
            <li>Creative Tools <span class="emoji">🛠️</span></li>
            <li>Daily Challenges <span class="emoji">🏆</span></li>
        </ul>

        <!-- Special Links -->
        <div class="contact-section">
            <h2>Connect With Us:</h2>
            <div class="contact-methods">
                <p><span class="emoji">📧</span> <a href="mailto:yousefmohamedyousef111@gmail.com">yousefmohamedyousef111@gmail.com</a></p>
                <p><span class="emoji">📞</span> <a href="tel:+021551561366">+201551561366</a></p>
                <p><span class="emoji">🌐</span> <a href="https://maps.google.com" target="_blank">52 elgayar road</a></p>
            </div>
        </div>

        <!-- External Links -->
        <div class="external-links">
            <h2>Explore More:</h2>
            <p><a href="https://github.com/colorfulfun" target="_blank">Our GitHub Projects</a> <span class="emoji">💻</span></p>
            <p><a href="https://www.instagram.com/scrapyardvanity/" target="_blank">Instagram Gallery</a> <span class="emoji">📸</span></p>
        </div>

        <!-- Audio Control -->
        <h2>Enjoy Our Happy Tune! <span class="emoji">🎵</span></h2>
        <audio controls loop>
            <source src="elgayar-la-ya5tashi-made-with-Voicemod.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>

        <!-- Countdown Timer -->
        <div class="countdown">
            <p>Next Color Update In:</p>
            <p id="timer">Loading...</p>
        </div>
    </div>

    <!-- Challenge Button -->
    <button class="challenge-button" onclick="startDanceParty()">Challenge Me!</button>

    <!-- Bookmark Button -->
    <div id="bookmark" onclick="scrollToTop()">↑</div>

    <!-- Footer -->
    <footer class="footer">
        <!-- Floating bubbles -->
        <div class="bubble" style="width: 80px; height: 80px; top: 20%; left: 10%; animation-delay: 0s;"></div>
        <div class="bubble" style="width: 120px; height: 120px; top: 60%; left: 80%; animation-delay: 2s;"></div>
        <div class="bubble" style="width: 60px; height: 60px; top: 30%; left: 50%; animation-delay: 4s;"></div>
        <div class="bubble" style="width: 100px; height: 100px; top: 70%; left: 30%; animation-delay: 6s;"></div>
        
        <div class="footer-content">
            <div class="footer-section">
                <h3>Quick Links</h3>
                <p><a href="#features">Features</a></p>
                <p><a href="#gallery">Gallery</a></p>
                <p><a href="#testimonials">Testimonials</a></p>
            </div>
            <div class="footer-section">
                <h3>Resources</h3>
                <p><a href="#tutorials">Tutorials</a></p>
                <p><a href="#blog">Blog</a></p>
                <p><a href="#faq">FAQ</a></p>
            </div>
            <div class="footer-section">
                <h3>Legal</h3>
                <p><a href="#privacy">Privacy Policy</a></p>
                <p><a href="#terms">Terms of Service</a></p>
                <p><a href="#cookies">Cookie Policy</a></p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Colorful Fun Web | All Rights Reserved <span class="emoji">🎨</span></p>
            <p><a href="404.html">Visit our error 404 page</a></p>
        </div>
    </footer>

    <!-- Dancing Party Overlay -->
    <div class="dancing-party" id="dancingParty">
        <div class="dancing-text">CAN YOU DO THIS?!</div>
        <div class="dancing-people">💃🕺👯‍♀️🎉</div>
    </div>

    <!-- Confetti Canvas -->
    <canvas id="confetti-canvas" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 999; display: none;"></canvas>

    <script>
        // Dancing Party Function
        function startDanceParty() {
            const party = document.getElementById('dancingParty');
            party.style.display = 'flex';
            
            // Play party music
            const audio = new Audio('.mp3');
            
            audio.loop = true;
            audio.play();
            
            // Show for 5 seconds then hide
            setTimeout(() => {
                party.style.display = 'none';
                audio.pause();
            }, 5000);
        }

        // Countdown time
        var countdownDate = new Date();
        countdownDate.setDate(countdownDate.getDate() + 3);

        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countdownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = 
                `<span style="color: #ffcc00;">${days}</span>d ` + 
                `<span style="color: #ffaa00;">${hours}</span>h ` +
                `<span style="color: #ff8800;">${minutes}</span>m ` +
                `<span style="color: #ff6600;">${seconds}</span>s`;

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "COLOR UPDATE! 🎨";
                changeColorScheme();
                countdownDate = new Date();
                countdownDate.setDate(countdownDate.getDate() + 3);
                x = setInterval(arguments.callee, 1000);
            }
        }, 1000);

        function changeColorScheme() {
            const colors = [
                ['#6a11cb', '#2575fc'],
                ['#11998e', '#38ef7d'],
                ['#ff416c', '#ff4b2b'],
                ['#f46b45', '#eea849']
            ];
            
            const randomColors = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.background = `linear-gradient(45deg, ${randomColors[0]}, ${randomColors[1]})`;
            
            const notification = document.createElement('div');
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.left = '50%';
            notification.style.transform = 'translateX(-50%)';
            notification.style.backgroundColor = 'rgba(0,0,0,0.7)';
            notification.style.color = '#ffcc00';
            notification.style.padding = '15px 30px';
            notification.style.borderRadius = '50px';
            notification.style.zIndex = '1000';
            notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
            notification.textContent = 'Color scheme updated! 🎨';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.transition = 'all 0.5s';
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 500);
            }, 3000);
        }

        // Scroll to top/bottom functions
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            createScrollSparkles();
        }

        function scrollToBottom() {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            createScrollSparkles();
        }

        // Bookmark visibility based on scroll position
        window.addEventListener('scroll', function() {
            const bookmark = document.getElementById('bookmark');
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.scrollHeight;
            
            if (bodyHeight > windowHeight * 1.5) {
                bookmark.classList.add('visible');
                
                // Change bookmark icon based on scroll position
                if (scrollPosition > windowHeight / 2) {
                    bookmark.innerHTML = "↑";
                    bookmark.onclick = scrollToTop;
                } else {
                    bookmark.innerHTML = "↓";
                    bookmark.onclick = scrollToBottom;
                }
            } else {
                bookmark.classList.remove('visible');
            }
        });

        // Show confetti effect
        function showConfetti() {
            const canvas = document.getElementById('confetti-canvas');
            canvas.style.display = 'block';
            
            const confettiSettings = {
                target: 'confetti-canvas',
                max: 150,
                size: 1.5,
                animate: true,
                props: ['circle', 'square', 'triangle', 'line'],
                colors: [[255, 204, 0], [255, 149, 0], [255, 255, 255], [106, 17, 203]],
                clock: 25,
                rotate: true,
                start_from_edge: true,
                respawn: true
            };
            
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            
            setTimeout(() => {
                confetti.clear();
                canvas.style.display = 'none';
            }, 3000);
            
            // Play sound effect
            const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3');
            audio.play();
            
            // Show magic sparkles around the button
            createMagicSparkles(event);
            
            // Button press effect
            const btn = event.target;
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 200);
            
            // Create floating emoji effect
            createFloatingEmoji('✨', 15, btn);
        }

        // Super magic function
        function activateSuperMagic() {
            // Intense confetti
            const canvas = document.getElementById('confetti-canvas');
            canvas.style.display = 'block';
            
            confetti({
                particleCount: 500,
                spread: 180,
                origin: { y: 0.6 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
                shapes: ['circle', 'square', 'star'],
                scalar: 1.5
            });
            
            setTimeout(() => {
                canvas.style.display = 'none';
            }, 5000);
            
            // Animate all list items
            const listItems = document.querySelectorAll('li');
            listItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'scale(1.2)';
                    item.style.background = 'rgba(255,255,255,0.5)';
                    setTimeout(() => {
                        item.style.transform = '';
                        item.style.background = '';
                    }, 1000);
                }, index * 200);
            });
            
            // Create magic sparkles everywhere
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    createRandomSparkles();
                }, i * 100);
            }

            // photo danceing

           

            
            // Play magical sound
            const audio = new Audio('https://www.soundjay.com/misc/squeeze-toy-5.mp3');
            audio.play();
            
            // Change background color rapidly
            let changes = 0;
            const colorInterval = setInterval(() => {
                changeColorScheme();
                changes++;
                if (changes >= 5) {
                    clearInterval(colorInterval);
                }
            }, 500);
            
            // Create floating emoji effect
            const emojis = ['✨', '🎇', '🎆', '🌈', '🎉', '🎊'];
            emojis.forEach((emoji, index) => {
                setTimeout(() => {
                    createFloatingEmoji(emoji, 30);
                }, index * 300);
            });
            
            // Button press effect
            const btn = event.target;
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 200);
        }

        // Create floating emoji effect
        function createFloatingEmoji(emoji, count, originElement) {
            for (let i = 0; i < count; i++) {
                const floatingEmoji = document.createElement('div');
                floatingEmoji.innerHTML = emoji;
                floatingEmoji.style.position = 'absolute';
                floatingEmoji.style.fontSize = `${Math.random() * 20 + 15}px`;
                floatingEmoji.style.zIndex = '1000';
                floatingEmoji.style.pointerEvents = 'none';
                floatingEmoji.style.userSelect = 'none';
                
                // Position near the origin element if provided
                if (originElement) {
                    const rect = originElement.getBoundingClientRect();
                    floatingEmoji.style.left = `${rect.left + rect.width/2 + (Math.random() - 0.5) * 50}px`;
                    floatingEmoji.style.top = `${rect.top + rect.height/2 + (Math.random() - 0.5) * 50}px`;
                } else {
                    floatingEmoji.style.left = `${Math.random() * window.innerWidth}px`;
                    floatingEmoji.style.top = `${Math.random() * window.innerHeight}px`;
                }
                
                document.body.appendChild(floatingEmoji);
                
                // Animation
                const animation = floatingEmoji.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${-Math.random() * 100 - 50}px) translateX(${(Math.random() - 0.5) * 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 2000 + 1000,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                });
                
                animation.onfinish = () => {
                    floatingEmoji.remove();
                };
            }
        }

        // Create magic sparkles effect
        function createMagicSparkles(event) {
            for (let i = 0; i < 20; i++) {
                const sparkle = document.createElement('div');
                sparkle.classList.add('magic-sparkle');
                
                // Random position around the click
                const x = event.clientX + (Math.random() - 0.5) * 100;
                const y = event.clientY + (Math.random() - 0.5) * 100;
                
                // Random color
                const hue = Math.random() * 360;
                sparkle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
                sparkle.style.boxShadow = `0 0 10px 2px hsl(${hue}, 100%, 50%)`;
                
                // Random animation
                sparkle.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
                sparkle.style.setProperty('--ty', `${(Math.random() - 0.5) * 100}px`);
                
                sparkle.style.left = `${x}px`;
                sparkle.style.top = `${y}px`;
                
                document.body.appendChild(sparkle);
                
                // Remove after animation
                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            }
        }

        // Create random sparkles on screen
        function createRandomSparkles() {
            for (let i = 0; i < 5; i++) {
                const sparkle = document.createElement('div');
                sparkle.classList.add('magic-sparkle');

                //photo danceing

                <div class="section"></div>

                
                // Random position on screen
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                
                // Random color
                const hue = Math.random() * 360;
                sparkle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
                sparkle.style.boxShadow = `0 0 15px 3px hsl(${hue}, 100%, 50%)`;
                
                // Random animation
                sparkle.style.setProperty('--tx', `${(Math.random() - 0.5) * 50}px`);
                sparkle.style.setProperty('--ty', `${(Math.random() - 0.5) * 50}px`);
                
                sparkle.style.left = `${x}px`;
                sparkle.style.top = `${y}px`;
                
                document.body.appendChild(sparkle);
                
                // Remove after animation
                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            }
        }

        // Create sparkles when scrolling
        function createScrollSparkles() {
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createRandomSparkles();
                }, i * 100);
            }
        }

        // Initialize bookmark on load
        window.addEventListener('load', function() {
            setTimeout(() => {
                const bodyHeight = document.body.scrollHeight;
                const windowHeight = window.innerHeight;
                if (bodyHeight > windowHeight * 1.5) {
                    document.getElementById('bookmark').classList.add('visible');
                }
            }, 500);
            
            // Add floating bubbles to footer
            for (let i = 0; i < 8; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                bubble.style.width = `${Math.random() * 60 + 40}px`;
                bubble.style.height = bubble.style.width;
                bubble.style.top = `${Math.random() * 80}%`;
                bubble.style.left = `${Math.random() * 90 + 5}%`;
                bubble.style.animationDelay = `${Math.random() * 8}s`;
                document.querySelector('.footer').appendChild(bubble);
            }
        });
    </script>
    
    <!-- Confetti JS Library -->
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"></script>
</body>
</html>
