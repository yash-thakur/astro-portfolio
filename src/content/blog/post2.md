---
title: "Temperature Sensor Using Arduino And RaspberryPi"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
pubDate: "Sep 11 2022"
heroImage: "/lm35.jpeg"
---

Here we will connect an LM35 temperature sensor to Arduino and use its readings in RaspberryPi to monitor the
temperature and send an email alert if the temperature is above 100. This can be used for safety as well as many
places to get alerts of temperature variation.

### Hardware used:

- Arduino Uno
- Raspberry Pi
- Jumper Cables
- Bread Board
- LM35 (Temperature Sensor)
- USB cable (connecting Arduino to Raspberry Pi)

### Steps:

1. Connect Arduino to Arduino IDE and upload the below code to it.
2. Connect your RaspberryPi and make a new file in terminal and write the below python code to it.
3. Edit your username and passwords to it. (Note: If you are using Gmail kindly go to settings and allow
   less secure apps.
4. Connect Arduino Uno to RaspberryPi using the USB cable.
   ![Raspberry Pi and Arduino Serial Connection](/rpi-and-arduino-connection.jpg)
5. Run the python code in RaspberryPi. 6. If the temperature is above 100&deg; C, an email alert will be sent to the receiver.

**Arduino code:**

```python
char dataString[50] = {0};
int val;
int tempPin = 1;
void setup() {
  Serial.begin(9600);              //Starting serial communication
}
void loop() {
  val = analogRead(tempPin);
  float mv = ( val/1024.0)*5000;
  float cel = mv/10;
  int cel1=(int)cel;
  sprintf(dataString,"%02X",cel1); // convert a value to hexa
  Serial.println(dataString);   // send the data
  delay(30000);                  // give the loop some break
}
```

**RaspberryPi code:**

```python
import serial
import smtplib
ser = serial.Serial('/dev/ttyACM0',9600)
s = [0]
while True:
  read_serial=ser.readline()
  temp = int (ser.readline(),16)
  s[0] = str(temp)
  print s[0]
  if temp > 100:
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login("Sender Mail", "password")
    msg =s[0]+ "C Temperature Above Limit! Kindly Pay Attention!!!"
    server.sendmail("Sender Mail", "Receiver Mail", msg)
    server.quit()
  else:
    print "Safe"
```
