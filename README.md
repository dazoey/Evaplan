## Author

Muhammad Rifky Athaya|21120123140129

# Evaplan: Aplikasi Manajemen Acara / Event Management Application

---

## Bahasa Indonesia

### Evaplan: Aplikasi Manajemen Acara

Evaplan adalah aplikasi manajemen acara full-stack yang memungkinkan pengguna untuk membuat, melihat, memperbarui, dan menghapus acara. Aplikasi ini memiliki frontend berbasis React dan backend Node.js Express.

### Fitur

-   **Daftar Acara:** Melihat daftar semua acara publik.
-   **Detail Acara:** Melihat informasi detail untuk acara tertentu.
-   **Manajemen Acara (CRUD):** Membuat, membaca, memperbarui, dan menghapus acara (membutuhkan otentikasi, belum sepenuhnya diterapkan dalam versi ini, tetapi endpoint API tersedia).
-   **Pencarian Acara:** Mencari acara berdasarkan berbagai kriteria.

### Teknologi yang Digunakan

#### Frontend
-   **React:** Pustaka JavaScript untuk membangun antarmuka pengguna.
-   **Vite:** Alat pembangunan cepat untuk proyek web modern.
-   **Axios:** Klien HTTP berbasis Promise untuk browser dan Node.js.
-   **Tailwind CSS:** Framework CSS utility-first untuk membangun desain kustom dengan cepat.

#### Backend
-   **Node.js:** Lingkungan runtime JavaScript.
-   **Express.js:** Framework aplikasi web untuk Node.js.
-   **CORS:** Middleware untuk mengaktifkan Cross-Origin Resource Sharing.
-   **Dotenv:** Memuat variabel lingkungan dari file `.env`.
-   **Supabase (via `@supabase/supabase-js`):** (Diasumsikan berdasarkan file konfigurasi `supabase.js`) Untuk database dan kemungkinan otentikasi.

### Memulai

Ikuti petunjuk ini untuk menyiapkan dan menjalankan proyek secara lokal.

#### Prasyarat

-   Node.js (versi LTS direkomendasikan)
-   npm (Node Package Manager)

#### Instalasi

1.  **Kloning repositori:**
    ```bash
    git clone <your-repository-url>
    cd Evaplan
    ```

2.  **Penyiapan Backend:**
    Arahkan ke direktori `backend`, instal dependensi, dan siapkan variabel lingkungan.

    ```bash
    cd backend
    npm install
    ```

    Buat file `.env` di direktori `backend/` dan tambahkan variabel lingkungan Anda. Variabel `PORT` diharapkan, secara default `4000`. Anda mungkin juga memerlukan kredensial Supabase jika integrasi database aktif.

    ```
    # backend/.env
    PORT=4000
    # SUPABASE_URL=your_supabase_url
    # SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

3.  **Penyiapan Frontend:**
    Arahkan ke direktori `frontend`, instal dependensi, dan siapkan variabel lingkungan.

    ```bash
    cd ../frontend
    npm install
    ```

    Buat file `.env` di direktori `frontend/` untuk menentukan URL API backend.

    ```
    # frontend/.env
    VITE_API_URL=http://localhost:4000
    ```
    *(Catatan: `VITE_API_URL` harus cocok dengan `PORT` yang Anda konfigurasikan untuk backend Anda.)*

### Menjalankan Aplikasi

1.  **Mulai Server Backend:**
    Buka terminal, arahkan ke direktori `backend/`, dan jalankan:
    ```bash
    cd backend
    npm run dev # atau npm start
    ```
    Server backend akan berjalan di `http://localhost:4000` (atau PORT yang Anda tentukan).

2.  **Mulai Server Pengembangan Frontend:**
    Buka terminal *baru*, arahkan ke direktori `frontend/`, dan jalankan:
    ```bash
    cd frontend
    npm run dev
    ```
    Aplikasi frontend biasanya akan terbuka di browser Anda di `http://localhost:5173` (atau port lain yang tersedia).

### Endpoint API (Backend)

Backend mengekspos endpoint API terkait acara di bawah prefiks `/api/events`.

-   `GET /api/events`: Dapatkan semua acara.
-   `GET /api/events?public=true`: Dapatkan semua acara publik.
-   `GET /api/events/:id`: Dapatkan satu acara berdasarkan ID.
-   `GET /api/events/search?query=...`: Cari acara.
-   `POST /api/events`: Buat acara baru.
-   `PATCH /api/events/:id`: Perbarui acara berdasarkan ID.
-   `DELETE /api/events/:id`: Hapus acara berdasarkan ID.

---

## English

### Evaplan: Event Management Application

Evaplan is a full-stack event management application that allows users to create, view, update, and delete events. It features a React-based frontend and a Node.js Express backend.

### Features

-   **Event Listing:** View a list of all public events.
-   **Event Details:** View detailed information for a specific event.
-   **Event Management (CRUD):** Create, Read, Update, and Delete events (requires authentication, not fully implemented in this version, but API endpoints are available).
-   **Event Search:** Search for events based on various criteria.

### Technologies Used

#### Frontend
-   **React:** A JavaScript library for building user interfaces.
-   **Vite:** A fast build tool for modern web projects.
-   **Axios:** Promise-based HTTP client for the browser and Node.js.
-   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

#### Backend
-   **Node.js:** JavaScript runtime.
-   **Express.js:** Web application framework for Node.js.
-   **CORS:** Middleware to enable Cross-Origin Resource Sharing.
-   **Dotenv:** Loads environment variables from a `.env` file.
-   **Supabase (via `@supabase/supabase-js`):** (Assumed based on `supabase.js` config files) For database and possibly authentication.

### Getting Started

Follow these instructions to set up and run the project locally.

#### Prerequisites

-   Node.js (LTS version recommended)
-   npm (Node Package Manager)

#### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd Evaplan
    ```

2.  **Backend Setup:**
    Navigate to the `backend` directory, install dependencies, and set up environment variables.

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the `backend/` directory and add your environment variables. A `PORT` variable is expected, defaulting to `4000`. You might also need Supabase credentials if database integration is active.

    ```
    # backend/.env
    PORT=4000
    # SUPABASE_URL=your_supabase_url
    # SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

3.  **Frontend Setup:**
    Navigate to the `frontend` directory, install dependencies, and set up environment variables.

    ```bash
    cd ../frontend
    npm install
    ```

    Create a `.env` file in the `frontend/` directory to specify the backend API URL.

    ```
    # frontend/.env
    VITE_API_URL=http://localhost:4000
    ```
    *(Note: The `VITE_API_URL` should match the `PORT` you configured for your backend.)*

### Running the Application

1.  **Start the Backend Server:**
    Open a terminal, navigate to the `backend/` directory, and run:
    ```bash
    cd backend
    npm run dev # or npm start
    ```
    The backend server will start on `http://localhost:4000` (or your specified PORT).

2.  **Start the Frontend Development Server:**
    Open a *new* terminal, navigate to the `frontend/` directory, and run:
    ```bash
    cd frontend
    npm run dev
    ```
    The frontend application will typically open in your browser at `http://localhost:5173` (or another available port).

### API Endpoints (Backend)

The backend exposes event-related API endpoints under the `/api/events` prefix.

-   `GET /api/events`: Get all events.
-   `GET /api/events?public=true`: Get all public events.
-   `GET /api/events/:id`: Get a single event by ID.
-   `GET /api/events/search?query=...`: Search for events.
-   `POST /api/events`: Create a new event.
-   `PATCH /api/events/:id`: Update an event by ID.
-   `DELETE /api/events/:id`: Delete an event by ID.

---

Feel free to contribute to this project!

## License

This project is licensed under the ISC License.


