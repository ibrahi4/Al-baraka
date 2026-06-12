"use client";

// ============================================
// Google Analytics + Google Ads Event Tracking
// ============================================

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "";

// أنواع المصادر للتتبع
export type TrackingSource =
  | "header_desktop"
  | "header_mobile"
  | "footer"
  | "floating_widget"
  | "floating_quick_msg"
  | "floating_main"
  | "floating_mobile"
  | "floating_open"
  | "contact_page"
  | "hero_section"
  | "area_page"
  | "service_page"
  | "unknown";

// ========== Helper Functions ==========

const isGtagReady = (): boolean => {
  return typeof window !== "undefined" && typeof (window as any).gtag === "function";
};

const sendGtagEvent = (eventName: string, params: Record<string, any>) => {
  if (!isGtagReady()) return;
  (window as any).gtag("event", eventName, params);
};

// ========== Google Ads Conversion ==========

export const trackGoogleAdsConversion = (
  conversionLabel: string,
  value: number = 0
) => {
  if (!GADS_ID || !isGtagReady()) return;
  
  (window as any).gtag("event", "conversion", {
    send_to: `${GADS_ID}/${conversionLabel}`,
    value: value,
    currency: "EGP",
  });
};

// ========== Event Trackers ==========

/**
 * تتبع مكالمة هاتفية
 */
export const trackPhoneCall = (source: TrackingSource = "unknown") => {
  sendGtagEvent("phone_call", {
    event_category: "engagement",
    event_label: source,
    value: 1,
  });

  // Google Ads Conversion - phone_call_conversion_label هتاخدها من جوجل أدز
  const PHONE_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_PHONE_LABEL || "";
  if (PHONE_CONVERSION_LABEL) {
    trackGoogleAdsConversion(PHONE_CONVERSION_LABEL, 50);
  }
};

/**
 * تتبع ضغطة واتساب
 */
export const trackWhatsApp = (source: TrackingSource = "unknown") => {
  sendGtagEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: source,
    value: 1,
  });

  const WHATSAPP_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_WHATSAPP_LABEL || "";
  if (WHATSAPP_CONVERSION_LABEL) {
    trackGoogleAdsConversion(WHATSAPP_CONVERSION_LABEL, 30);
  }
};

/**
 * تتبع إرسال فورم
 */
export const trackFormSubmit = (
  formName: string,
  formData?: { service?: string; area?: string }
) => {
  sendGtagEvent("form_submit", {
    event_category: "conversion",
    event_label: formName,
    service: formData?.service || "",
    area: formData?.area || "",
    value: 1,
  });

  const FORM_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_FORM_LABEL || "";
  if (FORM_CONVERSION_LABEL) {
    trackGoogleAdsConversion(FORM_CONVERSION_LABEL, 100);
  }
};

/**
 * تتبع طلب عرض سعر
 */
export const trackQuoteRequest = (source: TrackingSource = "unknown") => {
  sendGtagEvent("quote_request", {
    event_category: "conversion",
    event_label: source,
    value: 1,
  });

  const QUOTE_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_QUOTE_LABEL || "";
  if (QUOTE_CONVERSION_LABEL) {
    trackGoogleAdsConversion(QUOTE_CONVERSION_LABEL, 80);
  }
};

/**
 * تتبع زيارة صفحة منطقة (للتحليل بس، مش تحويل)
 */
export const trackAreaView = (areaName: string, areaSlug: string) => {
  sendGtagEvent("area_page_view", {
    event_category: "page_engagement",
    event_label: areaName,
    area_slug: areaSlug,
  });
};

/**
 * تتبع زيارة صفحة خدمة (للتحليل بس)
 */
export const trackServiceView = (serviceName: string, serviceSlug: string) => {
  sendGtagEvent("service_page_view", {
    event_category: "page_engagement",
    event_label: serviceName,
    service_slug: serviceSlug,
  });
};