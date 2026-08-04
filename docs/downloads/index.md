---
title: Downloads and Resources
description: ศูนย์รวม Firmware, Source code, Manuals, Datasheets, Schematics, PCB, 3D files และทรัพยากร
---

# Downloads and Resources

หน้านี้จัดหมวดไฟล์ที่เจ้าของสามารถเพิ่มได้ในอนาคต ขณะนี้ **ยังไม่มีไฟล์ดาวน์โหลดจริง** และเว็บไซต์ไม่สร้างไฟล์ตัวอย่างปลอม

| Category | รายการ | Version | Related page | สถานะ |
| --- | --- | --- | --- | --- |
| Firmware | [PLACEHOLDER — ชื่อ firmware] | [เวอร์ชันจริง] | [Product/Project URL] | ยังไม่มีไฟล์ |
| Source code | [PLACEHOLDER — repository/release] | [tag/commit] | [Documentation URL] | ยังไม่มีไฟล์ |
| User manuals | [PLACEHOLDER — manual title] | [revision] | [Product URL] | ยังไม่มีไฟล์ |
| Datasheets | [PLACEHOLDER — datasheet title] | [revision] | [Product URL] | ยังไม่มีไฟล์ |
| Schematics | [PLACEHOLDER — schematic title] | [revision] | [Project URL] | ยังไม่มีไฟล์ |
| PCB files | [PLACEHOLDER — fabrication/source package] | [revision] | [Project URL] | ยังไม่มีไฟล์ |
| 3D enclosure files | [PLACEHOLDER — file set] | [revision] | [Project URL] | ยังไม่มีไฟล์ |
| Templates | [PLACEHOLDER — user-facing template] | [version] | [Guide URL] | ยังไม่มีไฟล์ |
| Example datasets | [PLACEHOLDER — dataset name] | [version] | [Article URL] | ยังไม่มีไฟล์ |
| Presentation files | [PLACEHOLDER — presentation title] | [revision] | [Article URL] | ยังไม่มีไฟล์ |

## วิธีเพิ่มไฟล์จริง

1. ตรวจสิทธิ์การเผยแพร่ license และข้อมูลที่อาจเป็นความลับ
2. ตั้งชื่อไฟล์ให้มี product/project, version และ revision ชัดเจน
3. ไฟล์ขนาดเล็กเก็บใน `docs/assets/downloads/`; ไฟล์ใหญ่ควรใช้ GitHub Releases
4. สร้าง checksum เมื่อเหมาะสม และระบุ version/วันที่เผยแพร่จริง
5. คัดลอกรายการจาก [Download entry template](../templates/download-entry.md)
6. เชื่อมกลับไปยัง Product, Project, Portfolio หรือ Knowledge page
7. ทดสอบลิงก์และ `mkdocs build --strict`

!!! warning "ความปลอดภัย"
    ห้ามอัปโหลด credentials, private keys, customer data, proprietary files หรือ firmware ที่ยังไม่ได้ตรวจสอบสิทธิ์และความปลอดภัย

