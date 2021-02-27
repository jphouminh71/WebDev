# REST Apis
---
* REpresenational State Transfer

The entire internet is built in a client-server model. When Clients make requests the Servers will have available services that they can fill. Thus, there are different type of requests that clients can make to servers. 

Client requests are made through standard  ```https``` requests. Its kind of like the language you are using to make the requests. https isn't the only server langauge, there are also others known as ```ftp``` so you need be aware of what kind of requests you are making to certain apis. 

You should use ```https``` vs ```http``` because it encrypts the data transmission. 

Then, once you make a requests and the server can fill that requests then it can serve back some files / data. 

When we are building an API we are building a set of methods that clients can make requests too. 


**What does it mean to be Restful?**
* Rest is a popular architectural style of designing API's. There are others including GraphQL, SOAP, etc. Rest is a standard for web APIs. 
<br>
* There are a lot of rules for an API to be considered Restful, but the two important rules are 
    * Use the HTTP Requests verbs 
    * Use Specific Pattern of Routs / Endpoint URLs

**Types of Rest HTTPS Requests**

* Get
    * This is essentially like a read request. The client wants some data and we as the server will look for and then serve the data
* Post
    * The requests will contain data from the client and we will create this data in our database
* Put / Patch
    * These are update requests to a backend. The difference between them is that put sends an entire entry vs a put sends partial data back the database. 
* Delete
    * Simply deletes data from our database


**Rest Route Pattern**
* This is best shown through example, but essentially we make is so our paths move into subsets.

```
VERBS   /articles       /articles/jackbauer
=============================================
GET     Retrieves all articles | retrieves the article on jack bauer
POST    Creates one new article | -
PUT     -   | updates the article on jack bauer
PATCH   -   | updates the article on jack bauer
DELETE  Deletes all articles |  deletes article on jack bauer

```



**Just gonna put the code here for examples*
* Essentially, you are going to build all of these requests in the routs in turn

**GET**
```json
    /* Get route for sending all articles */
    app.get("/Articles", function(req, res) {
        /* Query mongodb document */
        Article.find(fucntion(err, foundArticles) {

            /* Error checking */
            if (err) {
                res.send(err);
            }

            console.log(foundArticles);
            res.send(foundArticles); 
        })
    });

    /* Requesting targeting specific article */
    app.route("/articles/:articleTitle") {
        .get(function(get,req)){
            /* Goal is to fetch data and send it back */
            Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
                if (foundArticle) {
                    res.send(foundArticle);
                }else {
                    res.send(err);
                }
            })
        }); 
        .put(function(get,req)){
            /* Goal is to replace to a particular document  */
            Article.update(
                {title: req.params.articleTitle}, // what we search for 
                {title: req.body.title, content: req.body.content}, // what we will replace it with 
                {overwrite: true},
                // make callback function here to handle errors

            )
        }); 
        .patch(function(get,req)){
            /* Goal is to update part of a document */
            // you would just follow mongodb method to update a piece of an article
        }); 
        .delete(function(get,req)){
            // you would just follow mongodb method to delete a piece of an article
        }); 
    }
```

**POST**
```json
    /* This method will go in and update the db with new item */
    app.post("/articles", function(req,res) {
        let title = req.body.title;
        let content req.body.content;

        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save(function(err) { // new article is a reference to db 
            if (err) {
                console.log('something bad happened')
            }
        });
    });
```

**DELETE**
```
    app.delete("/article", function(req,res) {
        /* deleting article from collection in mongoose*/

        Article.deleteMany(err){ 
            if (err) {
                console.log("something bad happened");
            }
            else {
                res.send("delete sucesss");
            }
        });
    });
```

**PUT**
```
    Look above, these types of requests are meant to target specific articles
```

**Chaining Routes with Express**
app.route('/book')
    .get(function(req,res)){
        res.send('Get a random book')
    })
    .post(function(req,res)){
        res.send('Add a book')
    })
    .put(function(req,res)){
        res.send('update a book')
    })
    .delete(function(req,res)){
        res.send('delete a book')
    })
**How to Test API**
* If you have a front end then it would be straightforwards to test the api, but if you don't then oyu 