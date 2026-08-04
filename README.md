# KOPE SOLUTION Knowledge Hub

เว็บไซต์ static อย่างเป็นทางการของ **KOPE SOLUTION** สำหรับเผยแพร่ Technical Knowledge Hub, Blog, YouTube, Creator Profile, Portfolio, Projects, Products และ Downloads โดยใช้ภาษาไทยเป็นหลัก

- เว็บไซต์: <https://kope-solution.github.io/knowledge-hub/>
- สถานะ: โครงสร้างพร้อมใช้งาน เนื้อหาและลิงก์ที่ระบุว่า placeholder ต้องแทนที่ด้วยข้อมูลจริงก่อนประชาสัมพันธ์
- เทคโนโลยี: Python, MkDocs, Material for MkDocs, Markdown, CSS และ GitHub Actions

## โครงสร้างหลัก

```text
.
├── .github/workflows/deploy-pages.yml
├── docs/
│   ├── knowledge/       # บทความความรู้เชิงเทคนิค
│   ├── blog/            # บทความ หมวดหมู่ แท็ก และคลังบทความ
│   ├── youtube/         # วิดีโอ Playlist และคู่มือเพิ่มเนื้อหา
│   ├── portfolio/       # ผลงานที่คัดเลือกมานำเสนอ
│   ├── projects/        # งานที่กำลังพัฒนา
│   ├── products/        # Product showcase (ไม่ใช่ร้านค้า)
│   ├── downloads/       # ศูนย์รวมไฟล์และทรัพยากร
│   ├── contributing/    # คู่มือจัดการเว็บไซต์
│   ├── templates/       # Markdown templates ที่ใช้ซ้ำได้
│   └── assets/          # รูปภาพ ไอคอน CSS JavaScript และไฟล์ดาวน์โหลด
├── mkdocs.yml
└── requirements.txt
```

## ติดตั้งสำหรับพัฒนาในเครื่อง

สร้าง virtual environment:

```text
python -m venv .venv
```

เปิดใช้งานตามระบบ:

```powershell
# Windows PowerShell
.venv\Scripts\Activate.ps1
```

```bat
:: Windows Command Prompt
.venv\Scripts\activate.bat
```

```bash
# Git Bash
source .venv/Scripts/activate

# Linux และ macOS
source .venv/bin/activate
```

ติดตั้ง dependencies:

```text
python -m pip install --upgrade pip
pip install -r requirements.txt
```

เปิด preview:

```text
mkdocs serve
```

สร้าง production build:

```text
mkdocs build --strict
```

## การแก้ไขเนื้อหา

เนื้อหาปกติอยู่ใน `docs/` และแก้ไขด้วย Markdown ได้ ดูขั้นตอนทั้งหมดที่ `docs/contributing/index.md` เมื่อเพิ่ม ย้าย หรือลบหน้า ให้แก้ `nav` ใน `mkdocs.yml` พร้อมกัน รูปภาพควรเก็บใน `docs/assets/images/` และไฟล์แจกจ่ายจริงควรเก็บใน `docs/assets/downloads/` หรือแนบผ่าน GitHub Releases เมื่อต้องการจัดการไฟล์ขนาดใหญ่

## Deployment

Workflow จะ build ด้วย `mkdocs build --strict` และ deploy เมื่อมีการ push ไปที่ `main` หรือสั่ง Run workflow เอง ไม่มีการตั้ง custom domain

ตั้งค่าครั้งแรกใน GitHub: **Repository → Settings → Pages → Build and deployment → Source → GitHub Actions**

## การมีส่วนร่วม

ก่อนส่งการเปลี่ยนแปลง โปรดอ่านคู่มือใน `docs/contributing/index.md`, ใช้ template ที่เหมาะสม และตรวจด้วย strict build ห้ามใส่ข้อมูลส่วนบุคคล ผลทดสอบ ราคา หรือคำกล่าวอ้างที่ยังไม่ได้ตรวจสอบ

## License

**[PLACEHOLDER — เจ้าของ repository ต้องเลือกและเพิ่มไฟล์ LICENSE ก่อนอนุญาตให้นำเนื้อหาหรือโค้ดไปใช้ต่อ]**

