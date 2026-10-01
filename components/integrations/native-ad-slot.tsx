import { NativeAdClient } from "./native-ad-client";

export function NativeAdSlot() {
  return (
    <div className="ad-placement ad-native" data-native-ad-placement>
      <span className="ad-label">Advertisement</span>
      <NativeAdClient />
    </div>
  );
}
