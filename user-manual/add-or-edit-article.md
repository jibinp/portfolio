# Add or edit an article

Articles live in one folder:

```
jobPortfolio/src/content/articles/
```

Each article is one `.md` file. The file name becomes the link, for example:

```
debugging-hardware-firmware-line.md
→ https://jibinp.github.io/portfolio/articles/debugging-hardware-firmware-line/
```

---

## Way 1: on the GitHub website (nothing to install)

### Edit an article

1. Go to **https://github.com/jibinp/portfolio**
2. Open `jobPortfolio` → `src` → `content` → `articles`
3. Click the article file.
4. Click the ✏️ **pencil** (top right of the file).
5. Change the text. Use the **Preview** tab to check how it looks.
6. Click **Commit changes…** → **Commit changes**.
7. Wait about 2 minutes, then open the article link to check.

### Add a new article

1. Go to the same `articles` folder on GitHub.
2. Click **Add file** → **Create new file**.
3. Name it in lowercase with dashes, ending in `.md`, for example `power-loss-safe-storage.md`.
4. Paste the **header** (see below) and then your text.
5. Click **Commit changes…** → **Commit changes**.
6. Wait about 2 minutes. It shows in the Writing list and at its own link.

Easiest start: open an existing article, copy all its text, and replace the words. The formatting stays right.

---

## Way 2: on your computer with VS Code

1. Open the folder `E:\jp\Others\jpp\Career\Developer Profile\Portfolio` in VS Code.
2. Edit or add the file in `jobPortfolio/src/content/articles/`.
3. Optional, to preview before publishing: open a terminal in VS Code and run

   ```sh
   cd jobPortfolio
   npm run dev
   ```

   then open the link it prints (usually http://localhost:4321/portfolio/). Press `Ctrl + C` in the terminal to stop it.
4. Open **Source Control** (the branch icon on the left).
5. Type a short message, for example `Add article on power-loss-safe storage`.
6. Click **Commit**, then **Sync Changes** (or **Push**).
7. Wait about 2 minutes, then check the live link.

---

## The header (required)

Every article must start with this block, exactly in this shape. Without it the site does not update.

```
---
title: "Your article title"
summary: "One or two sentences. Shown in the article list and in link previews."
tags: ["Debugging", "Firmware"]
readMin: 5
order: 0
---
```

| Field | What to put |
|---|---|
| `title` | The article title, inside double quotes |
| `summary` | 1–2 sentences, inside double quotes |
| `tags` | 2–3 short topics, each in quotes, separated by commas |
| `readMin` | Reading time in minutes: number of words ÷ 200, rounded |
| `order` | Position in the list. Lower shows first. Use `0` for the newest, and raise the others if needed |

Rules that break the header if missed:
- The `---` lines must be the very first and last lines of the block.
- Text values go inside `"double quotes"`. If the text itself needs a quote, use a single one: `"It's fine"`.
- `readMin` and `order` are plain numbers, without quotes.

---

## Formatting the text (Markdown)

The site styles everything for you. You only type these symbols:

| You type | You get |
|---|---|
| `## Section title` | A section heading |
| `**important**` | **bold** |
| `*note*` | *italic* |
| `- point` | A bullet list |
| `1. step` | A numbered list |
| `[my portfolio](https://jibinp.github.io/portfolio/)` | A link |
| `` `code` `` | `inline code` |
| An empty line | A new paragraph |

Example:

```
## Measure on both sides of the line

When a fault could be hardware or firmware, **measure where they meet**.

- Check the signal at the pin
- Compare it with what the firmware expects
```

Tips:
- Leave an **empty line** between paragraphs, headings and lists.
- Use `##` for sections. Don't use a single `#`; the page title already comes from the header.
- Keep paragraphs short: 2–4 sentences read best on a phone.

---

## Delete an article

1. Open the article file on GitHub.
2. Click the **⋯** menu (top right) → **Delete file** → **Commit changes**.

Its link stops working, so only delete articles you have not shared.

---

## After publishing: share on LinkedIn

- Post the text without the link, and put the article link in the **first comment**. LinkedIn shows posts with outside links to fewer people.
- Best time: Tuesday to Thursday, **7:30 pm India = 9:00 am Toronto**.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Red ❌ in the **Actions** tab | Almost always the header. Check the `---` lines, the double quotes, and that `readMin` and `order` are numbers |
| Article not showing after 2 minutes | Refresh with `Ctrl + F5`. Check the Actions tab for a green ✅ |
| Formatting looks wrong | Missing empty line between paragraphs or before a list |
| Wrong position in the list | Change the `order` numbers |
