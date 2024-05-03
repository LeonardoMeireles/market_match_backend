<p align="center">  
  <img src="https://www.agorocarbonalliance.com/themes/custom/landing/logo.svg" width="320" alt="Agoro Logo" />  
</p>

# README TEMPLATE 

---  
## Overview
This is a README template, for more information on how to use this sandbox read the [DOCUMENTATION](https://github.com/agorocarbon/sandbox-api/blob/main/DOCUMENTATION.md).

---  
## Quick Start  
#### Setting up for GitHub Packages  
First create a [personal access token]([https://github.com/settings/tokens](https://github.com/settings/tokens)) with the permissions of `repo, read:packages, write:packages, user:email`, after it is created you will need to "enable sso" for the Agoro organization by clicking the button labelled "enable sso".Now we need to configure yarn for [use with github packages]([https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)), you may also wish to authenticate `npm` if you like using `npm audit` or similar tools that don't exist in `yarn`:
```  
npm login --registry [https://npm.pkg.github.com/](https://npm.pkg.github.com/)  
```
The username is your github username, the _password_ is the token you just created, and the email is your github public email address.Now that you have yarn authenticated with github packages, we can install the dependencies with:
```
bash  
yarn install  
```  
---  
#### Running the service  
Make a new file `.env` that is a copy of `./.env.example`. Contact your fellow devs for the values.Now, you can start the development server:
```  
yarn run start  
```  
---  
## Connections  
#### Kafka  
- **LISTEN:**  
- **EMIT:**
- #### Internal integrations
- #### External integrations
---  
## Extra  
##### Git commit
use `yarn commit` over `git commit` and follow the Q&A it provides.  
Commit message description must be in proper imperative tense
##### Unit testing
- Test all : `yarn test`  
- Test individual file: `yarn test:watch -- farms.service`  
## Diagrams