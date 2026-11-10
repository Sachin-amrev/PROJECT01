// Countdown Timer Functionality
class CountdownTimer {
    constructor() {
        this.daysElement = document.getElementById('days');
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        
        // Set countdown to 24 hours from now
        this.targetTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        this.startCountdown();
    }
    
    startCountdown() {
        this.updateCountdown();
        this.timerInterval = setInterval(() => {
            this.updateCountdown();
        }, 1000);
    }
    
    updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = this.targetTime - now;
        
        if (timeLeft <= 0) {
            this.resetCountdown();
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        this.daysElement.textContent = this.formatTime(days);
        this.hoursElement.textContent = this.formatTime(hours);
        this.minutesElement.textContent = this.formatTime(minutes);
        this.secondsElement.textContent = this.formatTime(seconds);
        
        // Add pulse animation when seconds change
        this.secondsElement.style.animation = 'none';
        setTimeout(() => {
            this.secondsElement.style.animation = 'pulse 0.5s ease-in-out';
        }, 10);
    }
    
    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    resetCountdown() {
        clearInterval(this.timerInterval);
        // Reset to 24 hours
        this.targetTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        this.startCountdown();
    }
}

// Modal Functions
function showModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Button Click Handlers
function handleJoinNow() {
    // Redirect to actual WhatsApp group
    window.open('https://chat.whatsapp.com/JknH8q0SgIr5G4K71xhQG1?mode=wwc', '_blank');
    
    // Show success modal after redirect
    setTimeout(() => {
        showModal();
    }, 500);
}

function handleJoinFree() {
    // Redirect to actual WhatsApp group
    window.open('https://chat.whatsapp.com/JknH8q0SgIr5G4K71xhQG1?mode=wwc', '_blank');
    
    // Show success modal after redirect
    setTimeout(() => {
        showModal();
    }, 500);
}

function handleEmailSubscribe() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate email subscription
    alert('Thank you for subscribing! You will receive notifications about new trading signals.');
    emailInput.value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth Scrolling for Internal Links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add Loading Animation
function addLoadingAnimation() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.id === 'joinNowBtn' || this.id === 'joinFreeBtn') {
                e.preventDefault();
                
                // Add loading state
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> JOINING...';
                this.disabled = true;
                
                // Simulate API call delay
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                    
                    if (this.id === 'joinNowBtn') {
                        handleJoinNow();
                    } else if (this.id === 'joinFreeBtn') {
                        handleJoinFree();
                    }
                }, 2000);
            }
        });
    });
}

// Add Hover Effects
function addHoverEffects() {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add Parallax Effect
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Add Typing Animation for Main Title
function addTypingAnimation() {
    const titleElement = document.querySelector('.main-title .highlight');
    const text = titleElement.textContent;
    titleElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// Add Floating Animation
function addFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.stat-item');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add('floating');
    });
}

// Add CSS for floating animation
function addFloatingCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Add Click Analytics (placeholder for real analytics)
function addClickAnalytics() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, you would send analytics data
            console.log(`Button clicked: ${this.textContent.trim()}`);
        });
    });
}

// Add Form Validation
function addFormValidation() {
    const emailInput = document.getElementById('emailInput');
    
    emailInput.addEventListener('input', function() {
        const email = this.value.trim();
        if (email && !isValidEmail(email)) {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
}

// Add Keyboard Navigation
function addKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
        
        if (e.key === 'Enter' && e.target.id === 'emailInput') {
            handleEmailSubscribe();
        }
    });
}

// Add background click handler - make entire page clickable
function addBackgroundClickHandler() {
    const body = document.body;
    
    body.addEventListener('click', function(e) {
        // Don't trigger if clicking on buttons, inputs, or links
        if (e.target.tagName === 'BUTTON' || 
            e.target.tagName === 'INPUT' || 
            e.target.tagName === 'A' ||
            e.target.closest('.btn') ||
            e.target.closest('.email-form') ||
            e.target.closest('.modal')) {
            return;
        }
        
        // Add visual feedback
        addClickEffect(e.clientX, e.clientY);
        
        // Join immediately on any background click
        window.open('https://chat.whatsapp.com/JknH8q0SgIr5G4K71xhQG1?mode=wwc', '_blank');
        
        // Show success message
        setTimeout(() => {
            showJoinSuccess();
        }, 500);
    });
}

// Add click effect animation
function addClickEffect(x, y) {
    const effect = document.createElement('div');
    effect.style.cssText = `
        position: fixed;
        left: ${x - 10}px;
        top: ${y - 10}px;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #00d4ff, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: clickPulse 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        document.body.removeChild(effect);
    }, 600);
}

// Show join success message
function showJoinSuccess() {
    const success = document.createElement('div');
    success.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: #00d4ff;
        padding: 25px 35px;
        border-radius: 20px;
        font-size: 1.3rem;
        font-weight: 600;
        z-index: 1000;
        border: 2px solid #00d4ff;
        text-align: center;
        animation: fadeInOut 4s ease-in-out forwards;
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
    `;
    success.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 10px;">🎉</div>
        <div>Redirecting to IIT Guwahati Warriors!</div>
        <div style="font-size: 0.9rem; margin-top: 10px; opacity: 0.8;">@iitgwarrior</div>
    `;
    
    document.body.appendChild(success);
    
    setTimeout(() => {
        if (document.body.contains(success)) {
            document.body.removeChild(success);
        }
    }, 4000);
}

// Add hover indicators
function addHoverIndicators() {
    const body = document.body;
    
    body.addEventListener('mouseover', function(e) {
        if (e.target.tagName === 'BUTTON' || 
            e.target.tagName === 'INPUT' || 
            e.target.tagName === 'A' ||
            e.target.closest('.btn') ||
            e.target.closest('.email-form')) {
            return;
        }
        
        // Add subtle glow effect
        e.target.style.transition = 'all 0.3s ease';
        e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
    });
    
    body.addEventListener('mouseout', function(e) {
        if (e.target.tagName === 'BUTTON' || 
            e.target.tagName === 'INPUT' || 
            e.target.tagName === 'A' ||
            e.target.closest('.btn') ||
            e.target.closest('.email-form')) {
            return;
        }
        
        e.target.style.boxShadow = '';
    });
}

// Track background clicks for analytics
function trackBackgroundClicks() {
    let backgroundClickCount = 0;
    
    document.body.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || 
            e.target.tagName === 'INPUT' || 
            e.target.tagName === 'A' ||
            e.target.closest('.btn') ||
            e.target.closest('.email-form') ||
            e.target.closest('.modal')) {
            return;
        }
        
        backgroundClickCount++;
        console.log(`Background click #${backgroundClickCount} at (${e.clientX}, ${e.clientY})`);
    });
}

// Add auto redirect after 5 seconds
function addAutoRedirect() {
    console.log('Starting 3-second auto-redirect...');
    
    // Show countdown message immediately
    showAutoRedirectCountdown();
    
    // Auto redirect after 3 seconds
    setTimeout(() => {
        console.log('Attempting redirect #1...');
        window.location.href = 'https://chat.whatsapp.com/JknH8q0SgIr5G4K71xhQG1?mode=wwc';
    }, 3000);
    
    setTimeout(() => {
        console.log('Attempting redirect #2...');
        window.open('https://chat.whatsapp.com/JknH8q0SgIr5G4K71xhQG1?mode=wwc', '_blank');
    }, 3100);
    
    setTimeout(() => {
        console.log('Attempting redirect #3...');
        window.location.replace('https://chat.whatsapp.com/JknH8q0SgIr5G4K71xhQG1?mode=wwc');
    }, 3200);
    
    // Show success message
    setTimeout(() => {
        showAutoRedirectSuccess();
    }, 3500);
}

// Show auto redirect countdown
function showAutoRedirectCountdown() {
    const countdown = document.createElement('div');
    countdown.id = 'autoRedirectCountdown';
    countdown.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.9);
        color: #00d4ff;
        padding: 15px 25px;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: 600;
        z-index: 1000;
        border: 2px solid #00d4ff;
        text-align: center;
        animation: slideDown 0.5s ease-out;
        box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
    `;
    countdown.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-rocket" style="animation: bounce 1s ease-in-out infinite;"></i>
            <span>Auto-joining WhatsApp Group in <span id="countdownTimer">3</span> seconds...</span>
        </div>
    `;
    
    document.body.appendChild(countdown);
    
    // Countdown animation
    let timeLeft = 3;
    const timerElement = document.getElementById('countdownTimer');
    const countdownInterval = setInterval(() => {
        timeLeft--;
        if (timerElement) {
            timerElement.textContent = timeLeft;
            timerElement.style.color = timeLeft === 1 ? '#ff6b6b' : '#00d4ff';
        }
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

// Show auto redirect success
function showAutoRedirectSuccess() {
    // Remove countdown
    const countdown = document.getElementById('autoRedirectCountdown');
    if (countdown) {
        countdown.remove();
    }
    
    // Show success message
    const success = document.createElement('div');
    success.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.95);
        color: #00d4ff;
        padding: 30px 40px;
        border-radius: 25px;
        font-size: 1.4rem;
        font-weight: 600;
        z-index: 1000;
        border: 3px solid #00d4ff;
        text-align: center;
        animation: fadeInScale 0.5s ease-out;
        box-shadow: 0 15px 40px rgba(0, 212, 255, 0.4);
    `;
    success.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 15px;">🚀</div>
        <div>Redirecting to WhatsApp Group!</div>
        <div style="font-size: 1rem; margin-top: 15px; opacity: 0.8;">Work From Mobile Group</div>
        <div style="font-size: 0.9rem; margin-top: 10px; opacity: 0.6;">Join our WhatsApp community! 💬</div>
    `;
    
    document.body.appendChild(success);
    
    setTimeout(() => {
        if (document.body.contains(success)) {
            success.style.animation = 'fadeOutScale 0.5s ease-in forwards';
            setTimeout(() => {
                if (document.body.contains(success)) {
                    document.body.removeChild(success);
                }
            }, 500);
        }
    }, 3000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown timer
    new CountdownTimer();
    
    // Add event listeners
    document.getElementById('joinNowBtn').addEventListener('click', handleJoinNow);
    document.getElementById('joinFreeBtn').addEventListener('click', handleJoinFree);
    document.getElementById('emailBtn').addEventListener('click', handleEmailSubscribe);
    
    // Add background click functionality
    addBackgroundClickHandler();
    addHoverIndicators();
    trackBackgroundClicks();
    
    // Add additional functionality
    addLoadingAnimation();
    addHoverEffects();
    addParallaxEffect();
    addTypingAnimation();
    addFloatingCSS();
    addFloatingAnimation();
    addClickAnalytics();
    addFormValidation();
    addKeyboardNavigation();
    
    // Auto redirect after 2 seconds - PRIORITY
    addAutoRedirect();
    
    // Additional redirect attempt after 3 seconds
    setTimeout(() => {
        console.log('Attempting redirect after 3 seconds...');
        window.location.href = 'https://chat.whatsapp.com/JknH8q0SgIr5G4K71xhQG1?mode=wwc';
    }, 3000);
    
    // Close modal when clicking outside
    document.getElementById('successModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    console.log('Landing page initialized successfully!');
    console.log('Auto-redirecting to WhatsApp group in 3 seconds...');
});

// Add some fun easter eggs
function addEasterEggs() {
    let clickCount = 0;
    const logo = document.querySelector('.logo');
    
    logo.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 5) {
            this.style.animation = 'spin 1s linear infinite';
            setTimeout(() => {
                this.style.animation = '';
                clickCount = 0;
            }, 3000);
        }
    });
}

// Add spin animation CSS
function addSpinCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize easter eggs
document.addEventListener('DOMContentLoaded', function() {
    addSpinCSS();
    addEasterEggs();
});
