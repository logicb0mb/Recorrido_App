# Recorrido: Dream.Explore.Discover

Two problems which motivated me to work on these project were following:

- ```Lack of visualization of locations to be visted in a tour package.```
- ```Lack of difficulty levels in tour packages.```
- Not all tour packages are suitable for every customer, eg: tours involving hiking and trekking activities might be inconvinent to senior citizens.

In this project I created an Android and an iOS application for Recorrido which is a tour package booking [website](https://github.com/logicb0mb/Recorrido_Capstone) I created. These apps provide user true cross-platform support. On a base level this project uses ```Expo``` which is a React-Native framework, majorly to solve the problem of code-maintainability since React-Native allows us to write single codebase for both android and iOS apps.

This app heavily utilizes the [Recorrdio API](https://documenter.getpostman.com/view/8612734/SVtWwSzf?version=latest) which I developed while working on the [web-application](https://recorrido-shreyas.herokuapp.com/) of the same project ([Github Repo](https://github.com/logicb0mb/Recorrido_Capstone)).

## Architecture

### Component Driven Container-View Approach

- Each feature has a separate component which combines view and controller layer for that specific feature and these components can be either used as standalone components or they can be nested into each other to provide a better user interface and code maintainability. 
- Overall app has various Context components which act as containers/wrapper and all other components are rendered inside them. 
- The Context Components also acts as a service layer by interacting with the Recorrido API, and other third-party services like ```Geocode Google Maps Platform API``` available in ```Google Cloud Platform (GCP)```. 
- Thus, all the data received becomes available in global state. 
- Each individual component can then use the global data, this way request-response cycles are reduced thus increasing performance. 
- This availability of global data has been achieved with the help of ```useContext``` React hook.

![image](https://github.com/logicb0mb/Recorrido_App/assets/45527846/c574623d-0eaf-464c-9a99-f349518fd84e)

## IP Australia Patent

- I filed for an innovation patent under [IP Australia](http://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2021106333) for this project which was granted and published on ```December 2, 2021``` thus including this patent in [International Patent Classification](https://ipcpub.wipo.int/?notion=scheme&version=20120101&symbol=G06Q0050140000&menulang=en&lang=en&viewmode=f&fipcpc=no&showdeleted=yes&indexes=no&headings=yes&notes=yes&direction=o2n&initial=A&cwid=none&tree=no&searchmode=smart).

- IPC Mark: ```G06Q50/14 (2021.01)```

- Patent Document: [Click Here](http://pericles.ipaustralia.gov.au/ols/auspat/pdfSource.do?fileQuery=%C2%8A%C2%A6%C2%9A%C2%97o%C2%96%C2%A1%C2%99X%C2%98%C2%9B%C2%9E%C2%97%C2%A0%C2%93%C2%9F%C2%97os%C2%87dbdccbheeesfdbdccdbd%60%C2%A2%C2%96%C2%98X%C2%A1%C2%A8%C2%97%C2%A4o%C2%A6%C2%9A%C2%97)


## Deployment
- Deployed version of the web-app can be found here: [https://recorrido-shreyas.herokuapp.com/](https://recorrido-shreyas.herokuapp.com/)

- Mock User Credentials:
Email: monica@example.com
Password: test1234

- Recorrdio API: [https://documenter.getpostman.com/view/8612734/SVtWwSzf?version=latest](https://documenter.getpostman.com/view/8612734/SVtWwSzf?version=latest)

- Android and iOS Apps can be deployed using ```Expo framework's``` build service.


## Mobile Application Screenshots

### Android App


Landing Screen             |  Login Screen
:-------------------------:|:-------------------------:
<img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/ac54c7b5-fc1a-47d1-b1c9-db1883379208" width="50%" height="50%" />  |  <img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/1670b39e-383e-4bc8-9bd6-92672da45df6" width="50%" height="50%" />

Sign Up Screen             |  Loading Screen
:-------------------------:|:-------------------------:
<img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/142e1e5c-fed5-43fe-a930-cc4eafd16ea3" width="50%" height="50%" />  |  <img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/b182f1da-64e3-472b-b07d-186de73df6a6" width="50%" height="50%" />

All Tours             |  Map (Tour Search via Location)
:-------------------------:|:-------------------------:
<img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/02fd1fed-e817-4eba-9f72-62c0ad07364f" width="50%" height="50%" /> | <img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/a59f998a-4f74-47ca-b06f-49db0da36bba" width="50%" height="50%" />

Favourites             |  Checkout
:-------------------------:|:-------------------------:
<img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/e8862895-3522-4013-809b-fbdd7e5eb813" width="50%" height="50%" /> | <img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/64b2d602-8785-4073-9e8e-2a970bce3c7c" width="50%" height="50%" />

Successful Booking             |  User Profile
:-------------------------:|:-------------------------:
<img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/7d66af58-acab-4111-95e7-c97490736517" width="50%" height="50%" /> | <img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/4b2f7f02-c388-4867-add7-38dd0d48462f" width="50%" height="50%" />

App running on an Android Phone| 
:-------------------------:|
<p align="center">
<img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/59e09a40-1835-41b1-9898-bd2749cd90df" width="25%" height="25%" />
</p>

<!-- Tour Details Screen (Long Scroll ScreenShot)
<img src="https://github.com/logicb0mb/Recorrido_App/assets/45527846/0052d305-a065-423c-b098-a53162fae502" width="35%" height="35%" />
  -->



### iOS App

App running on iOS Emulator| 
:-------------------------:|
<!-- <img src="" width="25%" height="25%" />

<img src="" width="25%" height="25%" />

<img src="" width="25%" height="25%" />

<img src="" width="25%" height="25%" />
 -->
![2](https://github.com/logicb0mb/Recorrido_App/assets/45527846/8a0c11e1-59bb-4025-b67d-dc1c879a46be)
![3](https://github.com/logicb0mb/Recorrido_App/assets/45527846/fa2abf50-af91-4802-92c1-a08f6f94acc2)
![4](https://github.com/logicb0mb/Recorrido_App/assets/45527846/5ef9cafd-2829-4990-aade-0c5fd5bdd2ec)
![1](https://github.com/logicb0mb/Recorrido_App/assets/45527846/5cd0299d-82a6-4927-b316-296832cd6739)




