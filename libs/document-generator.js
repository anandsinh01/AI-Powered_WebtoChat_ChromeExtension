class DocumentGenerator {
    static async generateTextDocument(messages) {
        let content = 'WebChat AI - Chat History\n';
        content += '=========================\n\n';
        
        messages.forEach((message, index) => {
            content += `${message.isUser ? 'You' : 'AI'}: ${message.text}\n`;
            if (index < messages.length - 1) {
                content += '\n---\n\n';
            }
        });
        
        return new Blob([content], { type: 'text/plain;charset=utf-8' });
    }

    static formatMarkdown(text) {
        // Convert markdown-style headings to HTML
        text = text.replace(/^# (.*$)/gm, '<h1>$1</h1>');
        text = text.replace(/^## (.*$)/gm, '<h2>$1</h2>');
        text = text.replace(/^### (.*$)/gm, '<h3>$1</h3>');
        
        // Convert bullet points to list items
        text = text.replace(/^\s*[-*] (.*$)/gm, '<li>$1</li>');
        
        // Convert numbered lists
        text = text.replace(/^\s*\d+\. (.*$)/gm, '<li>$1</li>');
        
        // Wrap lists in ul tags
        text = text.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
        
        // Convert bold and italic
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Convert code blocks with language support
        text = text.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
            return `<pre class="code ${lang}"><code>${code.trim()}</code></pre>`;
        });
        
        // Convert inline code
        text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Convert links
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
        
        // Convert line breaks
        text = text.replace(/\n/g, '<br>');
        
        return text;
    }

    static async generatePDFDocument(messages) {
        let content = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>WebChat AI - Chat History</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            line-height: 1.6;
            color: #333;
        }
        .message {
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 8px;
        }
        .user-message {
            background-color: #e3f2fd;
            margin-left: 20%;
        }
        .ai-message {
            background-color: #f5f5f5;
            margin-right: 20%;
        }
        .sender {
            font-weight: bold;
            margin-bottom: 8px;
            color: #2c3e50;
        }
        .content {
            white-space: pre-wrap;
        }
        h1 {
            text-align: center;
            color: #2c3e50;
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
        }
        .ai-message h1 {
            font-size: 1.5em;
            margin: 0.5em 0;
            color: #2c3e50;
            border-bottom: 2px solid #007bff;
            padding-bottom: 0.3em;
            text-align: left;
        }
        .ai-message h2 {
            font-size: 1.3em;
            margin: 0.4em 0;
            color: #34495e;
        }
        .ai-message h3 {
            font-size: 1.1em;
            margin: 0.3em 0;
            color: #2c3e50;
        }
        .ai-message ul, .ai-message ol {
            margin: 0.5em 0;
            padding-left: 1.5em;
        }
        .ai-message li {
            margin: 0.3em 0;
        }
        .ai-message pre {
            background: #2c3e50;
            color: #ecf0f1;
            padding: 1em;
            border-radius: 4px;
            overflow-x: auto;
            margin: 0.5em 0;
        }
        .ai-message code {
            background: #f8f9fa;
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-family: monospace;
            color: #e83e8c;
        }
        .ai-message a {
            color: #007bff;
            text-decoration: none;
        }
        .ai-message a:hover {
            text-decoration: underline;
        }
        .ai-message strong {
            font-weight: bold;
            color: #2c3e50;
        }
        .ai-message em {
            font-style: italic;
        }
    </style>
</head>
<body>
    <h1>WebChat AI - Chat History</h1>
`;

        messages.forEach(message => {
            const formattedText = message.isUser ? message.text : this.formatMarkdown(message.text);
            content += `
    <div class="message ${message.isUser ? 'user-message' : 'ai-message'}">
        <div class="sender">${message.isUser ? 'You' : 'AI'}</div>
        <div class="content">${formattedText}</div>
    </div>`;
        });

        content += `
</body>
</html>`;

        return new Blob([content], { type: 'text/html;charset=utf-8' });
    }
}

// Make DocumentGenerator available globally
window.DocumentGenerator = DocumentGenerator; 