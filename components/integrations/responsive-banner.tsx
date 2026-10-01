"use client";

import { useEffect, useState } from "react";

const desktopCode = `<script>
  atOptions = {
    'key' : 'd39cbca072c61c01dc8c9ba08aba1d8f',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/d39cbca072c61c01dc8c9ba08aba1d8f/invoke.js"></script>`;

const mobileCode = `<script>
  atOptions = {
    'key' : '37aa3d4e262368f02b4a37e1672bcb80',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/37aa3d4e262368f02b4a37e1672bcb80/invoke.js"></script>`;

export function ResponsiveBanner() {
  const [mobile, setMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className="ad-placement ad-banner" data-banner-ad-slot>
      <span className="ad-label">Advertisement</span>
      {mobile === null ? null : (
        <iframe
          key={mobile ? "mobile" : "desktop"}
          title="Advertisement"
          srcDoc={mobile ? mobileCode : desktopCode}
          width={mobile ? 320 : 728}
          height={mobile ? 50 : 90}
          scrolling="no"
          className="ad-banner-frame"
        />
      )}
    </div>
  );
}
