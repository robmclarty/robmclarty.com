---
title: SVN Cheat Sheet
date: 2009-01-18
banner: ski_lift_banner.jpg
thumbnail: ski_lift_thumb.jpg
tags:
  - tech
  - tips
  - process
---

Various helpful commands with some details on how to operate them when using SVN.

Create a repository
-------------------

Use the database backend

```bash
svnadmin create ~/svn_repos/Eccos
```

Use the filesystem backend

```bash
svnadmin create --fs-type=fsfs PATH
```


Import a revision
-----------------

```bash
svn import -m "Initial import" Eccos file:///home/reichr/svn_repos/Eccos/trunk
```


Check out a revision
--------------------

```bash
svn co file:///home/reichr/svn_repos/Eccos/trunk Eccos
```


Dump a repository
-----------------

```bash
svnadmin dump /home/reichr/svn_repos/Eccos | gzip -9 > dump.gz
svnadmin dump /home/reichr/svn_repos/Eccos | gzip -9 > `date "+Eccosdump%Y-%m-%d_%H:%M:%S.gz"`
```


Load contents of a dump into a repository
-----------------------------------------

```bash
gunzip -c dump.gz | svnadmin load /home/reichr/svn_repos/e
```


Import from an existing directory
---------------------------------

No need to check it out again. It should work, but you could also check it out
right into `/etc`. Something like this:
  
```bash
svnadmin create /var/svnrepos/admin
svn mkdir -m "initial setup" file:///var/svnrepos/admin/trunk
```

```
c:> svn mkdir -m "initial setup" file:///c:/fhs/svn_repos/trunk
```

```bash
cd /etc
svn co file:///var/svnrepos/admin/trunk .
svn add passwd group
svn commit -m "start loading it in"
```
  
I tested the `svn co` into `.` just now. Works great.


svn propset
-----------

```bash
svn propset svn:keywords "LastChangedDate LastChangedRevision Id Author" weather.txt
svn propset svn:keywords "LastChangedDate LastChangedRevision Id" slides.tex
```


Inspect Log Before Update
-------------------------

You could use the following to get the log messages of the changes:

```bash
svn log -rBASE:HEAD
```


Upgrade to a new subversion version
-----------------------------------

```bash
mv repos repos.tmp
svnadmin create repos
svnadmin-old dump repos.tmp | svnadmin load repos
# copy over any hook scripts and stuff from repos.tmp to repos
```


Upgrade my repositories at work
-------------------------------

```bash
mv Eccos Eccos-old
svnadmin create Eccos
gunzip -c dumps/Eccosdump2003-11-11_10:08:54.gz | svnadmin load Eccos
```


Checkout from a repository over ssh
-----------------------------------

```bash
svn co svn+ssh://felix/home/reichr/svn_repos/XSteveData/trunk data
```


Change the path of the repository for a working copy
----------------------------------------------------

```bash
svn switch --relocate file:///original/path/to/repos file:///new/path
```


Put system configuration in a subversion repository
---------------------------------------------------

Create the repository /home/reichr/svn_repos/WaldiConfig

```bash
svnadmin create WaldiConfig
```

Import an empty directory

```bash
cd to an empty directory
svn import -m "Initial import" . file:///home/reichr/svn_repos/WaldiConfig/trunk
```

Check it out from Waldi (user reichr)

```bash
svn co svn+ssh://felix/home/reichr/svn_repos/WaldiConfig/trunk WaldiConfig
```

Put files in the repository (as root)

```bash
mv /etc/fstab /home/reichr/WaldiConfig/etc
ln -s /home/reichr/WaldiConfig/etc/fstab /etc/fstab
```


Network a repository via svn+ssh
--------------------------------

Create the repository on the repository host:

```bash
svnadmin create rp1  -- this is located at /home/svtest/rp1
```

Import data to the repository:

```bash
svn import -m"Initial import" svn+ssh://svtest@host/rp1/trunk
```

Checkout the project:

```bash
svn co svn+ssh://svtest@host/home/svtest/rp1/trunk p1
```

### Warning

Putting the repository on a network filesystem my be a bad idea, because the
repository may get corrupted! It is better to put it on a local filesystem.


Merge from a branch back to the trunk
-------------------------------------

`SvnMerging`


Generate a patch to undo some local changes and redo them later
---------------------------------------------------------------

> What usually happens to me is that I've changed N files in M different
> directories distributed all over the filesystem, and I want to check in
> N-1 of them.

Yeah, I have to do this all the time.  But I can eye a potentially complex
command-line pretty well, so if I need to commit all but one file, I do this:

```bash
$ svn diff path/to/file_not_committing > /tmp/patch.txt
$ svn revert path/to/file_not_committing
$ svn ci -m "committing all the stuff i wanted to"
$ patch -p0 < /tmp/patch.txt
```

Revert is your friend.  Learn it, use it, looooooooooove it.


Revert to a previous version
----------------------------

```bash
svn co project
```

(edit foo.c, adding bugs)

```bash
svn ci foo.c (commits to r348)
```

(realize terrible error)

```bash
svn merge -r348:347 foo.c
svn ci foo.c (commits 349)
```

Note the ordering of the revision numbers in the merge command.  what this
really says is "make a diff between revision 348 and 347, and apply it
immediately to foo.c"

If you are trying to revert a directory tree with moves or deletes in it, and
are getting arcane errors, try the --ignore-ancestry flag.


Edit the commit/log messages after the commit
---------------------------------------------

You want to change the svn:log property:

```bash
svn propedit -r N --revprop svn:log URL
```


SVN repository via Apache2
--------------------------

- [Manage the htpasswd file](http://search.cpan.org/dist/Apache-Htpasswd/Htpasswd.pm)
- [A sample cgi script to alter users passwords via Apache::Htpasswd](http://perlmonks.thepen.com/178482.html)
- [A full featured utility to add/change users via commandline or cgi](http://stein.cshl.org/~lstein/user_manage/)


Use svn:mime-type for nicer www browsing of a repository
--------------------------------------------------------

> When browsing your repository, if you click on a filename, you see the
> contents of the file (assuming it's a text file) formatted as if with a
> <pre> tag.  So, if the file happens to be an HTML file, you essentially see
> the source HTML code.  Which, in most cases, is perfectly correct.
>
> However, there are times when it would be nice to see the _formatted_ HTML
> instead.  Is there a way to do this, other than the cumbersome Save Page As
> / Open File process within the browser?

If you set the svn:mime-type property on that file to 'text/html' and commit,
your browser should see subsequent revisions of that file as formatted HTML.

Versionize symlinks, unix permissions and ownership
---------------------------------------------------

`svnpropset.pl` and `svnpropget.pl` from Steve Wray <stevew@catalyst.net.nz>
(search on the svn mailing list or in the mail-boxes)


Track SVN trunks/branches with all history in arch
--------------------------------------------------

```
svn-arch-mirror
   Category: svn-arch-mirror
   Archive: eric@petta-tech.com--2004b-ordinary
   Location: http://des.petta-tech.bogomips.org/~eric/MusicPD/eric@petta-tech.com--2004b-ordinary/
```


Does Subversion have changesets?
--------------------------------

That's a loaded question, because everyone seems to have a slightly different
definition of "changeset", or a least a slightly different expectation of what
it means for a version control system to have
"changeset features".

For the purposes of this discussion, here's a simple definition of changeset:
it's a collection of changes with a unique name.  The changes might include
textual edits to file contents, modifications to tree structure, or tweaks to
metadata.  In more common speak, a changeset is just a "patch" with a name you
can refer to.

Subversion mananges versioned trees as first order objects (the repository is an
array of trees), and the changesets are things that are derived(by comparing
adjacent trees.)  Systems like Arch or Bitkeeper are built the other way
around: they're designed to manage changesets as first order objects
(the repository is a bag of patches), and trees are derived by composing sets
of patches together.

Neither philosophy is better in absolute terms: the debate goes back at least 30
years.  The two designs are better or worse for different types of software
development.  We're not going to discuss that here. Instead, here's an
explanation of what you can do with Subversion.

In Subversion, a global revision number 'N' names a tree in the repository: it's
the way the repository looked after the Nth commit. It's also the implicit name
of a changeset: if you compare tree N with tree N-1, you can derive the exact
patch that was committed.

For this reason, it's easy to think of "revision N" as not just a tree, but a
changeset as well.  If you use an issue tracker to manage bugs, you can use the
revision numbers to refer to particular patches that fix bugs -- for
example, "this issue was fixed by revision 9238." Somebody can then run 'svn
log -r9238' to read about the exact changeset which fixed the bug.  And svn's
merge command also uses revision numbers.  You can merge specific changesets
from one branch to another by simply naming them: 'svn merge -r9237:9238
branchURL' would merge changeset #9238 into your working copy.

This is nowhere near as complicated as a system built around changesets as
primary objects, but it's still a vast convenience over CVS.
