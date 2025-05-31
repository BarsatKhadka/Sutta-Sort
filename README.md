# Sutta Sort 🪷

**A small attempt to make Early Buddhist suttas more accessible through thematic tagging and simple search.**

Sutta Sort is a personal project to help explore the ORIGINAL teachings of the Buddha by organizing suttas with doctrinal tags like *impermanence (anicca)*, *not-self (anatta)*, *restraint*, *dependent-origination (patticasamuppada)*, and more. It is built as a static, front-end-only web app using React, with no backend or database - lightweight, fast, and simple.

This is not a scholarly resource, but a learning tool and offering from a practitioner/developer working to better understand and share the Dhamma.

---

## ✨ Features

- Browse suttas by overlapping Dhamma themes
- Filter using multiple tags (AND / OR logic)
- Search by sutta title or summary
- Responsive, minimalist design
- Links to full texts on [SuttaCentral](https://suttacentral.net)

---

## 📁 Data Format

Suttas are stored in a static JSON file (`/data/suttas.json`), with fields like:

```json
{
  "title": "Anattalakkhaṇa Sutta",
  "summary": "The discourse on not-self, delivered to the first five bhikkhus.",
  "tags": ["anatta", "five aggregates", "no-self"],
  "link": "https://suttacentral.net/sn22.59/en"
}

```
## 🙏 A Note from the Developer

This project is a personal act of devotion and study. The tags do not claim to represent any monastic lineage or authoritative interpretation of the Dhamma. Suttas are quoted from public domain translations where possible, always linking back to [SuttaCentral](https://suttacentral.net/pitaka/sutta?lang=en).


- May this small effort be of benefit.  
- May all be free from craving, greed, aversion, and distraction.  
- May all beings understand the nature of impermanence as it really is.



Because the Blessed one said:

>**Better it is to live one day seeing the rise and fall of things**  
> than to live a hundred years without ever seeing the rise and fall of things.  
> – *Dhp 113*



