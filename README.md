# Users

## Overview

This is a Next.js application using TypeScript, React, and Tailwind CSS. The project is configured with ESLint for linting and SWR for data fetching.

## Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/mattfrautnick/nextjs.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Environment Variables

To run the application locally, create a `.env.local` file in the root of your project and add the necessary environment variables. For example:

```dotenv
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

### Running the Development Server

To start the development server, run:
```bash
npm run dev