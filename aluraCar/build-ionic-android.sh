ionic platform rm android

ionic platform add android@6.1.2

yes | /opt/android/tools/bin/sdkmanager --update

cp -R templates /opt/android/tools/

chmod -R 777 /opt/android/tools/templates

ionic build android
