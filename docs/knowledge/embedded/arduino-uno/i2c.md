---
title: I2C — Arduino Uno Embedded Roadmap
description: I2C addressing, open-drain bus, pull-up และการวิเคราะห์ transaction
---

# I2C

I2C ใช้สายข้อมูลและ clock ร่วมกันหลายอุปกรณ์ โดยอาศัย open-drain signaling และ pull-up resistor หน้านี้จะอธิบายทั้ง electrical layer และ message flow

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. SDA, SCL, address และ read/write direction
2. START, STOP, ACK/NACK และ repeated START
3. Pull-up, bus capacitance และ logic level
4. Arduino Wire API และ error handling
5. Lab ที่เสนอ: address scan และ decode ด้วย logic analyzer

