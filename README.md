# WebChat AI Chrome Extension

A powerful Chrome extension that provides AI-powered chat assistance for web browsing. The extension opens as a sidebar, allowing users to interact with an AI assistant while browsing web pages.

## Features

- 🎯 Sidebar Integration: Opens as a convenient sidebar instead of a popup
- 💬 Persistent Chat: Maintains chat history while browsing
- 📎 File Attachments: Support for file uploads and context sharing
- 📤 Export Options: Export chat history in multiple formats (JSON, Text, HTML)
- 🎨 Modern UI: Clean and responsive interface
- 🔄 Real-time Assistance: Get instant AI responses about webpage content
- 🎤 Voice Commands: Ask questions using your microphone (Chrome only)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/webchat-ai.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the extension directory

5. Configure your Gemini API key:
   - Right-click the extension icon
   - Select "Options"
   - Enter your Gemini API key
   - Save the settings

## Microphone Setup

To use the voice command feature:

1. Click the microphone button in the sidebar
2. When prompted by Chrome, click "Allow" to grant microphone access
3. If you accidentally clicked "Block", you can enable it by:
   - Clicking the lock/padlock icon in the address bar
   - Finding the microphone setting
   - Changing it from "Block" to "Allow"
   - Or going to Chrome Settings > Privacy and Security > Site Settings > Microphone
   - Finding the extension and changing the permission to "Allow"

Note: The voice command feature requires:
- Chrome browser (version 25 or later)
- A working microphone
- Microphone access permission
- Internet connection for speech recognition

## Project Structure

```
webchat-ai/
├── manifest.json        # Extension manifest
├── background.js       # Background script
├── sidepanel.html     # Sidebar UI
├── sidepanel.js       # Sidebar functionality
├── libs/
│   └── document-generator.js  # Export functionality
└── README.md          # Documentation
```

## Development

To modify or enhance the extension:

1. Make changes to the relevant files
2. Reload the extension in `chrome://extensions/`
3. Test the changes

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 