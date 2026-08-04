---
title: GPIO — Arduino Uno Embedded Roadmap
description: พื้นฐาน digital input/output, pull-up, register และข้อควรระวังของ GPIO
---

# GPIO

GPIO คือจุดเชื่อมแรกระหว่าง firmware และวงจรภายนอก หน้านี้จะอธิบายแนวคิด input/output, logic level, internal pull-up และการอ่าน datasheet ก่อนเชื่อมต่ออุปกรณ์จริง

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. โครงสร้าง pin และ mapping ของ Arduino Uno
2. `pinMode`, `digitalWrite`, `digitalRead` เทียบกับ register
3. Floating input, pull-up และ debounce
4. ข้อจำกัดด้านแรงดันและกระแสที่ต้องอ้างอิงจาก datasheet จริง
5. Lab ที่เสนอ: LED และ push button พร้อมวิธีตรวจสอบ

