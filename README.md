# Code Box Copy

## What is this?

<p>Code Box Copy is a lightweight, flexible syntax highlighter jQuery plugin, that provides easy to use, simple method to copy any text to the clipboard with a single click.</p>

## Usage

<p>Put the following lines below to the head section. Do not forget to use the copy function :)</p>

<pre>&lt;!-- Cod Box Copy begin --&gt;
&lt;link href=&quot;prism/prism.min.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;link href=&quot;code-box-copy/css/code-box-copy.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;script src=&quot;js/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;prism/prism.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;clipboard/clipboard.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;code-box-copy/js/code-box-copy.js&quot;&gt;&lt;/script&gt;
&lt;!-- Cod Box Copy end --&gt;</pre>

## Content you want to copy

<p>Test it with a simple HTML code like below:</p>

<pre>&lt;div class=&quot;code-box-copy&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button class=&quot;code-box-copy__btn&quot; data-clipboard-target=&quot;#example-html&quot; title=&quot;Copy&quot;&gt;&lt;/button&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;pre&gt;&lt;code class=&quot;language-html&quot; id=&quot;example-html&quot;&gt;&amp;lt;div class=&amp;quot;example&amp;quot;&amp;gt;
&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum
&amp;lt;/div&amp;gt;&lt;/code&gt;&lt;/pre&gt;
&lt;/div&gt;</pre>

## Plugin initialization

<p>Put in the head section the plugin initialization's code or in the end of the body section:</p>

<pre>&lt;script&gt;
    $('.code-box-copy').codeBoxCopy();
&lt;/script&gt;</pre>

<p>Plugin initialization with parameters:</p>
<pre>&lt;script&gt;
$('.code-box-copy').codeBoxCopy({
    tooltipText: 'Copied',
    tooltipShowTime: 1000,
    tooltipFadeInTime: 300,
    tooltipFadeOutTime: 300
});
&lt;/script&gt;</pre>

## Parameters

<ul>
    <li>tooltipText {string} | Default value: 'Copied'. – text of the tooltip when the user click to the copy button</li>
    <li>tooltipShowTime {number} | Default value: 1000. – the time (in milliseconds) until the tooltip appears after fade in and before the fade out</li>
    <li>tooltipFadeInTime {number} | Default value: 300. – the fade in time (in milliseconds) until the tooltip appears</li>
    <li>tooltipFadeOutTime {number} | Default value: 300. – the fade in time (in milliseconds) until the tooltip disappears</li>
</ul>

## License

<p>
Copyright 2017 © <a href="https://jablonczay.com" target="_blank">jablonczay.com</a>
<br><br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
<br><br>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
<br><br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p>

## Other projects

<ul>
    <li><a href="https://codecanyon.net/item/jquery-forms-elegant-elements/18656657?ref=jablonczay" target="_blank" title="Elegant Elements – jQuery HTML Form Plugin">Elegant Elements – jQuery HTML Form Plugin</a></li>
    <li><a href="https://audiojungle.net/user/jablonczay/portfolio" target="_blank" title="Royalty free sounds">AudioJungle</a></li>
</ul>
