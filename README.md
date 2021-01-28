# App documentation

Table of contents removed. Regenerate after making changes to this document.

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Set up and start app

```bash
git clone git@github.com:danielrlc/article-view-next.git
cd article-view-next
yarn
yarn run dev
```

Go to [localhost:3000](http://localhost:3000/) to view app (with hot reloading).

Build the app for production:

```bash
yarn run build
```

## Example pages

### Home page

http://localhost:3000/

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

## Code formatting

I used [Prettier](https://prettier.io/) to format my JavaScript, CSS and HTML code consistently. I included a `.prettierrc` file in the root folder, and set the app up without semicolons at the end of JavaScript statements, in line with the documentation on the [Next.js](https://nextjs.org/) website.

## Tech stack

I used [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) to build the app.

### Why Next.js?

Next.js lets you use static and/or server-side rendering (SSR). I used SSR in my app as I think it is a good fit for a site like hbl.fi. SSR has advantages over single-page apps (SPAs) in these areas:

- search engine optimisation (SEO)
- progressive enhancement and accessibility (not relying on client-side JavaScript)
- time to initial render
- authentication (compared with a static site generator like Gatsby, for example)

### Why Tailwind CSS?

Here are some of the main reasons why Tailwind is my favourite CSS framework:

- Tailwind lets you see and manage your CSS right inside your HTML.
- You need to be fairly good at CSS to use Tailwind, and Tailwind helps you improve at CSS, because rather than hiding the CSS away, it makes it far more visible and "in your face".
- Tailwind helps you avoid specificity issues.
- Tailwind helps you avoid writing much CSS of your own.
- Tailwind comes with very few opinions, and can be deeply customised.
- Tailwind makes it easy for you to avoid premature abstraction, but when needed, you can abstract your styles into components.
- You can use [PurgeCSS](https://purgecss.com/) to remove all unused styles when you build your app. (With this app, the minimised, built CSS file is just ~2 kB)

If you haven't used Tailwind CSS before, or some other utility CSS framework, the following line in my code might make you freak out:

```html
<div
  className="text-gray-500 text-sm my-6 border border-l-0 border-r-0 border-gray-300 py-2 flex justify-between"
>
  ...
</div>
```

But fear not! Tailwind can abstract these classes into a component like this:

```css
.article-meta-box {
  @apply text-gray-500 text-sm my-6 border border-l-0 border-r-0 border-gray-300 py-2 flex justify-between;
}
```

```html
<div className="article-meta-box">
  ...
  <div></div>
</div>
```

This is what I would do if I wanted to reuse this set of styles elsewhere in the app.

## Security

### dangerouslySetInnerHTML

Some of the content returned from the API is in HTML, with some bold and italic elements. To render this, the app uses React's `dangerouslySetInnerHTML`.

```jsx
<p key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: html }} />
```

If there are concerns that the API could be hacked and a cross-site scripting (XSS) attack made on the site, then DOMPurify could be used to sanitise the API HTML data before rendering it. Details here:

[Complete guide on React dangerouslySetInnerHTML](https://linguinecode.com/post/complete-guide-react-dangerouslysetinnerhtml)

## Responsive design

The app is styled for all screen sizes. On mobile, screen real estate is maximised by using narrower horizontal margins. On desktop, the width of the article text is not too wide, to allow for comfortable reading.

## Accessibility notes

### Semantic HTML elements

I used these semantic elements in the article view:

```html
<header>
  <nav>
    <article>
      <section></section>
    </article>
  </nav>
</header>
```

### Login form

For the [login form](http://localhost:3000/login), I used `id`, `name` and `for` attributes (`htmlFor` in React) to tie labels and input boxes together.

### Accessibility improvements

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

## Authentication notes

Authentication information is stored in cookies. I couldn't use `localStorage` in the browser because `getServerSideProps` works on the server and doesn't have access to the browser's `localStorage`.

I used `axios` to make API requests. I read that it does a good job of standardising API requests from the server and the client.

## What next?

Here are the things I would add next to this app, if I were getting it ready for production:

- Search engine optimisation (SEO)
- Friendlier URLs for the article pages
- Testing with [Cypress](https://www.cypress.io/)
- Refactoring React components into smaller components, to make the code more readable
- Customising Tailwind with brand colours and so on
- Error handling. I have a little of this, but not much.

## Fixes on dev branch

- Fixed "no unique key" console warning on home page

## Investigated, but not fixed yet

Warning about this URL on home page: http://localhost:3000/article/cd84189c-241e-4211-a95e-f20d7ec34c9a
Warning message: "Prop 'href' did not match... (and then the URL)"

BUT: the network request to that URL looks like it's fine. It sends back a '200 OK' response. So all fine???
