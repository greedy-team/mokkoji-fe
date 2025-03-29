import * as amplitude from "@amplitude/analytics-browser";
import { sessionReplayPlugin } from "@amplitude/plugin-session-replay-browser";

function amplitudeSetting() {
  if (import.meta.env.VITE_NODE_ENV !== "development") {
    amplitude.init("6024afbe3076c1a3880f0d9492ee65e6", { autocapture: true });

    const sessionReplayTracking = sessionReplayPlugin({
      sampleRate: 1,
    });
    amplitude.add(sessionReplayTracking);
    console.log("amplitude watching...");
  }
}
export default amplitudeSetting;
