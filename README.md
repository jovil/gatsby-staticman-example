<h1 align="center">
  Gatsby + Staticman + Heroku
</h1>

Handle comments on your Gatsby site with Staticman. How? By running your own instance of [Staticman](https://github.com/eduardoboucas/staticman) by [Eduardo Boucas](https://github.com/eduardoboucas), and giving it access to your Github repo.


## Requirements
- Node.js 8.11.3+
- npm
- A [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) for the GitHub and/or GitLab account you want to run Staticman with
- An RSA key in PEM format

## Initial setup
**1. Create a Github bot account.**\
This will act as a robot for handling comments. This is just an ordinary account but we will use it to create a `personal access token`.

**2. Generate a personal access token for the bot.**\
Go to Settings > Developer settings > Personal access tokens and `Generate new token`. Give it a name and set the scope access to: `repo` and `user`.
Generate the token and then write it down somwhere, we will use this later on.

## Hosting your own Staticman API
1. Clone an instance of [Staticman](https://github.com/eduardoboucas/staticman/)
2. In the Staticman folder, create a `Procfile` with the single line:
   `web: npm start`
3. Create a private RSA key for use with the API: `$ openssl genrsa -out key.pem`
4. Host your instance on Heroku and configure it:\
   `$ cd ~/staticman heroku create <app_name>`\
   `$ git init`: Create a new Git repository.\
   `$ heroku apps`: List your apps.\
   `$ heroku git:remote -a <app_name>`: Add a remote to your local repo.\
   `$ heroku config:set NODE_ENV="production"`\
   `$ heroku config:set RSA_PRIVATE_KEY="$(cat key.pem)"`\
   `$ heroku config:set GITHUB_TOKEN="Your_Token"`: Replace **Your_Token** with the `personal access token` we created earlier.
5. Create a production branch: `git checkout -b production master`
6. Commit the changes, and deploy the API: `$ git push heroku production:master`
7. Confirm everything works by visiting your API instance at: _https://<app_name>.herokuapp.com_ and you should be greeted with _Hello from Staticman version 3.0.0!_

## Setup site
1. Clone this repo to your computer.
2. In `comments.js` file inside src > components update the form url:\
   `https://<app_name>.herokuapp.com/v2/entry/<github_username>/<github_repo>/master/comments`: Your personal Github username (not the bot) and site repo (not API)
3. Configure the existing `staticman.yml` to your needs. Have a look at [Staticman sample config file](https://raw.githubusercontent.com/eduardoboucas/staticman/5c37482e13d7eb33cafe413c6c5b3a1a853a7d12/staticman.sample.yml) for all available options.
4. Push and commit changes to Github, and voila!

## References
- [Staticman](https://github.com/eduardoboucas/staticman)
- [Staticman: Docs](https://staticman.net/docs/configuration)
- [Staticman: An Alternative to Disqus for Comments on Static Sites](https://www.datascienceblog.net/post/other/staticman_comments/)
- [Tutorial: Comments with Staticman in Gatsby](https://www.gatsbycentral.com/tutorial-comments-with-staticman-in-gatsby)
- [Staticman at Heroku](https://spinningnumbers.org/a/staticman-heroku.html)
- [Adding Staticman Comments](https://travisdowns.github.io/blog/2020/02/05/now-with-comments.html)
