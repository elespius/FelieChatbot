![Woot-logo](.github/woot-logo.png)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

Opensource alternative to Intercom, Zendesk, Drift, Crisp etc.

___

![CircleCI Badge](https://img.shields.io/circleci/build/github/chatwoot/chatwoot)
![Dependencies](https://img.shields.io/david/chatwoot/chatwoot)
![Github Issues](https://img.shields.io/github/issues/chatwoot/chatwoot)
![License](https://img.shields.io/github/license/chatwoot/chatwoot)
[![Maintainability](https://api.codeclimate.com/v1/badges/80f9e1a7c72d186289ad/maintainability)](https://codeclimate.com/github/chatwoot/chatwoot/maintainability)
![Commits-per-month](https://img.shields.io/github/commit-activity/m/chatwoot/chatwoot)

![ChatUI progess](https://chatwoot.com/images/dashboard-screen.png)

## Build Setup


### Install JS dependencies

``` bash
yarn install
```

### Install ImageMagik

```bash
brew install imagemagick
```

### Setup rails server

```bash
# install ruby dependencies
bundle

# copy config
cp shared/config/database.yml config/database.yml
cp shared/config/application.yml config/application.yml

# copy frontend env file
cp .env.sample .env

# run db migrations
bundle exec rake db:create
bundle exec rake db:reset

# fireup the server
foreman start -f Procfile.dev
```

### Login with credentials

```bash
http://localhost:3000
user name: larry@google.com
password: 123456
```


*Chatwoot* &copy; 2017-2019, ThoughtWoot Inc - Released under the MIT License.

[www.chatwoot.com](https://www.chatwoot.com)
&nbsp;&middot;&nbsp;
GitHub: [@chatwoot](https://github.com/chatwoot)
&nbsp;&middot;&nbsp;
Email: [hello@chatwoot.com](mailto:hello@chatwoot.com)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://nithindavid.me"><img src="https://avatars2.githubusercontent.com/u/1277421?v=4" width="100px;" alt="Nithin David Thomas"/><br /><sub><b>Nithin David Thomas</b></sub></a><br /><a href="https://github.com/chatwoot/chatwoot/issues?q=author%3Anithindavid" title="Bug reports">🐛</a> <a href="#blog-nithindavid" title="Blogposts">📝</a> <a href="https://github.com/chatwoot/chatwoot/commits?author=nithindavid" title="Code">💻</a> <a href="https://github.com/chatwoot/chatwoot/commits?author=nithindavid" title="Documentation">📖</a> <a href="#design-nithindavid" title="Design">🎨</a> <a href="#maintenance-nithindavid" title="Maintenance">🚧</a> <a href="#review-nithindavid" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!