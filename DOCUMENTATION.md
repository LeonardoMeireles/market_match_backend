<p align="center">  
  <img src="https://www.agorocarbonalliance.com/themes/custom/landing/logo.svg" width="320" alt="Agoro Logo" />  
</p>

# Back-end Sandbox

---  
## Overview
This is a template repository that should be used for back-end POC development, currently has implemented:
- Health Check
- Postgres Connection
- Auth0
- TypeORM

---  
## Project Structure
```
project
│   README.md
│   .env.example    
│
└───src
    │   main.ts
    │   app.modules.ts
    │   ...
    │
    └───authentication
    │  │   authorization.guard.ts
    │  │   authorization.module.ts
    │
    └───config
    │  │   postgres.config
    │  
    └───database
    │  └───dto
    │  │
	│  └───entities
    │  │
    │  └─── migrations
    │
	└───health
       │   health.controller.ts
       │   health.module.ts
```

#### Authorization
Directory responsible for handling files related to Auth0.

#### Config
Directory that stores configuration for Databases and other services.

#### Database
Stores connection to database, directories and files related to TYPEORM like entities, migrations, DTOs, etc. Contains an example for entity called "user".

#### Health
Responsible for any health check related files.


## Setup for POC
To learn more on how to setup and deploy your POC check out the [confluence article](https://agoro.atlassian.net/wiki/spaces/~622777db6a4c4c0070b10d92/pages/3066429441/How+to+deploy+a+version+of+sandbox-api) explanation.