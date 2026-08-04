---
title: I2C
description: I2C electrical layer, addressing, transactions และ bus recovery
---

# I2C

I2C เป็น shared two-wire bus ที่ต้องพิจารณาทั้ง protocol และ electrical behavior ของ open-drain lines โดยเฉพาะ pull-up, capacitance และ voltage compatibility

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. SDA/SCL และ open-drain behavior
2. Address, START/STOP, ACK/NACK
3. Repeated START, clock stretching และ arbitration
4. Pull-up selection และ level compatibility
5. Address scan, decode และ bus recovery

