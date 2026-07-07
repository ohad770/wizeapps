import { OG_SIZE, renderOgImage } from "@/lib/ogImage";
import { services } from "@/lib/site";

export const size = OG_SIZE;
export const contentType = "image/png";

type OpenGraphImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({
  params,
}: OpenGraphImageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const title = service?.title ?? "WizeApps services";
  const description =
    service?.summary ??
    "Focused software services for booking automation, client intake, MVP builds, and internal operations tools.";

  return renderOgImage({
    eyebrowLabel: "Service",
    title,
    description,
    footerLeft: "wizeapps.agency/services",
    footerRight: "WizeApps",
  });
}
