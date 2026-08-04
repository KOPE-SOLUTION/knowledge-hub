---
title: UART
description: UART framing, electrical considerations, buffering และ debugging
---

# UART

UART เป็นการสื่อสาร asynchronous แบบ point-to-point ที่พบได้บ่อยในงาน embedded การใช้งานที่เชื่อถือได้ต้องกำหนด frame และ electrical level ให้ตรงกัน

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. TX/RX, baud rate และ frame format
2. TTL/CMOS level เทียบกับ physical standards อื่น
3. Buffer, timeout และ framing errors
4. Packet design บน byte stream
5. ตรวจสอบด้วย loopback และ logic analyzer

