---
external: false
title: "pan tilt ESP32 CAM"
description: pan tilt ESP32 CAM
date: 2024-10-30
---
# Pan Tilt ESP32 Cam Web Streaming
#### Overview
In this project, we’ll attach the ESP32-CAM to a pan and tilt stand with two SG90 servo motors. With a pan and tilt camera stand, you can move the camera up, down, to the left, and to the right—this is great for surveillance. The ESP32-CAM hosts a web server that shows video streaming and buttons to control the servo motors to move the camera.

![Pan tilt ESP32 Cam Project](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241028221918592.webp)

### Parts Required
For this project, we’ll use the following parts:
- [ESP32 CAM (AI Thinker)]()
- [FTDI]()
- [Pan and tilt stand]()
- [Jumper wires]()
- [Pan tilt module]()  
- [2 * Servos SG90]()

### Steps
#### 1) Pan and Tilt Stand and Motors Assembly
![Pan tilt ESP32 Cam Project](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241028223729276.webp)

#### 2) Connecting Servo Motors to ESP32 and Power Supply
![Servo Connection](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241029154135646.webp)

#### 3) ESP32 CAM Case Assembly
- *STL files*:
    <div class="sketchfab-embed-wrapper"> <iframe title="Top" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/e2a87d0dc10746838a21e3a1ab0b27a4/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/top-e2a87d0dc10746838a21e3a1ab0b27a4?utm_medium=embed&utm_campaign=share-popup&utm_content=e2a87d0dc10746838a21e3a1ab0b27a4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Top </a> by <a href="https://sketchfab.com/ossamaerrouji?utm_medium=embed&utm_campaign=share-popup&utm_content=e2a87d0dc10746838a21e3a1ab0b27a4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> RobotX&More </a><a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e2a87d0dc10746838a21e3a1ab0b27a4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"></a></p></div>
    - [Bottom Model on Sketchfab](https://sketchfab.com/3d-models/bottom-4c11fc81c39643fda570e0b3a168bfb9)
    - [Mount Model on Sketchfab](https://sketchfab.com/3d-models/mount-275df1afe2474d00bc77dd61d4536d96)

#### 4) ESP32 CAM Programming
- **FTDI <=> ESP32 CAM Wiring**  
  ![Wiring Diagram](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241028224355045.webp)

- **Software and Code Setup**:
  1. [Install Arduino IDE](https://www.arduino.cc/en/software/OldSoftwareReleases)
  2. [Download the code](https://github.com/ErroujiOussama/ESP32-CAM-pan-tilt-/tree/main/pan_tilt_esp32_cam)
  3. Download libraries & ESP32 board:
      - Open *pan_tilt_esp32_cam* sketch in Arduino IDE
      - Go to **Preferences** in the File menu  
        ![Preferences](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241029233436071.webp)
      - Paste this URL in **Additional boards manager URLs**: `https://dl.espressif.com/dl/package_esp32_index.json`  
        ![Boards Manager](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241029233958434.webp)
      - Go to **Boards Manager**, search for `esp32`, and install version `1.0.6`  
        ![ESP32 Board](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241029234625552.webp)
      - Go to **Library Manager**, search for `esp32Servo`, and install version `0.11.0`  
        ![Servo Library](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241029234636660.webp)
      - Setup the ESP32 CAM board  
        ![Board Setup](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241030004433764.webp)
      - Upload the code to the connected ESP32 board using the FTDI module  
        ![Code Upload](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241030004721719.webp)

#### 5) Web Application
- After uploading the code, remove the jumper wire  
  ![Jumper Removal](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241030013120277.webp)
- Press the reset button  
  ![Reset Button](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241030013433033.webp)
- Open the IP address in a browser connected to the same Wi-Fi network  
  ![Web Application Interface 1](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241030020927921.webp)
  ![Web Application Interface 2](https://raw.githubusercontent.com/ErroujiOussama/ESP32-CAM-pan-tilt-/refs/heads/main/images/Pan_tilt_ESP32_Cam_Project-20241030021425563.webp)
