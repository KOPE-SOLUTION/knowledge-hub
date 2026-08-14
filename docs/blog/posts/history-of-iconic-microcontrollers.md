---
title: "ประวัติไมโครคอนโทรลเลอร์: 10 MCU สำคัญจาก Z8 ถึง RP2040"
slug: "history-of-iconic-microcontrollers"
status: draft
publication_date: "[ยังไม่เผยแพร่]"
updated_date: "2026-08-14"
author: โก๊ป
category: "Embedded Systems"
tags:
  - Microcontrollers
  - Embedded Systems
  - MCU History
  - Arduino
  - ESP32
summary: "ย้อนดูจุดเปลี่ยนของไมโครคอนโทรลเลอร์จากยุค 8-bit ไปสู่ ARM, Arduino, IoT และชิป dual-core พร้อมอธิบายว่าทำไม MHz เพียงอย่างเดียวใช้เปรียบเทียบประสิทธิภาพไม่ได้"
cover_image: "../../assets/images/blog/history-of-iconic-microcontrollers/mcu-evolution-cover-branded.jpg"
related_project: "[ยังไม่มีโครงการที่เกี่ยวข้องโดยตรง]"
related_youtube: "[กำลังจัดทำ — ยังไม่มี Video ID]"
related_github: "https://github.com/KOPE-SOLUTION/knowledge-hub"
related_articles:
  - "../../knowledge/embedded/microcontroller-fundamentals.md"
  - "../../knowledge/embedded/arduino-uno/index.md"
  - "../../knowledge/embedded/esp32.md"
description: "ประวัติและวิวัฒนาการของไมโครคอนโทรลเลอร์ 10 รุ่นสำคัญ ตั้งแต่ Zilog Z8, Intel 8051 และ PIC ไปจนถึง STM32, ESP32 และ RP2040"
og_type: article
hide:
  - navigation
---

# ประวัติไมโครคอนโทรลเลอร์: 10 MCU สำคัญจาก Z8 ถึง RP2040

<span class="status-badge status--pending">DRAFT · กำลังจัดทำวิดีโอและตรวจทานก่อนเผยแพร่</span>

![ภาพปกประวัติไมโครคอนโทรลเลอร์ 10 MCU สำคัญจาก Z8 ถึง RP2040 พร้อมโลโก้ KOPE SOLUTION](../../assets/images/blog/history-of-iconic-microcontrollers/mcu-evolution-cover-branded.jpg)

*ภาพประกอบเชิงแนวคิดสร้างขึ้นสำหรับ KOPE SOLUTION ไม่ใช่ภาพผลิตภัณฑ์หรือสัดส่วนอ้างอิงทางวิศวกรรม*

ไมโครคอนโทรลเลอร์หรือ MCU คือคอมพิวเตอร์ขนาดเล็กที่รวม CPU, memory และวงจรเชื่อมต่อฮาร์ดแวร์ไว้ในชิปเดียว เราพบมันได้ในรถยนต์ เครื่องใช้ไฟฟ้า ระบบโรงงาน เครื่องมือวัด อุปกรณ์ทางการแพทย์ ของเล่น และอุปกรณ์ IoT แม้ผู้ใช้งานปลายทางแทบไม่เคยเห็นตัวชิปก็ตาม

บทความนี้เลือก MCU 10 ตระกูลหรือรุ่นที่ช่วยอธิบายจุดเปลี่ยนสำคัญของวงการ ตั้งแต่การรวมส่วนประกอบพื้นฐานเข้าสู่ชิปเดียว การประหยัดพลังงาน การใช้ Flash ที่เขียนซ้ำได้ การเปลี่ยนผ่านสู่ 32-bit ไปจนถึงระบบไร้สายและการประมวลผลแบบ dual-core

!!! note "นี่ไม่ใช่อันดับ 1–10"
    คำว่า “สำคัญ” ในบทความนี้หมายถึงเป็นตัวแทนของพัฒนาการในแต่ละช่วงเวลา ไม่ได้หมายความว่าเป็นรายชื่อ MCU ที่ดีที่สุดหรือขายดีที่สุดอย่างเป็นทางการ ยังมีตระกูลสำคัญอื่น เช่น Intel MCS-48, Motorola 6805, AVR รุ่นแรก, ESP8266, Renesas และตระกูลสำหรับยานยนต์อีกจำนวนมาก

## สรุปเส้นเวลา

| ช่วงเวลา | MCU หรือตระกูล | สถาปัตยกรรม | จุดสำคัญที่ใช้เล่าเรื่อง |
|---|---|---|---|
| 1979 | Zilog Z8 | 8-bit Z8 | register file และอุปกรณ์ต่อพ่วงในชิปเดียว |
| 1980 | Intel 8051 / MCS-51 | 8-bit MCS-51 | สถาปัตยกรรมที่แพร่หลายและอยู่ได้นาน |
| กลางทศวรรษ 1980 | Motorola 68HC11 | 8-bit | timer, serial และ analog สำหรับงานควบคุม |
| 1992 | TI MSP430 family | 16-bit RISC | การออกแบบที่ให้ความสำคัญกับพลังงานต่ำ |
| ปลายทศวรรษ 1990 | PIC16F84A | 8-bit PIC RISC | Flash/EEPROM และการทดลองเขียนโปรแกรมซ้ำ |
| ราว 2005 | Philips LPC2148 | 32-bit Arm7TDMI-S | การเปลี่ยนผ่านสู่ Arm 32-bit และ USB |
| 2007 | STM32F103 | 32-bit Arm Cortex-M3 | Cortex-M และ ecosystem ของ MCU 32-bit |
| 2009–2010 | ATmega328/328P บน Arduino | 8-bit AVR | เครื่องมือ ซอฟต์แวร์ และชุมชน Maker |
| 2016 | Espressif ESP32 | 32-bit Xtensa LX6 | Wi-Fi และ Bluetooth ใน MCU ราคาประหยัด |
| 2021 | Raspberry Pi RP2040 | dual-core Arm Cortex-M0+ | dual-core, SRAM ขนาดใหญ่ และ PIO |

ปีในตารางมีทั้ง “ปีเปิดตัวตระกูล” และ “ช่วงที่รุ่นตัวอย่างได้รับความนิยม” จึงต้องอ่านร่วมกับคำอธิบายของแต่ละหัวข้อ ไม่ควรนำปีของตระกูลไปใส่ให้รุ่นย่อยโดยตรง

## ก่อนเปรียบเทียบ: MHz ไม่ใช่คำตอบทั้งหมด

ตัวเลข clock บอกจำนวนจังหวะต่อวินาที แต่ไม่ได้บอกว่า MCU ทำงานได้เท่าไรต่อหนึ่งจังหวะ สถาปัตยกรรมต่างกันอาจใช้จำนวน clock ต่อคำสั่งไม่เท่ากัน มี pipeline, memory wait state, bus, cache และอุปกรณ์เร่งงานต่างกัน

ตัวอย่างที่ควรระวังมีดังนี้

- 8051 แบบดั้งเดิมใช้หลาย oscillator periods ต่อหนึ่ง machine cycle
- PIC16F84A รองรับ clock input สูงสุด 20 MHz แต่ instruction clock สัมพันธ์กับ oscillator แบบหารสี่
- 68HC11 บางรุ่นใช้คริสตัล 8 MHz แต่ได้ E-clock 2 MHz
- ATmega328P รองรับได้สูงสุด 20 MHz ขณะที่ Arduino Uno ใช้งานที่ 16 MHz
- MCU รุ่นใหม่อาจให้ผลลัพธ์มากกว่าต่อหนึ่ง clock และมี DMA หรือ peripheral ช่วยทำงานแทน CPU

ถ้าต้องการเปรียบเทียบอย่างมีความหมาย ควรดู workload เดียวกัน เวลาในการตอบสนอง การใช้พลังงาน ขนาดหน่วยความจำ peripheral และเครื่องมือพัฒนาร่วมด้วย

## 1. Zilog Z8 — จุดเริ่มของเรื่องราวในปี 1979

Zilog เป็นที่รู้จักจากไมโครโปรเซสเซอร์ Z80 แต่ Z8 ถูกออกแบบให้เป็นไมโครคอนโทรลเลอร์ที่รวม CPU, memory, timer, interrupt และพอร์ต I/O ไว้ในชิปเดียว จุดเด่นของสถาปัตยกรรมคือ register file ที่ใช้จัดการข้อมูลและทรัพยากรภายในได้อย่างยืดหยุ่น

Z8 ถูกนำไปใช้ในอุปกรณ์ผู้บริโภค ระบบรักษาความปลอดภัย HVAC และงานควบคุมหลากหลายประเภท คู่มือของ Zilog แสดงให้เห็นว่าตระกูลนี้แตกแขนงเป็นหลายรุ่นที่มี ROM, RAM, จำนวน I/O และรูปแบบแพ็กเกจต่างกัน

ข้อควรระวังในการทำสื่อคือชิปที่เขียนว่า `Z8S18020` เป็นสมาชิกของสาย Z180 ไม่ใช่ภาพแทน Z8 รุ่นดั้งเดิม การนำตัวเลข 20 MHz จากชิปดังกล่าวมาใส่ให้ Z8 ปี 1979 จึงทำให้ภาพ ชื่อรุ่น และช่วงเวลาไม่ตรงกัน

## 2. Intel 8051 — สถาปัตยกรรมที่มีอายุยืน

Intel เปิดตัว MCS-51 ในปี 1980 โดย 8051 กลายเป็นสมาชิกที่มีชื่อเสียงที่สุด ตัวชิปรวม CPU 8-bit, program memory, RAM, timer, serial port และ GPIO ไว้ด้วยกัน

สิ่งที่ทำให้ 8051 มีอิทธิพลคือความยืดหยุ่นและการแพร่หลายของ ecosystem Intel ระบุว่า MCS-51 ขายได้ 100 ล้านชิ้นภายในทศวรรษแรก และถูกใช้ตั้งแต่ระบบเบรก เครื่องบิน เครื่องดนตรี ไปจนถึงของเล่น หลังจากนั้นผู้ผลิตรายอื่นยังคงสร้างชิปที่ใช้สถาปัตยกรรมหรือชุดคำสั่งเข้ากันได้ต่อมาอีกยาวนาน

เรื่องของ 8051 จึงไม่ได้สอนเฉพาะเรื่องความเร็ว แต่สอนว่าความเสถียร เครื่องมือ บุคลากร และฐานซอฟต์แวร์เดิมมีผลต่ออายุของแพลตฟอร์มอย่างมาก

## 3. Motorola 68HC11 — MCU สำหรับงานควบคุม

68HC11 เป็น MCU 8-bit ที่ได้รับความนิยมในงานยานยนต์ อุตสาหกรรม การศึกษา และระบบควบคุม จุดแข็งคือการรวม timer, serial communications, analog-to-digital converter, interrupt และ memory หลายชนิดไว้รอบ CPU

ความสับสนที่พบบ่อยคือคำว่า “8 MHz” ในเอกสารหรืออินโฟกราฟิกอาจหมายถึงความถี่คริสตัล ไม่ใช่ E-clock ที่ CPU และ bus ใช้เสมอไป ตัวอย่างในเอกสาร M68HC11E แสดงคริสตัล 8 MHz คู่กับ E-clock 2 MHz และคริสตัล 12 MHz คู่กับ E-clock 3 MHz

ดังนั้นสื่อที่เปรียบเทียบ 68HC11 กับ MCU รุ่นใหม่ควรระบุชนิดของ clock และหมายเลขรุ่นย่อยให้ชัดเจน

## 4. TI MSP430 — พลังงานต่ำเป็นคุณสมบัติหลัก

Texas Instruments ระบุว่าอุปกรณ์ MSP430 ตัวแรกออกในปี 1992 ตระกูลนี้ใช้สถาปัตยกรรม 16-bit RISC และให้ความสำคัญกับการใช้พลังงานต่ำ การมีหลาย low-power modes และการตื่นขึ้นมาทำงานอย่างรวดเร็วทำให้เหมาะกับเครื่องมือวัด เซนเซอร์ มิเตอร์ และอุปกรณ์พกพา

MSP430G2553 เป็นรุ่นที่ผู้เรียนจำนวนมากรู้จักจาก LaunchPad โดยทำงานได้สูงสุด 16 MHz มี Flash 16 KB และ SRAM 512 bytes อย่างไรก็ตาม ปี 1992 เป็นปีของ MSP430 รุ่นแรก ไม่ใช่ปีเปิดตัว G2553 การ์ดข้อมูลที่วางชื่อ `MSP430G2553` คู่กับปี 1992 โดยไม่อธิบายจึงอาจทำให้เข้าใจผิด

บทเรียนจาก MSP430 คือ MCU ที่เหมาะกับงานไม่ได้จำเป็นต้องมี clock สูงสุด แต่ต้องทำงานที่ต้องการให้เสร็จภายใต้งบพลังงานที่ระบบยอมรับได้

## 5. PIC16F84A — การทดลองที่เขียนโปรแกรมซ้ำได้

PIC16F84A เป็น MCU 8-bit ขนาดเล็กที่ได้รับความนิยมในงานเรียนรู้และโครงการอิเล็กทรอนิกส์ช่วงปลายทศวรรษ 1990 จุดสำคัญคือ Flash program memory และ data EEPROM ซึ่งทำให้ผู้ใช้ทดลอง แก้โปรแกรม และเขียนใหม่ได้สะดวกกว่ายุคที่ชิปแบบ OTP ยังพบได้ทั่วไป

เอกสารของ Microchip ระบุ clock input สูงสุด 20 MHz, program memory 1,024 words, RAM 68 bytes และ EEPROM 64 bytes ตัวเลขเหล่านี้ดูเล็กมากเมื่อเทียบกับ MCU ปัจจุบัน แต่เพียงพอสำหรับวงจรควบคุม LED, keypad, relay, display และระบบอัตโนมัติขนาดเล็กจำนวนมาก

ความเข้าถึงง่าย เครื่องโปรแกรมที่สร้างเองได้ และตัวอย่างจากหนังสือหรือนิตยสารทำให้ PIC16F84A เป็นประตูเข้าสู่โลก embedded ของผู้เรียนจำนวนหนึ่ง

## 6. Philips LPC2148 — Arm7 และ USB บน MCU

LPC2148 ใช้แกน Arm7TDMI-S แบบ 16/32-bit ทำงานได้สูงสุด 60 MHz มี Flash สูงสุด 512 KB, SRAM, USB 2.0 Full-speed device, ADC, DAC, UART, SPI และ I²C เหมาะกับระบบสื่อสาร เครื่องมือวัด และอุปกรณ์ควบคุมที่ต้องการหน่วยความจำมากขึ้น

รายละเอียดทางประวัติศาสตร์ที่ควรเล่าให้ตรงคือ LPC2148 เริ่มต้นในยุค Philips Semiconductors ขณะที่ NXP ก่อตั้งขึ้นจากการแยกธุรกิจเซมิคอนดักเตอร์ของ Philips ในปี 2006 ดังนั้นการใช้ชื่อ “NXP LPC2148” ช่วยให้ค้นผลิตภัณฑ์ปัจจุบันได้ แต่ถ้าเล่าตามช่วงเวลาควรกล่าวว่าเดิมคือ Philips LPC2148

LPC2148 เป็นตัวแทนของช่วงที่นักพัฒนา embedded จำนวนมากเริ่มย้ายจาก MCU 8-bit ไปสู่ Arm 32-bit ก่อนที่ Cortex-M จะกลายเป็นมาตรฐานหลักของตลาด MCU

## 7. STM32F103 — Cortex-M3 และ ecosystem 32-bit

ST เปิดตัว STM32 ในปี 2007 โดย STM32F103 ใช้ Arm Cortex-M3 สูงสุด 72 MHz พร้อม Flash, SRAM, timer, ADC, USB, CAN, UART, SPI และ I²C หลายช่อง

Cortex-M ถูกออกแบบมาเพื่อไมโครคอนโทรลเลอร์โดยเฉพาะ มีการจัดการ exception และ interrupt ที่เป็นระบบ รองรับการพัฒนาด้วยภาษา C ได้ดี และเปิดทางให้ผู้ผลิตสร้าง MCU หลายระดับบนแกนสถาปัตยกรรมเดียวกัน

ความสำเร็จของ STM32 ไม่ได้มาจาก CPU เท่านั้น แต่รวมถึงจำนวนรุ่น เครื่องมือพัฒนา middleware, development board และชุมชน ภายหลังบอร์ดราคาประหยัดที่เรียกกันว่า Blue Pill ทำให้ STM32F103 เป็นที่รู้จักในกลุ่ม Maker มากขึ้น แม้บอร์ดจากหลายแหล่งจะมีคุณภาพและแหล่งที่มาของชิปแตกต่างกันก็ตาม

## 8. ATmega328P — Arduino เปลี่ยนวิธีเข้าถึงฮาร์ดแวร์

ATmega328P เป็น MCU 8-bit AVR มี Flash 32 KB, SRAM 2 KB และ EEPROM 1 KB ตัวชิปรองรับความถี่สูงสุด 20 MHz แต่ Arduino Uno ใช้งานที่ 16 MHz

Arduino ประกาศอัปเกรด Duemilanove ไปใช้ ATmega328 ในเดือนกุมภาพันธ์ 2009 และเปิดตัว Uno ในปี 2010 จุดเปลี่ยนสำคัญจึงไม่ใช่ปีเปิดตัวชิปเพียงอย่างเดียว แต่เป็นการรวมบอร์ดที่ใช้ง่าย bootloader, IDE, API, library, ตัวอย่าง และชุมชนเข้าด้วยกัน

คำสั่งอย่าง `pinMode()` และ `digitalWrite()` ลดกำแพงในการเริ่มต้น ผู้เรียนสามารถทำให้ LED ติดก่อน แล้วจึงค่อยย้อนกลับไปศึกษา register, timer และ interrupt ภายหลัง ATmega328P จึงเป็นตัวอย่างที่ชัดเจนว่า ecosystem สามารถทำให้ MCU หนึ่งรุ่นมีอิทธิพลเกินกว่าสเปกบน datasheet ได้

## 9. Espressif ESP32 — ระบบไร้สายกลายเป็นคุณสมบัติพื้นฐาน

ESP32 รุ่นดั้งเดิมเปิดตัวในปี 2016 และใช้ Xtensa LX6 แบบ 32-bit มีทั้งรุ่น single-core และ dual-core โดยรองรับความถี่สูงสุด 240 MHz พร้อม Wi-Fi, Bluetooth Classic, Bluetooth Low Energy, SRAM, ADC, DAC, touch sensing และ peripheral สำหรับงานควบคุมจำนวนมาก

ก่อน MCU กลุ่มนี้ การเพิ่มอินเทอร์เน็ตอาจต้องใช้ไมโครคอนโทรลเลอร์และโมดูลสื่อสารแยกกัน ESP32 ทำให้ sensor node, MQTT client, web server, smart-home controller และอุปกรณ์ Bluetooth สร้างได้ด้วยโมดูลหลักเพียงตัวเดียวในต้นทุนที่เข้าถึงง่าย

ESP32 จึงเป็นตัวแทนของการเปลี่ยนจาก MCU ที่ “ควบคุมฮาร์ดแวร์ภายในเครื่อง” ไปสู่ MCU ที่เป็นสมาชิกของระบบเครือข่ายตั้งแต่เริ่มออกแบบ

## 10. Raspberry Pi RP2040 — dual-core และ Programmable I/O

Raspberry Pi เปิดตัว RP2040 พร้อม Raspberry Pi Pico ในปี 2021 ตัวชิปมี Arm Cortex-M0+ สองแกนที่ความถี่สูงสุด 133 MHz และ SRAM 264 KB โดยไม่มี Flash ภายในชิป บอร์ดจึงใช้หน่วยความจำ Flash ภายนอก

จุดเด่นคือ Programmable I/O หรือ PIO ซึ่งประกอบด้วย state machines ที่โปรแกรมได้สำหรับรับและสร้างสัญญาณดิจิทัลอย่างแม่นยำ PIO ช่วยทำโปรโตคอลหรือ waveform เฉพาะงานโดยไม่บังคับให้ CPU จัดการทุกขอบสัญญาณ

RP2040 แสดงแนวทางของ MCU สมัยใหม่ที่ผสม CPU หลายแกน หน่วยความจำขนาดใหญ่ และฮาร์ดแวร์เฉพาะทางที่ยืดหยุ่น แทนที่จะพึ่งการเพิ่ม clock CPU เพียงอย่างเดียว

## สิ่งที่เปลี่ยนไปมากกว่าความเร็ว

เมื่อมองข้ามเวลาประมาณสี่ทศวรรษ เราจะเห็นพัฒนาการอย่างน้อยหกด้าน

1. **หน่วยประมวลผล:** จาก 8-bit ไปสู่ 16-bit, 32-bit และหลายแกน
2. **หน่วยความจำ:** จาก RAM หลักสิบหรือหลักร้อย bytes ไปสู่ SRAM หลักร้อย kilobytes
3. **Peripheral:** timer, ADC, serial, USB, CAN, DMA และ programmable I/O เพิ่มขึ้น
4. **พลังงาน:** มี clock gating, sleep modes และระบบ wake-up ที่ละเอียดขึ้น
5. **การเชื่อมต่อ:** Wi-Fi และ Bluetooth กลายเป็นส่วนหนึ่งของ MCU หรือโมดูลหลัก
6. **เครื่องมือและชุมชน:** IDE, debugger, library, board และตัวอย่างมีผลต่อการเลือกใช้งานมากพอ ๆ กับตัวชิป

ดังนั้นคำถามที่เหมาะสมกว่า “ตัวไหน MHz สูงกว่า” คือ “ตัวไหนทำงานที่เราต้องการได้ ภายในข้อจำกัดด้านเวลา พลังงาน ราคา และการบำรุงรักษา”

## วิดีโอประกอบ

<div class="video-wrapper">
  <div class="video-placeholder"><strong>วิดีโอ YouTube · กำลังจัดทำ</strong><br>10 ไมโครคอนโทรลเลอร์สำคัญจาก Z8 ถึง RP2040<br><small>จะแทนที่ส่วนนี้ด้วย Video ID จริงหลังเผยแพร่</small></div>
</div>

เมื่อเผยแพร่วิดีโอแล้ว หน้านี้จะใช้ privacy-enhanced embed ผ่าน `youtube-nocookie.com` พร้อมเชื่อม timestamp และข้อมูลเพิ่มเติมที่ไม่สามารถใส่ทั้งหมดในวิดีโอได้

## เนื้อหาที่เกี่ยวข้อง

- [Microcontroller Fundamentals](../../knowledge/embedded/microcontroller-fundamentals.md)
- [Arduino Uno Embedded Roadmap](../../knowledge/embedded/arduino-uno/index.md)
- [ESP32](../../knowledge/embedded/esp32.md)
- [STM32](../../knowledge/embedded/stm32.md)
- [PIC](../../knowledge/embedded/pic.md)
- [KOPE SOLUTION on YouTube](../../youtube/index.md)

## แหล่งอ้างอิงหลัก

- Zilog, [Z8 CPU User Manual](https://zilog.com/docs/um0016.pdf)
- Intel, [Wrinkles and the MCS-51](https://www.intel.com/content/www/us/en/history/virtual-vault/articles/wrinkles-and-the-mcs-51.html)
- NXP, [M68HC11E Family Data Sheet](https://www.nxp.com/docs/en/data-sheet/M68HC11E.pdf)
- Texas Instruments, [MSP430 to MSPM0 MCUs: migration overview and timeline](https://www.ti.com/lit/ml/sprpei0/sprpei0.pdf)
- Texas Instruments, [MSP430G2553 product page](https://www.ti.com/product/MSP430G2553)
- Microchip, [PIC16F84A product page](https://www.microchip.com/en-us/product/PIC16F84A)
- NXP, [LPC2148 product page](https://www.nxp.com/products/LPC2148FBD64)
- NXP, [NXP history](https://www.nxp.com/company/about-nxp/history%3ANXP-HISTORY)
- STMicroelectronics, [STM32F103C8 product page](https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8)
- STMicroelectronics, [Arm 32-bit microcontrollers and STM32 history](https://www.st.com/content/st_com/en/arm-32-bit-microcontrollers.html)
- Microchip, [ATmega328P data sheet](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf)
- Arduino, [Duemilanove upgraded to the ATmega328](https://blog.arduino.cc/2009/02/28/arduino-duemilanove-upgraded-to-the-atmega328/)
- Arduino, [History of the Arduino Uno](https://blog.arduino.cc/2021/12/09/one-board-to-rule-them-all-history-of-the-arduino-uno/)
- Espressif, [ESP32 series comparison](https://docs.espressif.com/projects/esp-idf/en/v4.3.5/esp32/hw-reference/chip-series-comparison.html)
- Espressif, [ESP32 Series Data Sheet](https://documentation.espressif.com/esp32_datasheet_en.pdf)
- Raspberry Pi, [Meet Raspberry Silicon: Raspberry Pi Pico](https://www.raspberrypi.com/news/raspberry-pi-silicon-pico-now-on-sale/)
- Raspberry Pi, [RP2040 specifications](https://www.raspberrypi.com/products/rp2040/specifications/)

## สถานะและขั้นตอนถัดไป

- [x] กำหนดขอบเขตและรายชื่อ MCU
- [x] แยกปีเปิดตัวตระกูลออกจากปีของรุ่นย่อย
- [x] เพิ่มแหล่งอ้างอิงจากผู้ผลิตและโครงการเจ้าของผลิตภัณฑ์
- [ ] ตรวจทานรอบสุดท้ายก่อนเปลี่ยนสถานะเป็น `published`
- [ ] สร้างภาพประกอบของแต่ละยุค
- [ ] ผลิตและเผยแพร่วิดีโอ YouTube
- [ ] เพิ่ม Video ID, publication date และ RSS item หลังเผยแพร่จริง
