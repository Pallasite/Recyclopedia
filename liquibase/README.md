# Liquibase for Recyclopedia
In order to make the database quick to set up per specification, a liquibase change log is included which may be used with Liquibase. A template POM file is also included which allows for the process to be expedited through the use of Apache Maven.
## Utilizing Liquibase
Liquibase may be used through Apache Maven through the update goal:

```
mvn liquibase:update
```

Before using Maven, however, the credentials to the database server and the exaact connection details such as URL must be specified in the accompanying POM file. The POM file assumes that a PostgreSQL database is used from the start. Other databases may be used, but it may be easier to use the full Liquibase distribution or to specify a SQLite compatible plugin.


Liquibase also has a non-Maven tool for download which can be used with the included changelog.
