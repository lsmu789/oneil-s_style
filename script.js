document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // This is the <html> tag

    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    // Function to apply theme
    function applyThemePreference() {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'light') {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            if (moonIcon) moonIcon.classList.remove('hidden');
            if (sunIcon) sunIcon.classList.add('hidden');
        } else { // Default to dark if no preference or 'dark'
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
            if (moonIcon) moonIcon.classList.add('hidden');
            if (sunIcon) sunIcon.classList.remove('hidden');
        }
    }

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                htmlElement.classList.add('light');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.remove('light');
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            applyThemePreference(); // Re-apply to ensure icon visibility is correct
        });
    }

    // Apply theme preference on initial load
    applyThemePreference();


    // --- Tab Switching Logic ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and hide all panes
            tabButtons.forEach(btn => {
                btn.classList.remove('bg-slate-800', 'text-white', 'light:bg-white', 'light:text-gray-900');
                btn.classList.add('bg-transparent', 'text-slate-400', 'hover:bg-slate-800/50', 'hover:text-white', 'light:text-gray-600', 'light:hover:bg-gray-200');
            });
            tabPanes.forEach(pane => pane.classList.remove('active-tab-pane'));

            // Add active class to clicked button and show corresponding pane
            button.classList.add('bg-slate-800', 'text-white', 'light:bg-white', 'light:text-gray-900');
            button.classList.remove('bg-transparent', 'text-slate-400', 'hover:bg-slate-800/50', 'hover:text-white', 'light:text-gray-600', 'light:hover:bg-gray-200');

            const targetPaneId = button.id.replace('-tab-btn', '-panel');
            const targetPane = document.getElementById(targetPaneId === 'chat-tab-panel' ? 'chat-window' : targetPaneId);
            if (targetPane) {
                targetPane.classList.add('active-tab-pane');
            }
        });
    });

    // --- Chat UI Interaction ---
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText) {
            // Create user message bubble
            const userMessageDiv = document.createElement('div');
            userMessageDiv.className = 'flex justify-end';
            userMessageDiv.innerHTML = `
                <div class="max-w-md lg:max-w-lg p-3 rounded-2xl bg-blue-600 text-white rounded-br-none shadow dark:bg-blue-600 light:bg-blue-500">
                    ${messageText}
                </div>
            `;
            chatMessages.appendChild(userMessageDiv);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom

            // Simulate AI response (optional, for basic interaction)
            // setTimeout(() => {
            //     const aiMessageDiv = document.createElement('div');
            //     aiMessageDiv.className = 'flex justify-start';
            //     aiMessageDiv.innerHTML = `
            //         <div class="max-w-md lg:max-w-lg p-3 rounded-2xl bg-slate-700 text-slate-200 rounded-bl-none dark:bg-slate-700 light:bg-gray-200">
            //             AI의 응답: ${messageText} 에 대한 정보를 찾아보고 있습니다.
            //         </div>
            //     `;
            //     chatMessages.appendChild(aiMessageDiv);
            //     chatMessages.scrollTop = chatMessages.scrollHeight;
            // }, 1000);
        }
    }

    // --- Book Activation Effect ---
    const oneilsBook = document.getElementById('oneils-book');
    const masterBooks = document.querySelectorAll('.master-book');

    masterBooks.forEach(book => {
        book.addEventListener('click', () => {
            if (book.id === 'oneils-book') {
                masterBooks.forEach(b => {
                  b.classList.remove('active', 'bg-blue-600', 'light:bg-blue-500');
                  b.classList.add('hover:bg-slate-700', 'light:hover:bg-gray-200');
                });
                book.classList.add('active', 'bg-blue-600', 'light:bg-blue-500');
                book.classList.remove('hover:bg-slate-700', 'light:hover:bg-gray-200');
                // Here you would typically load the content for O'Neil's assistant
            } else {
                // For disabled books, prevent active state
                book.classList.remove('active');
            }
        });
    });

    // Initialize the first tab to be active
    // Ensure the default tab button reflects the active state correctly in both themes
    const initialChatButton = document.getElementById('chat-tab-btn');
    if (initialChatButton) {
        initialChatButton.click(); // This will also handle the active styling
    }
});