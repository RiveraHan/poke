#!/bin/bash

project_root=$PWD

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  # Linux commands
  echo "Which emulator do you want to run? (android/ios)"
  read emulator

  if [ "$emulator" = "android" ]; then
    cd "$project_root"
    konsole -e "npx react-native run-android" &
    npx react-native start
  elif [ "$emulator" = "ios" ]; then
    cd "$project_root"
    konsole -e "npx react-native run-ios" &
    npx react-native start
  else
    echo "Invalid option. Please try again."
  fi

elif [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS commands
  echo "Which emulator do you want to run? (android/ios)"
  read emulator

  if [ "$emulator" = "android" ]; then
    cd "$project_root"
    osascript -e 'tell application "Terminal" to do script "cd '$project_root'; npx react-native run-android" with title "Emulator"'
    osascript -e 'tell application "Terminal" to do script "cd '$project_root'; npx react-native start" with title "Metro"'
  elif [ "$emulator" = "ios" ]; then
    cd "$project_root"
    osascript -e 'tell application "Terminal" to do script "cd '$project_root'; npx react-native run-ios" with title "Emulator"'
    osascript -e 'tell application "Terminal" to do script "cd '$project_root'; npx react-native start" with title "Metro"'
  else
    echo "Invalid option. Please try again."
  fi

# elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
#   # Windows commands
#   echo "Which emulator do you want to run? (android/ios)"
#   set /p emulator=

#   if "%emulator%" EQU "android" (
#     cd "$project_root"
#     start cmd /k "npx react-native start"
#     start cmd /k "npx react-native run-android"
#   ) elif "%emulator%" EQU "ios" (
#     cd "$project_root"
#     start cmd /k "npx react-native start"
#     start cmd /k "npx react-native run-ios"
#   ) else (
#     echo "Invalid option. Please try again."
#   )
else
  echo "Unsupported operating system."
fi