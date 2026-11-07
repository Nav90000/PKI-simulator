# 🔐 PKI Simulator — Interactive Public Key Infrastructure

> **A professional, interactive cybersecurity learning platform built with React.**  
> Simulates the complete PKI lifecycle for educational and academic demonstration.

---

## 🎯 Project Overview

The PKI Simulator is a fully interactive web application that visually demonstrates how **Public Key Infrastructure (PKI)** establishes digital trust. It walks users through every stage of the PKI lifecycle:

- Cryptographic key pair generation
- Certificate Signing Request (CSR) creation
- Certificate Authority operations
- Digital certificate issuance and viewing
- Certificate validation with real-time checks
- Client-server authentication simulation
- Secure communication demonstration
- Certificate lifecycle management and revocation

This project is designed for **cybersecurity education, academic presentations, and interactive learning**.

---

## ✨ Features

- **13 interactive pages** covering the complete PKI workflow
- **Dark cybersecurity theme** with glassmorphism and smooth animations
- **Framer Motion animations** — page transitions, signing animations, packet flows
- **Global simulation state** persisted with localStorage via Zustand
- **Certificate validation lab** with 5 failure scenarios
- **CA Control Center** with approve/reject workflow and animated signing
- **Security Lab** with 6 attack scenario simulations
- **Quick Demo mode** — auto-runs the full PKI workflow
- **Certificate management** with filter, view, revoke, renew
- **Responsive design** — desktop-first, mobile-friendly
- **Accessible** — keyboard navigation, ARIA attributes, focus states
- **Reset simulation** with full state cleanup

---

## 📋 Requirements

- **Node.js** 18+ (LTS recommended)
- **npm** 9+

---

## 🚀 Installation

```bash
# Navigate to the project directory
cd pki-react

# Install all dependencies
npm install
```

---

## 🏗️ Production Build

```bash
npm run build
```

Generates optimized files in the `dist/` folder.

---

## 👀 Preview Production Build

```bash
npm run preview
```

Serves the production build locally for review.

---

## 📁 Project Structure

```
pki-react/
│
├── index.html              # HTML entry point
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
│
├── public/                 # Static assets
│
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Router & root component
    │
    ├── components/         # Reusable UI components
    │   ├── Layout.jsx          # App shell with sidebar + topbar
    │   ├── Sidebar.jsx         # Collapsible navigation sidebar
    │   ├── Topbar.jsx          # Top navigation bar
    │   ├── Modal.jsx           # Reusable modal dialog
    │   ├── Toast.jsx           # Notification toasts
    │   ├── PageHeader.jsx      # Standard page header
    │   ├── StatusBadge.jsx     # Certificate status badges
    │   ├── ExplainPanel.jsx    # Expandable explanation panels
    │   └── LoadingScreen.jsx   # Animated loading screen
    │
    ├── pages/              # Route-level page components
    │   ├── Landing.jsx         # Welcome / landing page
    │   ├── Dashboard.jsx       # Central control dashboard
    │   ├── Overview.jsx        # PKI ecosystem overview
    │   ├── KeyGeneration.jsx   # Cryptographic key generation lab
    │   ├── CSRLab.jsx          # Certificate Signing Request lab
    │   ├── CertificateAuthority.jsx  # CA control center
    │   ├── CertificateViewer.jsx     # Digital certificate viewer
    │   ├── Validation.jsx            # Certificate validation lab
    │   ├── Authentication.jsx        # Authentication simulator
    │   ├── SecureCommunication.jsx   # Secure comms simulation
    │   ├── CertificateManagement.jsx # Certificate management table
    │   ├── Revocation.jsx            # Certificate revocation
    │   ├── SecurityLab.jsx           # PKI security scenarios
    │   ├── PKIJourney.jsx            # Complete PKI journey timeline
    │   └── Completion.jsx            # Simulation completion screen
    │
    ├── store/
    │   └── pkiStore.js     # Zustand global state with persistence
    │
    ├── utils/
    │   └── crypto.js       # Cryptographic simulation utilities
    │
    └── styles/
        └── globals.css     # Global styles + Tailwind directives
```

---

## 🔄 PKI Workflow

The simulator guides users through the complete PKI lifecycle:

```
1. KEY GENERATION     → Generate RSA public/private key pair
         ↓
2. CSR CREATION       → Create Certificate Signing Request
         ↓
3. CA SUBMISSION      → Submit CSR to Certificate Authority
         ↓
4. CA VERIFICATION    → CA verifies identity and approves
         ↓
5. CERTIFICATE ISSUED → CA signs and issues digital certificate
         ↓
6. VALIDATION         → Validate certificate (format, issuer, expiry, signature)
         ↓
7. AUTHENTICATION     → Challenge-response identity verification
         ↓
8. SECURE COMMS       → Establish encrypted communication session
         ↓
9. MANAGEMENT         → Manage certificate lifecycle
         ↓
10. REVOCATION        → Revoke compromised certificates
```

---

## 🛣️ Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/dashboard` | Simulation control dashboard |
| `/overview` | PKI ecosystem overview |
| `/keys` | Key generation lab |
| `/csr` | CSR lab |
| `/certificate-authority` | CA control center |
| `/certificate` | Digital certificate viewer |
| `/validation` | Certificate validation lab |
| `/authentication` | Authentication simulator |
| `/secure-communication` | Secure communication demo |
| `/certificates` | Certificate management |
| `/revocation` | Certificate revocation |
| `/security-lab` | PKI security scenarios |
| `/journey` | Complete PKI journey |
| `/complete` | Simulation completion |

---

## 🧪 Technology Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Vite 5** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion 11** | Animations & transitions |
| **Zustand 4** | Global state management |
| **React Router 6** | Client-side routing |
| **Lucide React** | Icon library |

---

## 🎓 Educational Notes

- **Courses Aligned:** co1, co2, co4 | po1, po2, po5 | pso1 | sdg4, sdg9
- **Topic:** Public Key Infrastructure, Cryptography, Network Security

---

## ⚠️ Disclaimer

This application is an **educational simulation** of Public Key Infrastructure concepts. 

- All cryptographic keys, certificates, and fingerprints shown are **randomly generated for demonstration** and are not cryptographically secure
- The application does **not implement** real RSA cryptography, X.509 certificate generation, or actual TLS
- It is designed to **visually and interactively explain** PKI concepts for learning purposes
- Do **not** use this application as a replacement for production PKI infrastructure

---

## 👨‍💻 Academic Project

Built as a cybersecurity learning simulator demonstrating:
- Public Key Infrastructure architecture
- Certificate authority trust models
- Digital certificate lifecycle management  
- Authentication and secure communication principles
- PKI security vulnerabilities and protections
