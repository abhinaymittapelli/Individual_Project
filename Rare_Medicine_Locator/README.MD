# 💊 Rare Medicine Locator

A full-stack MERN web application that helps users locate rare medicines from registered pharmacies. The system provides role-based access for **Admin**, **Pharmacy Owners**, and **Users** to efficiently manage medicines and pharmacy information.

---

# 🚀 Features

## 👤 User

* Register & Login
* Search medicines by:

  * Medicine Name
  * Category
* View

  * Pharmacy Name
  * Address
  * City
  * Phone Number
* Open Pharmacy Location in Google Maps
* View Profile

---

## 🏥 Pharmacy Owner

* Register/Login
* Add Pharmacy
* Capture Current Location
* Edit Pharmacy
* Delete Pharmacy
* Add Medicines
* Edit Medicines
* Delete Medicines
* Manage Own Pharmacies
* Manage Own Medicines
* Dashboard

  * Total Pharmacies
  * Total Medicines

---

## 👨‍💼 Admin

* Manage Users
* Manage Pharmacies
* Manage Medicines
* Dashboard Statistics

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Hot Toast

## Backend

* Node.js
* Express.js
* JWT Authentication
* Mongoose
* bcryptjs

## Database

* MongoDB Atlas

## Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

# 📁 Project Structure

```
Rare_Medicine_Locator
│
├── Backend
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── adminController.js
│   │   ├── authController.js
│   │   ├── medicineController.js
│   │   ├── pharmacyController.js
│   │   └── verificationController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── Medicine.js
│   │   ├── Pharmacy.js
│   │   ├── User.js
│   │   └── Verification.js
│   │
│   ├── routes
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   ├── medicineRoutes.js
│   │   ├── pharmacyRoutes.js
│   │   └── verificationRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── Frontend
│   ├── public
│   │
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── ...
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── SearchMedicine.jsx
│   │   │   ├── AddMedicine.jsx
│   │   │   ├── AddPharmacy.jsx
│   │   │   ├── ManageMedicines.jsx
│   │   │   ├── ManagePharmacies.jsx
│   │   │   ├── Pharmacies.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── ...
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── README.md
├── DEPLOYMENT.md
└── .gitignore
```

---

# 🔐 Authentication

* JWT Authentication
* Role Based Authorization
* Protected Routes
* Secure Password Hashing

---

# 📍 Main Modules

* User Management
* Pharmacy Management
* Medicine Management
* Medicine Search
* Category Search
* Location Support
* Dashboard
* Profile

---

# 🌐 Live Demo

Frontend:

(Add your Vercel URL)

Backend API:

(Add your Render URL)

---

# 👨‍💻 Author

**Abhinay Mittapelli**

GitHub:

https://github.com/abhinaymittapelli

---

# ⭐ Future Enhancements

* Medicine Availability Notifications
* Nearby Pharmacy Detection
* Email Alerts
* Medicine Image Upload
* Inventory Analytics
* Admin Reports
* QR Code Support
* Mobile Application

---

## License

This project is developed for educational purposes and MERN Stack learning.
