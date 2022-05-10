# Databases
---
notes adopted from Angela Yu WebDev course on Udemy 2022
<br>

### SQL vs NoSql Database 
---
Databases can be SQL based (Structured Query Langauge) or based on NoSql databases (Not Only Structured Query Database). A lot of common database used these days include PostgreSQL, MySQL, SqlServer, MongoDB, redis.. etc. 

So whats the difference between them two? 
<br>
### Structure

<em>**SQL** </em>
    - A SQL Database will group your data into different 'Tables' . Sometimes these can be cumbersome because your defined data is restricted to the specific columns specified in the database. 
    - Good at establishing relationships between data (through JOIN'ing and ForeignKeys) 
    - Old and reliable favors structure and rules (requires a schema).
    - Poor horizontal scaling, must scale vertically (adding cpu cores) which is very costly.  

<em> **NoSQL** </em>
    - These are more flexible than sql tables because in langauges like MongoDB the stored documents are not restricted to a specific data structure.
    - More flexible and easier to adapt to changing requirements.  
    - Has higher horizontal flexibility. Allows for distributed system storage (sharding). 
<br>

The topic of which one to go with goes a lot deeper and really depends on business logic as each type of database implementation performs better in different situations. 
<br><br>

### Sql Notes
---
When working with SQL you will be performing CRUD Operations. 
    Create - 
    Read - 
    Update - 
    Delete - 


<br><br>
**Resources**: 
- https://www.w3schools.com/sql/