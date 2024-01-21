<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<!-- [![Forks][forks-shield]][forks-url]
[![MIT License][license-shield]][license-url] -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="assets/imgbin_book.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">BooksApp</h3>

  <p align="center">
    This project is a mobile application developed using Firebase, Express, React Native and Expo. The application allows users to manage a collection of books.
    <br />
    <a href="https://github.com/SuperSandrine/booksApp"><strong>Explore the folders and files »</strong></a>
    <br />
    <!-- <br />
    <a href="https://github.com/SuperSandrine/booksApp">View Demo !!! </a>
    ·
    <a href="https://github.com/SuperSandrine/booksApp/issues">Report Bug</a>
    ·
    <a href="https://github.com/SuperSandrine/booksApp/issues">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#structure">Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This project, named "Books App," is a mobile application developed using React Native and Expo. 
The application allows users to manage a collection of books, including adding new books, viewing a list of existing books, updating book details, and deleting books. 
The frontend is built with React Native, while the backend is implemented using Node.js and Firestore for data storage. 
The project also includes navigation features for seamless user experience, and it is structured to follow best practices for React Native development.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
Mobile app front side:
* [![Expo][Expo]][Expo-url]
* [![React][React_Native]][React_Native-url]
* [![ReactNavigation][React_Navigation]][React_Navigation-url]
Back side:
* [![Express][Express]][Express-url]
* [![Firebase][Firebase]][Firebase-url]
* [![Node.js][Node.js]][Node.js-url]

<!-- To go further: https://rnfirebase.io/ 
https://www.freecodecamp.org/news/how-to-use-the-firebase-database-in-react/ -->

### Structure

```bash
booksApp/
|
|-assets/
|
|-backend/
|  |- ...(package & config)
|  |
|  |-index.js
|  |
|  |-models/
|  |   |-book.js
|  |
|  |-controllers/
|  |   |-booksControllers.js
|  |
|  |-routes/
|  |   |-booksRoutes.js
|  
|
-mobile-app/
|  |- ...(package & config)
|  |
|  |-App.js
|  |
|  |-assets/
|  |   |-favicon.svg
|  |
|  |-src/
|  |   |-screens/
|  |   |    |-Screen1.js
|  |   |    |-Screen2.js
|  |   |    |-...
|  |   |-service/
|  |   |    |-apiService.js
|  |   |-navigation/
|  |   |    |-AppNavigator.js
|
|-README.md 
```




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you begin, ensure you have met the following requirements:

On computer:
- [Node.js](https://nodejs.org/) : 17.9.1
- [npm](https://www.npmjs.com/) : 8.11.0
- An IDE like VSCode might help

On mobile device: 
- [Expo_go](https://expo.dev/client)


### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/SuperSandrine/booksApp.git
   ```
3. Install backend and run it through those commande
   ```sh
   cd backend
   npm install
   npm run start
   ```
   Keep this terminal open.

4. On a new terminal, Install and run the mobile-app :

   ```sh
   cd mobile-app
   npm install
   ```

5. To access your server from your mobile device, you have to change the API_KEY_IPV4 in the mobile-app/config.js. Get the IPV4 from your computer, it has to be the same computer were you launched the backend server.
   ```js
   export const API_KEY_IPV4 = 'xxx.xxx.x.xx'
   ```
6. back to the mobile-app terminal, launch the mobile-app with:
   ```sh
   npm run start
   ```
Will appear several command allows with Expo and a QR code that you can scan with the expo go installed on your device.

You can enjoy the app directly on your device !


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage


Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 -->


<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 -->


<!-- CONTACT -->
## Contact

![author][MeBadge] </br>
[![LinkedIn][linkedin-shield]][linkedin-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 -->


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/SuperSandrine/booksApp.svg?style=for-the-badge
[contributors-url]: https://github.com/SuperSandrine/booksApp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SuperSandrine/booksApp.svg?style=for-the-badge
[forks-url]: https://github.com/SuperSandrine/booksApp/network/members
[stars-shield]: https://img.shields.io/github/stars/SuperSandrine/booksApp.svg?style=for-the-badge
[stars-url]: https://github.com/SuperSandrine/booksApp/stargazers
[issues-shield]: https://img.shields.io/github/issues/SuperSandrine/booksApp.svg?style=for-the-badge
[issues-url]: https://github.com/SuperSandrine/booksApp/issues
[license-shield]: https://img.shields.io/github/license/SuperSandrine/booksApp.svg?style=for-the-badge
[license-url]: https://github.com/SuperSandrine/booksApp/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&logoColor=blue
[linkedin-url]: https://www.linkedin.com/in/sandrine-mestas-gleizes/

[product-screenshot]: images/screenshot.png

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React_Native]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React_Native-url]: https://reactnative.dev/
[React_Navigation]: https://img.shields.io/badge/React_Navigation-20232A?style=for-the-badge&logo=react&logoColor=c2a1e2
[React_Navigation-url]: https://reactnavigation.org
[Express]: https://img.shields.io/badge/Express.js-C7C8C9?style=for-the-badge&logo=Express&logoColor=000
[Express-url]: https://expressjs.com/fr/
[Expo]: https://img.shields.io/badge/Expo-fff.svg?style=for-the-badge&logo=EXPO&labelColor=fff&logoColor=000
[Expo-url]: https://expo.dev/
[Firebase]: https://img.shields.io/badge/Firebase-061824.svg?style=for-the-badge&logo=EXPO&labelColor=061824&logoColor=ffcA28
[Firebase-url]: https://firebase.google.com/
[Node.js]: https://img.shields.io/badge/Node.js-222426.svg?style=for-the-badge&logo=node.js&labelColor=222426&logoColor=339933
[Node.js-url]: https://nodejs.org/en

[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[MeBadge]: https://img.shields.io/badge/Author-Sandrine%20Mestas-blue?style=for-the-badge
