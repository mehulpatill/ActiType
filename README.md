# ActiType - Smart Paste & Always Active Window Extension

## 🚀 Overview

**ActiType** is a powerful Chrome extension that provides two main features:
1. **Smart Paste** - Intelligent clipboard pasting with typing simulation to bypass paste detection
2. **Always Active Window** - Keeps browser windows focused and active even when switching tabs or applications

## ✨ Features

### 🎯 Smart Paste
- **Bypass Paste Detection**: Simulates natural typing to avoid triggering anti-paste mechanisms
- **Context Menu Integration**: Right-click on any text field to paste directly
- **Keyboard Shortcut**: Quick paste with `Alt + D`

### 👁️ Always Active Window
- **Focus Preservation**: Keeps browser window active even when switching applications
- **Per-Site Control**: Enable/disable the feature on specific websites
- **Real-time Status**: Visual indicators showing current activation status
- **Background Operation**: Works seamlessly without interrupting your workflow

## 🔧 Installation

### Manual Installation (Developer Mode)
1. Download(zip) or clone this repository
2. Extract the folder
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable "Developer mode" in the top right
5. Click "Load unpacked" and select the extension folder
6. The extension will appear in your toolbar

## 🎮 Usage

### Smart Paste
1. **Method 1 - Keyboard Shortcut**:
   - Copy text to clipboard
   - Click in any text field
   - Press `Alt + D` to paste with typing simulation

2. **Method 2 - Context Menu**:
   - Copy text to clipboard
   - Right-click on any text field
   - Select "Smart Paste (Alt+D)" from context menu

3. **Method 3 - Extension Popup**:
   - Click the extension icon
   - Enable "Smart Paste" toggle
   - Use the keyboard shortcut or context menu

### Always Active Window
1. Click the extension icon in the toolbar
2. Toggle "Enable for this site" under "Always Active Window"
3. The window will remain focused even when switching tabs or applications
4. Toggle off to disable for the current site

## ⚙️ Configuration

### Extension Popup
The extension popup provides easy access to:
- **Smart Paste Toggle**: Enable/disable smart paste functionality
- **Site-specific Settings**: Control which sites have always-active behavior
- **Status Indicators**: Real-time feedback on current settings
- **Current Site Info**: Shows the hostname of the active tab



### Content Script Injection
The extension uses multiple content scripts for different purposes:
- **Isolated Script**: Runs in isolated world for secure operations
- **Main Script**: Runs in main world for DOM manipulation
- **Content Script**: Handles clipboard operations and user interactions

## 🛡️ Security & Privacy

- **Local Storage Only**: All settings are stored locally on your device
- **No Data Collection**: The extension doesn't collect or transmit any personal data
- **Minimal Permissions**: Only requests necessary permissions for functionality
- **Open Source**: Code is available for review and audit

## 🚨 Limitations

- **Internal Chrome Pages**: Cannot operate on `chrome://` or `about:` pages due to browser security restrictions
- **Some Protected Sites**: May not work on sites with strict content security policies
- **Clipboard Access**: Requires user interaction to access clipboard content

## 🐛 Troubleshooting

### Smart Paste Not Working
1. Ensure the extension is enabled in `chrome://extensions/`
2. Check that Smart Paste is toggled ON in the extension popup
3. Verify you're not on a restricted page (chrome://, about:, etc.)
4. Try refreshing the page and attempting again

### Always Active Not Working
1. Check that the feature is enabled for the current site
2. Ensure the site is not in the restricted pages list
3. Try disabling and re-enabling the feature

### General Issues
1. Refresh the webpage
2. Restart the browser
3. Disable and re-enable the extension
4. Check browser console for error messages

## 🔄 Version History

### v1.x
- Initial release with basic functionality
- Smart paste with simple typing simulation
- Basic always-active window feature

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Bug Reports**: Open an issue with detailed reproduction steps
2. **Feature Requests**: Suggest new features or improvements
3. **Code Contributions**: 
   - Fork the repository
   - Create a feature branch
   - Make your changes
   - Submit a pull request

