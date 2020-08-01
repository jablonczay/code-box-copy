[![Author](https://img.shields.io/badge/author-S%C3%A1ndor%20Jablonczay-lightgrey.svg?colorB=9900cc )](https://jablonczay.com/)
[![Release](https://img.shields.io/github/release/jablonczay/code-box-copy.svg)](https://github.com/jablonczay/code-box-copy/releases)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](https://raw.githubusercontent.com/jablonczay/code-box-copy/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/jablonczay/code-box-copy.svg?style=social)](https://twitter.com/jablonczay)

# Code Box Copy

### What is this?

Code Box Copy is a lightweight, flexible syntax highlighter jQuery plugin that provides an easy-to-use, simple method to copy any text to the clipboard with a single click.

#### :link: Demo: [Usage Examples](https://rawcdn.githack.com/jablonczay/code-box-copy/master/index.html)

## Quick Start

Add the following lines below to your page head:

```html
<!-- Cod Box Copy begin -->
<link href="prism/prism.min.css" rel="stylesheet" />
<link href="code-box-copy/css/code-box-copy.css" rel="stylesheet" />
<script src="js/jquery.min.js"></script>
<script src="prism/prism.min.js"></script>
<script src="clipboard/clipboard.min.js"></script>
<script src="code-box-copy/js/code-box-copy.js"></script>
<!-- Cod Box Copy end -->
```

### CDN: jsDelivr

Alternatively, you can load the required scripts via CDN:

```html
<!-- Cod Box Copy begin -->
<link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
<link href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/gh/jablonczay/code-box-copy/code-box-copy/css/code-box-copy.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"></script>
<script src="https://cdn.jsdelivr.net/combine/gh/jablonczay/code-box-copy/clipboard/clipboard.min.js,gh/jablonczay/code-box-copy/code-box-copy/js/code-box-copy.min.js"></script>
<!-- Cod Box Copy end -->
```

**Tip:** You may wish to include Prism's [normalize-whitespace](https://prismjs.com/plugins/normalize-whitespace/) plugin if you are experiencing issues with tabbing/spacing. To do so, simply replace the above `https://cdn.jsdelivr.net/npm/prismjs/prism.min.js` script tag with:

```html
<script src="https://cdn.jsdelivr.net/combine/npm/prismjs/prism.min.js,npm/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js"></script>
```

### Example Usage

Add the following example code to the body of your page:

```html
<div class="code-box-copy">
    <button class="code-box-copy__btn" data-clipboard-target="#example-html" title="Copy"></button>
    <pre><code class="language-html" id="example-html">&lt;div class=&quot;example&quot;&gt;
    Lorem ipsum
	&lt;/div&gt;</code></pre>
</div>
```

Notice that special characters within the `<code>` element must be [converted to HTML entities](https://www.online-toolz.com/tools/text-html-entities-convertor.php).

### Plugin Initialization

Add the following to the page head or at the end of the body section of your page:

```html
<script>
(function($) {
    $('.code-box-copy').codeBoxCopy();
})(jQuery);
</script>
```

You may also add optional parameters:

```html
<script>
(function($) {
    $('.code-box-copy').codeBoxCopy({
        tooltipText: 'Copied',
        tooltipShowTime: 1000,
        tooltipFadeInTime: 300,
        tooltipFadeOutTime: 300
    });
})(jQuery);
</script>
```

## Parameters

- `tooltipText` _string_ | Default value: 'Copied' – Text of the tooltip when the user clicks the copy button
- `tooltipShowTime` _integer_ | Default value: 1000 – The time (in milliseconds) until the tooltip appears after fade in and before the fade out
- `tooltipFadeInTime` _integer_ | Default value: 300 – The fade in time (in milliseconds) until the tooltip appears
- `tooltipFadeOutTime` _integer_ | Default value: 300 – The fade in time (in milliseconds) until the tooltip disappears

## Other Projects

- [Elegant Age Verification – Responsive age-gate plugin for WordPress](https://1.envato.market/ag5YM)
- [GDPR Cookie Law – GDPR Cookie Compliance jQuery Plugin](https://1.envato.market/50vqn)
- [Elegant Elements – jQuery HTML Form Plugin](https://1.envato.market/j695n)
- [AudioJungle – Royalty free sounds](https://audiojungle.net/user/jablonczay/portfolio)
- [Responsive Testimonals for jQuery](https://github.com/jablonczay/responsive-testimonals-for-jquery/)
- [Scroll Styler – Free Wordpress Plugin](https://wordpress.org/plugins/scroll-styler/)
- [Royalty-free Photos](https://www.shutterstock.com/g/jablonczay)
