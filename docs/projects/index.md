---
title: Projects
description: พื้นที่ติดตามงานที่กำลังพัฒนาโดยใช้ Markdown และแยกจาก Portfolio
---

# Projects — Active Development

Projects ใช้สำหรับงานที่ **กำลังพัฒนา** ส่วน [Portfolio](../portfolio/index.md) ใช้คัดเลือกงานที่มีชิ้นงานหรือ demonstration พร้อมนำเสนอ การแยกสองส่วนนี้ช่วยไม่ให้ความคืบหน้าระหว่างทางถูกเข้าใจว่าเป็นผลลัพธ์ที่เสร็จแล้ว

!!! info "อัปเดตล่าสุด 8 พฤศจิกายน 2026"
    เพิ่ม KOPE Edge AI Hub เป็นโครงการ Active Development แรกของเว็บไซต์ โดยแยกสิ่งที่สาธิตได้แล้ว ออกจาก catalogue ที่ยังเป็นแผนและ hardware ที่ยังอยู่ระหว่างประเมิน

## Active now

<article class="active-project-card">
  <div>
    <span class="status-badge status--prototype">Development Preview</span>
    <h2><a href="kope-edge-ai-hub/">KOPE Edge AI Hub</a></h2>
    <p>Local-first engineering workspace สำหรับจัดระบบ Site, Device, MQTT, ROI, Preview, Project catalogue และ Processing plan ของงาน Edge AI</p>
  </div>
  <dl>
    <div><dt>Software</dt><dd>Prototype</dd></div>
    <div><dt>Public demo</dt><dd>Not available</dd></div>
    <div><dt>Hardware package</dt><dd>Research</dd></div>
    <div><dt>Next gate</dt><dd>Reference hardware test</dd></div>
  </dl>
  <a class="md-button md-button--primary" href="kope-edge-ai-hub/">ดูสถานะโครงการ</a>
</article>

## Project page fields

ทุกโครงการควรมี:

- Current phase: Idea, Research, Planning, Prototype, Testing, Pilot, Completed, Paused หรือ Ongoing
- Objectives และขอบเขตที่ตรวจสอบได้
- Milestones พร้อมสถานะและหลักฐาน
- Progress ที่ระบุวันที่อัปเดตจริง
- Technical stack และเวอร์ชัน
- Repository และ Documentation
- Known issues และข้อจำกัด
- Next steps

## วิธีอ่านสถานะโครงการ

สถานะในหน้านี้บอกระดับของงาน ไม่ใช่คำรับรองเชิงพาณิชย์:

- **Development Preview** — มีชิ้นงานให้ตรวจหน้าจอและ workflow ในสภาพแวดล้อมพัฒนา
- **Prototype** — ฟังก์ชันบางส่วนทำงาน แต่ interface, deployment และการรองรับผู้ใช้ยังเปลี่ยนได้
- **Research** — กำลังเก็บข้อมูลหรือเปรียบเทียบตัวเลือก ยังไม่ตัดสินใจเป็นสินค้า
- **Completed** — ใช้เมื่อมีขอบเขต หลักฐาน และผลส่งมอบที่ยืนยันแล้วเท่านั้น

เว็บไซต์ยังไม่มี project-management backend, user account หรือ database; ข้อมูลทั้งหมดแก้ไขผ่าน Markdown และ Git

[เริ่มจาก Active project template →](../templates/active-project.md)

