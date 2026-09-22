# Wiki Formatting Reference

Copy-paste snippets for the standard wiki components. Each block is complete and ready to drop into a page.

## Contents

1. [Creating and Editing Wiki Articles](#creating-and-editing-wiki-articles)
2. [Page Skeleton](#page-skeleton)
3. [Headings](#headings)
4. [Codebox](#codebox)
5. [Table of Contents](#table-of-contents)
6. [Numbered List](#numbered-list)
7. [Numbered List with Screenshots](#numbered-list-with-screenshots)
8. [Collapsible Section](#collapsible-section)
9. [Notification Boxes](#notification-boxes)
10. [Data Tables](#data-tables)
11. [Lightbox](#lightbox)
12. [Direct Link to a MyDot Document](#direct-link-to-a-mydot-document)
13. [Work In Progress Indicator](#work-in-progress-indicator)
14. [Hidden Keywords for Search](#hidden-keywords-for-search)
15. [Tech Digest Template](#tech-digest-template)
16. [Embedding a WebM Video](#embedding-a-webm-video)

---

## Creating and Editing Wiki Articles

### Creating a new article

1. **Navigate to the URL for the desired page location.**

    ![Modifying the URL in the address bar](https://datadoctors.github.io/images/wiki-formatting/01-url.png)

    It's helpful to first navigate to the section you want the page to be at (in this example, Standard Operating Procedures → Customer Service) and then modify the URL in the address bar. Avoid special symbols, and remember: spaces need to be represented by underscores, and you must not use a period in the title except as a delineation of subsection in the wiki.

2. **In the Actions section, press the "Add" button.**

    ![The Add button in the Actions section](https://datadoctors.github.io/images/wiki-formatting/02-add-button.png)

    Feel free to start with the [Page Skeleton](#page-skeleton) to get the basic HTML situated, and then add or modify sections as needed, based on the examples in the rest of this reference page.

### Editing, moving, or deleting an existing page

In the Actions section on an existing page, you'll see the other admin features you can perform, including Edit, Move, Delete, and History.

![Edit, Move, Delete, and History in the Actions section](https://datadoctors.github.io/images/wiki-formatting/03-other-actions.png)

---

## Page Skeleton

A minimal starting point for a new page: a page title, one section heading, a paragraph, and a numbered list. Build from here using the components below.

```html
<h1>Page Title</h1>

<h2>Section Heading</h2>

<p>This is a short paragraph introducing the section. Keep it to a sentence or two.</p>

<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```

---

## Headings

Standard HTML headings, levels 1–3.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```

---

## Codebox

Displays a block of code in a styled box. Put your code between the `[code]` and `[/code]` tags.

```html
<div class="toastCode toastNote toastNote--code toastNote-margin-top">
    <div class="toast__content-Code">
        <p class="toast__message">
            <pre>[code]
Put your content here
[/code]</pre>
        </p>
    </div>
</div>
```

---

## Table of Contents

A numbered TOC with optional nested sub-items. Each `href` must match the `id` of the section it points to.

```html
<div class="tableofcontents">
    <h2>Table of Contents</h2>
    <ol>
        <li><a href="#example1">Example 1</a>
            <ol>
                <li><a href="#example1_alt">Example 1 alternative</a></li>
            </ol>
        </li>
        <li><a href="#example2">The 2nd example</a>
            <ol>
                <li><a href="#example2_alt">A 2nd example of the 2nd example</a></li>
            </ol>
        </li>
    </ol>
</div>
```

### Linking from the Table of Contents

Give the target element an `id` that matches the TOC link. Clicking "Example 1" above will jump to this element:

```html
<div id="example1"><h2>Example 1</h2></div>
```

The `id` can go directly on the heading as well:

```html
<h1 id="example1">Example 1</h1>
```

---

## Numbered List

```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ol>
```

---

## Numbered List with Screenshots

Use the `OLwithSS` class on the list. Each item holds a `<p>` and an `<img>`. Add `class="NoSS"` to any item that has no screenshot.

```html
<ol class="OLwithSS">
    <li>
        <p>In Outlook, click on <i>File</i> in the upper left hand corner.</p>
        <img src="https://datadoctors.github.io/images/outlookdata1.png" width="100px" height="100px">
    </li>
    <li class="NoSS">This is an item with no screenshot.</li>
    <li>
        <p>Under <i>Open and Export</i>, click on <i>Import/Export</i></p>
        <img src="https://datadoctors.github.io/images/outlookdata2.png" width="100px" height="100px">
    </li>
</ol>
```

---

## Collapsible Section

The `featuretitle` is always visible; the `featuretext` is revealed on click.

```html
<div class="toast toast--generic toastNote-margin-top">
    <div class="toast__content">
        <details>
            <summary>
                <div class="featuretitle">This is the part that will be visible to click on.</div>
            </summary>
            <div class="featuretext">Now you see me!</div>
        </details>
        <div style="clear: right"></div>
    </div>
</div>
```

---

## Notification Boxes

Four variants. Only the modifier class (`toastNote--success`, `--note`, `--tip`, `--alert`) and the label text change.

### Success

```html
<div class="toast toastNote toastNote--success">
    <div class="toast__content">
        <p class="toast__type">Success!</p>
        <p class="toast__message">
            Lorem ipsum dolor sit amet.
        </p>
    </div>
</div>
```

### Note

```html
<div class="toast toastNote toastNote--note">
    <div class="toast__content">
        <p class="toast__type">Note!</p>
        <p class="toast__message">
            Lorem ipsum dolor sit amet.
        </p>
    </div>
</div>
```

### Tip

```html
<div class="toast toastNote toastNote--tip">
    <div class="toast__content">
        <p class="toast__type">Tip!</p>
        <p class="toast__message">
            Lorem ipsum dolor sit amet.
        </p>
    </div>
</div>
```

### Alert (pulsing)

The extra `alertPulse` class adds the pulse animation; drop it for a static alert.

```html
<div class="toast toastNote toastNote--alert alertPulse">
    <div class="toast__content">
        <p class="toast__type">Alert!</p>
        <p class="toast__message">
            Lorem ipsum dolor sit amet.
        </p>
    </div>
</div>
```

---

## Data Tables

### With highlighted first column

The first cell in each body row is a `<th>`, which gets the highlight styling.

```html
<table class="dataTable">
    <thead>
        <tr>
            <th>Heading 1</th>
            <th>Heading 2</th>
            <th>Heading 3</th>
            <th>Heading 4</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Row 1-1</th>
            <td>Row 1-2</td>
            <td>Row 1-3</td>
            <td>Row 1-4</td>
        </tr>
        <tr>
            <th>Row 2-1</th>
            <td>Row 2-2</td>
            <td>Row 2-3</td>
            <td>Row 2-4</td>
        </tr>
        <tr>
            <th>Row 3-1</th>
            <td>Row 3-2</td>
            <td>Row 3-3</td>
            <td>Row 3-4</td>
        </tr>
        <tr>
            <th>Row 4-1</th>
            <td>Row 4-2</td>
            <td>Row 4-3</td>
            <td>Row 4-4</td>
        </tr>
    </tbody>
</table>
```

### Without highlighted first column

Add `class="plain"` to the first-column `<th>` cells.

```html
<table class="dataTable">
    <thead>
        <tr>
            <th>Heading 1</th>
            <th>Heading 2</th>
            <th>Heading 3</th>
            <th>Heading 4</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th class="plain">Row 1-1</th>
            <td>Row 1-2</td>
            <td>Row 1-3</td>
            <td>Row 1-4</td>
        </tr>
        <tr>
            <th class="plain">Row 2-1</th>
            <td>Row 2-2</td>
            <td>Row 2-3</td>
            <td>Row 2-4</td>
        </tr>
        <tr>
            <th class="plain">Row 3-1</th>
            <td>Row 3-2</td>
            <td>Row 3-3</td>
            <td>Row 3-4</td>
        </tr>
        <tr>
            <th class="plain">Row 4-1</th>
            <td>Row 4-2</td>
            <td>Row 4-3</td>
            <td>Row 4-4</td>
        </tr>
    </tbody>
</table>
```

---

## Lightbox

Click the thumbnail to open a full-size overlay. If a page has more than one lightbox image, increment the `image-1` id (and both references to it) for each additional image: `image-2`, `image-3`, etc.

```html
<span class="lb-album">
    <a href="#image-1">
        <img src="https://datadoctors.github.io/images/outlookprofile04.png" alt="image01" width="500px">
    </a>
    <div class="lb-overlay" id="image-1">
        <a href="#page" class="lb-close"><img src="https://datadoctors.github.io/images/outlookprofile04.png" alt="image01"></a>
    </div>
</span>
```

---

## Direct Link to a MyDot Document

1. In MyDot, hover over the file name of the document you want to link to.
2. A tooltip appears showing the file's URL; note the number after the colon (the file ID).
3. Replace `9596` in the snippet below with that number.

Reference screenshot: `https://datadoctors.github.io/images/MyDotDocumentDirectLink.png`

```html
<a href="https://my.datadoctors.com/file.cfm?f=9596" target="_blank">file</a>
```

---

## Work In Progress Indicator

An alert box with the "work in progress" graphic, for articles that aren't finished yet.

```html
<div class="toast toastNote toastNote--alert">
    <div class="toast__content">
        <p class="toast__type">This article is a...</p>
        <p class="toast__message">
            <img src="https://datadoctors.github.io/images/work.png" alt="image01" width="200px">
        </p>
    </div>
</div>
```

---

## Hidden Keywords for Search

A hidden div for extra search terms. Replace `MyKeywords` with the keywords you want the page to be findable by.

```html
<div id="keywords">MyKeywords</div>
```

---

## Tech Digest Template

A collapsible success-styled box with a title, date, several titled sections, and a list of recent wiki article links. Fill in the volume number, date, titles, and links.

```html
<div class="toast toast--success">
    <div class="toast__content">
        <details>
            <summary>
                <div class="featuretitle">Tech Digest Vol X</div>
                <div class="featuredate">00/00/00</div>
            </summary>
            <div class="featuretext">
<br>
<h3>Title</h3>
===========================================<br>


<h3>Title</h3>
===========================================<br>


<h3>Title</h3>
===========================================<br>


<h3>Title</h3>
===========================================<br>


<h3>Title</h3>
===========================================<br>


<h3>Recent or Updated Wiki Articles</h3>
===========================================<br>
<a href="" target="_blank">Link</a><br>
<a href="" target="_blank">Link</a><br>
<a href="" target="_blank">Link</a><br>
<a href="" target="_blank">Link</a><br>
<a href="" target="_blank">Link</a>

            </div>
        </details>
        <div style="clear: right"></div>
    </div>
</div>
```

---

## Embedding a WebM Video

```html
<video style="max-width:750px;" controls>
    <source src="https://datadoctors.github.io/images/gifs/tab-completion.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```