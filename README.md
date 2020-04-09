<h1 align="center">
  WP Gatsby Starter
</h1>

## Highlights

The WP Gatsby Starter project is a quick way to get off the ground with any new WordPress website. It's a modern setup and so only includes certain support, though it will grow over time to support more.

- Local Image Support
- Gutenberg Support
- Post and Page generation
- Simple CSS support
- Fast build time
- Paired WordPress theme

[See the Demo](https://wgs.calvinkoepke.com)

## Why

I've always had a major hurdle starting Gatsby projects because the initial setup is so laborsome when pulling your data from a WordPress site. Plugins like [gatsby-source-wordpress]() certainly make this easier, but it currently uses the REST API, and has a slow build.

Eventually, they will support [WP GraphQL](https://github.com/wp-graphql/wp-graphql), and when that happens, I will switch this theme over to use it.

Regardless, setting up the styles, components, and overall architecture takes time. This project looks to join both the **WordPress environment as well as the Gatsby project** together.

## Getting Started

1.  **Clone the Project**

    Clone the GitHub project to your local machine.

    ```shell
    git clone git@github.com:cjkoepke/wp-gatsby-starter.git
    ```

2.  **Setup WordPress Install**

    First, you'll need to install the associated theme in `/theme`. You may want to create a zip file first in order to upload, or you can move the file to your host with an SFTP/FTP connection.

    Next, you'll need to install the following plugins;

    - [WP GraphQL](https://github.com/wp-graphql/wp-graphql)
    - [WP GraphQL Gutenberg](https://github.com/pristas-peter/wp-graphql-gutenberg)

3.  **Update the Gatsby Settings**

    Inside the `/static/gatsby-config.js` file, change the following:

    ```js
    options: {
      typeName: "WPGraphQL",
      fieldName: "wpgraphql",
      url: `YOUR_DOMAIN/graphql`,
    }
    ```

4.  **Start Developing!**

    ```shell
    # Install dependencies (only the first time)
    npm install

    # From the /static directory
    npm run develop
    ```

    Your site is now running at `http://localhost:8000`!

## Project Hierarchy

The WGS project is divided into two categories:

- WordPress
- Static

### WordPress

The WordPress directory contains the related theme that should be used in conjunction with the Gatsby starter project. This **helps you control what blocks are available** and avoids running into unintended behavior when generating your static build (i.e. a block isn't supported and therefore skipped).

### Static (Gatsby)

This is the chunk of the starter project. It includes everything you need to get up and running, and assumes that your WordPress website is utilizing the WP theme above.

A quick look inside the `src` directory:

```
.
├── assets
├── components
├── data
├── helpers
├── pages
└── templates
```

1.  **`/assets`**: This directory contains images and the base CSS file for your static build.

2.  **`/components`**: This directory contains all the components throughout the starter project that can be used, including the main Layout component that wraps page content.

3.  **`/data`**: This file includes helpful details like GraphQL fragments that are used throughout queries, as well as custom hooks for easily grabbing static data like Site Title and Description within a component.

4.  **`/helpers`**: This includes helper functions used within components to determine things like whether or not a link is relative and should be converted to a local link, and any Higher-Order-Components that abstract this functionality away.

5.  **`/pages`**: Currently, this file only indcludes the home page template for the static build, and the 404 template.

6.  **`/templates`**: This is where you'll add template files that are used in `gatsby-node.js` when generating pages and posts from your WordPress install. Think of them like page templates.

## Roadmap

There is still plenty to do here, including:

- Add Full Gutenberg Block Support
  - Eventually break this out into a compnent library.
- Support legacy content in the original editor.
- More robust image support for different scenarios.
- Possibly adopt CSS Modules (open for debate).
- Create internal functions to easily handle common tasks, like generating Pages.
