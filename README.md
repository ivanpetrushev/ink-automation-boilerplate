# ink-automation-boilerplate

The purpose of this repo is to demo different automations related to writing interactive stories with [Ink](https://github.com/inkle/ink/).
It is geared towards delivering a web-based export, i.e. story playable in a browser.
It may not be the best demonstration, but I couldn't find any, so I hope this helps someone :)

## Workflow scenario

As a writer, I want to:

- write a story in Ink
- have it automatically checked for logic errors
- have it automatically exported to a web-based format
- have it automatically deployed (my case is AWS S3/CloudFront, but this can be adapted)

## Getting started

1. Clone/fork this repo.
2. Fill in deployment credentials in `Settings -> Secrets -> Actions` (see below).
3. Tweak the workflow in `.github/workflows/` to your needs.
4. Write test cases in `tests/` (optional) as the story grows.
5. Branch out of `master` and start writing your story in `story.ink`.
6. When ready, push to your branch and create a PR.
7. PR automation will run tests.
8. When PR is merged, automation will deploy the story to your chosen destination.

## Rebuilding the story.json

For the GitHub action to have access to commit back story.json changes, you need to give actions permissions:

1. Go to `Settings -> Actions -> General`.
2. Check `Workflow permissions -> Read and write permissions`.

## AWS S3/CloudFront deployment (optional)

I don't think many will use this deployment option, so just a brief list:

1. Create an IAM user with S3 and CloudFront permissions.
2. Create an S3 bucket and a CloudFront distribution.
3. Add the following secrets in `Settings -> Secrets and variables -> Actions -> Secrets`:

   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

4. Add the following variables in `Settings -> Secrets and variables -> Actions -> Variables`:

   - `S3_BUCKET`
   - `CF_DISTRIBUTION_ID`

## Testing

The workflow runs tests using `inklecate` in play mode. In this mode, the CLI tool will run the story and progress as the user types in choices.
Since the goal is automated regression testing, the tests will emulate user input and will check the output against expected results.
See more details and examples in `tests/`.
