---
title: SPI
description: SPI topology, modes, transactions และแนวทาง debug bus
---

# SPI

SPI ให้การรับส่งข้อมูล synchronous แบบ full-duplex โดยไม่มีรูปแบบ message กลาง จึงต้องอ่าน timing และ command protocol ของ peripheral แต่ละตัว

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. Signal roles และ controller/peripheral topology
2. CPOL, CPHA, bit order และ word length
3. Chip select และ multi-device bus
4. Timing, level และ signal integrity
5. Decode transaction และ error checklist

