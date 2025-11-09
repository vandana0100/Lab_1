# Pixell River Financial - Employee Directory

A simple employee and organization directory built with React and TypeScript.

## What's New ✨

This project now includes:
- **Search employees** by name or department
- **Organization page** showing leadership and management roles
- **Navigation** between employee and organization pages
- **Mobile-friendly** design

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the app:
```bash
npm run dev
```

3. Open your browser to the URL shown (usually `http://localhost:5173`)

## How to Use

### Employee Directory
- Browse employees by department
- Search for specific people or departments using the search bar
- Results update as you type

### Organization Page
- View company leadership and management
- Click on any role to see the job description
- Click again to hide the description

## Lab-4 Steps Completed

- Started splitting the project into `frontend/` and `backend/` folders. Backend has a basic Express + TypeScript server stub with TODO comments.
- Planning to build routes, controllers, and services that expose only the endpoints the frontend needs.
- Need to add a database (Prisma or similar) with Employees and Roles plus a seed script.
- Frontend repositories still use local data for now; will switch to fetch requests later.

## Lab-3 

### Part 1: useEntryForm() Hook
- Created custom hook to manage form state
- Handles employee and role form data
- Includes validation and error handling
- Uses React useState for state management

### Part 2: validStaffService
- Created service to validate staff entries
- Checks if names are at least 3 characters long
- Validates employee and role data
- Returns error messages for invalid entries

### Part 3: Employee and Role Repositories
- Created repositories for data management
- Includes basic CRUD operations (Create, Read, Update, Delete)
- Stores data in memory (temporary storage)
- Can be used by hooks and services

## Project Structure

```
frontend/
├── TODO.txt                # Reminder to move React app here later
backend/
├── package.json           # Express + TypeScript placeholder setup
├── tsconfig.json          # Basic TS config
└── src/
    └── index.ts          # Express server stub with TODOs
pixell-river-react/        # Existing React app (will move under frontend later)
├── public/
│   ├── employees.json      # Employee data
│   └── organization.json   # Organization data
└── src/
    ├── components/         # React components
    ├── hooks/             # Custom hooks
    │   └── useEntryForm.ts # Form management hook
    ├── services/          # Business logic services
    │   ├── validationService.ts    # Form validation
    │   └── validStaffService.ts    # Staff validation
    ├── repositories/      # Data management
    │   ├── employeeRepository.ts   # Employee data
    │   └── roleRepository.ts       # Role data
    ├── app.tsx            # Main app
    └── style.css          # Styling
```
## What You Need
- Node.js 18 or newer
- npm

## Troubleshooting
- Make sure the dev server is running
- Check browser console for any errors
- Try refreshing the page if something looks off

---
