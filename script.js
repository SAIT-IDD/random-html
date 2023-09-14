const footerYear = () => {
    return new Date().getFullYear('Y');
}

const getRandomHTMLElementWithLink = () => {
    const htmlElementNames = [
        "a", "abbr", "address", "article", "aside", "audio", "b", "blockquote",
        "body", "button", "canvas", "caption", "cite", "code", "col", "colgroup",
        "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl",
        "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form",
        "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i",
        "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link",
        "main", "map", "mark", "meta", "meter", "nav", "noscript", "object", "ol",
        "optgroup", "option", "output", "p", "param", "picture", "pre", "progress",
        "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot",
        "small", "source", "span", "strong", "style", "sub", "summary", "sup",
        "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead",
        "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"
    ];

    const htmlElementInfo = htmlElementNames.map((name) => ({
        name: name,
        link: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${name}`,
    }));

    const randomIndex = Math.floor(Math.random() * htmlElementInfo.length);
  
    const randomElementInfo = htmlElementInfo[randomIndex];
  
    const h2 = document.querySelector('h2');

    if (h2) {
        h2.innerHTML = `<code><a href="${randomElementInfo.link}" title="Learn about &lt;${randomElementInfo.name}&gt;" target="_blank">&lt;${randomElementInfo.name}&gt;</a></code>`;
    }

};

const init = () => {
    const yearSpan = document.querySelector('.year');
    if (yearSpan) {
        yearSpan.textContent = footerYear();
    }
}

init();
   