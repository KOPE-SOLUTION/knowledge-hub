---
title: Arduino Uno Embedded Roadmap — Overview
description: แผนการเรียนรู้ Arduino Uno จาก abstraction ไปสู่ความเข้าใจระดับไมโครคอนโทรลเลอร์
---

# Arduino Uno Embedded Roadmap

Roadmap นี้ใช้ Arduino Uno เป็นจุดเริ่มต้นเพื่อเชื่อมการเขียนโปรแกรมแบบใช้งานง่ายเข้ากับแนวคิด register, timing, interrupts และ hardware peripherals โดยไม่สมมติผลการทดลองหรือประสิทธิภาพ

<span class="status-badge status--pending">กำลังจัดทำ</span>

## เส้นทางที่เสนอ

1. [GPIO](gpio.md) — digital input/output และ pull-up
2. [UART](uart.md) — serial communication และ framing
3. [Timer](timer.md) — time base, prescaler และ compare
4. [Interrupt](interrupt.md) — event-driven firmware และ shared state
5. [PWM](pwm.md) — duty cycle และ waveform generation
6. [ADC](adc.md) — sampling และ reference
7. [SPI](spi.md) — synchronous serial bus
8. [I2C](i2c.md) — addressed two-wire bus

## แนวทางการจัดทำเนื้อหา

- เริ่มจากวัตถุประสงค์และวงจรที่ปลอดภัย
- แสดงตัวอย่างทั้ง Arduino API และระดับ register เมื่อเหมาะสม
- ระบุอุปกรณ์ เวอร์ชัน และข้อจำกัดจริง
- เพิ่มขั้นตอนตรวจสอบด้วย serial output, oscilloscope หรือ logic analyzer โดยไม่สร้างผลลัพธ์

