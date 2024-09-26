---
title: Docker is Fun and Easy
subtitle: More fun than manually deploying an app, customizing your dev env for every new feature, or even using something like Vagrant!
date: 2017-09-26
banner: orange_tree_sun_banner.jpg
thumbnail: orange_tree_sun_thumb.jpg
tags:
  - tech
  - devops
  - automation
  - cloud
---

Docker is simple and easy to both install, setup, and get running. It makes
sharing dev environments a snap, keeps them consistent, and also in very
close proximity to the production environment. Once ready to deploy, all
of your app-stuff has already been contained. All you need to worry about is:

1. install Docker
2. run container

It is very configurable, and lends itself to automation, enabling you to take
advantage of more sophisticated tools such as auto-scaling across regions around
the globe. But if all you need is a single instance running your blog, it's
great for that too. It's also free. Give it a try ;)


Why?
----

Docker containers are to API deployments as shipping containers are to
globalization. They pack your app into a standardized box that can be
predictably deployed, scaled, and monitored.

In effect, you can spin up a dockerized app with as little as a single command,
both in production and in dev. In dev, it provides an easy, consistent,
environment to share between teammates. In prod, it makes consistent
deployments as simple as flipping a switch (and, thus, much less error-prone).


Who Is This For?
----------------

Netflix, GE, BBC, Lyft, Spotify, Ebay, Yelp, Box, Expedia, New York Times,
Business Insider, PayPal, Shopify, Uber (to name a few):

[Docker Customers](https://www.docker.com/customers)


Install Docker + Compose
------------------------

It's pretty easy to get up an running. So easy, in fact, that you only need a
couple lines of bash to automate installing Docker + Compose on your production
machines as part of your hardware provisioning process. On your dev machine,
there's usually a binary that you can simply double-click on.

- [Docker Engine + Compose for Mac](https://docs.docker.com/docker-for-mac/install/)
- [Docker Engine](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)


Dockerization
-------------

Create a `Dockerfile` for each "app" in your project (e.g., server api +
frontend web server). Check for images on [Docker Hub](https://hub.docker.com/)
(e.g., search for "node" or "nginx" to find a base image to use in your
Dockerfile). A Dockerfile is, for the most part, simply a place to define
everything you app needs to do something useful. For example:

- base operating system
- system dependencies (e.g., gcc, python, make, etc.)
- perhaps some sort of custom directory structure
- a copy of all your app's files and configurations
- any app-specific dependencies (e.g., npm modules)
- what port your container will be exposed upon
- the command to turn it "on"

[Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)

The idea behind Dockerfiles is to formalize instructions for building "images"
which are the blueprints that Docker uses to create "containers". Images are
to classes as containers are to instances (if that helps).

What you want to do, however, is make your images as simple and single-purpose
as possible. Don't try to build your entire production environment, including
monitoring, databases, multiple application servers, web servers, and load
balancers all into one image. Instead, break down your system into individual
components. For example, for a recent project, I made a separate container for
each of the following components of my system:

- resource server (a nodejs JSON/REST API)
- auth server (a server that exchanges credentials for tokens which grant
  access with privileges on the resource server
- web server (a static asset server for website, web-client, and binary files)
- docker image repository (to store Docker images in the cloud for auto-scaling)
- load balancer (a front-end for a swarm-mode setup of the resource server for
  higher capacity and uptime)

Each of these images starts from a single base-image which contains some
fundamentals like a version of Linux with some basic packages pre-installed
(e.g., Ubuntu + Nodejs, or Alpine + Nginx) on top of which you may define some
application-specific dependencies like your npm modules, your actual nodejs app,
and maybe a few environment settings with some config files).

At the end of each `Dockerfile`, you define a single `CMD` option which is the
one command to run to start up a new instance of that image (and thus create a
new "container").

Doing it this way makes some things easier. For instance, if an individual
application container crashes due to some sort of bad state, other sibling
containers can take over the workload while your automation system, simply,
destroys the bad container, and creates a brand-new one, making error recovery
both easy and fast. Just remember to make your images simple, clear, and
modular (a la "Unix philosophy"). If you are wanting to execute more than one
command at the end of your `Dockerfile` you're probably doing it wrong ;)

But also keep in mind: you can make more than one `Dockerfile` per project. Just
name your separate Dockerfiles uniquely (e.g., you could use `Dockerfile-server`
and `Dockerfile-client` to distinguish between two separate images, one of which
runs a back-end nodejs app whilst the other runs an nginx static file server
containing a pre-built javascript SPA and some CSS, images, and font files).


Build an Image
--------------

To build a docker image manually, you can run:

```bash
docker build --file Dockerfile-admin -t myTagName --no-cache .
```

A file named "Dockerfile" is the default, so if you only have that one, you
don't need to use the `--file` flag.

But, as we'll see next, it's much easier to make use of Compose to do everything
in one go.


Docker Compose
--------------

Alongside the base Docker commands, is another really useful tool called "Docker
Compose". This doesn't do anything magical other than to simply gather up and
organize your Docker commands into a single configuration file so you can repeat
the same processes consistently. Using a YAML config file, you can define more
sophisticated environments, pulling in multiple images and/or build fresh
Dockerfiles and network them together (or invoke swarm- mode) without needing to
run dozens of commands. It's one step up in abstraction from the Dockerfile
itself and offers a way to weave all your Dockerthings together in one place
(which can be committed to your code repository!).

[Docker Compose Reference](https://docs.docker.com/compose/compose-file/)

Essentially, Compose helps you do these sorts of things:

- build/download each image to create services/containers
- network containers together so they can "see" each other
- monitor volumes for changes and restart containers as you edit code
- optionally run database from inside container (perhaps for dev)
- define environment-specific variables
- map ports from inside container to outside on host machine
- declare dependencies (e.g., require DB to finish init before app starts up)
- define more sophisticated setups like swarm-mode


Run Your Dev Environment With Compose
-------------------------------------

One of the really useful things you can do with Docker is to simply use it on
your development machine. You can quickly spin up virtual machines that are
configured to be 99% exactly the same as your production environment without
completely destroying your poor laptop's CPU (hello Vagrant). Then, when you
want to pass off some work to a teammate, they can pick things up *exactly*
where you left off without running into weird environment idiosyncrasies that
nobody can ever figure out. Just install Docker and start up the container and
you have exactly what the last guy had (which also happens to match the prod
machine).

```bash
docker-compose up --build
```

The `--build` flag forces compose to rebuild the images in case there were any
changes since you last started it. To force a complete rebuild, from scratch,
use `--force-recreate`.


Run Commands Inside a Container
-------------------------------

Sometimes you might want to hop directly into a container to do something (e.g.,
a one-time database seed).

Use this command to get inside a running container:

```bash
docker exec -it <container_name_or_id> sh
```

Then you can run shell commands from the CLI, like a script defined in your
`package.json` (including a  custom env var) like this:

```bash
MY_ENV_VAR=some-value npm run custom-script
```

To list available, running, containers, run:

```bash
docker ps
```

Alternatively, you can run one-time commands using compose with the `run`
command as well (see below "Working With Dev DBs").


Production
----------

When you're ready to deploy for real all you need to do is install Docker and
Compose, provide references to where the images are located (either by manually
uploading them directly to the host machine or by making them available in the
cloud by using an image repository).

For example, from an Ubuntu host machine, you could simply add the following
two commands to a bash script in order to install Docker and Compose:

```bash
apt-get -y install docker-ce
curl -L https://github.com/docker/compose/releases/download/1.13.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
```

Once that's done, all you need to do copy your compose file to the host and
run it with:

```bash
docker-compose -f <compose-file> up -d
```

Obviously, setting up a production environment is more nuanced than this, but
I just want to point out how easy the basics are. You can scale this up and
automate it and do more fancy stuff, but it all starts from these essentials.

Read the docker docs for more on running
[Compose in production](https://docs.docker.com/compose/production/).


Other Useful Docker Commands
----------------------------

Here are some of the more frequently used Docker commands for quick reference.

```bash
docker help
docker build -t myTagName .
docker image ls
docker image rm <image_id_or_name>
docker container ls
docker container rm <container_id_or_name>
docker exec -it <container_name_or_id> sh
lsof -i tcp:3000
```

- `docker pull <image name>` - pull an image stored on docker hub down to local machine
- `docker images` - list images stored locally
- `docker run <image name> <command>` - run a docker *container* based on an *image*
- `docker run alpine ls -l` - run image 'alpine' as container and list files in root
- `docker run alpine /bin/sh` - run image 'alpine' as container and launch bash session
- To launch container with an *interactive terminal* without exiting, use the `-it` flag for `docker run` (type `exit` to get out of it):
- `docker run -it alpine /bin/sh` - launch interactive terminal in alphine container
- `docker run --name <new container name> -p 80:80 -d <image name>`
- `docker ps` - List all containers that are currently running
- `docker ps -a` - List all containers that have run in the past too
- `docker stop <container name>` - stop a running container
- `docker rm $(docker ps -a -q)` - destroy all containers
- `docker rmi $(docker images -q)` - destroy all images
- `docker-compose up` - build any unbuilt images and launch containers
- `docker-compose up --build` - force rebuild of images before launching containers
- `docker-compose up --force-recreate` - force recreate of all images
- `docker-compose down` - tear down any active containers
- `docker-compose logs <container>` - watch logs
- `docker-compose stop <container>` - stop a container started in daemon mode
- `docker-compose stop app`
- `docker-compose ps` - check list of running containers

[Docker reference](https://docs.docker.com/engine/reference/builder/)


Extend Compose Using Multiple Configs
-------------------------------------

Launch a container using multiple compose files (using the `-f` option).
Subsequent compose file values will override values from previous compose files:

```bash
docker-compose -f docker-compose.yml -f docker-compose-production.yml up -d
```

In this way you could make one abstract compose file with options generally
applicable to all instances which could be combined with other environment-
specific configs which have more granular options for different scenarios such
as development versus staging versus production (e.g., maybe in production you
launch a whole swarm of instances in a more sophisticated environment spanning
multiple servers, whereas in development you only need one instance for the sake
of testing, but in both cases you want to make an "auth" container alongside an
"app" container which both share a common database found at `DB_URL`).


Working With Dev DBs
--------------------

Sometimes, only in my dev environment, I'll create a temporary container for
the sole purpose of housing my database while I'm testing things out as I
develop so, you know, I can Do It For Real(tm). Oftentimes it is a real nuicance
trying to install a database on a development machine and there usually ends up
being too many idiosyncrasies which don't exist in the production environment
which make your setup more brittle and less accurate. It's easier, and less
error-prone, to simply spin up a container that has an environment more closely
matched to production.

But in production, you don't want to put your database inside a container;
instead use something better such as Amazon's RDS or mLab's MongoDB service to
make your life easier for replication, slave/master, backup/restore, etc.

But in development, the DB is temporary and filled with dummy-data, so for
simplicity I like making a container that just does that, from which I can pass
in an environment variable for the DB's URL to my app and it won't know the
difference.

To initialize the database with migrations from my app container, I first start
up the app + the DB containers in daemon mode (using `-d`) and then use the
`docker-compose exec <container> <command>` syntax to run my migration scripts
from inside my app container (that app having already been started up with a
pointer to my DB container's URL through an env var).

```bash
docker-compose up -d db
docker-compose up -d app
docker-compose exec app npm run db:migrate
docker-compose exec app npm run db:seed
```

(the commands `db:migrate` and `db:seed` are examples of defined scripts in
a `package.json` for the `app` container which, in this case, use the js lib
Sequelize to interface with the database).


