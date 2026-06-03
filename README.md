# 🩺 Diabetes Predictor

A full-stack machine learning application that predicts the likelihood of diabetes based on medical input data. Built with a React.js frontend, Express.js backend, and a Python-powered ML model.

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js (Vite) |
| Backend | Express.js (Node.js) |
| Machine Learning | Python (scikit-learn / pickle) |

---

## 📁 Project Structure

```
diabetes_predictor/
├── frontend/               # React + Vite frontend
├── backend/                # Express.js API server
├── training_model/         # Python ML training scripts
│   └── model.pkl           # Trained model (generated after training)
├── Initialize.bat          # Installs all required dependencies
├── training_model.bat      # Trains and saves the ML model
└── start.bat               # Starts the full application
```

---

## 🚀 Getting Started

Follow these steps in order to set up and run the application:

### Step 1 — Install Dependencies

Run the initializer to install all required packages for the frontend, backend, and Python environment:

```
Initialize.bat
```

### Step 2 — Train the ML Model *(first-time only)*

If `training_model/model.pkl` does not exist, run the training script to generate it:

```
training_model.bat
```

> ⚠️ You only need to do this once. If `model.pkl` already exists, skip this step.

### Step 3 — Start the Application

Launch both the frontend and backend servers:

```
start.bat
```

Once running, open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`).

---

## 🤖 How It Works

1. The user enters medical data (e.g. glucose level, BMI, age, insulin, etc.) into the React frontend.
2. The frontend sends the data to the Express.js backend via a REST API call.
3. The backend passes the input to the Python ML model (`model.pkl`).
4. The model returns a prediction (diabetic / non-diabetic) along with a confidence score.
5. The result is displayed on the frontend.

---

## 📋 Prerequisites

Make sure the following are installed on your system before running the `.bat` files:

- [Node.js](https://nodejs.org/) (v18 or above)
- [Python](https://www.python.org/) (v3.8 or above)
- `pip` (Python package manager)

---

## 📦 Dependencies

Dependencies are automatically installed via `Initialize.bat`. They include:

**Frontend**
- React, Vite, Axios (or Fetch API)

**Backend**
- Express.js, CORS, Body-parser

**Python / ML**
- scikit-learn, pandas, numpy, pickle

---

## 🛠️ Troubleshooting

| Problem | Solution |
|--------|----------|
| `model.pkl` not found | Run `training_model.bat` before starting the app |
| Port already in use | Change the port in backend config or kill the process using that port |
| Python not recognized | Ensure Python is added to your system PATH |
| Packages not installing | Run `Initialize.bat` as Administrator |

---