# ต่อโปรเจกต์กับ GitHub

ทำตามขั้นตอนด้านล่างใน **Terminal** (PowerShell หรือ Command Prompt) โดยเปิดที่โฟลเดอร์โปรเจกต์ `gasrongvineyard`

---

## 1. ติดตั้ง Git (ถ้ายังไม่มี)

- ดาวน์โหลด: https://git-scm.com/download/win  
- ติดตั้งแล้ว **ปิดแล้วเปิด Terminal ใหม่** เพื่อให้คำสั่ง `git` ใช้ได้

---

## 2. สร้าง Repo บน GitHub

1. เข้า https://github.com/new  
2. ตั้งชื่อ repo เช่น `gasrongvineyard`  
3. เลือก Public (หรือ Private ตามต้องการ)  
4. **อย่าติ๊ก** "Add a README" หรือ ".gitignore"  
5. กด **Create repository**

---

## 3. รันคำสั่งในโฟลเดอร์โปรเจกต์

เปิด Terminal แล้ว `cd` ไปที่โฟลเดอร์โปรเจกต์ จากนั้นรันทีละคำสั่ง:

```powershell
cd "c:\Users\phet-\OneDrive\Documents\gasrongvineyard"

git init
git add .
git commit -m "Initial commit: Gas Rong Vineyard website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gasrongvineyard.git
git push -u origin main
```

**สำคัญ:** แทนที่ `YOUR_USERNAME` ด้วยชื่อ GitHub ของคุณ (เช่น `phet-dev`)

ถ้าใช้ SSH แทน HTTPS:

```powershell
git remote add origin git@github.com:YOUR_USERNAME/gasrongvineyard.git
git push -u origin main
```

---

## 4. ถ้า push ขึ้นไปแล้ว ต้องการอัปเดตโค้ด

```powershell
git add .
git commit -m "อธิบายสิ่งที่เปลี่ยน"
git push
```

---

## หมายเหตุ

- ถ้า GitHub ขอให้ login ให้ใช้ Personal Access Token แทนรหัสผ่าน (Settings → Developer settings → Personal access tokens)  
- ไฟล์ใน `.gitignore` (เช่น `node_modules/`, `.env`) จะไม่ถูก push ขึ้น GitHub
