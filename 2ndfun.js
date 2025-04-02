// Dancing Party Function
function startDanceParty() {
    const party = document.getElementById('dancingParty');
    party.style.display = 'flex';
    
    // Play party music
    const audio = new Audio('javascript:void(0);');
    
    audio.loop = true;
    audio.play();
    
    // Show for 5 seconds then hide
    setTimeout(() => {
        party.style.display = 'none';
        audio.pause();
    }, 5000);
}

// Countdown timer
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
    const audio = new Audio('https://pixabay.com/sound-effects/funny-laughing-sound-effect-205565/.mp3');
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
    
    // Play magical sound
    const audio = new Audio('https://pixabay.com/sound-effects/rimshot-joke-funny-80325/.mp3');
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

// Audio control
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');
    audio.addEventListener('play', () => {
        audio.classList.add('playing');
    });
    audio.addEventListener('pause', () => {
        audio.classList.remove('playing');
    });
});