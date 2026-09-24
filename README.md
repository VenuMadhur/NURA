# NURA

> **Your Health. Your People. Connected.**

NURA is a personal and family health management platform designed to keep health information, care responsibilities, reminders, documents, appointments, and trusted people connected in one place.

The project is being built incrementally as a long-term full-stack learning and portfolio project, starting with React and evolving as new features require additional technologies.

---

## 🌱 Project Vision

Managing healthcare information can become difficult when it is spread across prescriptions, medical documents, appointments, bills, reminders, and family conversations.

NURA aims to provide a connected space where a person can:

- Manage their own health information.
- Organize medicines and appointments.
- Keep important medical documents and bills accessible.
- Connect with trusted family members or caregivers.
- Help manage another person's care when they do not have a NURA account.
- Share health information selectively through permissions.
- Keep care responsibilities and reminders organized.

The goal is not simply to store health information, but to make personal and family care **organized, connected, and permission-based**.

---

## 🧭 Core Concept

NURA is built around two primary areas:

### My Health

The user's personal health space.

Planned areas include:

- Health overview
- Medicines
- Medication reminders
- Appointments
- Medical documents
- Prescriptions
- Medical bills
- Personal health information

### My People

The user's connected people and care-management space.

Planned areas include:

- Family members
- Trusted people
- Managed profiles
- Care reminders
- Shared appointments
- Shared documents
- Permissions
- Care activity

---

## 👥 User Model

NURA is designed around different ways people may participate.

| User Type | Description |
|---|---|
| **Independent User** | Uses NURA to manage their own health. |
| **Circle Head** | Creates a trusted Circle and helps coordinate care for connected or managed people. |
| **Managed Member** | Has a profile managed by an authorized person but does not yet have a NURA account. |
| **Connected Member** | Has their own NURA account and joins a Circle with controlled permissions. |

### Example

A parent can create a managed profile for a family member who does not use NURA.

The parent can manage appointments, medicines, documents, and reminders for that person.

If that person later creates a NURA account, the existing managed profile can be connected to their account rather than creating a completely separate profile.

If someone already has a NURA account, they can accept or decline a Circle invitation and control what information is shared.

---

## 🔐 Privacy & Permissions

Health information is sensitive, so NURA is designed around **permission-based access**.

Potential permissions include:

- View medicines
- Add or edit medicines
- View appointments
- Add or edit appointments
- View documents
- Upload documents
- View bills
- Add or edit bills
- Receive care alerts
- View activity or care status

The long-term goal is to make sharing explicit and controllable rather than automatically exposing someone's complete health information.

---

## 🛠️ Technology

### Current

- **React**
- **JavaScript**
- **Vite**
- **HTML**
- **CSS**
- **Git / GitHub**

### Planned as the project grows

- React Router
- Authentication
- Supabase / PostgreSQL
- Python backend and APIs
- Cloud storage for documents
- Notifications and reminders
- Role-based / permission-based access
- Testing
- Deployment

Technologies will be introduced when the application actually needs them rather than adding everything at once.

---

## 📁 Current Frontend Structure

```text
NURA/
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── HealthSection.jsx
    │   │   └── PeopleSection.jsx
    │   ├── pages/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    └── ...
```

The structure will evolve as NURA grows.

---

## 🚧 Current Progress

### Completed

- [x] Created React + Vite frontend
- [x] Established initial NURA project structure
- [x] Created reusable React components
- [x] Added NURA header and tagline
- [x] Added My Health and My People sections
- [x] Implemented `useState`
- [x] Implemented button event handling with `onClick`
- [x] Implemented conditional rendering
- [x] Connected My Health to `HealthSection`
- [x] Connected My People to `PeopleSection`
- [x] Added initial Git/GitHub repository

### In Progress

- [ ] NURA application UI and design system
- [ ] Responsive layout
- [ ] Navigation structure
- [ ] Health dashboard
- [ ] People / family dashboard

### Planned

- [ ] React Router navigation
- [ ] Authentication
- [ ] User profiles
- [ ] NURA Circles
- [ ] Managed profiles
- [ ] Medicine management
- [ ] Reminders
- [ ] Appointment management
- [ ] Medical documents
- [ ] Medical bills
- [ ] Permission management
- [ ] Notifications
- [ ] Backend APIs
- [ ] Database integration
- [ ] Cloud deployment

---

## 🗺️ Development Roadmap

### Phase 1 — React Foundation

Build the application structure and strengthen React fundamentals.

- Components
- Props
- State
- Events
- Conditional rendering
- Lists
- Forms
- React Router
- API requests

### Phase 2 — NURA UI

Turn the foundation into a complete responsive interface.

- Navigation
- Dashboards
- Cards
- Forms
- Responsive design
- Light / dark themes
- Accessible UI

### Phase 3 — Data & Authentication

Introduce persistent application data.

- Authentication
- User profiles
- Database
- CRUD operations
- Health records
- People management

### Phase 4 — Care Coordination

Build NURA's core family-care functionality.

- NURA Circles
- Invitations
- Managed profiles
- Permissions
- Medicine reminders
- Appointment reminders
- Shared care activity

### Phase 5 — Full-Stack NURA

Connect the frontend to a production-ready backend.

- REST APIs
- PostgreSQL
- File storage
- Notifications
- Security
- Validation
- Testing
- Deployment

### Phase 6 — Advanced Features

Explore intelligent features after the core platform is stable.

- OCR for medical documents
- Smart reminders
- Health timelines
- Care analytics
- Emergency information
- Multiple Circles
- AI-assisted organization

---

## 🎯 Project Goals

NURA has two goals:

### Product Goal

Build a practical platform that makes personal and family health coordination more organized and connected.

### Learning Goal

Use NURA as a continuous full-stack development project to learn by building:

**React → Frontend Architecture → APIs → Databases → Authentication → Backend → Deployment → Advanced Features**

Each feature should solve a real product problem while introducing a useful engineering concept.

---

## 🤝 Development Philosophy

NURA is intentionally being developed step by step.

Instead of introducing a large technology stack immediately, the project follows a simple principle:

> **Build the feature first. Add the technology when the feature needs it.**

This keeps the project understandable while allowing it to evolve into a complete full-stack application.

---

## 📌 Project Status

**Status:** 🚧 Active Development

NURA is currently in its early React development stage. The application architecture, UI, data model, backend, and feature set will evolve throughout development.

---

## ⚠️ Disclaimer

NURA is a software development and learning project. It is not currently a medical device or a substitute for professional medical advice, diagnosis, or treatment.

---

## 📄 License

License information will be added as the project matures.
