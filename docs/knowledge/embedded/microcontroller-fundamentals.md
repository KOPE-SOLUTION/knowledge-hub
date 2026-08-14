---
title: Microcontroller Fundamentals
description: พื้นฐาน CPU, memory, clock, GPIO, peripherals, interrupts และ firmware lifecycle
---

# Microcontroller Fundamentals

บทนำนี้จะสร้าง mental model ของไมโครคอนโทรลเลอร์เพื่อให้เรียนแพลตฟอร์มต่าง ๆ ได้ง่ายขึ้น โดยแยกส่วนประมวลผล หน่วยความจำ clock, I/O และ peripherals ออกจากกัน

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. CPU, registers, instruction flow และ memory map
2. Flash, RAM, stack และ non-volatile storage
3. Clock, reset, boot และ power modes
4. GPIO, timers, ADC, serial interfaces และ interrupts
5. Build, flash, debug, test และ fault investigation

## Historical context

อ่าน [ประวัติไมโครคอนโทรลเลอร์: 10 MCU สำคัญจาก Z8 ถึง RP2040](../../blog/posts/history-of-iconic-microcontrollers.md) เพื่อดูว่าพื้นฐานเรื่อง CPU, memory, clock, peripherals, power และ ecosystem เปลี่ยนแปลงอย่างไรตั้งแต่ยุค 8-bit ถึง MCU สมัยใหม่
