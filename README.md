 **GTFS LAB (FRONTEND)** - Ben Thomas
===============================

## **About**

**GTFS LAB** is a data exploration project centered around GTFS (General Transit Feed Specification) data. Public transit is a huge passion of mine and I created GTFS Lab to explore the space. My hope is the project can lead to insights that help us progress the puzzle of walkable, sustainable, connected cities for everyone. 

GTFS Overview from [TransitWiki.org](https://www.transitwiki.org/TransitWiki/index.php/General_Transit_Feed_Specification)

> The General Transit Feed Specification (GTFS) defines a common format for public transportation schedules and associated geographic information. GTFS "feeds" allow public transit agencies to publish their transit data and developers to use that data to write applications. The feeds are represented in a series of text files that are compressed into a ZIP file, and include information such as fixed-route schedules, routes, and bus stop data. GTFS datasets are used in a variety of types of applications, including trip planners such as Google Maps, mobile applications, timetable generation software, tools for transit planning and operations analysis, and other categories of applications...

[Google Developers GTFS Reference](https://developers.google.com/transit/gtfs/reference/)

## **Directory Structure**

This project follows a typical node.js directory structure with application files stored in the **"src"** source folder and a package.json defining dependencies.
The **"node_modules"** are the project dependencies. The **"dist"** is where webpack packages the project into a single html and js file. 

* **src/js** is the where the Reactjs components that make up the site are located. These jsx components are dynamically built from backend axios api queries. 
* **src/styles** holds the css stylesheet.
* **src/index.html** - the base webpage html. 
* **src/index.js** is the default js script webpack looks for. It imports the "Root" React component which then imports the rest of the React components. 
* **webpack.config.js** defines the loaders for webpack to use. 

## **Tech Choices**

* **Reactjs** - This was my first experience working with Reactjs. It has really come on strong as the UI JS library of choice these past few years. I thought it would be a great fit for my project since it is a single-page web application. 
* **Bootstrap** - The css framework I am most comfortable with. "Ole Reliable".   
* **Webpack** - Amazing Node.js tool for packaging web applications. Another tool I was using for the first time. I found the *"webpack-dev-server --open --mode development"* command that allowed me to regenerate the web page in real-time to be incredibly useful. 

### **How to "Run"**

npm run dev

#### **Contributing**

Anyone is welcome to re-use the code used in this project.

#### **Tech Stack References**

* [Node.js](https://nodejs.org/en/)
* [Reactjs](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)

#### **Contact Me**

For any questions please email me at _benthomasdeveloper@gmail.com_

#### **License**

The content of this repository is not licensed. 