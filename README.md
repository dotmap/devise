*[maybe someday a project logo]*

# Devise
> Write better game docs.

Devise is an open-source tool for creating, organized, searchable, and
extensible game documentation.

## Installing / Getting started

To get started, simply run the following in your terminal:

```shell
git clone https://github.com/multi-cell/devise.git
cd devise
yarn
yarn start
# Or if you're so inclined,
npm install
npm start
```

It's really simple, just clone and execute the start script.

### Prerequisites

To get started, the only things that you need are;

+ Node
+ Git

### Setting up Dev

If you're interested in giving us a hand with development (we would love the
company!), you can basically just follow the steps from Installation. I'll
include them here just for the sake of convenience.

```shell
git clone https://github.com/multi-cell/devise.git
cd devise
yarn
# Or if you're into that,
npm install
```

Once you've got that all set up, you can launch development mode, with file
watching and hot-module replacement:

```shell
yarn dev
# Or if you like,
npm run dev
```

Now, visit `http://localhost:4000` in your browser, and go along making your
changes! Keep in mind that you might need to restart the dev server if you add
files, such as filewatching goes.

Since we aren't connected to a database yet, there's no local server you need to
run, or API tokens you need. Further down the road is 
[Graphcool](https://www.graph.cool) integration.

### Building

You should build the application for production every once in awhile just to
make sure that nothing strange is happening.

```shell
yarn build
# Or if you roll that way,
npm run build
```

### Deploying / Publishing

Currently we don't have any special ways to deploy the application, and quite
frankly, there's not much there to deploy. However, if you want to show someone
your work, we recommend you use [now](https://zeit.co/now). The following steps
will allow you to deploy your current version for others to look at.

<!-- TODO: Add simplistic support for now.sh deployment -->
<!-- TODO: Add real instructions for deployment -->

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Contributing

> Please note that this project is released with a Contributor Code of Conduct.
> By participating in this project you agree to abide by its terms.

## Versioning

We'll probably use [SemVer](http://semver.org/) for versioning, but that first
requires us to get our acts together. Next on the roadmap!

## Configuration

There's nothing you need to configure... yet. Stay tuned!

## Tests

For testing, we use [Cypress](https://www.cypress.io), which allows us to do
both unit and e2e tests in the same place. Unfortunately, that also means that
we don't support testing on Windows at the moment... We'll make sure to update
this when that support rolls in.

So for now, if you're on macOS or Linux, you can do the following to run tests:

```shell
# Install Cypress
yarn add --global cypress-cli
# Or if you swing that direction,
npm install -g cypress-cli

# Then, open the editor
cypress install
cypress open

# Open a dev instance to run tests against
yarn dev
# Or if you're that guy,
npm run dev
```

From here, click the '+ Add Project' button, and select the cloned project 
folder. Cypress will automatically detect the spec files. Then, all you need to 
do is press 'Run All Tests'.

## Style guide

We use XO to maintain code style, which, underneathe the covers, uses ESLint. 
We recommend installing a Prettier extension for your editor of choice that 
supports `prettier-eslint` so you can format files on save. If you don't want to
do that, however, then just install an XO plugin, or run the following command 
periodically:

```shell
# Lint all files in /client
yarn test:lint
# Or in another world,
npm run test:lint
```

## Documentation

Currently, we don't have any API or component documentation. We'll get there, 
though!

## Database

Currently, we don't have any kind of database configured, but we're working on 
it. We plan to use a [Graphcool](https://www.graph.cool) in production, we'll
include instructions to allow you to set that up for yourself.

## Licensing

For your viewing pleasure, this is also available in LICENSE.md.

Copyright 2017 multi-cell

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

>  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
