fetch('contents/ho2-content.txt')
.then(response => response.text())
.then(text => {
    const sections = parseSections(text);
    
    Object.entries(sections).forEach(([name, content]) => {
        const element = document.getElementById(name);
        if (element) {
            element.textContent = content;
            // If it's a code block that needs Prism highlighting:
            if (element.tagName === 'CODE') {
                Prism.highlightElement(element);
            }
        }
    });
})
.catch(console.error);


function parseSections(text) {
    const sections = {};
    // Match ```sectionName``` followed by content until next ```
    const regex = /```([^`]+)```([\s\S]+?)(?=```|$)/g;
    let match;
    
    while ((match = regex.exec(text)) !== null) {
        const [_, name, content] = match;
        sections[name.trim()] = content.replace(/^\n/, ''); // Remove only leading newline
    }
    
    return sections;
}