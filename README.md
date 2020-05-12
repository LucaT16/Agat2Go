# Agat2Go
Wir erfinden Kaffee-To-Go neu!

## Installation

#### 1. Repository clonen
Clonen Sie das Repository local auf ihrem Rechner. 

#### 2. Benötigte Packages installieren
Navigieren Sie im Terminal bzw. in der Konsole in das geclonte Verzeichnis und führen Sie 

```
npm i 
```
aus, um die benötigten Node Packages zu installieren. 

#### 3. App im Browser ausführen
Um die App im Browser ausführen und testen zu können, geben navigieren Sie in das geclonte Verzeichnis und führen Sie den Befehl

```
ionic serve 
```
aus. Dieser Befehl startet die App in einem neuen Tab in ihrem Broswer. Wenn Sie in Chrome auf "Untersuchen" klicken, können auf welchem Gerät die App dargestellt werden soll (bspw. iPhone X oder Pixel 2), um die an die jeweilige Platform angepasste App testen zu können.

#### 4. App nativ ausführen 
Um die App nativ auf Android oder iOS auszuführen sind folgende Schritte notwendig:

##### Android
Navigieren Sie in das Verzeichnis und geben sie den Konsolenbefehl

``` 
ionic cordova build android 
``` 
ein. Dieser Befehl erstellt eine kompiliert .apk App-Datei, welche anschließend auf einem Gerät installiert werden kann.

Diese kann unter */platforms/android/app/build/outputs/apk/debug/app-debug.apk* gefunden werden.

##### iOS 
Um die iOS Version der App erstellen zu können, wird MacOS, sowie Xcode benötigt. 
Der Befehl 

````
ionic cordova build ios
````
erstellt einen Xcode-Workspace für die App. Dieser kann in Xcode geöffnet werden. Mithilfe von Xcode kann die App anschließend auf einem beliebigen Simulator oder einem eigenen Gerät installiert werden. Voraussetzung hierfür ist allerdings ein (kostenfreier) Apple-Developer Account. 
