# fastcomments-astro

A fast, full-featured live commenting widget for [Astro](https://astro.build), powered by [FastComments](https://fastcomments.com).

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
