export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window === "undefined" || !window.umami) {
    return;
  }

  try {
    window.umami.track(eventName, eventData);
  } catch (error) {
    window.umami.track(eventName);
  }
};

export const getLandingSource = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const referrer = document.referrer || "";
  const source = params.get("utm_source");
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");
  const isLinkedIn =
    source?.toLowerCase() === "linkedin" || /(^|\.)linkedin\.com/i.test(referrer);

  if (!isLinkedIn && !source && !campaign) {
    return null;
  }

  return {
    source: source || (isLinkedIn ? "linkedin" : "direct"),
    medium: medium || "",
    campaign: campaign || "",
    referrer: isLinkedIn ? "linkedin" : "other",
  };
};
