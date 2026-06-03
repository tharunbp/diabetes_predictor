@echo off
title Project Setup

echo =========================
echo Installing Root Packages
echo =========================
call npm install

echo.
echo =========================
echo Installing Client Packages
echo =========================
cd client
call npm install
cd ..

echo.
echo =========================
echo Installing Server Packages
echo =========================
cd server
call npm install
cd ..

echo.
echo =========================
echo Installing Python Packages
echo =========================
cd training_model

if exist requirements.txt (
    pip install -r requirements.txt
) else (
    echo requirements.txt not found
)

cd ..

echo.
echo =========================
echo Setup Complete
echo =========================

pause