Utilities for Playwright tests

Files:
- `helpers.ts` - safe click/fill/select and wait helpers that centralize common waits
- `constants.ts` - base URL and timeouts
- `logger.ts` - tiny console wrapper
- `index.ts` - re-exports for convenience

Usage example in a test or page object:

```ts
import { BASE_URL, TIMEOUTS, safeClick, safeFill } from '../utils';

await safeFill(page, 'input[name="username"]', 'john');
await safeClick(page, 'input[value="Log In"]');
await goto(page, BASE_URL, '/');
```

Recommendation:
- Replace ad-hoc `page.waitForTimeout(...)` calls with targeted helper waits above.
- Keep selectors in page objects and use these helpers from page methods.
