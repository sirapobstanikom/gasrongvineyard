# ใส่ไฟล์รูปที่นี่ (แล้ว commit + push)

โฟลเดอร์นี้คือ **public/assets/** — Vite จะคัดลอกไปที่ root ของ build ดังนั้น URL จะเป็น `/assets/ชื่อไฟล์`

**รายการไฟล์ที่ต้องมี (คัดลอกจากที่ local ที่เคยใช้ได้มาไว้ที่นี่):**

| ไฟล์ |
|------|
| 1.jpg |
| 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg |
| rev.jpg |
| grape.jpg |
| องุ่นเขียว.jpg, องุ่นเขียว2.jpg, องุ่นแดง2.jpg |
| รีวิว.jpg |
| เค้ก.jpg, pizza.jpg, มินเนี่ยน.jpg, coffee.jpg |
| ไอติมเค้ก.jpg, fruitfeppe.jpg |
| ไวกิ้ง.jpg, shinemus.jpg |

**วิธีทำ:**  
1. คัดลอกไฟล์รูปจาก `src/assets/` (บนเครื่องคุณ) มาวางในโฟลเดอร์ **public/assets/** นี้  
2. เปิด terminal: `git add public/assets/`  
3. `git commit -m "Add images for Vercel"`  
4. `git push`  

หลัง push แล้ว Vercel จะ build ใหม่และรูปจะโหลดได้ทั้ง local และ cloud
