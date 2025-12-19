# 🎶 Song of the Summer

Song of the Summer is a full-stack web application where users compete to gain the most points of listening to the aptly chosen **“Song of the Summer”** for a given season. The platform supports **season-based scoring**, **evolving rules**, and **historical accuracy**, ensuring past seasons remain correct even as new scoring logic is introduced.

This project is built as a **production-style system**, with a strong emphasis on backend correctness, clean architecture, and real-world engineering practices.

---

## ✨ Features

- User authentication and authorization
- Season-based competitions
- Configurable and evolving scoring rules
- Historical season preservation
- Leaderboards and rankings
- Admin-controlled season and rule management
- REST API with typed frontend consumption

---

## 🏗 Architecture

### Overview

This project has a React frontend and a C# backend.
The backend handles scoring logic and data storage.
The frontend displays results and lets users interact.
Scoring rules are written in one place so they’re easy to change.

Song of the Summer uses a **decoupled full-stack architecture** with a domain-centered backend. The system prioritizes maintainability, testability, and safe evolution of business rules over time.

The application is split into:
- A **React + TypeScript frontend**
- An **ASP.NET Core Web API backend**

---

### System Flow

```
React (TypeScript)
        ↓
ASP.NET Core Web API
        ↓
Application Services
        ↓
Domain Logic (Scoring Rules)
        ↓
PostgreSQL
```

---

### Backend Design

The backend follows a layered architecture:

- **API Layer** – Controllers, authentication, authorization  
- **Application Layer** – Use-case orchestration and workflows  
- **Domain Layer** – Core business logic and scoring rules  
- **Infrastructure Layer** – Database access and external services  

All scoring and business rules live exclusively in the **Domain layer**.

---

### Key Design Decisions

- Business logic is never implemented in the frontend
- Scoring rules are isolated and unit-testable
- Each season defines its own scoring strategy
- Legacy seasons remain unchanged when rules evolve

This ensures correctness and confidence as the system grows.

---

## 🧰 Tech Stack

### Frontend
- React
- TypeScript

### Backend
- C#
- ASP.NET Core (.NET 8)
- Entity Framework Core
- ASP.NET Identity
- JWT Authentication

### Database
- PostgreSQL

### Infrastructure
- Azure App Service (Backend)
- Azure Static Web Apps or Vercel (Frontend)

---

## 🧪 Testing

- **Domain tests** validate scoring rules and invariants
- **Application tests** validate use cases
- **API tests** validate integration and authentication
- **Frontend tests** validate components and hooks

Testing focuses on **business correctness**, not just coverage.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (18+)
- .NET 8 SDK
- PostgreSQL
- Git

---

### Backend Setup

```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📅 Project Status

This project is actively under development. Features and scoring rules are implemented iteratively with a focus on correctness and maintainability.

---

## 🎯 Project Goals

- Demonstrate real-world backend architecture
- Model complex, evolving business rules
- Maintain historical correctness
- Build a resume-ready, production-style system
