slidenumbers: true

# Article View app

## Daniel Clarke

### 2021-01-29

---

# I know this isn't meant to be a formal talk!

- But I've prepared these slides to provide some structure to what we look at. I hope that's okay with you all?

---

# Share the slides after?

- I can share these slides afterwards if you need them.
- Note that any underlined text means [it's a link](http://endoftheinternet.com/). I may not click on every link now.

---

# Proposed structure

- Demo the app
- Look at the code (from high level => low-level details)
- Discuss the tech stack
- What next for the app?
- Plenty of informal discussion along the way!
- **Does this all sound okay?**

---

# Please note: the app is unpolished, due to time constraints

- The original [vanilla JS version](https://github.com/danielrlc/article-view-js) got complicated, as I _thought_ I had to create a [proxy server](https://github.com/danielrlc/express-cors-proxy-server) to access the API.
- So somewhat late in the day, I switched over to Next.js.
- This didn't leave me much time to get the app polished up!

---

# main branch / dev branch

- The [main branch](https://github.com/danielrlc/article-view-next) is the locked-down, read-only branch I submitted.
- The [dev branch](https://github.com/danielrlc/article-view-next/tree/dev) has a few fixes and improvements.
- We'll look at the dev branch now if that's okay, but we can look at the main branch too if you want to.

---

# App demo - [home page](http://localhost:3000/)

- Any errors? Let's open the console to check.
- Premium article links don't appear when not logged in.
- Login button toggles login form.
- After log in, they do appear.
- Login info box left visible to show log in details conveniently.
- Cookie information is visible in the console.

---

# Free article with styled info box 1/2

- [Article link](http://localhost:3000/article/edefcc07-68f6-4176-83df-68827e5baf5b)
- Responsive page layout via Tailwind classes
  - `max-w-2xl mx-auto`

---

# Free article with styled info box 2/2

- Note all the Tailwind classes on the info box:
  - `border border-t-8 border-b-4 border-yellow-400 shadow-2xl px-6 pt-4 pb-8 my-8`
- Why this is actually great news :)
- And for reuse, this collection of utility classes can be packaged up into a Tailwind component. (More on that soon.)

---

# [Premium article](http://localhost:3000/article/ddf6d2ec-def6-4e9f-9a2e-8fd40289396b)

- Logged in: the article appears
- Not logged in: throws a 403 error. (I didn't get around to handling this, which is why I just hid the links to the premium articles.)

---

# [Documentation](https://github.com/danielrlc/article-view-next/blob/dev/README.md)

- I just included this to remind you I wrote some documentation!
- Let's take a quick look, but a lot of it overlaps with these slides.

---

# Prettier configuration

```
// .prettierrc file
{
  "semi": false,
  "singleQuote": true
}
```

- This file configures Prettier to follow the syntax rules for JavaScript in the Next.js documentation.

---

# Hello Tailwind CSS!

- `index.css` shows how Tailwind is pulled in.
- Tailwind consists of tiny, single-purpose **utility** classes like `mb-4`, `inline-block` and `bg-green-300`.
- These classes can then be packaged up into Tailwind **component** classes, like `.btn-blue` in this file.
- I like to think of Tailwind **utility** classes and **component** classes as being like atoms and molecules.
- Note how the specificity goes from low to high.

---

# Tailwind helps you avoid [specificity wars](https://csswizardry.com/2014/10/the-specificity-graph/)

- Tailwind handles specificity elegantly by making you declare all your component classes before utility classes.
- This means a Tailwind utility class like `mb-4` will always override classes in a component, allowing you to make small overrides to your components on the fly.

---
