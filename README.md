# Code Box Copy

<h2>What is this?</h2>

Code Box Copy is a lightweight, flexible syntax highlighter jQuery plugin, that provides easy to use, simple method to copy any text to the clipboard with a single click.

<h2>Usage</h2>

Put the following lines below to the head section.

```html
<!-- Cod Box Copy begin -->
<link href="prism/prism.min.css" rel="stylesheet">
<link href="code-box-copy/css/code-box-copy.css" rel="stylesheet">
<script src="js/jquery.min.js"></script>
<script src="prism/prism.min.js"></script>
<script src="clipboard/clipboard.min.js"></script>
<script src="code-box-copy/js/code-box-copy.js"></script>
<!-- Cod Box Copy end -->
```

<h2>Content you want to copy</h2>

Test it with a simple HTML code like below:

```html
<div class="code-box-copy">
    <button class="code-box-copy__btn" data-clipboard-target="#example-html" title="Copy"></button>
    <pre><code class="language-html" id="example-html"><div class="example">
    Lorem ipsum
</div></code></pre>
</div>
```
<h2>Plugin initialization</h2>

Put in the head section the plugin initialization's code or in the end of the body section:

```html
<script>
    $('.code-box-copy').codeBoxCopy();
</script>
```

Plugin initialization with parameters:

```html
<script>
$('.code-box-copy').codeBoxCopy({
    tooltipText: 'Copied',
    tooltipShowTime: 1000,
    tooltipFadeInTime: 300,
    tooltipFadeOutTime: 300
});
</script>
```

<h2>Parameters</h2>

- tooltipText {string} | Default value: 'Copied'. – text of the tooltip when the user click to the copy button
- tooltipShowTime {number} | Default value: 1000. – the time (in milliseconds) until the tooltip appears after fade in and before the fade out
- tooltipFadeInTime {number} | Default value: 300. – the fade in time (in milliseconds) until the tooltip appears
- tooltipFadeOutTime {number} | Default value: 300. – the fade in time (in milliseconds) until the tooltip disappears

<h2>License – MIT</h2>

Copyright 2017 © https://jablonczay.com


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<h2>Other projects</h2>

- [GDPR Cookie Law – GDPR Cookie Compliance jQuery Plugin](https://codecanyon.net/item/gdpr-cookie-law/22061612?ref=jablonczay)
- [Elegant Elements – jQuery HTML Form Plugin](https://codecanyon.net/item/jquery-forms-elegant-elements/18656657?ref=jablonczay)
- [AudioJungle – Royalty free sounds](https://audiojungle.net/user/jablonczay/portfolio)
- [Responsive Testimonals for jQuery](https://github.com/jablonczay/responsive-testimonals-for-jquery/)
- [Scroll Styler – Free Wordpress Plugin](https://wordpress.org/plugins/scroll-styler/)
