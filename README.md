# fastcomments-astro

A fast, full-featured live commenting widget for [Astro](https://astro.build), powered by [FastComments](https://fastcomments.com).

## Live Showcase

To see every widget and flow running locally against the public `demo` tenant, clone the repo and run:

```bash
cd example
npm install
npm run dev
```

Each component has its own page under `example/src/pages/` that you can copy straight into your own Astro site.

## Install

```bash
npm install fastcomments-astro
```

## Quick Start

```astro
---
import { FastComments } from 'fastcomments-astro';
---

<FastComments tenantId="demo" />
```

Replace `"demo"` with your FastComments tenant ID.

## Components

| Component | Description |
| --- | --- |
| `FastComments` | Commenting widget with replies, voting, and more |
| `FastCommentsCommentCount` | Displays comment count for a page |
| `FastCommentsImageChat` | Image annotation comments |
| `FastCommentsLiveChat` | Live chat widget |
| `FastCommentsCollabChat` | Collaborative inline commenting |
| `FastCommentsReviewsSummary` | Star-rating reviews summary |
| `FastCommentsUserActivityFeed` | User activity feed |

All components are exported from the package root:

```astro
---
import { FastComments, FastCommentsLiveChat } from 'fastcomments-astro';
---
```

## Example Project

A working demo is included in the `example/` directory:

```bash
cd example && npm install && npm run dev
```

## Links

- [FastComments Documentation](https://docs.fastcomments.com)
- [Customization & Configuration](https://docs.fastcomments.com/guide-customizations-and-configuration.html)
- [Astro Documentation](https://docs.astro.build)

## License

MIT

## Maintenance Status

These components are wrappers around our core VanillaJS components. We can automatically update these components (fix bugs, add features) without publishing this library, so while it may not be published for a while that does not mean FastComments is not under active development! Feel free to check [our blog](https://blog.fastcomments.com/) for updates. Breaking API changes or features will never be shipped to the underlying core library without a version bump in this library.
