# DCODE - AI-Powered Mentor-Mentee Matching Platform

<div align="center">

![DCODE Logo](https://img.shields.io/badge/DCODE-Mentor%20Matching-00e676?style=for-the-badge&logo=code&logoColor=white)

**Intelligent mentor-mentee matching platform for open source contributors**

[![Live Demo](https://img.shields.io/badge/Live-Demo-00e676?style=flat-square)](https://your-demo-url.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-000000?style=flat-square&logo=github)](https://github.com/yourusername/dcode-mentor-matching)
[![License](https://img.shields.io/badge/License-MIT-00e676?style=flat-square)](LICENSE)

</div>


### 🚀 Key Features

- **🤖 AI-Powered Matching**: Sophisticated compatibility algorithm considering technical skills, learning styles, availability, and goals
- **📅 Integrated Scheduling**: Google Meet auto-generation with calendar sync (Google/Outlook/Apple)
- **💬 Real-Time Communication**: WebSocket-powered messaging with file sharing
- **📊 Progress Tracking**: Visual charts and milestone management
- **🔗 Developer Integrations**: GitHub, Slack, VS Code Live Share, and more
- **📱 Mobile-First PWA**: Offline capabilities with push notifications
- **🎨 Modern UI**: Black and green theme with optimized user experience

## 🌟 Why DCODE?

### The Problem
- **94.1% of newcomers** fail to complete their first open source contribution
- Experienced developers lack time for structured mentorship
- No systematic way to match compatible mentor-mentee pairs
- Fragmented tools make mentorship coordination difficult

### The Solution
- Automatically matches mentors and mentees based on compatibility
- Streamlines scheduling with automated Google Meet creation
- Integrates all developer tools in one platform
- Tracks progress and measures success

## 🏗️ Architecture

### Frontend
- **React/Next.js** with TypeScript
- **Tailwind CSS** for styling
- **Socket.io** for real-time features
- **Progressive Web App** capabilities

### Backend
- **Node.js/Express** API server
- **PostgreSQL** database
- **JWT** authentication
- **WebSocket** for real-time messaging

### Integrations
- **Google Calendar/Meet API**
- **GitHub API** for code collaboration
- **Slack Web API** for channels
- **Twilio** for SMS notifications

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- Google Cloud Console account (for Calendar/Meet)
- (Optional) GitHub, Slack, Twilio accounts for integrations


## 📱 Features Overview

### For Mentees
- **Streamlined Onboarding**: Combined skills assessment (current + learning goals)
- **Smart Matching**: AI finds top 5 compatible mentors with explanations
- **Easy Scheduling**: One-click Google Meet session creation
- **Progress Tracking**: Visual learning milestones and achievement charts
- **Resource Library**: Shared materials and learning resources
- **Mobile Access**: PWA with offline capabilities

### For Mentors
- **Mentor Dashboard**: Manage multiple mentees with analytics
- **Request Management**: Review mentee profiles with compatibility scores
- **Integrated Tools**: GitHub, Slack, VS Code Live Share access
- **Session Analytics**: Track mentee progress and engagement
- **Flexible Scheduling**: Calendar integration with conflict detection

### For Administrators
- **Platform Analytics**: Success rates, user engagement, matching effectiveness
- **User Management**: Moderation tools and user support
- **System Health**: Performance monitoring and usage statistics
- **Data Insights**: Mentorship outcome analysis


```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0a0a0a` (Deep Black)
- **Secondary Background**: `#1a1a1a` (Dark Gray)
- **Accent Color**: `#00e676` (Bright Green)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#b0b0b0` (Light Gray)

### Typography
- **Primary Font**: Inter
- **Code Font**: JetBrains Mono
- **Sizes**: 12px, 14px, 16px, 20px, 24px, 32px

## 🔒 Security Features

- **JWT Authentication** with secure token handling
- **Input Validation** on all endpoints
- **Rate Limiting** to prevent abuse
- **CORS Configuration** for secure cross-origin requests
- **Password Hashing** with bcrypt
- **SQL Injection Protection** with parameterized queries

## 📊 Matching Algorithm

The DCODE matching algorithm uses a multi-criteria scoring system:

```javascript
Compatibility Score = (
  Technical Skill Overlap × 0.30 +
  Availability Match × 0.25 +
  Learning Style Compatibility × 0.20 +
  Communication Preferences × 0.15 +
  Goal Alignment × 0.10
) × 100
```

### Scoring Factors
- **Technical Skills**: Cosine similarity between mentor expertise and mentee goals
- **Availability**: Timezone and schedule overlap analysis
- **Learning Style**: Teaching approach vs learning preference matching
- **Communication**: Channel and frequency preference alignment
- **Goals**: Mentor experience areas vs mentee objectives


## 🙏 Acknowledgments

- **Open Source Community** for inspiration and collaboration
- **AI Tools** for accelerating development
- **Beta Testers** for valuable feedback and suggestions

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/yourusername/dcode-mentor-matching/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/dcode-mentor-matching/discussions)
- **Email**: support@dcode-platform.com
- **Discord**: [Join our community](https://discord.gg/dcode)

## 🗺️ Roadmap

### Phase 1 ✅ (Current)
- [x] Core matching algorithm
- [x] Basic scheduling system
- [x] Real-time messaging
- [x] Google Meet integration

### Phase 2 🚧 (In Progress)
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Video call recording
- [ ] AI-powered session summaries

### Phase 3 📋 (Planned)
- [ ] Multi-language support
- [ ] Enterprise features
- [ ] Advanced AI recommendations
- [ ] Third-party LMS integrations

---

<div align="center">

**Built with ❤️ by Ankush Jha, Unnati Asthana, Uransh, Gyanshi Gupta, Mradusha**

</div>
