![react-native-banner-1024x300-e1510060053599-1](https://user-images.githubusercontent.com/33808429/51068027-0a7db400-15cd-11e9-9edc-ba81dd1cb693.png)

# React Native Sandbox

React Native is a JavaScript framework for writing real, nativley rendering iOS and Android mobile applications. It is based on the React library created by Facebook for building user interfaces. We can use React Native to write clean, fast mobile apps from the comfort of a familiar framework. 

An important question to consider: Is the code we write in React Native trully native? 

The answer is yes! In React, the component describes its own appearance; React then handles the rendering for you. React uses a seamless abstraction layer ("bridge") in between these two tasks to engage with the actual rendering APIs on iOS and Android. On iOS this means that your React Native component will render to real UI Views, while on Android, they'll render to native Views. 

![reactnativeexplanation](https://user-images.githubusercontent.com/33808429/51068518-38b2c200-15d4-11e9-890b-0612292cdeee.png)



## Set up and Terminal commands to get going

I'll be using the set up for iOS since that the OS I'm personally most interesting in developing for. 

React Native relies on the following dependencies:
1. XCode - Apples official IDE for developing software for any official Apple device. We will use x-code to build our Apps and install them on a mobile device. X-code also comes with the iOS simulator which is a tool that allows you run mobile apps directly on you desktop/laptop.

Download and walk through the installation. You may have to verify your Apple ID.


1. HomeBrew - A Mac OSX dependency managagment package we'll use to install node.

Copy/paste the following comand into your terminal and run
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

1. Node/npm - Node runs JavaScript outside the browser while we'll npm to install dependencies that are specific to your application.

In your terminal
``` brew install node ```

1. Watchman - If you've used webpack-dev-server before then you'll be very familiar with the functionality of this tool. It waits for changes in our code base and updates the mobile accordingly.

``` brew install watchman ```

1. RN CLI - Allows us to generate new react native projects and run them in the simulator.

``` npm install -g react-native-cli ```


### To create a new project

```
react-native run-ios
```


## Key differences between React and React Native

## Notes on Styling in React Native

## Redux Explained 

## Resources that helped me learn

https://www.infoq.com/articles/react-native-introduction

