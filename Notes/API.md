# Application Program Interface
--- 

**What are APIs?**
* APIs is a set of commands, functions, protocols, and obejcts that programs can use to create software to interact with an internal system. There are many API providers such as open weather API that provide free keys and a number of daily requests for free. 


**How do you use APIs?**
* We first must know the follwing; Endpoints, Paths, Paremeters, and Authentications

<br>
<u><em> Endpoints</em></u> <br>

* Every API will have an endpoint. Its the endpoint that you will use to connect to the API service. 
<br>
<u><em> Paths and  Parameters </em></u> <br>

* These API endpoints require you too supply paths to make proper requests to their servers and get responses. As an API programmer, we should always plan ahead and catch all the possible paths that a client might try to enter.  
<br>
* Some APIS let you provide parameters. These parameters go after the `?` in the URL. Ex. `/endpoint?key=value` where key is the key to the parameter that is passed back to the server. As API programmers, we need to provide keys for any parameters. Parameters are separated from eachother with the `&` sign. 
<br>

<u><em>Authentication and Postman</em></u> <br>

* APIs have a authentication process where they track you usage and they can charge and limit you as neccessary. 

* Postman is free tool to help you deploy and importantly test you queries off of an API. 



## Making external requests 
---
* There are various npm that provide functions to make external requests easier. You are going to learn the standard way via nodejs.