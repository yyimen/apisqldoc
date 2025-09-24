# 将markdown转html工具
import markdown
import os
import re

def convert_md_to_html(md_file_path, output_dir="html_output"):
    with open(md_file_path, 'r', encoding='utf-8') as f:
        md_content = f.read()

    # Extract the language navigation part
    lang_nav_match = re.search(r'<p align="right">.*?</p>', md_content, re.DOTALL)
    lang_nav_html = ""
    if lang_nav_match:
        lang_nav_html = lang_nav_match.group(0)
        # Remove the language navigation from the markdown content before conversion
        md_content_without_nav = md_content.replace(lang_nav_html, '', 1)
    else:
        md_content_without_nav = md_content

    # Convert markdown to HTML
    html_body = markdown.markdown(md_content_without_nav, extensions=['fenced_code', 'tables'])

    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Generate output HTML file path
    base_name = os.path.basename(md_file_path)
    html_file_name = base_name.replace('.md', '.html')
    output_html_path = os.path.join(output_dir, html_file_name)

    # Modify language navigation links to point to .html files
    if lang_nav_html:
        def replace_md_with_html(match):
            return match.group(1) + match.group(2).replace('.md', '.html') + match.group(3)
        lang_nav_html = re.sub(r'(<a href=")(.*?\.md)(">)', replace_md_with_html, lang_nav_html)
        # Add a class to the p tag for styling
        lang_nav_html = lang_nav_html.replace('<p align="right">', '<p class="lang-nav" align="right">')

    # Construct the full HTML content
    full_html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{html_file_name.replace('.html', '')}</title>
    <style>
        body {{ font-family: sans-serif; line-height: 1.6; margin: 0 auto; max-width: 800px; padding: 20px; }}
        pre {{ background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; }}
        code {{ font-family: monospace; }}
        table {{ width: 100%; border-collapse: collapse; margin-bottom: 1em; }}
        th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
        th {{ background-color: #f2f2f2; }}
        img {{ max-width: 100%; height: auto; }}
        .lang-nav {{
            white-space: nowrap; /* Prevent wrapping */
            overflow-x: auto; /* Allow horizontal scrolling if content overflows */
            -webkit-overflow-scrolling: touch; /* Improve scrolling on iOS */
            padding-bottom: 5px; /* Add some padding at the bottom */
        }}
        .lang-nav a {{
            display: inline-block; /* Ensure links are treated as blocks for padding/margin */
            padding: 0 5px; /* Add some spacing between links */
        }}
    </style>
</head>
<body>
    {lang_nav_html}
    {html_body}
</body>
</html>"""

    with open(output_html_path, 'w', encoding='utf-8') as f:
        f.write(full_html_content)
    print(f"Converted {md_file_path} to {output_html_path}")

if __name__ == "__main__":
    md_files = [
        'readme.md',
        'README.zh-Hans.md',
        'README.zh-Hant.md',
        'README.ja.md',
        'README.ko.md',
        'README.de.md',
        'README.fr.md',
        'README.it.md',
        'README.pt.md',
        'README.es.md',
        'README.ru.md'
    ]
    
    for md_file in md_files:
        convert_md_to_html(md_file)

    output_dir = "html_output" # Define output_dir here
    # Create index.html
    index_html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API SQL Documentation</title>
    <style>
        body { font-family: sans-serif; line-height: 1.6; margin: 0 auto; max-width: 800px; padding: 20px; }
        ul { list-style-type: none; padding: 0; }
        li { margin-bottom: 10px; }
        a { text-decoration: none; color: #007bff; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>API SQL Documentation</h1>
    <p>Please select a language:</p>
    <ul>
        <li><a href="./html_output/readme.html">English</a></li>
        <li><a href="./html_output/README.zh-Hans.html">简体中文</a></li>
        <li><a href="./html_output/README.zh-Hant.html">繁體中文</a></li>
        <li><a href="./html_output/README.ja.html">日本語</a></li>
        <li><a href="./html_output/README.ko.html">한국어</a></li>
        <li><a href="./html_output/README.de.html">Deutsch</a></li>
        <li><a href="./html_output/README.fr.html">Français</a></li>
        <li><a href="./html_output/README.it.html">Italiano</a></li>
        <li><a href="./html_output/README.pt.html">Português</a></li>
        <li><a href="./html_output/README.es.html">Español</a></li>
        <li><a href="./html_output/README.ru.html">Русский</a></li>
    </ul>
</body>
</html>"""
    with open(os.path.join(output_dir, "index.html"), 'w', encoding='utf-8') as f:
        f.write(index_html_content)
    print(f"Created {os.path.join(output_dir, 'index.html')}")