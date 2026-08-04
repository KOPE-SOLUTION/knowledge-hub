---
title: Interrupt — Arduino Uno Embedded Roadmap
description: หลักการ interrupt, ISR, shared state และการออกแบบ event-driven firmware
---

# Interrupt

Interrupt ทำให้ firmware ตอบสนองต่อเหตุการณ์โดยไม่ต้อง polling ตลอดเวลา แต่ต้องจัดการเวลาใน ISR และข้อมูลที่ใช้ร่วมกันอย่างระมัดระวัง

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. Interrupt vector และลำดับการทำงาน
2. External, pin-change และ timer interrupts
3. ISR ที่สั้น, `volatile` และ atomic access
4. Debounce และ event queue
5. Lab ที่เสนอ: นับ edge พร้อมตรวจกรณีข้อมูลสูญหาย

