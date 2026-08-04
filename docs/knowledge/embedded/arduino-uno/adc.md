---
title: ADC — Arduino Uno Embedded Roadmap
description: ADC sampling, reference, resolution, source impedance และการอ่านค่าอย่างมีความหมาย
---

# ADC

ADC แปลงแรงดันเป็นรหัสดิจิทัล การตีความค่าจึงต้องพิจารณา reference, input range, signal source และ noise ไม่ใช่เพียงเรียก `analogRead()`

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. Sampling, quantization และ code range
2. Voltage reference และการเลือก input channel
3. Source impedance, settling และ noise
4. การแปลงค่าโดยไม่สร้างความแม่นยำเกินจริง
5. Lab ที่เสนอ: potentiometer และ reference comparison

