---
title: SPI — Arduino Uno Embedded Roadmap
description: SPI master, clock, chip select และการตรวจสอบ transaction บน Arduino Uno
---

# SPI

SPI เป็น synchronous serial bus ที่เหมาะกับการรับส่งข้อมูลระยะใกล้ระหว่าง controller และ peripheral หน้านี้จะเน้น transaction และการจับคู่ timing ให้ถูกต้อง

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. SCK, MOSI, MISO และ chip select
2. Clock polarity, phase และ bit order
3. Arduino SPI transaction API
4. Multi-device bus และ signal integrity เบื้องต้น
5. Lab ที่เสนอ: loopback หรือ peripheral จริงพร้อม logic analyzer

