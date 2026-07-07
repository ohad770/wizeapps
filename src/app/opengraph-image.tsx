import { OG_SIZE, renderOgImage } from "@/lib/ogImage";

export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return renderOgImage({
    eyebrowLabel: "Software agency",
    title: "Your idea works. It just doesn't exist yet.",
    description:
      "We turn business problems into working digital products — in weeks, not months.",
    footerLeft: "wizeapps.agency",
    footerRight: "Booking systems · MVPs · Automation",
  });
}
