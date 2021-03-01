# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.1.0] First post-fork release

Bug fixes, dependency updates, and code coverage.

### Fixed

  - Merge PR: Fix event issues to print results (https://github.com/scottcorgan/tap-out/pull/32).
  - Merge PR: Avoid failing on string replace (https://github.com/scottcorgan/tap-out/pull/34).
  - Merge PR: Tighten up result line regex to avoid misclassification (https://github.com/scottcorgan/tap-out/pull/35).
  - Merge PR: Correctly identify error output end token without false positives (https://github.com/scottcorgan/tap-out/pull/43).

### Upgraded

Dependencies:

  - re-emitter (1.1.3 → latest; 1.1.4)
  - split (1.0.0 → latest; 1.0.1)

Dev-dependencies:

  - tape (latest; 5.2.1)

### Removed

  - readable-stream (now using built-in Node stream module).
  - trim (now using built-in JavaScript String trim method).

### Changed

  - Test output pipes to tap-spec (because pretty).

### Added

  - Changelog.
  - List of contributors based on pull requests.
  - Code coverage via c8 and tap-nyc.

## [3.0.0] Last pre-fork release

See https://github.com/scottcorgan/tap-out
