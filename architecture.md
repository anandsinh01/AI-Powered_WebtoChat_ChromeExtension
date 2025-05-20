# WebChat AI Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Chrome Browser                           │
│                                                                 │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────────┐   │
│  │  Sidepanel  │     │  Background │     │  Content Script │   │
│  │  (UI Layer) │     │  (Service)  │     │  (Page Access)  │   │
│  └──────┬──────┘     └──────┬──────┘     └────────┬────────┘   │
│         │                   │                      │            │
│         │                   │                      │            │
│  ┌──────▼──────┐     ┌─────▼─────┐        ┌──────▼──────┐     │
│  │  HTML/CSS   │     │  Storage  │        │  Page DOM   │     │
│  │  JavaScript │     │  API      │        │  Access     │     │
│  └─────────────┘     └───────────┘        └─────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
         │                   │                      │
         │                   │                      │
         ▼                   ▼                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                      External Services                          │
│                                                                 │
│  ┌─────────────────┐     ┌─────────────────┐                   │
│  │  Gemini API     │     │  Web Speech API │                   │
│  │  (AI Service)   │     │  (Voice Input)  │                   │
│  └─────────────────┘     └─────────────────┘                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Component Details

### 1. Sidepanel (UI Layer)
- **Purpose**: Main user interface for the extension
- **Components**:
  - `sidepanel.html`: UI structure and styling
  - `sidepanel.js`: User interaction handling
  - Features:
    - Chat interface
    - Voice input
    - File attachments
    - History management
    - Export functionality

### 2. Background Service
- **Purpose**: Handles extension lifecycle and data management
- **Components**:
  - `background.js`: Extension service worker
  - Features:
    - Sidebar management
    - Storage operations
    - Message routing
    - State management

### 3. Content Script
- **Purpose**: Interacts with web pages
- **Components**:
  - `content.js`: Page content access
  - Features:
    - DOM access
    - Page content extraction
    - Event listening
    - Communication with background service

### 4. Storage Layer
- **Purpose**: Manages data persistence
- **Components**:
  - Chrome Storage API
  - Features:
    - Chat history storage
    - Settings management
    - API key storage
    - State persistence

### 5. External Services
- **Purpose**: Provides external functionality
- **Components**:
  - Gemini API: AI processing
  - Web Speech API: Voice recognition
  - Features:
    - AI-powered responses
    - Voice command processing
    - Natural language understanding

## Data Flow

1. **User Input Flow**:
   ```
   User Input → Sidepanel → Background Service → External Services → Response
   ```

2. **Voice Command Flow**:
   ```
   Voice Input → Web Speech API → Sidepanel → Background Service → Gemini API → Response
   ```

3. **File Processing Flow**:
   ```
   File Upload → Sidepanel → Background Service → Gemini API → Response
   ```

4. **Page Content Flow**:
   ```
   Web Page → Content Script → Background Service → Sidepanel → User
   ```

## Communication Patterns

1. **Message Passing**:
   - Chrome runtime messaging between components
   - Event-based communication
   - Asynchronous operations

2. **Data Storage**:
   - Chrome storage API for persistence
   - Local storage for temporary data
   - Secure storage for API keys

3. **External API Integration**:
   - RESTful API calls to Gemini
   - Web Speech API for voice recognition
   - Secure API key management

## Security Considerations

1. **API Key Security**:
   - Secure storage in Chrome sync storage
   - Encrypted transmission
   - Access control

2. **Data Privacy**:
   - Local processing where possible
   - Secure transmission to external services
   - User consent for microphone access

3. **File Handling**:
   - Secure file uploads
   - Content validation
   - Size limitations

## Performance Considerations

1. **Optimization Strategies**:
   - Lazy loading of components
   - Efficient DOM updates
   - Caching of responses
   - Background processing

2. **Resource Management**:
   - Memory usage optimization
   - Network request batching
   - Storage quota management
   - Background task scheduling 