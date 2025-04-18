document.addEventListener('DOMContentLoaded', function() {
    const commandLine = document.getElementById('command-line');
    const terminalOutput = document.getElementById('terminal-output');
    const cursor = document.querySelector('.cursor');
    const replayBtn = document.querySelector('.replay-btn');
    
    const commands = {
        initial: 'ls /Volumes/Macintosh',
        firstCompletion: 'ls /Volumes/Macintosh\\ HD',
        partial: '\\ -\\',
        finalCompletion: 'ls /Volumes/Macintosh\\ HD\\ -\\ Data/'
    };

    let animationTimeout;
    
    function initAnimation() {
        // Clear any existing animation
        clearTimeout(animationTimeout);
        commandLine.textContent = '';
        
        // Remove any existing options line
        const existingOptions = document.querySelector('.options-line');
        if (existingOptions) {
            existingOptions.remove();
        }
        
        // Start the animation
        typeInitialCommand();
    }

    // Type initial command
    function typeInitialCommand() {
        if (charIndex < commands.initial.length) {
            commandLine.textContent += commands.initial.charAt(charIndex);
            charIndex++;
            animationTimeout = setTimeout(typeInitialCommand, 100);
        } else {
            animationTimeout = setTimeout(() => showTabKey(firstCompletion), 1600);
        }
    }

    // First completion after first tab
    function firstCompletion() {
        commandLine.textContent = commands.firstCompletion;
        animationTimeout = setTimeout(() => showTabKey(showOptions), 1600);
    }

    // Show options after second tab
    function showOptions() {
        const optionsLine = document.createElement('div');
        optionsLine.className = 'options-line';
        optionsLine.textContent = 'Macintosh\\ HD/      Macintosh\\ HD\\ -\\ Data/';
        terminalOutput.appendChild(optionsLine);
        
        animationTimeout = setTimeout(() => {
            typePartialCommand();
        }, 1600);
    }

    // Type out the partial command
    function typePartialCommand() {
        let partialIndex = 0;
        const currentText = commandLine.textContent;
        
        function type() {
            if (partialIndex < commands.partial.length) {
                commandLine.textContent = currentText + commands.partial.substring(0, partialIndex + 1);
                partialIndex++;
                animationTimeout = setTimeout(type, 100);
            } else {
                animationTimeout = setTimeout(() => showTabKey(finalCompletion), 1600);
            }
        }
        
        type();
    }

    // Final completion after third tab
    function finalCompletion() {
        commandLine.textContent = commands.finalCompletion;
    }

    // Tab key animation
    function showTabKey(completionCallback) {
        const tabKey = document.createElement('span');
        tabKey.className = 'tab-key';
        tabKey.textContent = 'tab';
        commandLine.parentNode.insertBefore(tabKey, cursor);

        animationTimeout = setTimeout(() => {
            tabKey.style.transition = 'all 1s ease-out';
            tabKey.style.transform = 'translateX(15px)';
            tabKey.style.opacity = '0';
        }, 200);

        animationTimeout = setTimeout(() => {
            tabKey.remove();
            completionCallback();
        }, 800);
    }

    // Replay button click handler
    replayBtn.addEventListener('click', function() {
        charIndex = 0; // Reset typing position
        initAnimation();
    });

    // Start initial animation
    let charIndex = 0;
    initAnimation();
});
