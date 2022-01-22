# DEV-CV

This is a react project helping you to create your own CV website.
This project is implemented in a modular fashion expecting users just to update details in on JSON file and your CV page will be ready. With just modifying the JSON file you can update details as well as basic style elements

Checkout demo website here ->> https://dev-cv.netlify.app/


# Components

Currently DEV-CV supports following components.
1. Top **header/navigation** bar.
2. **Landing** module where users can provide a short gist of who they are.
3. **Education** module where users show their education journey.
4. **Experience** module where users can showcase their experience record and also highlight any accomplishment.
5. **Skills** module where users can show weighted representation of skills they have.
6. **Publications** module where users can show any research work/publication done by them.
7. **Contact** module is basically a footer showing the dev's picture and contact links.

# How to Use
From your command line, first clone Simplefolio:
```
# Clone the repository
$ git clone https://github.com/iamashish121/dev-cv.git

# Move into the repository
$ cd dev-cv
```
After that, install the dependencies using NPM
```
# Install dependencies
$ npm install

# To build the project
$ npm build-cv

# Start the development server
$ npm start
```
Now modify the file `./src/configData.json` with your details. Full construct of JSON file is mentioned below.
After the server has started, go to this url  `http://localhost:3000/`  to see the portfolio locally.

# JSON Structure
The JSON config mainly contains the `components` array having all the components in the same order as we want them to appear in final webpage.
Below are the JSON constructs for every components.
1. **Header**
Type represents the type of components.
Under the data object `logoURI`represents the top left logo image.
`menuItems`contains the navigation links, link's name and uri.
`style`object allows the basic style modification like background color, header height, text color etc.
```
{
      "type": "header",
      "data": {
        "logoURI": "https://ik.imagekit.io/devcvV1/dev-cv/logo_jdye-zUbO.jpg?updatedAt=1641637210666",
        "menuItems": [
          {
            "value": "Education",
            "path": "#education"
          }
        ],
        "style": {
          "bgColor": "#E4F4D8",
          "height": "65px",
          "logoImageHeight": "65px",
          "textColor": "#555"
        }
      }
    }
```
2. **Landing**
`heroImage` could be any svg or graphic content, covering right half of the component.
In the left half `welcomeText1`and `welcomeText2`helps to introduce yourself in short.

Note : remember to use max in font size styling to support responsiveness.

```
{
      "type": "landing",
      "data": {
        "heroImage": "https://ik.imagekit.io/devcvV1/dev-cv/heroImage2_1__V1t0pDTOl.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1642150334890",
        "welcomeText1": "Hi All, I am Ashish ✌️ ",
        "welcomeText2": "A frontend engineer having experiance in React, React Native, node.js and webpack.",
        "buttonText": "Resume ?",
        "style": {
          "bgImage": "linear-gradient(90deg, #496D1D, #EEF8E3)",
          "headerHeight": "65px",
          "titleFontSize": "max(3vw,21px)",
          "subtitleFontSize": "max(2vw,16px)",
          "introTextColor": "#fff",
          "buttonTextColor": "#fff"
        }
      }
}
```
3. **Education**
`educationData`array here represents list of all the institutes, degree and time period
```
{
      "type": "education",
      "data": {
        "educationData": [
          {
            "logoURI": "https://ik.imagekit.io/devcvV1/dev-cv/iitk-logo_etL8SrCEktA.png?updatedAt=1641637210305",
            "title": "Institute name",
            "degree": "Degree",
            "period": "from - to"
          }
        ],
        "style": {
          "bgColor": "#1A3209",
          "sectionTitle": {
            "color": "#fff",
            "fontSize": "max(5vw, 30px)",
            "fontWeight": "300"
          },
          "entryBgColor": "#fff"
        }
      }
    }
```
4. **Experience**
`experianceData` contains the list of all the places you have worked.
`remarks` is the array of strings representing the noticeable achievements or work that you did.
```
{
      "type": "experience",
      "data": {
        "experianceData": [
          {
            "logoURI": "https://ik.imagekit.io/devcvV1/dev-cv/Myntra_logo_2_S07JQ2jwp.png?updatedAt=1641637210979",
            "company": "Myntra",
            "role": "Software Engineer",
            "period": "2020 - Present",
            "remarks": ["Helped in reducing the desktop server load.","Onboarded alerting system which monitors important metrics.","Worked on making mweb Server side rendered.","fixed the critical bugs leading to improved service performance"]
          }
        ],
        "style": {
          "bgColor": "#577A3E",
          "sectionTitle": {
            "color": "#fff",
            "fontSize": "max(5vw, 30px)",
            "fontWeight": "300"
          },
          "entryBgColor": "#fff"
        }
      }
    }
```
5. **Skills**
`skillsData` represents the list of all the skills you want to showcase. `type`key under it represents the name of skill and level represents the weight out of 100.
`barsColorsData`is the styling specific to skill bars.
```
{
      "type": "skills",
      "data": {
        "skillsData": [
          {
            "type": "React",
            "level": 85
          }
        ],
        "barsColorsData": {
          "bar": "#339966",
          "title": {
            "text": "#fff",
            "background": "#0d261a"
          }
        },
        "style": {
          "bgColor": "#b3e6cc",
          "sectionTitle": {
            "color": "#1A3209",
            "fontSize": "max(5vw, 30px)",
            "fontWeight": "500"
          }
        }
      }
    }
```
6. **Publications**
`publicationsData` represents the data for all the publications. `link` is the url for actual paper on publisher's website.
```
{
      "type": "publications",
      "data": {
        "publicationsData": [
          {
            "title": "MAP: A Visual Analytics System for Job Monitoring and Analysis",
            "conference": "IEEE International Conference on Cluster Computing",
            "year": 2020,
            "link": "https://ieeexplore.ieee.org/document/9229613"
          }
        ],
        "style": {
          "bgColor": "#EBF7E3",
          "sectionTitle": {
            "color": "#1A3209",
            "fontSize": "max(5vw, 30px)",
            "fontWeight": "500"
          },
          "wrapperBgColor": "#fff"
        }
      }
    }
```
7. **Contact**
Contact information currently supports `gmail`, `linkedin` and `twitter`.
`displayImage`will be your photo presented on right side.
```
{
      "type": "contact",
      "data": {
        "displayImage": "https://ik.imagekit.io/devcvV1/dev-cv/myPhoto_V3dmX6KvS.jpg?updatedAt=1641637211657",
        "gmail": "abc@gmail.com",
        "linkedin": "https://www.linkedin.com/in/abc/",
        "twitter": "https://twitter.com/abc",
        "style": {
          "bgColor": "#40826D",
          "sectionTitle": {
            "color": "#fff",
            "fontSize": "max(4vw,30px)",
            "fontWeight": "400"
          }
        }
      }
    }
```
# Deployment
After you have done the modification and you can put your website live.
There are many free web hosting platforms. I recommend using [Netlify](https://netlify.com/) because of it's easy to use UI which makes things super easy.
