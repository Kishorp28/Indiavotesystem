# 🇮🇳 Voter: Secure Online Voting Platform

A modern, full-stack online voting system for Indian elections, featuring a tricolor theme, real-time results, comprehensive admin management, and enhanced voter experience with SMS integration.

---

## ✨ Specialties
- **Tricolor UI**: Inspired by the Indian flag (saffron, white, green, blue accents)
- **Secure Voting**: One vote per user, server-side timestamp, localStorage status tracking
- **Real-time Results**: Live bar chart visualization with detailed analytics
- **Comprehensive Admin Dashboard**: Complete system management with sidebar navigation
- **Enhanced Voter Experience**: Register, login, cast vote with confirmation and timer
- **SMS Integration**: Voter ID sent via SMS (Twilio)
- **Modern Design**: Responsive, Google Fonts, card UI, gradients, and animations
- **System Settings Management**: Complete configuration and maintenance tools

---

## 🚀 Features

### 🗳️ Voter Features
- **Registration & Authentication**: Secure voter registration with Aadhaar/mobile validation
- **Profile Management**: View and edit personal information with real-time updates
- **Voting Interface**: Cast vote with confirmation modal and 1-minute timer
- **Vote Status Tracking**: Prevents duplicate voting with localStorage status
- **Results Viewing**: Access to real-time election results and analytics

### 👨‍💼 Admin Features
- **Dashboard Overview**: System statistics, quick actions, and status monitoring
- **Candidate Management**: Add, edit, and manage election candidates
- **Results Management**: Comprehensive results visualization and analytics
- **System Settings**: Complete configuration management including:
  - Election settings (dates, limits, visibility)
  - Voter registration settings (age, verification, overseas voting)
  - System configuration (timeouts, security, notifications)
  - Maintenance tools (backup, export, health monitoring)
- **Data Management**: Export, backup, and system health monitoring
- **Maintenance Mode**: System maintenance with custom messages

### 🔧 Technical Features
- **Real-time Updates**: Live data synchronization across all interfaces
- **Responsive Design**: Mobile-friendly interface with sidebar navigation
- **Security Features**: Session management, login attempts, data validation
- **Backend Integration**: RESTful API with MongoDB/Firebase support
- **Error Handling**: Comprehensive error management and user feedback

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express, MongoDB, ES Modules
- **Frontend**: HTML5, CSS3, JavaScript (ES6+, modular architecture)
- **Database**: Firebase Firestore (primary), MongoDB (alternative)
- **SMS Service**: Twilio API for voter ID delivery
- **UI Framework**: Custom CSS with Google Fonts and Font Awesome
- **Charts**: Chart.js for real-time results visualization

---

## 📁 Project Structure
```
votef/
├── back/                          # Backend server
│   ├── controllers/               # API controllers
│   ├── models/                    # Data models
│   ├── routes/                    # API routes
│   ├── utils/                     # Utilities
│   └── server.js                  # Main server file
├── votef/                         # Frontend files
│   ├── dashboard.html             # Voter dashboard
│   ├── profile.html               # Voter profile
│   ├── result.html                # Public results
│   ├── castvote.html              # Voting interface
│   ├── voter_login.html           # Voter login
│   ├── voter_register.html        # Voter registration
│   ├── admin_dashboard.html       # Admin dashboard
│   ├── admin_add.html             # Candidate management
│   ├── admin_result.html          # Admin results
│   ├── admin_settings.html        # System settings
│   └── send_sms_backend.js        # SMS integration
├── package.json                   # Dependencies
└── README.md                      # Documentation
```

---

## 📝 Setup & Installation

### Prerequisites
- Node.js (v14 or higher) & npm
- MongoDB (local or Atlas)
- Git
- Modern web browser

### 1. Clone the repository
```bash
git clone https://github.com/Kishore-028/voter.git
cd voter
```

### 2. Install dependencies
```bash
npm install
cd back
npm install
```

### 3. Environment setup
Create a `.env` file in `/back` directory:
```env
MONGODB_URI=your_mongodb_connection_string
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_phone
PORT=3002
```

### 4. Configure Firebase (Optional)
If using Firebase Firestore, update the configuration in frontend files.

### 5. Run the backend
```bash
cd back
node server.js
```
Server will start on `http://localhost:3002`

### 6. Run the frontend
- Open `votef/dashboard.html` in your browser
- Or use a local server (e.g., Live Server in VSCode)
- For admin access, navigate to `votef/admin_dashboard.html`

### 7. Push to GitHub
```bash
echo "# voter" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Kishore-028/voter.git
git push -u origin main
```

---

## 🎯 Usage Guide

### For Voters
1. **Register**: Visit `voter_register.html` and complete registration
2. **Login**: Use your credentials at `voter_login.html`
3. **Dashboard**: View election info and cast your vote
4. **Profile**: Manage your personal information
5. **Results**: View real-time election results

### For Administrators
1. **Dashboard**: Access system overview and quick actions
2. **Add Candidates**: Manage election candidates
3. **View Results**: Monitor election progress and results
4. **System Settings**: Configure all system parameters
5. **Maintenance**: Perform system maintenance and data management

### System Settings Categories
- **Election Settings**: Configure election dates, limits, and visibility
- **Voter Registration**: Set registration periods and requirements
- **System Configuration**: Manage security, timeouts, and notifications
- **Maintenance**: Backup, export, and system health monitoring

---

## 🔒 Security Features
- **Vote Validation**: One vote per voter with server-side verification
- **Session Management**: Secure session handling with timeouts
- **Data Protection**: Input validation and sanitization
- **Access Control**: Separate admin and voter interfaces
- **Audit Trail**: Complete voting history and system logs

---

## 📊 API Endpoints
- `GET /candidates` - Get all candidates
- `POST /candidates` - Add new candidate
- `GET /votes` - Get all votes
- `POST /votes` - Cast a vote
- `POST /sms` - Send SMS notifications
- `GET /settings` - Get system settings
- `POST /settings` - Update system settings

---

## 🎨 UI/UX Features
- **Responsive Design**: Works on all device sizes
- **Modern Interface**: Clean, intuitive design with animations
- **Accessibility**: Keyboard navigation and screen reader support
- **Loading States**: Visual feedback for all operations
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Confirmation messages for all actions

---

## 🚀 Deployment
The application can be deployed to:
- **Heroku**: Easy deployment with MongoDB Atlas
- **Vercel**: Frontend deployment with serverless functions
- **AWS**: Full-stack deployment with EC2 and RDS
- **DigitalOcean**: VPS deployment with managed databases

---

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test all features before submitting
- Update documentation for new features

---

## 🐛 Known Issues & Limitations
- SMS service requires valid Twilio credentials
- Firebase configuration needed for full functionality
- Local storage used for demo purposes (production should use secure sessions)

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🇮🇳 Designed for Indian Elections
This project is specifically designed for secure, transparent, and modern online voting in India, featuring:
- Indian tricolor theme
- Aadhaar integration support
- Multi-language support (ready for Hindi/regional languages)
- Compliance with Indian election guidelines
- Scalable architecture for large-scale elections

---

## 📞 Support
For support, email support@voter.com or create an issue in the repository.

---

**Made with ❤️ for India's Democracy** 