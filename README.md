# Web Board API

## Overview
API นี้พัฒนาด้วย **NestJS** สำหรับระบบ Web Board ที่รองรับการจัดการผู้ใช้ (User), โพสต์ (Post), คอมเมนต์ (Comment) และคอมมูนิตี้ (Community) โดยใช้ข้อมูล Mock และไม่มีฐานข้อมูลจริง

---

## Installation Guide
### 1. **Clone Repository**
```bash
git clone <https://github.com/Mattrixxx/backend-web-board.git>
cd <backend-web-board>
```

### 2. **ติดตั้ง Dependencies**
```bash
npm install
```

### 3. **รันโปรเจกต์**
```bash
npm run start
```

### 4. **รันแบบ Hot Reload**
```bash
npm run start:dev
```

### 5. **เปิด API ในเบราว์เซอร์**
- API จะรันบนพอร์ต `3001` โดยค่าเริ่มต้น
- URL: [http://localhost:3001](http://localhost:3001)

---

## Application Architecture
### ภาพรวมโครงสร้างระบบ
```
src/
├── users/               # โมดูลและฟีเจอร์เกี่ยวกับผู้ใช้
│   ├── users.controller.ts
│   ├── users.service.ts
├── posts/               # โมดูลและฟีเจอร์เกี่ยวกับโพสต์
│   ├── posts.controller.ts
│   ├── posts.service.ts
├── communities/         # โมดูลและฟีเจอร์เกี่ยวกับ Community
│   ├── communities.controller.ts
│   ├── communities.service.ts
├── mock.data.ts         # ไฟล์ข้อมูล Mock
├── app.module.ts        # โมดูลหลัก
└── main.ts              # จุดเริ่มต้นของโปรเจกต์
```

---

## Libraries and Packages
### **Main Framework**
- [NestJS](https://nestjs.com/) - Framework สำหรับพัฒนา Backend ด้วย TypeScript

### **Utilities**
- `@nestjs/common` - ใช้สำหรับ Decorators และฟังก์ชันพื้นฐาน
- `@nestjs/core` - ใช้สำหรับการบูตแอปพลิเคชัน
- `@nestjs/platform-express` - ใช้ Express เป็น HTTP Adapter
- `typescript` - ใช้สำหรับเขียนโค้ด TypeScript

### **Development Tools**
- `nodemon` - ใช้สำหรับ Hot Reload
- `ts-node` - รัน TypeScript โดยไม่ต้องคอมไพล์

---

---

## API Endpoints
| Method | Endpoint                        | Description                     |
|--------|---------------------------------|---------------------------------|
| POST   | `/users/login`                  | สร้างหรือเข้าสู่ระบบผู้ใช้     |
| GET    | `/communities`                  | ดึงรายชื่อ Community ทั้งหมด    |
| GET    | `/posts`                        | ดึงรายชื่อ โพสต์ ทั้งหมด    |
| POST   | `/posts`                        | สร้างโพสต์ใหม่                 |
| PUT    | `/posts/:id`                    | แก้ไขโพสต์                     |
| DELETE | `/posts/:id`                    | ลบโพสต์                        |
| POST   | `/posts/:id/comments`           | เพิ่ม Comment ในโพสต์          |

---

## Contact
- **ผู้พัฒนา:** [Thanundorn]
- **อีเมล:** [mingth.forwork@gmail.com]