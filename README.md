# Viking Project 
https://www.viking-project.com/

## Description

This web application is built with modern web technologies, including Next.js 13 for the frontend framework, React for building user interfaces, TypeScript for type safety, Sanity.io as the headless CMS, TailwindCSS for styling, and Vercel for deployment. 
Additionally, we use Sanity Studio for comprehensive content management.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Configuration](#configuration)
5. [Deployment](#deployment)


## Installation

To get started with this project, follow these steps:

### Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Install dependencies:
1. Navigate to the `sproject-viking-site` directory:

    ```bash
    cd project-viking-site
    ```
1. Install dependencies:

  ```bash
  npm install
  ```

### Start the development server:
1. Navigate to the `sproject-viking-site` directory:

    ```bash
    cd project-viking-site
    ```

2. Start the development servey:

    ```bash
    npm run dev
    ```

The application should now be running on `http://localhost:3000`.


## Usage

This section explains how to use and navigate the web application.

1. **Home Page:**
   - Displays the main content fetched from Sanity.io.
   
2. **Admin Panel:**
   - Accessible via a specific route (e.g., `/admin`), allowing you to manage content through Sanity Studio.

3. **Dynamic Routing:**
   - Pages and content are dynamically generated based on the data from Sanity.

## Features

- **Next.js 13:** A React framework for server-side rendering and static site generation.
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A statically typed superset of JavaScript.
- **Sanity.io:** A headless CMS for managing content.
- **Sanity Studio:** A customizable content management system interface.
- **TailwindCSS:** A utility-first CSS framework for rapid UI development.
- **Vercel:** A platform for frontend frameworks and static sites, built to integrate with your workflow.

## Configuration

The project can be customized through various configuration files and environment variables:

- **Next.js Configuration:** Modify `next.config.js` to change the default settings.
- **Sanity Configuration:** Adjust settings in the `sanity` directory as needed.
- **TailwindCSS Configuration:** Modify `tailwind.config.js` to customize your styles.
- **Environment Variables:** Update `.env.local` with your specific project settings.

## Deployment

Deploying the application to Vercel is straightforward:

1. **Push your code to GitHub:**

    Make sure your code is committed and pushed to a GitHub repository.

2. **Deploy to Vercel:**

    - Sign up or log in to [Vercel](https://vercel.com).
    - Click on "New Project" and import your GitHub repository.
    - Follow the deployment prompts, ensuring you add the necessary environment variables from `.env.local` in the Vercel dashboard.

3. **Sanity Studio Deployment:**

    - Follow [Sanity's guide](https://www.sanity.io/docs/deployment) to deploy your Sanity Studio to Vercel or another hosting provider.

4. **Automatic Deployments:**

    Every push to the `main` branch (or the branch you specified) will trigger an automatic deployment.

