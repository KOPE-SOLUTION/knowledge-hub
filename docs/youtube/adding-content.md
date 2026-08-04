---
title: วิธีเพิ่มวิดีโอและ Playlist
description: คู่มือเพิ่ม YouTube video, privacy-enhanced embed, thumbnail และ Playlist link
---

# วิธีเพิ่มวิดีโอและ Playlist

## เพิ่มวิดีโอ

1. ยืนยันชื่อวิดีโอ URL, Video ID, summary และวันที่เผยแพร่จริง
2. คัดลอก block วิดีโอจาก [YouTube video template](../templates/youtube-video-entry.md)
3. สำหรับ embed ใช้ privacy-enhanced URL เท่านั้น:

```html
<div class="video-wrapper">
  <iframe
    src="https://www.youtube-nocookie.com/embed/REPLACE_WITH_VIDEO_ID"
    title="REPLACE WITH VERIFIED VIDEO TITLE"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
</div>
```

4. แทน `REPLACE_WITH_VIDEO_ID` ด้วย ID จริง ห้ามใช้ค่าเดโมหรือ ID ที่คาดเดา
5. เพิ่มลิงก์ไป Knowledge, Project, Portfolio หรือ GitHub ที่เกี่ยวข้อง
6. รัน `mkdocs build --strict`

## เพิ่ม Playlist

เพิ่มชื่อที่ยืนยันแล้ว คำอธิบายสั้น และ Playlist URL จริงใน `docs/youtube/index.md` หากต้องการ embed ให้ใช้ `youtube-nocookie.com/embed/videoseries?list=PLAYLIST_ID` และตรวจว่าผู้ใช้เปิด Playlist ได้โดยไม่ต้อง sign in

## Thumbnail

หากใช้ภาพใน repository ให้บันทึกใต้ `docs/assets/images/youtube/` พร้อม alt text ห้ามคัดลอกภาพที่ไม่มีสิทธิ์ใช้งาน
