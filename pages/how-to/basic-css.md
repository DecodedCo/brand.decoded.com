# Basic CSS Styles

For simple apps and websites, include the following css file in the `head` of your html.

```
<link rel="stylesheet" href="https://brand-assets.decoded.com/css/decoded.css">
```

The basic decoded.css includes styles for:

## Typography

All elements as described on the [Typography](/pages/typography) page are available in css.

Where appropriate they follow the basic HTML elements. i.e.

- H1-H6
- ordered and unordered lists OL / UL
- paragraphs

Fonts are automatically loaded either locally, or through the Google Fonts CDN.

## Grid

The decoded.css includes the basic bootstrap grid.
For information on how to use it, check the [bootstrap grid documentation](http://v4-alpha.getbootstrap.com/layout/grid/)


## Margin and padding

We included helper classes to add padding and margin to elements.

Add classes `margin-S` to `margin-XL` and `padding-S` to `padding-XL`

Available classes are:

```css
.noMargin {}
.noMargin-top {}
.noMargin-right {}
.noMargin-bottom {}
.noMargin-left {}

.margin {}
.margin-top {}
.margin-right {}
.margin-bottom {}
.margin-left {}

.margin-S {}
.margin-top-S {}
.margin-right-S {}
.margin-bottom-S {}
.margin-left-S {}

.margin-L {}
.margin-top-L {}
.margin-right-L {}
.margin-bottom-L {}
.margin-left-L {}

.margin-XL {}
.margin-top-XL {}
.margin-right-XL {}
.margin-bottom-XL {}
.margin-left-XL {}

.noPadding {}
.noPadding-top {}
.noPadding-right {}
.noPadding-bottom {}
.noPadding-left {}

.padding {}
.padding-top {}
.padding-right {}
.padding-bottom {}
.padding-left {}

.padding-S {}
.padding-top-S {}
.padding-right-S {}
.padding-bottom-S {}
.padding-left-S {}

.padding-L {}
.padding-top-L {}
.padding-right-L {}
.padding-bottom-L {}
.padding-left-L {}

.padding-XL {}
.padding-top-XL {}
.padding-right-XL {}
.padding-bottom-XL {}
.padding-left-XL {}
```


## Basic Template

To start a basic static page, you can use the following HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Your App Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <link rel="icon" href="https://assets.decoded.com/images/favicon.png" />
    <link rel="stylesheet" href="https://brand-assets.decoded.com/css/decoded.css">
    <link rel="stylesheet" href="https://brand-assets.decoded.com/css/nav.css">
</head>
<body class="container">
    <div role="main">
        <header class="Nav fixed light" role="navigation">

            <a href="https://decoded.com/" class="Nav-brand"><img src="https://assets.decoded.com/d-components/img/decoded-round.svg" alt="Decoded"></a>
            <a class="Nav-toggle js-nav-toggle"><span></span></a>

            <ul class="Nav-blocks left">
            <!-- blocks in floating to the left of the nav bar -->
                <li>
                  <h3>My App</h3>
                </li>
            </ul>

            <ul class="Nav-blocks right">
            <!-- blocks in floating to the right of the nav bar -->
            </ul>
        </header>

        <div class="row typography">
        <!-- content here using the bootstrap grid-->
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.js"></script>
    <script src="https://brand-assets.decoded.com/js/nav.js"></script>
</body>
</html>


```

you can also [download the template](https://brand-assets.decoded.com/BrandGuidelines/basic.html).
