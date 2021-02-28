# Authentication 
--- 
**Why Authenticate?**
* Users will create accounts and have private information that we need to protect from malicious software attacks. 
* Restrict access to certain parts of the application so that only certain users can only get into certain parts of an application 


**Encrypting Password in DB**
* If you were to login to mongodb and look at the collection, you will see all their information such as passwords are stored in plain text. We need to store these as encrypted values or else they can be seen by anyong. 


**Level One Protection**: Storing the password in plain text in our db, but people cant get access to secrets unless they have an account in our database

**Level Two Protection**: We now introduce encryption. Essentially scrambling items such as passwords that can only be decoded with a key. Look up documenation for whatever db you are using to understand how their encrypting packages work. 


**Level Three Protection**: Hashing our password fields, hash functions make it almost impossible to the hash back to what it was before therefore we won't know their data and nobody else but the person who had the password will know. In this way we can now bypass having an encryption key and therefore not leaving any more room for people to look for our encryption key.  

<em> The pitfall </em>: All hashes that use the same method generate the same hash value. So what people do is create a dictionary with keys being all the words and combinations of words that map to a hashValue. All they have to do now is lookup the generated hash values then see what word combination created that hash value. Boom, broken. 


**Level Four Authentication**: We will now level up our authentication of hashing via Hashing & Salting. Salting is adding a random generation of characters to how hashed value. Essentially we are adding a layer of complexity. Salts are stored inside the database. 

We take this added layer of complexity and apply it to a bcrypt algorithm. bcrypt is a good algorithm because it is very slow so it deters hackers. 

The package we will use is ```bcrypt```. 


**Level Five Authentication**: 
* Cookies save browsing sessions actions. For example, when you throw an item in your amazon cart, it will create a cookie file that saves it. The cookie would be generated as an automatic response when you make a post request to amazon server. Then the next time you make a get request to amazons page, your browser may also send any cookiest that it had in regards to amazon so now amazons server can send back web content based on your cookies


* Sessions are a period of time when your broswer interacts with a server. If you log into a website they will see how long your session currently is by looking inside the cookies. Sessions end when you log out of your account or when the time period for a session ends. 


* We will implement cookies and sessions with ```Passport``` need to install ```passport passport-local passport-local-mongoose express session```


# LOOK UP SESSSIONS AND COOKIES ITS IMPORTANT 


**Level Six Authenticaion**: We can use OAuth to pretty much leave all the password encryption algorithms / solutions to companies like facebook and google. 


---
### Environment Variables
* Using environment variables allows us to store keys and secretKeys somewhere other than our source code. Its like keeping a struct full of constants that you will have to use, but you don't want anyone to find out about. 

**dotenv**: This a very popular npm module that people use to keep environment variables. 

1. Create a .env file in the root of the project directory. It creates a 'hidden' files. The format of each entry is ```NAME=VALUE```. 

2. We tap into the environment variables in node typing ```process.env.#keyname```

3. How do we keep our .env file out of github? Just make a gitignore file. You'll have to pass the data around manually.