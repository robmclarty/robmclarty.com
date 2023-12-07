---
title: How to Deploy a Rails 4 App With Git and Capistrano
subtitle: A Fast, Consistent, and Automated Process for Your Deployment Pipeline
date: 2015-10-07
banner: how_to_deploy_rails_4_banner.jpg
thumbnail: how_to_deploy_rails_4_thumb.jpg
tags:
  - tech
  - automation
  - deploy
  - process
---

I think the two key aspects of any deployment process are *speed* and
*consistency*. Speed means you can iterate and fix bugs fast and keep your
production code in sync with your development code. Consistency means you know
it's going to do the same thing every time so you're not afraid to actually
do it and stay up to date. Using a revision control system like
[Git](https://git-scm.com/) along with automated deployment recipes with
[Capistrano](https://capistranorb.com) satisfies these criteria easily and gives
your [Rails](https://rubyonrails.org) app a little more oomph.

![Back to the Future on Rails](bttf_large.jpg)

This article assumes you're using a setup like I outlined in my article on
[how to setup a production server](/words/articles/how-to-setup-a-production-server-for-rails-4).
That is, a Unix server with SSH access using Phusion Passenger and Apache
serving a Ruby on Rails app.


Knowing is half the battle
--------------------------

Back when I was first learning Rails as a wide-eyed noob, I had no
idea how to get from this thing that was working on my dev machine onto a
real web server that other people could actual use. All this Unix CLI
stuff seemed like black magic to me (probably, partly because my
terminal is black) and I felt like I needed a PhD in Rocket Surgery to
make it happen. Rails made app development so easy! Surely there was a
way of deploying my creations that didn't make my head explode.

![Head explosion](screaming_large.jpg)

Well, there is and there isn't. Services like [Heroku](https://www.heroku.com)
are trying to take a lot of the pain out of deploying web apps, and
they're doing a good job of it. But when I was trying to learn for the
first time I felt those services made even less sense to me TBH. I felt
that at least on the CLI, *I* was in control and could see with
my own eyes what was happening (or not happening). And so I slowly
picked up some understanding of how my mysterious web server worked and
how I could make it do what I wanted.

I did everything manually at first (copying files, migrating
databases, installing gems, restarting services). But I quickly found
out why nobody does this. First, it's terribly error-prone to be typing
all those commands with my clumsy human hands. Second, sometimes things
exploded and I didn't know why, and would need to spend hours of
figuring out where that one ampersand I missed was. The moral of the
story is: figure out how to do it once, then save it in a script that
can be repeated flawlessly (computers are apparently really good and
doing the same thing over and over again; who knew?). And this is why I
use Capistrano and Git.


Your app
--------

You're going to need something to actually deploy. I'm
not going to presume to know the awesomeness that is your particular
app, so I'm just going to use a simple demo here (the deployment process
 should pretty much be the same regardless of what's going on in your
app). My goal, here, is to explain a very simple (sortof) method for
automating your Rails deployments to give you a place to start. This
isn't the fastest way or the fanciest way, but it'll make your process
consistent, and it will definitely be a lot faster than doing it
manually. My thinking is that if it at least *works* you can afford the time to
work your way up to more advanced techniques. This is a post I wish I had myself
five years ago!

![Ilya at his computer](Untitled-4_large.jpg)

Here's a little to-do app I made when I tested my server
installation (using MySQL because that's what I installed on my server):

```bash
rails new todoapp -d mysql
cd todoapp
bundle install
rails g scaffold todo name:string finished:boolean
```

Edit your `database.yml` file to configure it for your development and
production database, then try it out locally at `http://localhost:3000` to
make sure it's working properly (test production after deployment).

```bash
rake db:migrate
rails s
```

This hardly does anything useful, but you should be able to make new
todos and mark them as "finished". Not the most advanced app, but an app
nonetheless.


Git that sh\*t under version control!
-------------------------------------

![Git Logo](git_logo_large.jpg)

Before we get into actual deployment, it's pretty important that you
get your code into a version control system. Being a human and not a
machine, I mess stuff up a lot. I feel a lot better knowing I can always
go back to a working version of my code without having to decipher the
mess I just made ;) And using a centralized version control system like
Git makes it super easy to share your code with your friends so they can
help you out. So, first order of business is to gittify your code.

[Download Git](https://git-scm.com/downloads)

There are binaries for various platforms as well as the source code
(if you want to compile it yourself). I'm running Mac OS 10.8 on my dev
machine and haven't had any issues with the convenient `.dmg`
binary that's available (I'm running Git version 1.7.9.6). It's up to
you what works best for your system. The source code is as easy as `config`,
`make`, `make install` so don't be scared of it ;)

Once you've got it installed, the first thing to do is configure some settings
so Git knows who you are when you make commits.

```bash
git config --global user.name "Your name"
git config --global user.email "your_email@example.com"
```

Every time you commit some code it will tag your name and email to it
in the repository (so, like, if you were participating in some open
source badassery and want other badasses to know where that awesome
contribution of yours came from, this is how you do it).

With everything setup now you're going to go to your Rails app directory and
put it into its own local repository.

```bash
cd /your/project/folder
git init
touch .gitignore
```

After initializing a new Git repository for your app, before you make
any commits, the first thing you'll want to do is setup your `.gitignore`
file (Rails generates this for new projects so you probably don't need
to make it yourself anymore). This file contains a list of files (and
patterns of files) to ignore and *not* include in your repository. This is
useful so you don't include stupid stuff like `.DS_Store` but also to keep
sensitive files like `database.yml`
out of it so you're not storing passwords where everybody (well, those
who have access to your repository) can see them. You can include other
stuff as you see fit (e.g., I like to exclude any sqlite databases I
might be using as well as static asset files that I've generated for
testing but which aren't part of my app) but you at least want to add
these: database config, Mac junk, log files, and temp files.

```
/config/database.yml
.DS_Store
/log/*
/tmp/*
```

Now you can make your first commit and put all your code into the neat little
box you just made.

```bash
git add .
git commit -m 'first commit'
```

This adds everything from your current location (which should be your
app's root) and commits all those files to the repository. The `-m`
flag is for "message" so you can briefly describe what just happened.
Any subsequent changes you make can be added like this and you can log
messages of what you did so when you browse your commits you have an
idea of what's going on in there.


Remote repository and Github
----------------------------

![Octocat](Octocat_large.jpg)

It's a huge convenience to store your repository in the cloud so
other people can access it and contribute, as well as make it easier to
run deployments from any computer. This also serves as an offsite backup
for all your work (bonus). I store all my projects on [Github](https://github.com)
because it has made this process super easy and has a bunch of really
great documentation for when you get stuck. But I've stored my remotes
on my own servers in the past, so don't feel obligated to use a paid
service if you don't want to. Regardless of how you store your remotes,
you're going to need to hookup your local repository to the remote so
you can sync the two. Once you've created your remote repository (if
you're using Github, [read this](https://help.github.com/articles/create-a-repo))
save its path as one of your local repository's remotes (this is still from
your app's root).

```bash
git remote add origin git@github.com:username/your-repo-name.git
```

or

```bash
git remote add origin https://github.com/username/your-repo-name.git
```

I'm calling the new remote "origin" here, which is just a convention, but you
could call it whatever you want.

Next, push your local code to the remote to sync the two together (this command
pushes your local `master` branch to the `origin` remote):

```bash
git push origin master
```

Git does a lot of other great stuff that you should [read about](https://git-scm.com/documentation),
like forking, branching, merging, and tagging. But I'm just going to
leave at that for the sake of this post so we can get our hands dirty
with some deployment processes.


Server environment
------------------

![Inter-Tubes](Untitled-3_large.jpg)

Add a group to your remote server called "deployers" that will have
permissions to deploy to the server and run stuff without requiring full
root/sudo access.

```bash
sudo groupadd deployers
```

Create a user (if you haven't already) that will be added to the
"deployers" group for making all your deployments. This user should have
super-user privileges (I cover creating a new user in
[my post about server setup](/words/articles/how-to-setup-a-production-server-for-rails-4)).
Then add the user you want to use for deployments to that group (the last
argument is the username you want to add).

```bash
sudo usermod -a -G deployers bill
```

Then, update permissions on your deployment path where you want your
app's code to go (here, I'm assuming the user "bill" owns that path).
This will give the "deployers" group read and write access to all files
and directories beneath `/deploy/to/path`.

```bash
sudo chown -R bill:deployers /deploy/to/path
sudo chmod -R g+w /deploy/to/path
```


Capify
------

![Capistrano Logo](capistrano_logo_large.jpg)

Capistrano is a Ruby gem that makes your deployment life *a lot*
easier. I used to manually copy files, logon to my servers, run
deployment tasks off the CLI, and usually ended up causing a lot more
problems than I was solving because my stupid human hands don't always
type everything perfectly. I spent many long nights fixing problems
caused by my manual deployment processes. Capistrano changes all this by
formalizing and automating these tasks because computers can talk to
each other a lot more clearly than you can mash buttons and repeat the
same (workable) tasks over and over again with zero errors (well, at
least I hope there are zero errors!) You can read more details about
setting up Capistrano in the [Capistrano Handbook](https://github.com/leehambley/capistrano-handbook/blob/master/index.markdown).

Installing Capistrano is as easy as adding it to your app's `Gemfile` and
running `bundle install`. You don't need it on the production server, so you
can just add it under the "development" group in your `Gemfile`. For reference,
I'm using version 2.14.2.

```ruby
group :development do
  gem 'capistrano'
end
```

And install with bundler (from your app's root).

```bash
bundle install
```

Once installed, you'll need to "capify" your project. This will generate a few
files (namely `/config/deploy.rb` and `/Capfile`). The
`deploy.rb` is where you can add or write custom scripts to help
automate your deployment tasks and save your carpal tunnel for more important
application programming.

```bash
cd /path/to/your/project
capify .
```


Capistrano settings
-------------------

![Connections in space](patterns_large.jpg)

Once your project is capified, open up your [editor of choice](https://www.sublimetext.com/)
and modify `/config/deploy.rb` (here's [the final example](https://robmclarty.com/static/example-deploy-recipes/deploy.rb)).
There's a bunch of stuff in there, but first I'm going to focus on the top-most
settings, denoted with various `set` commands.

First, you need to tell Capistrano your app's name and the clone path to your
app's remote repository.

```ruby
set :application, "YourApplicationName"
set :repository, "git@github.com:your-username/your-repository-name.git"
```

Next, tell it where your app needs to be installed on your production
server (this is the path to where you want your app to live, starting
from your server's root). The path will be the location you pointed your
server to that I covered in my [previous post](/words/articles/how-to-setup-a-production-server-for-rails-4).
You can leave this out if you want to deploy to Capistrano's default location
of `/u/apps/#{ application }`.

```ruby
set :deploy_to, "/path/to/your/app"
```

Set the type of repository you're using (e.g., GIT, SVN, etc.) and which branch
you want to deploy from (usually "master").

```ruby
set :scm, :git
set :branch, "master"
```

Set the user you want to use for your server's deploys.

```ruby
set :user, "bill"
```

Now, you *could* use the `scm_passphrase` setting
to tell Capistrano the password to use for your deployment user, but I
don't like the idea of storing my server password in a file I want to
keep in my repository. This is why I setup my server with RSA keys that
allow my dev machine access without the need for entering a password
every time. But if you want to put it in your deployment script without
using keys, you'd do it like this (although not recommended):

```ruby
set :scm_passphrase, "password"
```

I change another setting called `use_sudo` to false so
commands are executed with the user's permissions unless I specify
otherwise. If you added your user to the "deployers" group (which has
write-access to your app's directory tree) you probably won't need to
use `sudo` much, if at all.

```ruby
set :use_sudo, false
```

Set your rails environment (this is deploying to the production
server, so I'm setting it to "production", but you might want to deploy
to a staging server with a custom environment). You can re-use this
variable in your scripts whenever you need to specify the environment so
 you only need to change it in one place to keep things DRY.

```ruby
set :rails_env, "production"
```

Tell Capistrano how you'd like to make updates. There are many
different ways of doing it, but for simplicity's sake, I'm going to
stick with the most straight-forward method, namely `copy`.
This will clone your entire repository (download it from the remote to
your local machine) and then upload the entire app to your server.

```ruby
set :deploy_via, :copy
```

You could alternatively use a faster method like `remote_cache` which will run
a `fetch` from your server to your remote repository and only update what's
changed, but that requires some additional authentication between your
server and the remote repository. I just want to get you up and running
first. Worry about optimizing the process later.

Next, you need to tell Capistrano about any special SSH options it
should be aware of. For instance, my server is setup to use a custom
port number and uses RSA keys for authentication to my Github account.
So, I need to specify the port, and use what's called "agent forwarding"
 to connect to my remote repository (it sounds weird, but agent
forwarding will make your life easier by using your local keys rather
than those installed on your server).
[Read more about agent forwarding](https://help.github.com/articles/using-ssh-agent-forwarding)
with this great article from Github.

```ruby
set :ssh_options, { :forward_agent => true, :port => 4321 }
```

You can also specify how many releases Capistrano should store on
your server's harddrive. This is handy in case you ever want to rollback
to a previous version quickly in case your newly deployed code blew
something up and you need to put out the fires. But you probably want
this to be a finite number so you don't fill up your disk with inactive
versions of your app. I keep five releases.

```ruby
set :keep_releases, 5
```

Next, you should use the following setting to ensure any needed
password prompts from SSH show up in your terminal so you can handle
them.

```ruby
default_run_options[:pty] = true
```

The last setting you need to handle is where on the internet
Capistrano can find your server. This could be your domain name or the
IP address. I'm assuming this deployment is for a smallish MVP-type app
where everything is on the same machine (database, app, server, etc.).
In this case you can use Capistrano's `server` setting.

```ruby
server "www.example.com", :app, :web, :db, :primary => true
```

If you want to do fancier deployments by splitting things up for
scaling (like separating your database from your application server),
you'll want to use Capistrano's "roles" to point it to the different
places where things are installed. Use multiple roles instead of the `server`
command (it accomplishes the same thing with greater granularity).

```ruby
role :web, "web.example.com"
role :app, "app.example.com"
role :db, "db.somethingelse.com", :primary => true
```

That `:primary => true` part of the database role tells Capistrano that this is
the location of your primary database. Read more about this in
[greater detail](https://github.com/capistrano/capistrano/wiki/2.x-DSL-Configuration-Roles-Role).


Connect
-------

![Connections](invitation_front_large.jpg)

Before we get into the individual deployment tasks, check that all the settings
you've just saved in `deploy.rb` are working properly. Run this
command in a terminal from your app's root.

```bash
cap deploy:setup
```

This will SSH to your server and create some directories in the folder you
specified with `deploy_to`
where Capistrano will store your releases, and your shared files (e.g.,
logs, configs, static assets like uploads, etc.). If something goes
wrong with permissions or SSH access, you'll see some error messages.
Fix these before proceeding so you know you can actually make a
connection to your server.

This should setup the following directories (if you've specified to install
your app in `/var/www/example.com/`):

```
/var/www/example.com/current
/var/www/example.com/shared
/var/www/example.com/releases
```

The `/releases`directory is where copies of all your actual code are stored.
`/shared` is a place where you can put common, shared files like logs, static
assets, and in our case, config files like `database.yml`.
`/current` is simply a symbolic link that points to the current release inside
the `/releases` directory (Capistrano updates this for you on each deploy, so
don't worry about it).

If `deploy:setup` works, the next thing you can do is run the `deploy:check`
command. This will check your local environment and your server and try
to locate any possible issues. If you see any errors, fix them first,
and then run the command again until you don't have any more errors.

```bash
cap deploy:check
```

Any number of things could go wrong here, but the most likely issues
will be some sort of authentication or file permission issues with your
server and the user you're logging in with SSH (I've lost count of the
number of times I've wanted to punch my computer due to some unknown
error only to discover I had set the file permissions incorrectly).


Database.yml
------------

![Ice Cream](_MG_1065_large.jpg)

Let's take a break here and talk about your `database.yml` file. If you've been
following along, you excluded it from your repository by adding it to your
`.gitignore` file. This is good (don't store sensitive data like passwords in your
repository). However, when you run Capistrano to update your server, it
only copies the files that are in your repository (and Rails actually
needs to use that `database.yml` file to hook up to your
server's database, unless you don't plan on storing any data
whatsoever). So, the problem is: we need to get that config file onto
the server somehow, securely, and make sure Rails knows where to find
it.

There are many different solutions out there for handling this issue,
but I always like to keep things simple so I understand what's going on
without too much magic. For this, I just manually put the file on my
server in a shared location that only I (and the app) have read-access to.

First, make a new `/config` directory in the `/shared` directory that
Capistrano created.

```bash
ssh bill@example.com -p 4321
mkdir /var/www/example.com/shared/config
```

Leave the server and back on your local machine, in your app's root directory,
copy the `database.yml` file to the server (NOTE: unintuitively, you
need to specify the port number with a capital P when using the
`scp` command).

```bash
scp -P 4321 ./config/database.yml  bill@example.com:/var/www/example.com/shared/config/database.yml
```

Note, the above command is one long line (in case it's wrapping in your browser).

I then hook it up to the app with a simple symbolic link that I create in my
deployment script inside `deploy.rb` (see below).


Tasks
-----

Now for the fun stuff. You can make all kinds of cool programming
logic for different needs that you can run each time you deploy your app
so it's all nicely automated (I like not thinking too hard).

![Designed Blog](designedBlob_large.jpg)

I put all my deployment tasks under the "deploy" namespace inside my `deploy.rb`
file. You could make up your own namespaces if you want, to help you
organize things. But I'm just going to go over some basic stuff, so I'll
group all these tasks under "deploy". The format of the tasks looks
like this:

```ruby
namespace :deploy do
  desc "Human readable description of task"
  task :name_of_task_command do
    # do stuff
  end
end
```

The string defined by the `desc` command is what will show up when
you run `cap -T` from the CLI on your application (this lists all
the deployment tasks available in your app).

The basic deployment tasks you need to accomplish are as follows:

1. Update application code
2. Precompile assets
3. Update custom symlinks
4. Restart the server
5. Cleanup unneeded files

I used to need to make custom tasks for a lot of this stuff, but
lucky for you, these days most of this is baked into Capistrano to make
your life that much easier! I'll go over each task one by one. You can
also tack on other things you need to do on deploy (like refresh your
sitemap, restart/reindex your search engine, etc.) but I'm just going to
stick with the basics for now (this article is already crazy long!)

### 1. Update Application Code

You don't need a special task for this. This is Capistrano's primary function.
When you run `cap deploy` it will first update your code. However,
if you want to *only* update your code and not do anything else, you
can use the `cap deploy:update_code` command to do it.

### 2. Precompile assets

Here's another freebie. I was handling asset compilation on my own until
I started writing this article and discovered that this, too, is now
baked into Capistrano (win). So instead of dealing with file-permission
issues for generating asset files, all you have to do is uncomment this
one line (that should already exist from when you capified your project)
in the `Capfile` file.

```
load 'deploy/assets'
```

This tells Capistrano to precompile assets on each deploy (it's
commented out because for some reason there are other people out there
using Capistrano for projects built with different frameworks than Ruby
on Rails and don't need to run this task; go figure).

However, I ran into a Rails 4 gotcha in that Capistrano barfs while looking
for a file called `/path-to-app/shared/assets/manifest.yml`
on your server (at least as of version 2.14.2 which I'm using). Rails
has changed the format of the manifest file to use JSON now in the
format of `manifest-a5247d24f7c66d27d9b50f5c7e640bca.json`. To get
around this error, I simply created an empty version of the file
Capistrano wants to see in the place it's looking for it.
[Read more about this issue](https://github.com/capistrano/capistrano/issues/362).

On your remote server:

```bash
touch /path-to-your-app/shared/assets/manifest.yml
```

### 3. Update custom symlinks

This could be a link to some static assets you want to store outside
your repository or something, but the main thing you need to do here is
hook up your `database.yml` file so Rails can find it!

Rails expects to see `/path/to/your/app/config/database.yml`. But the file is
now stored in `/deploy_to/shared/config/database.yml`. What to do? Here comes
the magic of symbolic links. Add this task to your `deploy.rb` file.

```
desc "Symlink shared config files"
task :symlink_config_files do
  run "#{ try_sudo } ln -s #{ deploy_to }/shared/config/database.yml #{ current_path }/config/database.yml"
end
```

### 4. Restart the server

Since the server is setup to run with
[Phusion Passenger](https://www.phusionpassenger.com), you'll need to override
Capistrano's default `restart` task with one specific to Passenger (i.e., you
want to `touch /tmp/restart.txt` from inside your app's root. This is pretty
simple by adding this task to the "deploy" namespace in `deploy.rb`.

```
  desc "Restart Passenger app"
  task :restart do
    run "#{ try_sudo } touch #{ File.join(current_path, 'tmp', 'restart.txt') }"
  end
```

### 5. Cleanup unneeded files

This one comes baked in too, but I just wanted to highlight it because I
sometimes forget :P If you don't run cleanup, the worst thing that will
happen is that all your old releases stay stored on your server. But
you might not want this as it's taking up disk space. This task is run
from `deploy:cleanup`.


After deploy
------------

The final step in setting up your deployment script is to add your
custom tasks to run after deployment (i.e., after all the files are
copied to the server and the `current_path` has been updated
to the latest release). All you need to do is tell Capistrano what tasks
you want to run in the order you want to run them *outside* the `deploy`
namespace block.

```
after "deploy", "deploy:symlink_config_files"
after "deploy", "deploy:restart"
after "deploy", "deploy:cleanup"
```

Since precompiling assets and updating the code are baked in, you
don't need to specify those tasks. If you add any other tasks to your
deployment process, you can just add them here to get executed.


Deploy!
-------

Now to actually do stuff. You should have a remote Git
repository with the latest version of your code in it, Capistrano setup
and checked, and your deployment tasks written and ready to run. So
let's run it:

```bash
cap deploy
```

Sit back and watch all those characters flow over your terminal and
feel good inside knowing the computer is saving you hours of frustration
(if you aren't frustrated already, haha).

If you need to simply migrate your database, Capistrano has a task for that too.

```bash
cap deploy:migrate
```

And if something goes horribly wrong (which *will* happen), you can
quickly and easily rollback to the previous release (which is hopefully a
working version).

```bash
cap deploy:rollback
```

Run this multiple times to go back through additional past releases.

![Computer screens](Untitled-1_large.jpg)

Your regular routine can now be something like this:

1. change some stuff in your code
2. `git add .` it to your local repo queue
3. `git commit -m 'my new commit'` it to your local repo
4. `git push origin master` to sync it to your remote
5. `cap deploy` to update your production server with your changes


Updates
-------

This post was featured in [Ruby Weekly](http://rubyweekly.com/archive/146.html)!
