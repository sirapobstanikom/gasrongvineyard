# รายการไฟล์รูปที่ต้องมีในโฟลเดอร์นี้

โปรเจกต์อ้างอิงรูปจาก `src/assets/` แต่ไฟล์รูปยังไม่ได้อยู่ใน Git  
เมื่อ push ขึ้น Vercel จึงไม่มีรูป → เกิด 404

**วิธีแก้:** คัดลอกไฟล์รูปด้านล่างมาไว้ในโฟลเดอร์ `src/assets/` แล้ว commit + push อีกครั้ง

## ไฟล์ที่ต้องมี

| ไฟล์ | ใช้ใน |
|------|--------|
| `1.jpg` | Navbar, Footer (โลโก้) |
| `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg` | Gallery |
| `rev.jpg` | Gallery |
| `grape.jpg` | Gallery |
| `องุ่นเขียว.jpg` | Gallery |
| `องุ่นเขียว2.jpg` | Gallery |
| `องุ่นแดง2.jpg` | Gallery |
| `รีวิว.jpg` | About, CafeGallery |
| `เค้ก.jpg` | CafeGallery |
| `pizza.jpg` | CafeGallery |
| `มินเนี่ยน.jpg` | CafeGallery |
| `coffee.jpg` | CafeGallery |
| `ไอติมเค้ก.jpg` | CafeGallery |
| `fruitfeppe.jpg` | CafeGallery |
| `ไวกิ้ง.jpg` | GrapeVarieties |
| `shinemus.jpg` | GrapeVarieties |

หลังเพิ่มไฟล์แล้ว รัน `git add src/assets/*.jpg` (และชื่อไฟล์ไทยถ้ามี) แล้ว `git commit` และ `git push` เพื่อให้ Vercel build ได้รูปครบ
