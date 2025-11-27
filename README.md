# 🖼️ Object Detection Web App

A full-stack application that allows users to upload an image, sends it to a HuggingFace model for object detection, and visualizes the detected objects on the image using bounding boxes.

---

## 🚀 Features

- Image Upload UI (Frontend) - Users can upload a photo via a clean interface.
- Backend API (Node.js / Express)
  - Saves uploaded images securely on the server.
  - Sends the image to a HuggingFace model endpoint.
  - Returns detected object labels + bounding box coordinates.
- HuggingFace Model Integration - The backend communicates with a model (e.g., facebook/detr-resnet-50) that performs object detection and returns:
  - ```label```
  - ```score```
  - ```[xmin, ymin, xmax, ymax]```
- Detection Visualization (Frontend) - A dedicated page renders bounding boxes on the uploaded image using the returned coordinates.
---

## 🏗️ Tech Stack

**Frontend**
  - React
  - React Router
  - Fetch for API communication

**Backend**
  - Node.js + Express
  - Multer for file uploads
  - Fetch for calling HuggingFace model
  - Dotenv for environment variables

**External**
  - HuggingFace Inference API

## ⚙️ Setup & Installation
1. **Clone the repository**
```
git clone https://github.com/HelenYarmak/object-detection-hg
cd object-detection-hg
```
2. **Backend Setup**
```
cd server
npm install
```
Create ```.env```

```HF_APIKEY=your_huggingface_key```

Start backend:

```node server.js```

3. **Frontend Setup**
```
cd client
npm install
npm run Dotenv
```

## 🧠 Model Handling
The backend forwards the uploaded image to the HuggingFace model.

The model returns predictions in the format:
  - ```label``` — class name (car, person, etc.)
  - ```score``` — confidence score
  - ```bbox — [xmin, ymin, xmax, ymax]```
These coordinates are then used in the frontend to draw bounding boxes on the image.

## 🔌 Demo

![Alt Text](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDNmNWVyb3VpNmptY3M5c2hmYXZrc2hua2x4NGltc2Z3cWZkODAyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7uXnLLkKSkkq0tMM1A/giphy.gif)

![Alt Text](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXVmcjA0eW0wOXNpOWd1eG45MWVkZDVoMjBwdW51YjhrenhzaWpmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPm3CKZ5fPuETFIuoi/giphy.gif)

## 📜 License
MIT • Feel free to use and modify as needed.