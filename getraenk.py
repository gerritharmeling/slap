#!/usr/bin/env python
import RPi.GPIO as GPIO
import time
import sys

pumpe1 = 16
pumpe2 = 18
pumpe3 = 22
pumpe4 = 32
pumpe5 = 36
pumpe6 = 38

# dauer in Sekunden
dauerPumpe1 = sys.argv[1]
dauerPumpe2 = sys.argv[2]
dauerPumpe3 = sys.argv[3]
dauerPumpe4 = sys.argv[4]
dauerPumpe5 = sys.argv[5]
dauerPumpe6 = sys.argv[6]

GPIO.setmode(GPIO.BOARD)
GPIO.setup(pumpe1, GPIO.OUT)
GPIO.setup(pumpe2, GPIO.OUT)
GPIO.setup(pumpe3, GPIO.OUT)
GPIO.setup(pumpe4, GPIO.OUT)
GPIO.setup(pumpe5, GPIO.OUT)
GPIO.setup(pumpe6, GPIO.OUT)

GPIO.output(pumpe1, False)
GPIO.output(pumpe2, False)
GPIO.output(pumpe3, False)
GPIO.output(pumpe4, False)
GPIO.output(pumpe5, False)
GPIO.output(pumpe6, False)

try:
    if dauerPumpe1 > 0:
      GPIO.output(pumpe1, True)
      time.sleep(dauerPumpe1)
      GPIO.output(pumpe1, False)
    if dauerPumpe2 > 0:
      GPIO.output(pumpe2, True)
      time.sleep(dauerPumpe2)
      GPIO.output(pumpe2, False)
    if dauerPumpe3 > 0:
      GPIO.output(pumpe3, True)
      time.sleep(dauerPumpe3)
      GPIO.output(pumpe3, False)
    if dauerPumpe4 > 0:
      GPIO.output(pumpe4, True)
      time.sleep(dauerPumpe4)
      GPIO.output(pumpe4, False)
    if dauerPumpe5 > 0:
      GPIO.output(pumpe5, True)
      time.sleep(dauerPumpe5)
      GPIO.output(pumpe5, False)
    if dauerPumpe6 > 0:
      GPIO.output(pumpe6, True)
      time.sleep(dauerPumpe6)
      GPIO.output(pumpe6, False)

except KeyboardInterrupt:
    GPIO.cleanup()

exit()
