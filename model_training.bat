@echo off
cd training_model
python model.py
cd ..
npm run dev
pause