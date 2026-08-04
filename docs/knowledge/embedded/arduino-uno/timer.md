---
title: Timer — Arduino Uno Embedded Roadmap
description: พื้นฐาน hardware timer, prescaler, counter และ compare match บน Arduino Uno
---

# Timer

Hardware timer ช่วยสร้าง time base และเหตุการณ์ที่สม่ำเสมอกว่าการวนลูป หน้านี้จะอธิบายความสัมพันธ์ระหว่าง clock, prescaler, counter และ compare register

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. Clock source และ timer resolution
2. Normal, CTC และ waveform modes
3. Prescaler และการคำนวณเชิงสัญลักษณ์
4. ความสัมพันธ์กับ `millis()`, `delay()` และ PWM
5. Lab ที่เสนอ: periodic event พร้อมวิธีวัด timing จริง

