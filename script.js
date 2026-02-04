document.addEventListener('DOMContentLoaded', () => {
    // --- Tab Switching Logic ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and hide all panes
            tabButtons.forEach(btn => {
                btn.classList.remove('bg-slate-800', 'text-white');
                btn.classList.add('bg-transparent', 'text-slate-400', 'hover:bg-slate-800/50', 'hover:text-white');
            });
            tabPanes.forEach(pane => pane.classList.remove('active-tab-pane'));

            // Add active class to clicked button and show corresponding pane
            button.classList.add('bg-slate-800', 'text-white');
            button.classList.remove('bg-transparent', 'text-slate-400', 'hover:bg-slate-800/50', 'hover:text-white');

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
                <div class="max-w-md lg:max-w-lg p-3 rounded-2xl bg-blue-600 text-white rounded-br-none shadow">
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
            //         <div class="max-w-md lg:max-w-lg p-3 rounded-2xl bg-slate-700 text-slate-200 rounded-bl-none">
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
                masterBooks.forEach(b => b.classList.remove('active'));
                book.classList.add('active');
                // Here you would typically load the content for O'Neil's assistant
            } else {
                // For disabled books, prevent active state
                book.classList.remove('active');
            }
        });
    });

    // Initialize the first tab to be active
    document.getElementById('chat-tab-btn').click();
});
