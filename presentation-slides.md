slidenumbers: true

# Article View app

## Daniel Clarke

### 2021-01-29

---

# I know this isn't meant to be a formal talk!

But I've prepared these slides to provide some structure to what we look at. I hope that's okay with you all?

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

- Original [vanilla JS version](https://github.com/danielrlc/article-view-js) got complicated, as I _thought_ I had to create a [proxy server](https://github.com/danielrlc/express-cors-proxy-server) to access the API.
- So somewhat late in the day, I switched over to Next.js.
- This didn't leave me much time to get the app polished up!

---

# App demo - home page

- [Home page link](http://localhost:3000/)
- Any errors? Open the console to check.
- Premium article links don't appear when not logged in.
- Login button toggles login form.
- After log in, they do appear.
- Login info box left visible.

---

# Free article with styled info box 1/2

- [Article link](http://localhost:3000/article/edefcc07-68f6-4176-83df-68827e5baf5b)
- Responsive page layout via Tailwind classes
  - `max-w-2xl mx-auto`

---

# Free article with styled info box 2/2

- Lots of Tailwind classes on the info box
  - `border border-t-8 border-b-4 border-yellow-400 shadow-2xl px-6 pt-4 pb-8 my-8`
- But... they can be abstracted into a Tailwind component, if they need to be reused. (More on that later.)

---
