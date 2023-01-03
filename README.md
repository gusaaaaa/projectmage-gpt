# ProjectMage

ProjectMage is a tool that allows project and product managers to automatically create tickets of many kinds (epics, user stories, tasks, etc.) and formats for different PM tools (Jira, Trello, GitHub, etc.) with just a few indications.

It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/), and connects to the [OpenAI API](https://openai.com/api/).

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd projectmage
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)!
