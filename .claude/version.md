# Release notes for `/version`

Repo-specific workflow context the declarative `.claude/version.json` can't express.

## Why `verify` is null

`npm test` is still the `exit 1` stub npm scaffolds. There is no lint, spell, or
markdown check either, so there is no narrow command worth running against a
`(package.json version + CHANGELOG.md)` diff. If a check is added later, name it
here and in `version.json`.

## Publishing

Nothing publishes on tag. This is a static Eleventy site — `npm run build`
compiles Sass and renders `src` into `build`, and deployment is separate from
tagging. That's why `publish.pushTag` and `publish.pushBranch` are both false:
the release commit and tag stay local until pushed by hand.

## Why the marker is `chore(release): {version}`

Every commit in this repo is conventional (`type(scope): summary`), and commits
are made through the `commit-with-til` plugin, which enforces that format. A bare
`v{version}` release marker — the plugin default — would be the only message in
the history that breaks the pattern. `chore(release): {version}` satisfies both:
it is a valid conventional commit *and* the string the engine greps for to find
the previous release. Tags are still created (`marker.tag`), but the commit
message is what's authoritative.

## Retroactive history

`package.json` sat at `1.0.0` from the first commit (2022-12-17) through 102
commits until the `1.6.0` release. Everything below `1.6.0` in `CHANGELOG.md` was
reconstructed from the git log after the fact and has no corresponding release
commit — the engine only ever needs to find the most recent marker, so the
missing older ones are harmless.
