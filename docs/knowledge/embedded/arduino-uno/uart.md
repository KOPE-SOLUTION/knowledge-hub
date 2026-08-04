---
title: UART — Arduino Uno Embedded Roadmap
description: การเรียนรู้ UART บน Arduino Uno ตั้งแต่ serial framing ถึงการตรวจสัญญาณ
---

# UART

UART เป็นช่องทางสำคัญสำหรับ debug และเชื่อมต่อโมดูล หน้านี้จะเชื่อม Arduino Serial API เข้ากับแนวคิด baud rate, frame, buffer และ error handling

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. TX/RX, asynchronous framing และ common ground
2. Baud rate, data bits, parity และ stop bits
3. Arduino Serial API และ receive buffer
4. Register-level UART บน AVR
5. Lab ที่เสนอ: loopback และตรวจ waveform ด้วย logic analyzer

