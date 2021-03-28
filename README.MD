# RoboScript
## A terrible scripting language for Robot.js
### Information
This is a completely basic scripting language, which only works with one command per line.

### Docs
#### Notes
These only work on their own lines.
If they are lines with anything else, they will not work and cause an error.
#### delay
This waits for an amount of time.
This example will wait for one second as the input is in milliseconds.
```javascript
delay 1000
```
#### doubleLeftMouseClick
Double clicks the left mouse button.
```javascript
doubleLeftMouseClick
```
#### doubleMiddleMouseClick
Double clicks the middle mouse button.
```javascript
doubleMiddleMouseClick
```
#### doubleRightMouseClick
Double clicks the right mouse button.
```javascript
doubleRightMouseClick
```
#### dragMouse
This moves the mouse to a location whilst holding a button down.
```javascript
dragMouse 0,0
```
#### keyPress
This presses a key.
```javascript
keyPress SHIFT
```
#### keyWrite
This presses the keys from the string specified.
```javascript
keyWrite Hello world!
```
#### mouseLeftClick
This clicks the left mouse button.
```javascript
mouseLeftClick
```
#### mouseMiddleClick
This clicks the left mouse button.
```javascript
mouseMiddleClick
```
#### mouseRightClick
This clicks the left mouse button.
```javascript
mouseRightClick
```
#### mouseToggleLeft
This toggles holding down the left button.
```javascript
// Hold the left button down for one second.
mouseToggleLeft true
delay 1000
mouseToggleLeft false
```
#### mouseToggleMiddle
This toggles holding down the middle button.
```javascript
// Hold the middle button down for one second.
mouseToggleMiddle true
delay 1000
mouseToggleMiddle false
```
#### mouseToggleRight
This toggles holding down the right button.
```javascript
// Hold the right button down for one second.
mouseToggleRight true
delay 1000
mouseToggleRight false
```
#### moveMouse
This moves the mouse to the location on screen.
```javascript
moveMouse 0,0
```
#### moveMouseSmooth
This moves the mouse to the location on screen smoothly.
```javascript
moveMouseSmooth 0,0
```
#### screenShot
This takes a screen shot of the screen and saves it using the folder location specified.
```javascript
screenShot C:\Users\Darragh\Pictures\Screenshots
```
#### scrollMouse
This scrolls the mouse to the location.
```javascript
scrollMouse 0,0
```

### Logs
Logs will be saved in the local 'logs' folder.