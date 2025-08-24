# TDS Tech Test - Kam Dav

Thank you for taking the time to review my tech test! I was really getting into working on this, and could've spent more time developing and improving it, along with setting up a more aesthetic user interface, which I ran out of time to work. In total I spent about 2 and a half hours on this tech test. I've left a few comments around the project to explain my thinking.


### Development Summary
- Started by creating a new project directory and running:
```npm create vite@latest tds-tech-test```
Selected:
- React
- TypeScript + SWC

- Cleaned the scaffolded project to only keep what was necessary.
- Registered at currencybeacon.com, generated an API key, and stored it in .env.local.
- Also created a .env.example file to show how environment variables should be set up.
- Planned out the project structure and began building the components.
- Created new Input and Select components and slotted them into App.tsx with placeholder values.
- Began setting up a hook for the currencies endpoint, referring to the currencybeacon.com documentation.
- This endpoint requires an API key, which was pulled from .env.local.
- Encountered an issue where the returned data looked like an array but did not support array methods.
- Resolved this by wrapping it with Object.values() to transform it into a valid array.
- Populated the Select components with the currencies.
- Set up several pieces of state and built a hook for the conversion endpoint.
- This endpoint requires multiple query params (from, to, and amount).
- Developed a hook that's designed to run whenever any of these values changed.

If given more time, I would extend the conversion to work both ways, so that updating one input field automatically updates the other, similar to how Google’s currency converter works

# Installation

### Clone the repository
git clone https://github.com/kamdav/tds-tech-test.git

### Navigate into the project
```cd tds-tech-test```

### Install dependencies
```npm install```

### Run the project
```npm run dev```

# Environment Variables

This project requires an API key from [CurrencyBeacon](https://currencybeacon.com/login)
- Log in and grab the API key from your dashbard under 'API Token Information'
- Create an .env.local file in the root drectory and update it with:
```VITE_CURRENCY_API_KEY=your_api_key_here```
