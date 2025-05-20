# Choose Your President!

<p align="center">
  <img src="https://hackmd.io/_uploads/ryOHquF-gg.png" alt="Image" width="200">
</p>

Choose your president adalah sebuah website yang bertujuan untuk membantu sistem voting presiden supaya orang orang tidak usah repot pergi ke TPS untuk memilih capres. Terdapat 3 buah kantor cabang dan 1 kantor utama di mana setiap cabang mengumpulkan hasil vote yang nantinya total vote dihitung di kantor pusat. Pemilihan dilakukan dengan sistem eliminasi di setiap fase pemilihan. Tidak ada lagi alasan jadi golput karena TPS kejauhan dengan sistem ini.

### Features :star2: 
- Login & Verifikasi Pengguna
- Pemilihan Kandidat yang Mudah
- Penghitungan Suara Otomatis
- Countdown Hari Pemilihan
- Dashboard Admin

## Installation Guide

```
git clone https://github.com/MRafli127/pemilu.git
```

### Frontend
```
cd pemilu
npm install
npm install react-router-dom
npm run dev
```
![image](https://hackmd.io/_uploads/ByY7AOYZgl.png)


- Stucture File Frontend
```
pemilu/
├── public/
├── src/
│   ├── api/
│   │   └── axios.js
│   ├── assets/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── RegisterForm.jsx
│   │   ├── Candidates/
│   │   │   ├── CandidateCard.jsx
│   │   │   └── CandidateList.jsx
│   │   ├── Dashboard/
│   │   │   ├── Countdown.jsx
│   │   │   ├── VotersPerRegion.jsx
│   │   │   └── VotingProgress.jsx
│   │   ├── Layout/
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── MainLayout.jsx
│   │   │   └── Sidebar.jsx
│   │   └── UI/
│   ├── context/
│   │   └── AuthContext.jsx
│   └── pages/
│       ├── CandidatesPage.jsx
│       ├── CountdownPage.jsx
│       ├── DashboardPage.jsx
│       ├── LoginPage.jsx
│       ├── RegisterPage.jsx
│       ├── StartPage.jsx
│       ├── VoteConfirmationPage.jsx
│       ├── VotersPerRegionPage.jsx
│       └── VotingProgressPage.jsx
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

### Beckend

```
cd backend
npm install

npm run start
```
- Stucture File Backend
```
backend/
├── src/
│   ├── controllers/
│   │   ├── branchcontroller.js
│   │   ├── candidatecontroller.js
│   │   ├── countdowncontroller.js
│   │   ├── mainoffice.js
│   │   └── usercontroller.js
│   ├── routes/
│   │   ├── branchroute.js
│   │   ├── candidateroute.js
│   │   ├── countdownroute.js
│   │   ├── mainroute.js
│   │   └── userroute.js
│   ├── utils/
│   │   └── connect.js
│   └── index.js
├── .env
├── .gitignore
├── Dockerfile
├── dump.sql
├── package.json
├── package-lock.json
└── vercel.json
```


### Diagram 📊
- #### UML
![image](https://hackmd.io/_uploads/HyFBPOtbee.png)

- #### ERD
![ERD Finpro Draft - Page 1](https://hackmd.io/_uploads/HyrtbZqbxe.png)

- #### FLOWCHART
![Diagram SBD-Flowchart.drawio](https://hackmd.io/_uploads/BJEDzWc-ll.png)

## Progress Report:
### Progress Report 1 (14 Mei 2025)
![image](https://hackmd.io/_uploads/SkaItDYZxx.png)

### Progress Report 2 (19 Mei 2025)
![image](https://hackmd.io/_uploads/Hy5VtPt-ll.png)

## **Authors ✍️** 
| Group 20 | Student Number |
| :----------------: | :------------: |
| [**Wesley Frederick Oh**](https://github.com/sleepingpolice-afk)| 2306202763 |
| [**Ruben Kristnto**](https://github.com/RubenKristanto)| 2306214624 |
| [**Arsinta Kirana Nisa**](https://github.com/reimoyisuki)| 2306215980 |
| [**Muhammad Rafli**](https://github.com/MRafli127)| 2306250730 |
