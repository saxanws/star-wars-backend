# star-wars-backend
This a Express app using TypeScript that pulls information about star wars characters. It use SWAPI to get them. I hosted it to AWS so no need to download and run it to your local machin. You can test it through the links provided in the **live AWS** section.

### Technology used
- **Back-End**: ExpressJs, TypeScript, Hosted on Elastic beanstalk (AWS). 
- **Front-End**: React, HTML, Scss. 
<br /> Here is a link to the front-end repository: https://github.com/saxanws/corinth-code-challenge

#### Live AWS link to test (API Only) 
- **Get Random Characters**: http://starwarsbackend-env.eba-7fbrbps9.us-east-2.elasticbeanstalk.com/starwars/people
- **Get detail on specific Character**: http://starwarsbackend-env.eba-7fbrbps9.us-east-2.elasticbeanstalk.com/starwars/people/3
- **Search by name**: http://starwarsbackend-env.eba-7fbrbps9.us-east-2.elasticbeanstalk.com/starwars/search/people/yoda

### Processus
- For all the call i added the id to each character by splittin the url
- For Detail I make a query to get the specie info, the list of movie played in and the the starships flow and combined them before returning them.
