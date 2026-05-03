import { redirect } from "next/navigation";
import { DEFAULT_LANG } from "@/lib/i18n";

/**
 * Root redirects to the default language. Browser-language detection happens
 * client-side inside [lang]/layout via the widget itself.
 */
export default function RootPage() {
  redirect(`/${DEFAULT_LANG}`);
}
