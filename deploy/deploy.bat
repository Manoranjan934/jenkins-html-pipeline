@echo off

echo Creating Deployment Package...

if not exist deploy-output mkdir deploy-output

copy index.html deploy-output\
xcopy assets deploy-output\assets /E /I /Y

echo Deployment Package Ready