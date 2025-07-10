# Datawise Internship Assessment – Frontend Developer

This project is a responsive dashboard UI built using React and TypeScript as part of the Datawise Frontend Developer Internship Assessment.

## Live Demo

View the live deployed project here:  
https://datawise-dashboard-frontend3-165x.vercel.app/


## Features

- Sidebar with routing: Dashboard, Users, Settings
- Dashboard page includes:
  - Static Bar Chart (using Chart.js)
  - User Activity Table (GET request from mock API)
  - Form with 3 fields (POST request to mock API)
- Dark mode toggle from Settings page
- React Router for navigation
- Axios for HTTP requests
- Loading and error state handling
- Plain CSS styling

## Tech Stack

- React with TypeScript
- Vite for bundling
- React Router DOM
- Axios
- Chart.js (`react-chartjs-2`)
- Plain CSS

## Mock APIs Used

- User list (GET): https://jsonplaceholder.typicode.com/users  
- Form submission (POST): https://jsonplaceholder.typicode.com/posts

## Getting Started

To run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/mouryachandan/datawise-dashboard-frontend2.git
cd datawise-dashboard-frontend2
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

App will be available at: `http://localhost:5173`

## Folder Structure

```
src/
├── components/
│   ├── Sidebar.tsx
│   ├── BarChart.tsx
│   ├── UserTable.tsx
│   └── UserForm.tsx
├── pages/
│   ├── Dashboard.tsx
│   ├── Users.tsx
│   └── Settings.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Notes

- No backend is implemented. Data is fetched/submitted via mock APIs only.
- This is a submission for the Datawise Frontend Developer Internship Assessment.
