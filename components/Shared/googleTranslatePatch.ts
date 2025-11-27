" use client";

export function applyGoogleTranslatePatch() {
  if (typeof window === "undefined") return;

  const originalRemoveChild = Node.prototype.removeChild;

  Node.prototype.removeChild = function (child) {
    try {
      return originalRemoveChild.call(this, child);
    } catch (err: any) {
      // Ignore ONLY the Google Translate mutation error
      if (
        err?.message?.includes("Failed to execute 'removeChild'") ||
        err?.message?.includes("The node to be removed is not a child of this node")
      ) {
        console.warn("Google Translate DOM patch suppressed error:", err);
        return child; // pretend removal worked
      }

      // Throw all other unexpected errors
      throw err;
    }
  };
}
