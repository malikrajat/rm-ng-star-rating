## Breaking Changes

This section documents any changes that may require modifications in consuming applications when upgrading `rm-ng-star-rating`.

---

## Current Status

As of the current release, **there are no breaking changes**.

All updates have been backward compatible, and existing integrations should continue to work without modification.

---

## Definition of a Breaking Change

A breaking change includes, but is not limited to:

- Removal or renaming of public APIs
- Changes to method signatures or return types
- Changes in required configuration options
- Changes in supported Angular or Node.js versions
- Changes in default behavior that affect output or runtime execution

---

## Versioning Policy

The library follows **semantic versioning**:

- **PATCH (x.y.z)**  
  Bug fixes and internal improvements  
  No breaking changes

- **MINOR (x.y.0)**  
  New features added in a backward-compatible manner

- **MAJOR (x.0.0)**  
  Breaking changes that may require code changes in consuming applications

Breaking changes will only be introduced in **major versions**.

---

## How Breaking Changes Are Communicated

When breaking changes are introduced:

- They will be clearly documented in this section
- Migration guidance will be provided where applicable
- Release notes will highlight required actions
- Version compatibility documentation will be updated

---

## Upgrade Recommendations

Before upgrading to a new major version:

1. Review this Breaking Changes section
2. Check the version compatibility matrix
3. Test the upgrade in a non-production environment
4. Validate star rating output and performance

---

## Summary

At present, upgrading within the same major version of `rm-ng-star-rating` is safe.

If breaking changes are introduced in the future, they will be clearly documented to ensure a smooth upgrade path.
