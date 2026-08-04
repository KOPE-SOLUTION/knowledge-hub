---
title: PWM — Arduino Uno Embedded Roadmap
description: PWM, duty cycle, frequency และข้อจำกัดของการควบคุมโหลด
---

# PWM

PWM ใช้ปรับค่าเฉลี่ยของกำลังหรือสร้าง waveform ผ่าน hardware timer หน้านี้จะแยก duty cycle, frequency และผลของโหลดออกจากแนวคิดแรงดัน analog จริง

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. Duty cycle, frequency และ timer modes
2. `analogWrite()` ทำอะไรและไม่ได้ทำอะไร
3. การเลือก pin และผลกระทบต่อ timers
4. Driver circuit และข้อควรระวังเมื่อควบคุมโหลด
5. Lab ที่เสนอ: LED dimming พร้อมวัด waveform

