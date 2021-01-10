# App documentation

## Set up and start app

```bash
git clone git@github.com:danielrlc/article-view-next.git
cd article-view-next
npm install
npm run dev
```

Go to [localhost:3000](http://localhost:3000/) to see app (with hot reloading).

## View free article with embedded box

[Trump möter Biden en sista gång – därför kan nattens debatt avgöra valet](http://localhost:3000/article/a6282b95-e620-4040-87d1-731fed85a7d6)

## View free article with no listImage

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

## Styling notes

I used my favourite CSS framework [Tailwind CSS](https://tailwindcss.com/) for the styling.

### Why Tailwind CSS?

Here are some of the main reasons why I like Tailwind:
- You need to be fairly good at CSS to use Tailwind, and Tailwind helps you improve at CSS, because rather than hiding the CSS away, it makes it far more visible and "in your face".
- Tailwind helps you avoid specificity issues.
- With Tailwind, you can largely avoid writing your own CSS.
- Tailwind lets you see and manage your CSS right inside your HTML.
- Tailwind can be deeply customised.
- Tailwind makes it easy for you to avoid premature abstraction, but when needed, you can abstract your styles into components.
- All unused styles are removed by [PurgeCSS](https://purgecss.com/) when the app is built to minimise file size.

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

I haven't done that in my app, as I am only using this code in one place. If I had to reuse it, I would then abstract this set of classes into a component.

### Responsive design

The app is styled for all screen sizes. On mobile, screen real estate is maximised by using narrower horizontal margins. On desktop, the width of the article text is not too wide, to allow for comfortable reading.

