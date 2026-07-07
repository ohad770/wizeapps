import { OG_SIZE, renderOgImage } from "@/lib/ogImage";
import { resources } from "@/lib/site";

export const size = OG_SIZE;
export const contentType = "image/png";

type OpenGraphImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  const title = resource?.title ?? "WizeApps resources";
  const description =
    resource?.description ??
    "Practical guides for better software decisions before you build.";

  return renderOgImage({
    eyebrowLabel: "Resource guide",
    title,
    description,
    footerLeft: "wizeapps.agency/resources",
    footerRight: resource?.readTime ?? "Guide",
  });
}
