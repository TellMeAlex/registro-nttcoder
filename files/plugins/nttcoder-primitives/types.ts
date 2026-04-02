/**
 * Shared types for nttcoder registry plugins.
 *
 * @module nttcoder-primitives/types
 */

import type { createOpencodeClient } from "@opencode-ai/sdk"

/**
 * OpenCode client instance type.
 * Derived from the factory function return type for type safety.
 */
export type OpencodeClient = ReturnType<typeof createOpencodeClient>
