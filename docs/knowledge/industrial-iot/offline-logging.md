---
title: Offline Logging
description: ออกแบบ local logging และ store-and-forward เมื่อ network ใช้งานไม่ได้
---

# Offline Logging

ระบบภาคสนามควรนิยามพฤติกรรมเมื่อขาด network ไว้ตั้งแต่ต้น Offline logging ต้องจัดการพื้นที่จัดเก็บ ลำดับข้อมูล timestamp และการส่งซ้ำโดยไม่ทำให้ข้อมูลซ้ำอย่างเงียบ ๆ

<span class="status-badge status--pending">กำลังจัดทำ</span>

## Proposed article outline

1. Failure scenarios และ retention objective
2. Record format, sequence และ timestamp source
3. Storage layout, rotation และ corruption handling
4. Store-and-forward, acknowledgment และ deduplication
5. Capacity tests, power-loss tests และ observability

