---
title: คู่มือจัดการเนื้อหา
description: วิธีเพิ่มและอัปเดตทุกส่วนของเว็บไซต์ KOPE SOLUTION ด้วย Markdown
---

# คู่มือจัดการเนื้อหา

เนื้อหาปกติควรอยู่ใน Markdown ใต้ `docs/` ใช้ HTML เฉพาะ layout ที่ Markdown ทำไม่ได้ และเก็บ style รวมใน `docs/assets/stylesheets/extra.css` ก่อนแก้ไขควรสร้าง branch, preview ในเครื่อง และตรวจ strict build

## 1. Add a Knowledge Hub page { #add-knowledge }

1. คัดลอก `docs/templates/knowledge-article.md` ไปยังหมวดที่เหมาะสม
2. ตั้งชื่อไฟล์เป็น lowercase-kebab-case และแก้ title/description/status
3. เพิ่มบทนำ outline แหล่งอ้างอิงและข้อจำกัด
4. เพิ่มไฟล์ใน `nav` ของ `mkdocs.yml`
5. เชื่อมจาก index ของหมวดและรัน strict build

## 2. Add a blog article { #add-blog }

1. คัดลอก `docs/templates/blog-article.md` ไป `docs/blog/posts/your-slug.md`
2. กรอก title, slug, author, category, tags, summary, cover และ related links
3. ระหว่างเขียนใช้ `status: draft`, `publication_date: "[ยังไม่เผยแพร่]"`
4. เมื่อเผยแพร่จริง เปลี่ยนเป็น `status: published` และใช้วันที่จริงแบบ `YYYY-MM-DD`
5. เพิ่มบทความใน Latest, Category และ Archive; เพิ่ม `<item>` ใน `docs/blog/feed.xml` ด้วยข้อมูลจริงเท่านั้น
6. ตรวจ internal links, alt text, สิทธิ์รูปภาพ และ strict build

RSS ปัจจุบันเป็นไฟล์ static เพื่อให้ build เสถียรและไม่มีวันเผยแพร่ปลอม จึงต้องอัปเดต feed เมื่อ publish บทความจริง

## 3. Add a YouTube video { #add-video }

คัดลอก `docs/templates/youtube-video-entry.md` และใช้ Video ID จริง ใช้ `youtube-nocookie.com/embed/VIDEO_ID`, ใส่ `title`, `loading="lazy"`, `referrerpolicy` และ `allowfullscreen` ตามตัวอย่างใน [คู่มือ YouTube](../youtube/adding-content.md)

## 4. Add a playlist { #add-playlist }

เพิ่มชื่อ คำอธิบาย และ Playlist URL จริงใน `docs/youtube/index.md` หาก embed ใช้ privacy-enhanced URL `youtube-nocookie.com/embed/videoseries?list=PLAYLIST_ID` และทดสอบบน mobile

## 5. Add a Portfolio project { #add-portfolio }

คัดลอก `docs/templates/portfolio-project.md` ไป `docs/portfolio/projects/` เลือก status จากรายการที่รองรับ เพิ่มเฉพาะข้อมูลและหลักฐานที่เปิดเผยได้ แล้วเพิ่ม link ใน Portfolio index และ `mkdocs.yml`

## 6. Add an active Project { #add-project }

คัดลอก `docs/templates/active-project.md` ไป `docs/projects/` ระบุ current phase, milestones, progress update date, known issues และ next steps แยกงานที่เสร็จพร้อมนำเสนอไป Portfolio เมื่อมีหลักฐานเพียงพอ

## 7. Add a Product { #add-product }

คัดลอก `docs/templates/product-page.md` ไป `docs/products/` กรอกเฉพาะสเปก ราคา สถานะ warranty และ certification ที่ยืนยันแล้ว ห้ามเพิ่ม cart, checkout หรือ payment code

## 8. Add product images { #add-product-images }

สร้างโฟลเดอร์ `docs/assets/images/products/product-slug/` ใช้ภาพที่เจ้าของมีสิทธิ์เผยแพร่ บีบอัดให้เหมาะกับเว็บ ตั้งชื่อสื่อความหมาย และใส่ alt text ทุกภาพ Hero และ gallery ต้องแสดงได้ใน mobile

## 9. Add downloadable files { #add-downloads }

ตรวจ license, secrets และข้อมูลส่วนบุคคลก่อนเก็บไฟล์เล็กใน `docs/assets/downloads/` สำหรับไฟล์ใหญ่ใช้ GitHub Releases เพิ่ม version, revision, checksum และ related page โดยใช้ Download entry template

## 10. Update social links { #update-social }

1. แก้ placeholders ใน `docs/contact/index.md`
2. แก้ `extra.social` ใน `mkdocs.yml`
3. ใช้ `https://` และตรวจว่าเป็น account จริง
4. ลิงก์ภายนอกจะได้รับ `target="_blank"` และ `rel="noopener noreferrer"` จาก `site.js`

## 11. Update navigation { #update-navigation }

แก้ `nav` ใน `mkdocs.yml` โดยให้ทุก entry ชี้ไฟล์ที่มีอยู่ ใช้ชื่อสั้นและจัดกลุ่มตาม section หลังย้ายไฟล์ให้ค้นหา link เก่าทั้ง repository และรัน strict build

## 12. Replace the logo { #replace-logo }

ไฟล์ Version 2027 ที่ใช้งานอยู่คือ `docs/assets/images/kope-solution-logo-2027.png` สำหรับ hero และ `docs/assets/images/kope-solution-mark-2027.png` สำหรับ header/favicon ส่วน `docs/assets/images/kope-solution-logo-2027-light.png` ใช้บนพื้นหลังมืด หากเปลี่ยน artwork ในอนาคตให้แก้ path ใน `mkdocs.yml` และ `docs/index.md` พร้อมตรวจ alt text, transparency และ contrast ทั้ง light/dark mode

## 13. Replace the favicon { #replace-favicon }

เว็บไซต์ใช้ `docs/assets/images/kope-solution-mark-2027.png` เป็น favicon หากต้องการไฟล์เฉพาะขนาดเล็กให้เพิ่ม SVG/PNG ที่อ่านออกชัดเจนและแก้ `theme.favicon` ใน `mkdocs.yml`

## 14. Update the profile { #update-profile }

แทน `docs/assets/images/profile-placeholder.svg` ด้วยภาพจริงที่เจ้าของอนุญาต แล้วแก้ biography, skills, interests, philosophy, experience summary และ contact channels ใน `docs/about/index.md` ห้ามเพิ่มประวัติ นายจ้าง ลูกค้า การศึกษา หรือ credentials ที่ตรวจไม่ได้

## 15. Update LINE and marketplace links { #update-marketplace }

สำหรับเฟสแรก ให้แทน `https://example.com/replace-with-line-official-account-url` ใน Product page ด้วย LINE Official Account URL จริงที่เจ้าของยืนยัน พร้อมเพิ่ม LINE ID และ QR code ที่ได้รับอนุญาตใน Contact ห้ามใช้บัญชีส่วนตัวโดยไม่ได้ตั้งใจเผยแพร่ ตรวจ product status และข้อความว่าเว็บไซต์ไม่มี cart, checkout, payment gateway หรือระบบเก็บคำสั่งซื้อ เมื่อเพิ่ม Marketplace ในอนาคตจึงค่อยใส่ URL ภายนอกจริงและอัปเดตคำเตือนให้ตรงกับขั้นตอนการสั่งซื้อ

## 16. Preview locally { #local-preview }

```text
python -m venv .venv
python -m pip install --upgrade pip
pip install -r requirements.txt
mkdocs serve
```

Activate virtual environment ตามระบบจาก README แล้วเปิด URL ที่ MkDocs แสดง ปกติคือ `http://127.0.0.1:8000/`

## 17. Deploy the site { #deploy }

1. ตรวจ `mkdocs build --strict`
2. Review changes, commit และ push ไป `main`
3. ตั้ง GitHub ครั้งแรก: **Repository → Settings → Pages → Build and deployment → Source → GitHub Actions**
4. Workflow `.github/workflows/deploy-pages.yml` จะ build, upload และ deploy artifact
5. ตรวจ URL `https://kope-solution.github.io/knowledge-hub/`

ไม่มี `CNAME` และไม่มี custom domain ในระยะนี้

## Metadata, SEO and sharing

- Site title, URL, description, author, keywords และ social image: `mkdocs.yml`
- Page title/description: YAML front matter ของแต่ละหน้า
- Canonical URL และ Open Graph/Twitter tags: `docs/overrides/main.html`
- Sitemap: MkDocs สร้าง `sitemap.xml`
- Robots: `docs/robots.txt`
- RSS: `docs/blog/feed.xml`

## License ของเนื้อหาและไฟล์ใหม่

- Source code, CSS, JavaScript, configuration และ workflow ใช้ MIT License
- เนื้อหาต้นฉบับ บทความ และสื่อเพื่อการศึกษาของ KOPE SOLUTION ใช้ CC BY-NC-SA 4.0 เว้นแต่ระบุไว้ต่างหาก
- ชื่อ KOPE SOLUTION, Logo, K-Circuit mark และอัตลักษณ์แบรนด์ไม่อยู่ภายใต้ MIT หรือ CC และสงวนสิทธิ์ตาม `BRAND-ASSETS.md`
- เนื้อหา รูปภาพ และไฟล์ Download จากบุคคลที่สามต้องมีแหล่งที่มาและ License ของตนเองอย่างชัดเจน
- อย่าเปลี่ยน License ของไฟล์ที่เผยแพร่แล้วโดยไม่ตรวจผลกระทบ เนื่องจากสิทธิ์ที่มอบให้ผู้ใช้เดิมตาม License อาจยังคงมีผล

ดูขอบเขตทั้งหมดที่ [License และสิทธิ์การใช้งาน](../license/index.md)

## Review checklist

- [ ] ไม่มี placeholder ที่ถูกเข้าใจว่าเป็นข้อมูลจริง
- [ ] ไม่มีข้อมูลส่วนบุคคล ลูกค้า ราคา stock certification หรือผลทดสอบที่ไม่ได้ยืนยัน
- [ ] Links และ nav ชี้ไฟล์/URL จริง
- [ ] Images มี alt text และสิทธิ์ใช้งาน
- [ ] Related content เชื่อมครบ
- [ ] Preview บน desktop, tablet และ mobile
- [ ] `mkdocs build --strict` ผ่าน

