# App documentation

## Set up and start app

```bash
git clone git@github.com:danielrlc/article-view-next.git
cd article-view-next
npm install
npm run dev
```

Go to [localhost:3000](http://localhost:3000/) to see app (with hot reloading).

Build the app for production:

```bash
npm run build
```

## Example articles

### View free article with embedded box

[Trump möter Biden en sista gång – därför kan nattens debatt avgöra valet](http://localhost:3000/article/a6282b95-e620-4040-87d1-731fed85a7d6)

### View free article with no listImage

[Att leva som man lär](http://localhost:3000/article/f0626495-f2ac-4220-9892-44086b12acb5)

This is handled by this code in `/pages/article/[articleId].js`

```jsx
{
  listImage && (
    <figure>
      <img
        src={listImage.url}
        alt={listImage.caption}
        className="w-full mb-1"
      />
      <figcaption className="text-gray-500 text-sm">
        {listImage.caption} {listImage.byline}
      </figcaption>
    </figure>
  )
}
```

## Tech stack

I used [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) to build the app.

### Why Next.js?

Next.js lets you use a combination of static and server-side rendering (SSR). I felt that SSR could be important for a site like hbl.fi as it can make search engine optimisation (SEO) less of a headache than it can be in a single-page application. I have used server-side rendering in this app.

### Why Tailwind CSS?

Here are some of the main reasons why I like Tailwind:
- Tailwind lets you see and manage your CSS right inside your HTML.
- You need to be fairly good at CSS to use Tailwind, and Tailwind helps you improve at CSS, because rather than hiding the CSS away, it makes it far more visible and "in your face".
- Tailwind helps you avoid specificity issues.
- Tailwind helps you avoid writing much CSS of your own.
- Tailwind comes with very few opinions, and can be deeply customised.
- Tailwind makes it easy for you to avoid premature abstraction, but when needed, you can abstract your styles into components.
- You can use [PurgeCSS](https://purgecss.com/) to remove all unused styles when you build your app. (With this app, the built CSS file is just ~2 kB)

If you haven't used Tailwind CSS before, or some other utility CSS framework, the following line in my code might make you freak out:

```html
<div className="text-gray-500 text-sm my-6 border border-l-0 border-r-0 border-gray-300 py-2 flex justify-between">...</div>
```

But fear not! Tailwind can abstract these classes into a component like this:

```css
.article-meta-box {
  @apply text-gray-500 text-sm my-6 border border-l-0 border-r-0 border-gray-300 py-2 flex justify-between;
}
```

```html
<div className="article-meta-box">...<div>
```

This is what I would do if I wanted to reuse this set of styles elsewhere in the app.

## Responsive design

The app is styled for all screen sizes. On mobile, screen real estate is maximised by using narrower horizontal margins. On desktop, the width of the article text is not too wide, to allow for comfortable reading.

## Code formatting

I used [Prettier](https://prettier.io/) to format my JavaScript, CSS and HTML code consistently. I included a `.prettierrc` file in the root folder, and set the app up without semicolons at the end of JavaScript statements, in line with the documentation on the [Next.js](https://nextjs.org/) website.

## Accessibility notes

### Semantic HTML elements

I used these semantic elements in the article view:

```html
<header>
<nav>
<article>
<section>
```

### Login form

For the [login form](http://localhost:3000/login), I used both `id` and `name` attributes to tie labels and input boxes together.

### Accessibility improvements (from hbl)

Running a Lighthouse test on [this page on the hbl.fi site](https://www.hbl.fi/artikel/sista-debatten-trump-biden-kan-avgora-valet-vagmastarstaterna-har-overraskat-forr/) flagged up some accessibility issues.

### Issue 1: "Heading elements are not in a sequentially-descending order"

Problem:

Here is a subheading from that page:

```html
<strong class="subheadline1">Ingen garanti</strong>
```

Solution:

```html
<h2 class="subheadline1">Ingen garanti</h2>
```

### Issue 2: "Image elements do not have [alt] attributes"

Problem:

```html
<div class="ksf-article-images">
  <!-- ... image and caption in separate divs, caption in a <p> tag, and missing alt attribute ... -->
</div>
```

Solution:

```html
<figure>
  <img src="..." alt="Belmont University ..." />
  <figcaption>Belmont University ...</figcaption>
</figure>
```

This follows advice from [The Figure with Optional Caption element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)

## What is missing from this app?

Here are some important things I think the app would need next:
- Search engine optimisation (SEO)
- Friendlier URLs for the article pages
- Dark mode? (Easy to add in Tailwind CSS)
- Code linting with ESLint (My excuse: I recently made Vim my main, full-time text editor for all personal projects, and I haven't added ESLint to it yet.)
- Testing with [Cypress](https://www.cypress.io/)
