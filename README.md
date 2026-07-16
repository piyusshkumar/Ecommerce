# 🛒 E-Commerce Platform

A modern, production-ready full-stack e-commerce application built with **React.js**, **Node.js**, **Express.js**, **PostgreSQL**, **Prisma ORM**, **Redis**, **Stripe**, and **Cloudinary**. Designed with secure authentication, scalable REST APIs, online payment processing, and optimized backend performance.

---

## 🚀 Features

- **🔐 Secure Authentication & Authorization**
  - JWT Access & Refresh Token Authentication.
  - HTTP-only Cookie-based Session Management.
  - Refresh Token Rotation with Redis Storage.
  - Secure Password Hashing using bcrypt.
  - Role-Based Access Control (Admin & Customer).

- **🛍️ Product Management**
  - Complete CRUD Operations for Products.
  - Product Categories & Search.
  - Product Image Uploads using Cloudinary.
  - Inventory & Stock Management.

- **🛒 Shopping Experience**
  - Shopping Cart Management.
  - Wishlist Support.
  - Checkout Workflow.
  - Order History & Tracking.

- **💳 Payment Integration**
  - Secure Stripe Checkout.
  - Payment Verification.
  - Automatic Order Creation after Successful Payment.

- **⚡ Performance & Security**
  - Redis Caching for Improved Performance.
  - Protected REST APIs.
  - Secure Cookie Handling.
  - Input Validation & Error Handling.

---

## 🛠 Tech Stack

- **Frontend:** React.js, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma ORM
- **Authentication:** JWT, HTTP-only Cookies
- **Caching:** Redis (ioredis)
- **Payments:** Stripe
- **Media Storage:** Cloudinary
- **Containerization:** Docker

---

## 📁 Directory Structure

```
├── backend/
│   ├── config/             # Database & Cloudinary configuration
│   ├── controllers/        # Business Logic
│   ├── middleware/         # Authentication & Authorization Middleware
│   ├── prisma/             # Prisma Schema & Migrations
│   ├── routes/             # API Routes
│   ├── utils/              # Helper Functions
│   ├── lib/                # Redis & External Services
│   ├── server.js           # Express Entry Point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Configuration

Create a `.env` file inside the backend directory.

```env
PORT=5000

DATABASE_URL=postgresql://<username>:<password>@localhost:5432/ecommerce

ACCESS_TOKEN_SECRET=your_access_token_secret

REFRESH_TOKEN_SECRET=your_refresh_token_secret

REDIS_URL=redis://localhost:6379

STRIPE_SECRET_KEY=your_stripe_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

CLIENT_URL=http://localhost:5173
```

---

## 🏃 Local Setup & Development

### 1. Prerequisites

Install the following:

- Node.js (v20+)
- PostgreSQL
- Redis
- Docker (Optional)

---

### 2. Clone Repository

```bash
git clone https://github.com/piyusshkumar/Ecommerce.git

cd Ecommerce
```

---

### 3. Install Dependencies

Backend

```bash
cd backend

npm install
```

Frontend

```bash
cd frontend

npm install
```

---

### 4. Configure PostgreSQL

Create a PostgreSQL database and update the `DATABASE_URL` inside `.env`.

Run Prisma Migrations

```bash
npx prisma migrate dev

npx prisma generate
```

---

### 5. Start Redis

```bash
redis-server
```

---

### 6. Start Backend

```bash
npm run dev
```

---

### 7. Start Frontend

```bash
npm run dev
```

---

## 🗺 API Endpoints

### Authentication (`/api/auth`)

- `POST /signup` – Register a new account.
- `POST /login` – Login and receive Access & Refresh Tokens.
- `POST /logout` – Logout user.
- `POST /refresh-token` – Generate a new Access Token.
- `GET /profile` – Get authenticated user profile.

---

### Products (`/api/products`)

- `GET /` – Get all products.
- `GET /:id` – Get product details.
- `POST /` – Create Product (Admin).
- `PUT /:id` – Update Product.
- `DELETE /:id` – Delete Product.
- `GET /featured` – Featured Products.
- `GET /category/:category` – Products by Category.

---

### Cart (`/api/cart`)

- `GET /` – Retrieve user cart.
- `POST /` – Add product to cart.
- `PUT /:id` – Update quantity.
- `DELETE /:id` – Remove product.

---

### Orders (`/api/orders`)

- `POST /` – Place Order.
- `GET /` – User Order History.
- `GET /:id` – Order Details.

---

### Payments (`/api/payments`)

- `POST /create-checkout-session` – Create Stripe Checkout Session.
- `POST /webhook` – Stripe Webhook.

---

## 🐳 Docker Deployment

Build Docker Image

```bash
docker build -t ecommerce .
```

Run Container

```bash
docker run -p 5000:5000 --env-file .env ecommerce
```

---

## 🔒 Security

- JWT Access & Refresh Tokens
- HTTP-only Secure Cookies
- Redis Refresh Token Storage
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization
- Secure Stripe Payment Processing

---

## 🚀 Future Improvements

- BullMQ Background Jobs
- Email Notifications
- Product Recommendations
- Coupon & Discount System
- Elasticsearch Product Search
- Admin Analytics Dashboard
- CI/CD with GitHub Actions
- Kubernetes Deployment

---

## 👨‍💻 Author

**Piyush Kumar**

- GitHub: https://github.com/piyusshkumar
- LinkedIn: https://www.linkedin.com/in/your-linkedin-profile/