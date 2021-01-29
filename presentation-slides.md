slidenumbers: true

# Article View app

## App and code walkthrough

### Daniel Clarke

#### 2021-01-29

---

# I know this isn't meant to be a formal talk!

- But I've prepared these slides to provide some structure to what we look at. I hope that's okay with you all?

---

# Share the slides after?

- I can share these slides afterwards if you need them.
- Note that any underlined text means [it's a link](http://endoftheinternet.com/). I may not click on every link as we go through.

---

# Proposed structure

- Demo the app
- Look at the code (from high level => low-level details)
- Discuss the tech stack
- What next for the app?
- Plenty of informal discussion along the way!
- I'm happy to deviate from this path as much or as little as you like!

---

# First, my new portfolio site :)

- [Daniel Clarke | Web developer](https://daniel-clarke-dev.netlify.app/)
- The CSS file is currently 183,970 lines long. Whoops!
- Once I add a plugin, it will be <1000 lines long. Much better!

---

# From vanilla JavaScript to Next.js

- I started building a [vanilla JavaScript version](https://github.com/danielrlc/article-view-js) first.
- I _thought_ that meant I had to create a [proxy server](https://github.com/danielrlc/express-cors-proxy-server) to access the API.
- So instead, I switched over to Next.js.
- This didn't leave me much time to get the app properly polished up!

---

# main branch / dev branch

- The [main branch](https://github.com/danielrlc/article-view-next) is the locked-down, read-only branch I submitted a couple of weeks ago.
- The [dev branch](https://github.com/danielrlc/article-view-next/tree/dev) has a few fixes and improvements.
- We'll look at the dev branch now if that's okay, but we can look at the main branch too if you want to.

---

# App demo - [home page](http://localhost:3000/)

- The login button toggles the login form.
- The premium article links don't appear until you're logged in.
- Cookie information is visible in the console.

---

# Any errors?

- Let's check the console.
- 1 warning: "Warning: Prop `href` did not match..."
- Let's investigate!

---

# [Free article (with styled info box)](http://localhost:3000/article/edefcc07-68f6-4176-83df-68827e5baf5b)

- Responsive page layout tested on _all_ screen sizes for extra resilience
- Info box styled with Tailwind CSS

---

# [Premium article](http://localhost:3000/article/ddf6d2ec-def6-4e9f-9a2e-8fd40289396b)

- Logged in: the article appears
- Not logged in: throws a 403 error

---

# Any questions?

- Do you have any questions about the app, before we move on to looking at the code?

---

# [Documentation](https://github.com/danielrlc/article-view-next/blob/dev/README.md)

- I just included this to remind you I wrote some documentation!
- Let's take a quick look, but a lot of it overlaps with these slides.

---

# Prettier to the rescue!

- Prettier is a formatting tool that can be run in VS Code on every save.
- It automates the boring stuff like indenting code.
- If there are syntax errors, it flags them up.
- This makes Prettier the first line of testing.
- [Tabs or spaces](https://www.youtube.com/watch?v=V7PLxL8jIl8)? Who cares! Let Prettier decide and forget about it.

---

# Hello, Tailwind CSS!

- "Rapidly build modern websites without ever leaving your HTML."
- Tailwind is [gaining rapidly in popularity](https://2020.stateofcss.com/en-US/technologies/css-frameworks/) among developers.

---

# How Tailwind builds your CSS

- `index.css` shows what Tailwind builds: base, components and utilities.
- Tailwind builds a 171,000-line file of CSS from that.
- The built version is ~500 lines long, as all unused Tailwind classes are removed.
- Let's take a look! (`tailwind-post-build-deminimised.css`)

---

# How Tailwind works

- Tailwind consists of tiny, single-purpose **utility** classes like `.mb-4`, `.inline-block` and `.bg-green-300`.
- These classes can then be packaged up into Tailwind **component** classes, like `.btn-blue`.

---

# Goodbye forever, [CSS specificity wars!](https://csswizardry.com/2014/10/the-specificity-graph/)

- Tailwind handles specificity elegantly by making you declare all your component classes before utility classes.
- This means a Tailwind utility class like `mb-4` will always override classes in a component, allowing you to make small overrides to your components on the fly.

---

# Making the CSS global

- `_app.js` has a wrapper component that imports our CSS file, and passes that down as props to the whole app it wraps.

---

# Tailwind in action

- `index.js`
- `login.js`
- `[articleId].js`

---

# React and Next.js - high level

- All state stored in `IndexPage` component using React Hooks
- Props get passed down to `Nav` and `Login` components
- Axios used for API requests
- A cookie is used to store the authentication token

---

# React and Next.js - low level

- `index.js`
- `login.js`
- `nav.js`
- `[articleId.js]`
